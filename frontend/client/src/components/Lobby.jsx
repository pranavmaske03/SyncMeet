import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Toaster } from 'react-hot-toast';
import { Video, Users, ArrowRight, Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import useSocket from '../contexts/SocketContext.js';

function Lobby() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [errors, setErrors] = useState({});
  
  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    socket.emit("room:join", { email, room });
  }, [email, room, socket]);

  const generateRoomId = () => {
    const roomId = uuid();
    setRoom(roomId);
    toast.success(`Room ID generated: ${roomId}`);
  };

  const copyRoomIdToClipboard = () => {
    if (!room) {
      toast.error("No Room ID to copy");
      return;
    }
    navigator.clipboard.writeText(room).then(() => {
      toast.success("Room ID copied to clipboard!");
    });
  };

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    navigate(`/room/${room}/${email}`);
  }, [navigate]);

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div className="bg-green-100 p-3 rounded-full">
              <Video className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Join Meeting</h1>
          <p className="text-gray-500 mt-2">Enter room details to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitForm} className="space-y-6">
          {/* Room ID Field */}
          <div>
            <label htmlFor="roomId" className="block text-sm font-medium text-gray-700 mb-1">
              Room ID
            </label>
            <div className="relative flex">
              <input
                type="text"
                id="roomId"
                name="roomId"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-lg border ${
                  errors.roomId ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12`}
                placeholder="Paste or generate a Room ID"
              />
              <button
                type="button"
                onClick={copyRoomIdToClipboard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
                title="Copy Room ID"
              >
                <Copy className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            {errors.roomId && (
              <p className="mt-1 text-sm text-red-500">{errors.roomId}</p>
            )}
          </div>

          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                placeholder="Enter your name"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
          >
            Join Room
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Generate Room ID CTA */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Need a new room?{" "}
            <button
              onClick={generateRoomId}
              className="text-green-600 hover:text-green-700 font-medium underline"
            >
              Generate Room ID
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lobby;