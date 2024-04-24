"use client";
import { useUser, useClerk } from "@clerk/clerk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    // router.forward("/");
    return (
      <div>
        <p>You have to sign in to use this page!</p>
        <Link href="/sign-in">Sign In</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p> You are logged in as {user.fullName}</p>
      <button onClick={() => signOut(() => router.push("/"))}>Sign Out</button>
    </div>
  );
}
