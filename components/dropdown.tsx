'use client'

import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";


const DropDown = () => {
    const copy = () => {
        navigator.clipboard.writeText("saraohman97@gmail.com")
        toast.success('Kopierade "saraohman97@gmail.com".', {
            icon: '👏',
          })
    }
    
  return (
    <div className="relative group">
      <div className="rounded hover:bg-green-50 hover:text-green-600 cursor-pointer h-8 w-8 flex items-center justify-center mb-4">
        <PiDotsThreeOutlineVerticalThin size={20} />
      </div>
        <div className="invisible group-hover:visible absolute top-10 right-0 border bg-white min-w-40 rounded text-sm transition-all ease-out duration-300">
            <div className="font-bold border-b p-2">Inställningar</div>
            <div className="flex items-center gap-2 p-2 hover:bg-green-50 cursor-pointer"><BsMoon /> Mörk Skärm</div>
            <div onClick={copy} className="flex items-center gap-2 p-2 hover:bg-green-50 cursor-pointer"><CiMail size={18} />Email</div>
            <a href="https://github.com/saraohman97" className="flex items-center gap-2 p-2 hover:bg-green-50 cursor-pointer"><BsGithub size={18} />GitHub</a>
        </div>
    </div>
  );
};

export default DropDown;
