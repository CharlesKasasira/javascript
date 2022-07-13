import { outline } from "../helpers/utilities";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-[260px] h-[calc(100vh-60px)] bg-[#f7f7f7] flex flex-col items-center pt-3 relative">
      <div className="bg-[#f7f7f7] flex justify-center items-center absolute left-[240px] w-[40px] h-[40px] rounded-md cursor-pointer">
        <MdKeyboardArrowLeft />
      </div>
      {outline.map((item, index) => (
        <div
          key={item.id}
          className="py-1 my-1 px-2 flex justify-between items-center w-[240px] font-medium"
        >
          {item.week.toUpperCase()}
          <MdOutlineKeyboardArrowDown />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
