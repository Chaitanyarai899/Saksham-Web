"use client";
import CreateRoom from "@/components/CreateRoom";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto text-center flex flex-col items-center h-screen justify-center max-w-3xl">
          <CreateRoom />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
