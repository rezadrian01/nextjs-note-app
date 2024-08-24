import Link from "next/link";
import searchLogo from "@/public/searchIcon.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full grid grid-cols-12 px-2 md:px-20 border-b-2 shadow border-b-slate-300 py-4 items-center">
      <Link className="col-span-3" href="/">
        Notes
      </Link>
      <div className="relative col-span-6">
        <input
          placeholder="Search..."
          className="outline-none bg-slate-100 w-full p-2 rounded pr-9"
        />
        <button>
          <Image src={searchLogo} className="absolute w-6 h-6 right-2 top-2" />
        </button>
      </div>
      <div className="flex gap-2 col-span-3 justify-end">
        <div className="w-14 aspect-square bg-slate-100 rounded-full flex justify-center items-center">
          <span className="text-slate-800">TU</span>
        </div>
        <div className="text-sm ">
          <h2 className="py-1">Test User</h2>
          <Link href="/" className="hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}
