import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginationProps {
  leftName?: string;
  leftLink?: string;
  rightName?: string;
  rightLink?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  leftName,
  rightName,
  leftLink,
  rightLink,
}) => {
  return (
    <div className="flex justify-center sm:justify-end gap-3 items-center mt-10">
      {!leftName || !leftLink ? (
        <div className="flex items-center gap-1 cursor-not-allowed text-white bg-gray-400 px-2 py-1 rounded">
          <BiChevronLeft /> Tillbaka
        </div>
      ) : (
        <Link
          href={`/${leftLink}`}
          className="flex items-center gap-1 text-white bg-green-700 px-2 py-1 rounded hover:bg-opacity-90"
        >
          <BiChevronLeft />
          {leftName}
        </Link>
      )}

      {!rightName || !rightLink ? (
        <div className="flex items-center gap-1 cursor-not-allowed text-white bg-gray-400 px-2 py-1 rounded">
          Nästa <BiChevronRight />
        </div>
      ) : (
        <Link
          href={`/${rightLink}`}
          className="flex items-center gap-1 text-white bg-green-700 px-2 py-1 rounded hover:bg-opacity-90"
        >
          {rightName}
          <BiChevronRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
