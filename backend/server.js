const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.)

const server = http.createServer(app);
const io = new Server(server, {cors:true});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

const getAllConnectedClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
      (socketId) => {
        return {
          socketId,
          email: socketidToEmailMap.get(socketId),
        };
      }
    );
  };