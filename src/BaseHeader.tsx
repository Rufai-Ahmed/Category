import { ReactNode, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CategoryChild from "./CategoryChild";
import MobCategoryChild from "./MobCategoryChild";
import { FaAngleRight } from "react-icons/fa";

const BaseHeader = () => {
  interface iNavs {
    title: string;
    icon?: ReactNode;
    link?: string;
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobDropdownOpen, setMobDropdownOpen] = useState(false);

  const navs: iNavs[] = [
    {
      title: "Home",
      icon: "",
      link: "/",
    },
    {
      title: "Categories",
      icon: (
        <div>
          <MdOutlineKeyboardArrowDown className="hidden md:block" />{" "}
          <FaAngleRight className="md:hidden" />
        </div>
      ),
      link: "#",
    },
    {
      title: "Refer & Earn ₦10,000",
      icon: "",
      link: "#",
    },
    {
      title: "AfriGiftCards",
      icon: "",
      link: "#",
    },
    {
      title: "In-Store Cashback",
      icon: "",
      link: "#",
    },
    {
      title: "Support",
      icon: "",
      link: "#",
    },
    {
      title: "Others",
      icon: <MdOutlineKeyboardArrowDown />,
    },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleMobDropdownToggle = () => {
    setMobDropdownOpen(true);
  };

  return (
    <div className="w-full flex justify-center items-center h-full text-white text-[14px]">
      <div className="w-full text-gray-600 md:text-white md:bg-primary flex justify-center items-center h-auto md:h-[70px]">
        <div className="max-w-6xl mx-auto w-full md:w-[85%] text-gray-600 md:text-white md:bg-primary flex justify-center items-center flex-col">
          <div className="md:flex grid h-[calc(100vh-20vh)] md:h-auto space-y-5 md:space-y-0 md:justify-between w-[100%] items-center mb-[5px] mt-[5px]">
            {navs.map((props: iNavs) => (
              <div
                key={props.title}
                className={`flex justify-between text-center md:justify-center border-b md:border-none px-5 md:pl-0 items-center h-full ${
                  props.title === "Categories" ? "relative" : ""
                }`}
                onClick={() =>
                  props.title === "Categories" && handleMobDropdownToggle()
                }
                onMouseEnter={() =>
                  props.title === "Categories" && handleDropdownToggle()
                }
                onMouseLeave={() =>
                  props.title === "Categories" && handleDropdownToggle()
                }
              >
                <div>{props.title}</div>
                <div className="ml-2 mt-[3px]">{props.icon}</div>
                {props.title === "Categories" && isDropdownOpen && (
                  <div className="absolute hidden md:block top-[20px] cursor-pointer text-black left-0 rounded-md min-w-[320px] p-2 z-10">
                    <CategoryChild />
                  </div>
                )}
              </div>
            ))}
            {isMobDropdownOpen && (
              <div className="absolute md:hidden top-[70px] cursor-pointer text-black left-0 rounded-md w-[100%] p-2 z-20">
                <MobCategoryChild setMobDropdownOpen={setMobDropdownOpen} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
