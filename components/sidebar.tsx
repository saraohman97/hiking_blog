"use client";

import Link from "next/link";
import { CiMail } from "react-icons/ci";
import DropDown from "./dropdown";
import toast from "react-hot-toast";

const Sidebar = () => {
  const copy = () => {
    navigator.clipboard.writeText("saraohman97@gmail.com");
    toast.success('Kopierade "saraohman97@gmail.com".', {
      icon: "👏",
    });
  };

  return (
    <div className="w-96 max-sm:hidden ml-10 flex flex-col">
      <div className="flex justify-end">
        <div
          onClick={copy}
          className="rounded hover:bg-green-50 hover:text-green-600 cursor-pointer h-8 w-8 flex items-center justify-center mb-4"
        >
          <CiMail size={20} />
        </div>
        <DropDown />
      </div>

      <Link
        href="/ultralatt_packning"
        className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
      >
        Ultralätt packning
      </Link>

      <Link
        href="/bjornon"
        className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
      >
        Björnön
      </Link>

      <Link
        href="/roslagsleden-etapp-11"
        className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
      >
        Roslagsleden Etapp 11
      </Link>
    </div>
  );
};

export default Sidebar;
