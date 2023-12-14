import { RoomProvider } from "@/context/RoomContext";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoomProvider>
      <div>{children}</div>
    </RoomProvider>
  );
}
