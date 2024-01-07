"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {
  user?: {
    email: string;
  };
};

export function AuthStateButton({ user }: Props) {
  const handleSignIn = async () => {
    signIn("portal");
  };
  return (
    <div>
      {user ? (
        <div className="flex items-center space-x-2 md:flex">
          <span className="font-bold sm:inline-block">{user.email}</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2 md:flex">
          <button
            onClick={handleSignIn}
            className="items-center space-x-2 md:flex"
          >
            <span className="font-bold sm:inline-block">Login</span>
          </button>
        </div>
      )}
    </div>
  );
}
