"use client";

import { navLinks } from "@/data";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();

  const logOut = () => {
    const confirmed = confirm("Are You Want To Logout");
    if (confirmed) {
      signOut();
    }
  };

  return (
    <>
      <nav className=" bg-gray-50 text-gray-950 min-h-16 flex items-center justify-between px-8">
        <div className=" flex items-center justify-center gap-4 select-none tracking-tighter ">
          <Link
            href={"/"}
            className="font-bold text-3xl text-[# ] font-mono"
          >
            Job-<span className="text-green-500 font-mono">Helper</span>
          </Link>
          <div className="navlinks flex gap-4">
            {navLinks.map((item) => {
              const { href, title, id } = item;
              return (
                <Link key={id} href={href}>
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="impLinks flex gap-4">
          {/* <div className="theme">
          <div>Dark</div>
        </div> */}
          <div className="login">
            {status === "unauthenticated" ? (
              <Link
                href={"/login"}
                className="login font-medium shadow- px-3 py-1 "
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <span>
                  {(session?.user?.name || session?.user?.email)?.substring(
                    0,
                    13
                  )}
                </span>

                <button
                  className="px-2 py-1 bg-blue-700 rounded-md"
                  onClick={logOut}
                >
                  Logout
                </button>

                <Link href={"/employer-register"}>
                  {session?.user.role === "Job Seeker" ? "Employer" : ""}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="bg-gray-300 w-full h-[1.5px]" />
    </>
  );
};

export default Navbar;
