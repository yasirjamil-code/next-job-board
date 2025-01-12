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
    <nav className=" bg-[#0f1d43] text-[#eee] min-h-16 flex items-center justify-evenly">
      <div className="logo select-none">
        <Link href={"/"} className="font-bold text-3xl">
          Job <span className="text-green-500 ">Seeker</span>
        </Link>
      </div>
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
              <span>{session?.user?.name}</span>
              <button
                className="px-2 py-1 bg-blue-700 rounded-md"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
