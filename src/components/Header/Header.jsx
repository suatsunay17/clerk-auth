"use client";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

import "./Header.css";
function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav>
      <ul>
        <div className="left">
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="right">
          {!isSignedIn ? (
            <div>
              <Link href={"/sign-in"}>Login</Link>
              <Link href={"/sign-up"}>Register</Link>
            </div>
          ) : (
            <div>
              <Link href={"/dashboard"}>Dashboard</Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Header;
