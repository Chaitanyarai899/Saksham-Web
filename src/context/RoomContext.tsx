"use client";
import React, { createContext, useEffect, useState } from "react";
import Peer from "peerjs";
import { v4 as uuidV4 } from "uuid";
import { ws } from "@/lib/ws";

export const RoomContext = createContext<null | any>(null);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [me, setMe] = useState<Peer>();

  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    console.log(roomId);
  };
  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log(participants);
  };
  useEffect(() => {
    const meId = uuidV4();
    const peer = new Peer(meId);
    setMe(peer);
    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
  }, [ws]);
  return (
    <RoomContext.Provider value={{ ws, me }}>{children}</RoomContext.Provider>
  );
};
