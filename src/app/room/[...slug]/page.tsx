"use client";
import { ws } from "@/lib/ws";
import React, { useEffect } from "react";

type Props = {
  params: {
    slug: string;
  };
};

function page({ params: { slug } }: Props) {
  const id = slug;

  useEffect(() => {
    ws.emit("join-room", { roomId: id });
  }, [id]);
  return <div>Room Id: {id}</div>;
}

export default page;
