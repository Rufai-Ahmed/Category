import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className="w-full  flex justify-center items-center h-full">
      <div className="w-full bg-white flex justify-center items-center">
        <div className="max-w-6xl mx-auto w-full md:w-[85%] bg-[#fbfbfb] flex justify-center items-center flex-col">
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-between w-[100%] p-3 mb-[5px] mt-[5px]">
            <div>
              <img src="" alt="" />
            </div>
            <div className=" flex border-[1px] h-[40px] border-[#a4a5a977] items-center p-3 w-[400px] bg-white">
              <div>
                <MdSearch color="#00000051" />
              </div>
              <input
                className="h-[30px] w-[80%] bg-transparent ml-[10px] text-[12px] border-0 outline-none"
                placeholder="search"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex">
                <div className="m-2">
                  <RiUserFollowLine />
                </div>
                <div className="text-[12px] font-semibold m-2">₦ 0.00</div>
                <div className="m-2">
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div>
                <IoMdNotificationsOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
