"use client";
import { RoomContext } from "@/context/RoomContext";
import React, { useContext, useEffect } from "react";

type Props = {
  params: {
    slug: string;
  };
};

function page({ params: { slug } }: Props) {
  const id = slug;
  const { ws, me } = useContext(RoomContext);

  const getUsers = ({
    roomId,
    participants,
  }: {
    roomId: string;
    participants: string[];
  }) => {
    console.log({ roomId, participants });
  };
  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
    ws.on("get-users", getUsers);
  }, [id, me, ws]);
  return <div>Room Id: {id}</div>;
}

export default page;
