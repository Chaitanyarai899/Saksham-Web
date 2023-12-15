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
  const [stream, setStream] = useState<MediaStream>();

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

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.log(error);
    }

    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
  }, [ws]);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;

    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);
    });
    me.on("call", (call) => {
      call.answer(stream);
    });
  }, [me, stream]);

  return (
    <RoomContext.Provider value={{ ws, me, stream }}>
      {children}
    </RoomContext.Provider>
  );
};
