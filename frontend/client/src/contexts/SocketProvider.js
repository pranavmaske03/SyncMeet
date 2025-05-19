import { useMemo } from "react";
import { SocketContext } from "./SocketContext";
import { io } from "socket.io-client";

export const SocketProvider = ({children}) => {
    const socket = useMemo(() => io("http://localhost:8000"), []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}