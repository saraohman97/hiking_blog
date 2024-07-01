import Image from "next/image";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-[500px] relative">
      <Image alt="" src="/image2.jpg" fill className="object-cover" />
      <div className="absolute inset-0 bg-white/10 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl sm:text-6xl font-bold">Vandringsblogg</h1>
        <h2 className="pt-1 font-bold text-2xl">Vandringstips</h2>
      </div>
      <div className="absolute flex gap-2 items-center p-4 right-0 cursor-pointer hover:underline underline-offset-4 text-white">
        Av Sara Öhman <BsGithub />
      </div>
      <div className="flex justify-center gap-3 absolute -bottom-4 left-0 right-0">
        <div className="border-b-4 w-10 border-gray-400 hover:border-gray-400 cursor-pointer" />
        <div className="border-b-4 w-10 border-gray-300 hover:border-gray-400 cursor-pointer" />
        <div className="border-b-4 w-10 border-gray-300 hover:border-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
