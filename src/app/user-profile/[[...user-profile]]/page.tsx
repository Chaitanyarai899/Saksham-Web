"use client";
import { UserProfile } from "@clerk/nextjs";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";

const UserProfilePage = () => {
  const [progress, setProgress] = useState(localStorage.getItem('brailleScore') || 0);

  return (
    <div className="flex content-center w-full">
      <div className="p-12 m-4 w-full grid place-content-center">
        <h1 className="text-2xl text-center w-full text-stone-800 pb-2 mb-2 border-b-4 border-rose-600">
          Basic Account Info & Security
        </h1>
        <UserProfile path="/user-profile" routing="path" />
        <h1 className="text-2xl text-center w-full text-stone-800 pb-2 m-8 border-b-4 border-rose-600">
          User Progress
        </h1>
        <div>
          {/* Assuming you have a completed prop to pass the progress */}
          <ProgressBar completed={progress} />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;