"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import VideoPlayer from "@/components/VideoPlayer";
import { RoomContext } from "@/context/RoomContext";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};

function page({ params: { slug } }: Props) {
  const id = slug;
  const { ws, me } = useContext(RoomContext);
  const [stream, setStream] = useState<MediaStream>();

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
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.log(error);
    }

    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
    ws.on("get-users", getUsers);
  }, [id, me, ws]);
  return (
    <>
      <MaxWidthWrapper>
        Room id {id}
        <div>{stream && <VideoPlayer stream={stream} />}</div>
      </MaxWidthWrapper>
    </>
  );
}

export default page;
