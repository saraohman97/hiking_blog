import Link from "next/link";
import { BsMoon } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="w-96 max-sm:hidden ml-10 flex flex-col">
      <div className="flex justify-end">
        <div className="rounded hover:bg-green-50 hover:text-green-600 cursor-pointer h-8 w-8 flex items-center justify-center mb-4 text-gray-600">
          <BsMoon size={18} />
        </div>

        <div className="rounded hover:bg-green-50 hover:text-green-600 cursor-pointer h-8 w-8 flex items-center justify-center mb-4">
          <CiMail size={20} />
        </div>

        <div className="rounded hover:bg-green-50 hover:text-green-600 cursor-pointer h-8 w-8 flex items-center justify-center mb-4">
          <PiDotsThreeOutlineVerticalThin size={20} />
        </div>
      </div>

      {/* <div className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600">
        Bruksleden
      </div>
      <div className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600">
        Roslagsleden
      </div> */}

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
    </div>
  );
};

export default Sidebar;
