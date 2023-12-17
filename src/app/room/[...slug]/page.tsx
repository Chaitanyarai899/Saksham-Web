"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import VideoPlayer from "@/components/VideoPlayer";
import { RoomContext } from "@/context/RoomContext";
import { PeerState } from "@/context/peerReducer";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

function page({ params: { slug } }: Props) {
  const id = slug;
  const { ws, me, stream, peers } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);
  return (
    <>
      <MaxWidthWrapper>
        Room id {id}
        <div className="grid grid-cols-2 gap-2">
          {Object.values(peers as PeerState).map((peer, index) => (
            <VideoPlayer key={index} stream={peer.stream} />
          ))}
          {stream && <VideoPlayer stream={stream} />}
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default page;
