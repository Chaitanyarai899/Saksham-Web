"use client";
import { FC, useContext, useEffect } from "react";
import { buttonVariants } from "./ui/button";
import { ws } from "@/lib/ws";
// import { RoomContext } from "@/context/RoomContext";

const CreateRoom: FC = () => {
  // const { ws } = useContext(RoomContext);

  const createRoom = () => {
    try {
      if (ws) {
        ws.emit("create-room");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ws.on("room-created", (roomId: string) => {
      console.log(roomId);
    });
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
