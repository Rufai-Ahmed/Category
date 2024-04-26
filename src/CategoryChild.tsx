import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
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

const CategoryChild = () => {
  const [state, setState] = useState<number | null>(null);
  const [num, setNum] = useState<number | null>(null);

  return (
    <div className="md:flex gap-3 hidden">
      <div className="w-[320px] h-[380px] border bg-white px-3 py-4 rounded-md space-y-2">
        {cat.map((el: iCategory, i: number) => (
          <div
            key={i}
            onMouseEnter={() => setState(i)}
            className="py-2 px-2 rounded-md transition-all duration-300 cursor-pointer hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
          >
            <div className="capitalize">{el.type}</div>
            <div>{el.icon}</div>
          </div>
        ))}
      </div>

      {cat[state!]?.child && (
        <div
          className={`min-w-[320px] px-3 shadow-md border bg-white rounded-md py-4 space-y-2 grid  ${
            cat[state!]?.child?.length! > 12
              ? "grid-cols-2 min-w-[600px]"
              : cat[state!]?.child?.length! < 5
              ? "space-y-0 h-[240px]"
              : ""
          }`}
        >
          <h1
            className={`font-bold capitalize row-span-1 text-blue-500  ${
              cat[state!]?.child?.length! > 12 ? "col-span-2 " : ""
            } text-[20px]`}
          >
            {cat[state!]?.type}
          </h1>
          {cat[state!]?.child?.map((el: iCat, i: number) => (
            <div
              key={i}
              className="py-2 row-span-1 px-2 rounded-md transition-all duration-300 cursor-pointer hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
              onMouseEnter={() => setNum(i)}
            >
              <div className="capitalize">{el.text}</div>
              {el.icon && (
                <div>
                  <FaAngleRight />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {cat[state!]?.child![num!]?.child! && (
        <div
          className={`min-w-[320px] px-3 shadow-md border bg-white rounded-md py-4 space-y-2 grid  ${
            cat[state!]?.child![num!]?.child!.length! > 12
              ? "grid-cols-2 min-w-[600px]"
              : cat[state!]?.child![num!]?.child!.length! < 9
              ? "space-y-0 h-[400px]"
              : ""
          }`}
        >
          <h1
            className={`font-bold capitalize row-span-1 text-blue-500  ${
              cat[state!]?.child![num!]?.child!.length! > 12
                ? "col-span-2 "
                : ""
            } text-[20px]`}
          >
            {cat[state!]?.child![num!]?.text}
          </h1>
          {cat[state!]?.child![num!]?.child?.map((el: iCat, index: number) => (
            <div
              key={index}
              className="py-2 row-span-1 px-2 rounded-md transition-all duration-300 cursor-pointer hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
            >
              <div className="capitalize">{el.text}</div>
              {el.icon && (
                <div>
                  <FaAngleRight />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryChild;
