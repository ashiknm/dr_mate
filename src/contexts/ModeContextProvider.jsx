import { createContext,  useState } from "react";

export const ModeContext = createContext(null);


export default function ModeContextProvider({children}) {
  const [mode, setMode] = useState("mode1");

  const colors = {
    mode1: {
      backgroundColor: "transparent",
      textColor: "#FFFFFF",
      primaryColor: "#292C3A",
      secondaryColor: "#32375A",
      inputArea : "#39394B"
    },
    mode2: {
      backgroundColor: "#EEF0F9",
      textColor: "#000000",
      primaryColor: "#292C3A",
      secondaryColor: "#9CA1C8",
      inputArea : "#D8DAE4"
    },
  };

  const toggleMode = () => {
    setMode(mode === "mode1" ? "mode2" : "mode1");
  };


  return (
    <ModeContext.Provider
        value = {{
            mode, 
            toggleMode,
            colors
        }}
    >
        {children}
    </ModeContext.Provider>
  )
}
