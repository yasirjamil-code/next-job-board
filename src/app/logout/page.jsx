"use client";

import { signOut } from "next-auth/react";

const LogoutPage = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default LogoutPage;
