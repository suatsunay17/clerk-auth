"use client";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav className="p-3 bg-emerald-400">
      <ul className="flex justify-between ">
        <div className="left flex gap-10">
          <Link href={"/"} className="text-xl text-emerald-50">
            Home
          </Link>
          <Link href={"/contact"} className="text-xl text-emerald-50">
            Contact
          </Link>
        </div>
        <div>
          {!isSignedIn ? (
            <div className="right flex justify-between gap-10">
              <Link href={"/sign-in"} className="text-xl text-emerald-50">
                Login
              </Link>
              <Link href={"/sign-up"} className="text-xl text-emerald-50">
                Register
              </Link>
            </div>
          ) : (
            <div>
              <Link href={"/dashboard"} className="text-xl text-emerald-50">
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Header;
