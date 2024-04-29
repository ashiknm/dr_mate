import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AnimatePresence, motion } from "framer-motion";
import { useModeContext } from "../contexts/hooks";
import {  useState } from "react";

export default function SideBar({ showSideBar, onSideBarClose }) {
  const sidebarWidth = showSideBar ? "500px" : "0px";

  const [searchText, setSearchText] = useState('');


  const {mode} = useModeContext();

  const userList = [
    {
      id: 1,
      first_name: "Ashik",
      last_name: "N M",
      last_chat: "sending now",
    },
    {
      id: 2,
      first_name: "Pruthvi",
      last_name: "C M",
      last_chat: "Thank You.",
    },
    {
      id: 3,
      first_name: "Charith",
      last_name: "Kumar",
      last_chat: "Ok",
    },
    {
      id: 4,
      first_name: "Deepak",
      last_name: "R",
      last_chat: "Hi",
    },
    {
      id: 5,
      first_name: "Pawan",
      last_name: "G",
      last_chat: "Have you applied ?",
    },
  ];

  const researchList = [
    { id: 1, name: "Quantum Mechanics Study", date: new Date("2024-04-29") },
    { id: 2, name: "Genetic Research Project", date: new Date("2024-04-28") },
    {
      id: 3,
      name: "Space Exploration Initiative",
      date: new Date("2024-04-27"),
    },
    {
      id: 4,
      name: "Environmental Sustainability Survey",
      date: new Date("2024-04-26"),
    },
    {
      id: 5,
      name: "Artificial Intelligence Experiment",
      date: new Date("2024-04-25"),
    },
  ];

  function filterUsers(searchText) {
    if (!searchText) {
      return userList; // Return the entire list if search text is empty
    }
  
    return userList.filter(user =>
      user.id.toString().includes(searchText) ||
      user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function filterResearch(searchText) {
    if (!searchText) {
      return researchList; // Return the entire list if search text is empty
    }
  
    return researchList.filter(research =>
      research.id.toString().includes(searchText) ||
      research.name.toLowerCase().includes(searchText.toLowerCase()) 
    );
  }

  const userSearchList = filterUsers(searchText)


  const researchSearchList =   filterResearch(searchText);

  const handleSearchIcon = ()=>{
    if(mode === 'mode1'){
        filterUsers(searchText);
    }else{
        filterResearch(searchText);
    }
  }

 

  const framerSidebarPanel = {
    initial: { x: "0" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {showSideBar && (
        <>
          <motion.div
            className={`sidebar h-full `}
            style={{ width: sidebarWidth }} // Dynamically set sidebar width
            {...framerSidebarPanel}
          >
            <div
              className="flex gap-x-3 h-[100px] justify-center items-center shadow-lg"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="searchBar flex items-center gap-2 p-3">
                <SearchIcon onClick={handleSearchIcon} className="text-white/[30%] cursor-pointer" />
                <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search Topic" className="text-white/[30%] text-sm bg-transparent outline-none" />
              </div>
              <button className="addIcon flex">
                <AddIcon className="m-auto text-sm" />
              </button>
            </div>
            <section className="pt-5">
                {mode==='mode1'?
                userSearchList.map((user) => (
                    <div
                      key={user.id}
                      className={`h-[70px] w-full ps-10 py-[10px] ${
                        user.id === 2 ? "bg-white/[10%]" : ""
                      }`}
                    >
                      <h3 className="text-white">
                        {user.first_name} {user.last_name}
                      </h3>
                      <p className="text-white/[30%] text-xs mt-1">
                        {user.last_chat}
                      </p>
                    </div>
                  ))
                :
                researchSearchList.map((research) => (
                    <div
                      key={research.id}
                      className={`h-[70px] w-full ps-10 py-[10px] ${
                        research.id === 2 ? "bg-white/[10%]" : ""
                      }`}
                    >
                      <h3 className="text-white">
                        {research.name}
                      </h3>
                      <p className="text-white/[30%] text-xs mt-1">
                        {(research.date).toLocaleDateString('en-GB')}
                      </p>
                    </div>
                  ))
                
                }
              
            </section>

            <div className="chevronIcon" onClick={onSideBarClose}>
              <ChevronLeftIcon className="menu-icon" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
