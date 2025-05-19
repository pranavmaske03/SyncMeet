import React, { createContext,useMemo,useContext } from "react";

export const SocketContext = createContext(null);

export default function useSocket() {
    const socket = useContext(SocketContext);
    return socket;
}