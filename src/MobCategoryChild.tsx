import { FC, useState } from "react";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import {
  elecs,
  entertain,
  fashion,
  insurance,
  more,
  telecoms,
  travels,
  utilities,
} from "./data";

export interface iCat {
  text?: string;
  icon?: boolean;
  child?: Array<{}>;
}

export interface iCategory {
  type?: string;
  icon?: React.ReactNode;
  child?: Array<iCat>;
}

export interface iMobCategoryChild {
  setMobDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const cat: iCategory[] = [
  { type: "Fashion", icon: <FaAngleRight />, child: fashion },
  { type: "Electricals", icon: <FaAngleRight />, child: elecs },
  {
    type: "Entertainment & Leisure ",
    icon: <FaAngleRight />,
    child: entertain,
  },
  { type: "Insurance & Financial", icon: <FaAngleRight />, child: insurance },
  { type: "telecoms", icon: <FaAngleRight />, child: telecoms },
  { type: "utilities", icon: <FaAngleRight />, child: utilities },
  { type: "travel", icon: <FaAngleRight />, child: travels },
  { type: "more", icon: <FaAngleRight />, child: more },
];

const MobCategoryChild: FC<iMobCategoryChild> = ({ setMobDropdownOpen }) => {
  const [state, setState] = useState<number | null>(null);
  const [num, setNum] = useState<number | null>(null);

  return (
    <div>
      <div
        className={`w-full bg-gray-200 text-[17px] ${
          cat[num!]?.child?.length! < 8
            ? "h-[calc(100vh-20vh)]"
            : "min-h-screen"
        }`}
      >
        <div
          className="w-full flex items-center gap-3 pl-5 py-4 border-b border-white "
          onClick={() =>
            num !== null && state === null
              ? setNum(null)
              : state !== null && num !== null
              ? setState(null)
              : setMobDropdownOpen(false)
          }
        >
          {" "}
          <FaArrowLeft /> Back
        </div>
        {num === null
          ? cat.map((el: iCategory, i: number) => (
              <div
                key={i}
                onClick={() => setNum(i)}
                className="w-full flex justify-between items-center gap-3 px-5 py-4 border-b border-white capitalize"
              >
                {el.type}
                <FaAngleRight />
              </div>
            ))
          : num !== null && state === null
          ? cat[num]?.child?.map((el: iCat, i: number) => (
              <div
                key={i}
                onClick={() =>
                  cat[num!]?.child![i!]!.child?.length! > 0 && setState(i)
                }
                className={`w-full flex justify-between items-center gap-3 px-5 py-4 border-b border-white capitalize `}
              >
                {el.text}
                {el.icon && <FaAngleRight />}
              </div>
            ))
          : num !== null && state !== null
          ? cat[num!]?.child![state!]!.child !== undefined && (
              <>
                {cat[num!]?.child![state!]!.child?.map(
                  (el: iCat, i: number) => (
                    <div
                      key={i}
                      className="w-full flex justify-between items-center gap-3 px-5 py-4 border-b border-white capitalize"
                    >
                      {el.text}
                      {el.icon && <FaAngleRight />}
                    </div>
                  )
                )}
              </>
            )
          : ""}
      </div>
    </div>
  );
};

export default MobCategoryChild;
