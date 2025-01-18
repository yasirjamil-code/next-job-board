"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

useEffect(() => {
  console.log(status)
}, [])


  return <div className="m-4">
    Gmail: {status ==='authenticated' ? session.user.email : 'Not Showing'}
    <br />
    Role: {session?.user.role}
  </div>;
}
