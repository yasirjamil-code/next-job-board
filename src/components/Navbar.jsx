"use client";

import { navLinks } from "@/data";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [openProfile, setOpenProfile] = useState(false);
  let theme = "dark";

  const logOut = () => {
    const confirmed = confirm(session?.user?.name + ", want to signout");
    if (confirmed) {
      signOut();
    }
  };

  const changeProfileState = () => {
    setOpenProfile((prev) => !prev);
  };

  return (
    <>
      <nav className=" text-gray-950 min-h-16 flex items-center justify-between px-8">
        <div className=" flex items-center justify-center gap-4 select-none tracking-tighter ">
          <Link href={"/"} className="font-bold text-3xl font-mono">
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
              <div className="flex gap-4 items-center justify-self-center">
                <span>Please Login</span>
                <Link
                  href={"/login"}
                  className="px-2 py-1 hover:bg-blue-700 border border-blue-800 text-blue-900 hover:text-white rounded-lg transition-all duration-300"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span>
                  {(session?.user?.name || session?.user?.email)?.substring(
                    0,
                    13
                  )}{" "}
                </span>

                <Image
                  onClick={changeProfileState}
                  src={session?.user?.image || "/icon.png"}
                  width={32}
                  height={32}
                  alt="Profile"
                  className="rounded-full cursor-pointer border-2 border-blue-700"
                />

                {openProfile && (
                  <div className="absolute z-[100] flex flex-col gap-3 pt-2  items-center justify-start bg-gray-100 border border-gray-500 rounded-lg px-3 py-2 w-[200px] h-[300px] right-24 top-5">
                    <Image src={session?.user?.image || '/icon.png'} width={40} height={40} alt="profile" className="rounded-full"  />
                    <div>
                      <div className="m-auto text-center font-medium">
                        Hi! {session?.user?.name}
                      </div>
                      <div className="m-auto text-center text-sm text-blue-600 ">
                        {session?.user?.email}
                      </div>
                    </div>
                    <button className="bg-blue-300 w-full py-1 rounded-lg ">
                      Profile
                    </button>
                    <Link
                      className="inline-block bg-gray-300 w-full text-center py-1 rounded-lg "
                      href={"/employer/postjob"}
                    >
                      Post A job
                    </Link>

                    <button
                      onClick={logOut}
                      className="bg-gray-300 w-full py-1 rounded-lg "
                    >
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
                    <button onClick={logOut} className="bg-gray-300 w-full py-1 rounded-lg ">
                      Logout
                    </button>
                  </div>
                )}

                <Link href={"/employer-register"}>
                  {session?.user.role === "Job Seeker" ? "Employer" : ""}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="bg-gray-300 w-full h-[1px]" />
    </>
  );
};

export default Navbar;
