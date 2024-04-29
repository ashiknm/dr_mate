import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useModeContext } from "../contexts/hooks";


export default function MenuBar({ showSideBar, onSideBarOpen }) {

  const { mode, toggleMode } = useModeContext();

  return (
    <nav className="menubar w-20 flex flex-col  border-r border-thin relative">
      <div className="flex w-full h-[100px] justify-center items-center">
        <div className="avatar "></div>
      </div>
      <section>
        <button className="menu-btn menu__button--active w-full">
          <ChatBubbleOutlineOutlinedIcon className="active-menu-icon" />
        </button>
        <button className="menu-btn w-full">
          <PersonOutlineOutlinedIcon className="menu-icon" />
        </button>
        <button className="menu-btn w-full">
          <SettingsOutlinedIcon className="menu-icon" />
        </button>
      </section>

      <div className="mt-auto mb-10 flex flex-col items-center gap-y-3">
        <p className="text-white text-xs">Mode 1</p>
        <div
          className={`toggle-button mx-auto flex justify-center rounded-3xl 
          ${mode}
          }`}
          onClick={toggleMode}
        >
          <div className="slider mx-auto"></div>
        </div>
        <p className="text-white text-xs">Mode 2</p>
      </div>

      {!showSideBar && (
        <div className="chevronIcon" onClick={onSideBarOpen}>
          <ChevronRightIcon className="menu-icon" />
        </div>
      )}
    </nav>
  );
}
