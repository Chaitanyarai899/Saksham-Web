import { RoomProvider } from "@/context/RoomContext";

export default function HomeLayout({
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
