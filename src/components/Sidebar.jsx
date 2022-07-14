import { outline } from "../helpers/utilities";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [week, setWeek] = useState(null);
  const [topic, setTopic] = useState(null);

  return (
    <div className="w-[260px] h-[calc(100vh-60px)] bg-[#f7f7f7] flex flex-col items-center pt-3 relative">
      <div className="bg-[#f7f7f7] flex justify-center items-center absolute left-[240px] w-[40px] h-[40px] rounded-md cursor-pointer">
        <MdKeyboardArrowLeft />
      </div>
      {outline.map((item, index) => (
        <>
          <div
            key={item.id}
            className="py-1 my-1 px-2 flex justify-between items-center w-[240px] font-medium cursor-pointer"
            onClick={() => setWeek(item.id)}
          >
            {item.week.toUpperCase()}

            <i
              className={`${
                item.id === week ? "rotate-180" : ""
              } transition ease-in-out`}
            >
              <MdOutlineKeyboardArrowDown />
            </i>
          </div>
          {item.id === week && (
            <>
              <ul className="outline outline-1 outline-gray-200 bg-white rounded w-[220px] px-2 py-1">
                {item.sessions.map((session, index) => (
                  <>
                    <li
                      className="cursor-pointer"
                      onClick={() => setTopic(index)}
                    >
                      {session.session}
                    </li>
                    {topic === index && (
                      <ul className="outline outline-1 mx-1 outline-gray-200 bg-[#f7f7f7] text-sm rounded w-[200px] px-2 py-1">
                        {item.sessions[index].topics.map((lesson, index) => (
                          <li className="cursor-pointer">{lesson}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </ul>
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default Sidebar;
