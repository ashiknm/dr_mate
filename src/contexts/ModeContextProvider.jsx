import { createContext,  useEffect,  useState } from "react";

export const ModeContext = createContext(null);


export default function ModeContextProvider({children}) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "mode1");

  useEffect(()=>{
    localStorage.setItem("mode", mode);
  }, [mode]);

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
    if(mode === "mode1"){
        setMode("mode2");
    }else{
        setMode("mode1");
    }
    
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
