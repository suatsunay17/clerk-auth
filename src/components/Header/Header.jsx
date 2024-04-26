"use client";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";

function Header() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav className="p-2 bg-emerald-400">
      <ul className="flex justify-between items-center">
        <div className="left flex gap-10">
          <Link href={"/"} className="text-xl text-black hover:bg-emerald-50 p-2 rounded">
            Home
          </Link>
          <Link href={"/contact"} className="text-xl text-black hover:bg-emerald-50 p-2 rounded">
            Contact
          </Link>
        </div>
        <div>
          {!isSignedIn ? (
            <div className="right flex justify-between gap-10">
              <Link href={"/sign-in"} className="text-xl text-black hover:bg-emerald-50 p-2 rounded">
                Login
              </Link>
              <Link href={"/sign-up"} className="text-xl text-black hover:bg-emerald-50 p-2 rounded">
                Register
              </Link>
            </div>
          ) : (
            <div>
              <Link href={"/dashboard"} className="text-xl text-black hover:bg-emerald-50 p-2 rounded">
                {/* Dashboard */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-slate-50">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        onClick={() => signOut(() => router.push("/"))}
                        className="font-bold py-1"
                      >
                        Sign Out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Header;
