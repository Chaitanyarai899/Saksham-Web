"use client";
import { FC, useContext, useEffect } from "react";
import { buttonVariants } from "./ui/button";
import { ws } from "@/lib/ws";
import { useRouter } from "next/navigation";
// import { RoomContext } from "@/context/RoomContext";

const CreateRoom: FC = () => {
  // const { ws } = useContext(RoomContext);
  const router = useRouter();

  const createRoom = () => {
    try {
      if (ws) {
        ws.emit("create-room");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const enterRoom = ({ roomId }: { roomId: "string" }) => {
    router.push(`/room/${roomId}`);
  };
  useEffect(() => {
    ws.on("room-created", enterRoom);
  }, []);
  return (
    <div className="flex flex-col">
      <button onClick={createRoom} className={buttonVariants()}>
        Create Room
      </button>
    </div>
  );
};

export default CreateRoom;
