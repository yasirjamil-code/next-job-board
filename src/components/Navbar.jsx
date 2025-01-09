import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      <div className="impLinks">
        <div className="theme">
            <div></div>
        </div>
        <div className="login">
          <span>Please, </span>
          <Link href={"/register"} className="login font-medium shadow- px-3 py-1 ">
            Register
          </Link>
          <Link href={"/login"} className="login font-medium shadow- px-3 py-1 ">
            Login
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
