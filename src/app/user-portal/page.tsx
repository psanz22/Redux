"use client";

import UserProfile from "@/components/UserProfile";

export default function UserPortal() {
  return (
    <div className="bg-purple-200 min-h-screen p-10">
      <h1 className="text-9xl font-bold text-purple-900">SETTINGS</h1>

      <UserProfile />
    </div>
  );
}
