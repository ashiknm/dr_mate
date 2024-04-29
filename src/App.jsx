import { useState } from "react";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";
import ChatPannel from "./components/ChatPannel";
import ModeContextProvider from "./contexts/ModeContextProvider";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleSideBarClose = () => {
    setShowSideBar(false); // Toggle the state to show/hide the sidebar
  };

  const handleSideBarOpen = () => {
    setShowSideBar(true); // Toggle the state to show/hide the sidebar
  };

  return (
    <ModeContextProvider>
      <main className="app flex">
        <div className="flex">
          <MenuBar
            showSideBar={showSideBar}
            onSideBarOpen={handleSideBarOpen}
          />
        </div>
        <div className="flex flex-grow">
          <SideBar
            showSideBar={showSideBar}
            onSideBarClose={handleSideBarClose}
          />
          <ChatPannel />
        </div>
      </main>
    </ModeContextProvider>
  );
}

export default App;
