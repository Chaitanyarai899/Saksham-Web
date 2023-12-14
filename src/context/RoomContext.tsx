"use client";
import React, { createContext, useEffect } from "react";
import socketIOClient from "socket.io-client";

const WebSocket = "http://localhost:8080";

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WebSocket);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    console.log(roomId);
  };
  useEffect(() => {
    ws.on("room-created", enterRoom);
  }, [ws]);
  return <RoomContext.Provider value={ws}>{children}</RoomContext.Provider>;
};
