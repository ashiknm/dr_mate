import { useContext } from "react";
import { ModeContext } from "./ModeContextProvider";


export function useModeContext() {
    const context = useContext(ModeContext);
    if (!context) {
      throw new Error(
        "ModeContext is not defined in ModeContext component"
      );
    }
    return context;
}