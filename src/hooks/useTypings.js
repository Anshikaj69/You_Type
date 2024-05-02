import { useState, useRef, useCallback, useEffect } from 'react'
import {iskeyboardCodeAllowed} from '../utils/helpers'

const useTypings = (enabled) =>{
    const[cursor, setCursor] = useState(0)
    const[typed , setTyped] =useState("")
    const totalTyped = useRef(0)

    const handleKeyTyped =useCallback( ({key, code}) => { 
        if( !enabled || !iskeyboardCodeAllowed(code) ){
            return
        }

        switch (key) {
            case "Backspace":
              setTyped((prev) => prev.slice(0, -1));
              setCursor((cursor) => cursor - 1);
              totalTyped.current -= 1;
              break;
            default:
              setTyped((prev) => prev.concat(key));
              setCursor((cursor) => cursor + 1);
              totalTyped.current += 1;
          }
    },[enabled]
)

    const clearTyped = useCallback(() =>{
        setCursor(0)
        setTyped("")
    },[])

    const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
      }, []);

    useEffect(()=>{

        window.addEventListener("keydown", handleKeyTyped)

        return () => {
            window.removeEventListener("keydown", handleKeyTyped);
          };
    },[handleKeyTyped])  


    return {
        typed,
        cursor,
        clearTyped,
        resetTotalTyped,
        totalTyped: totalTyped.current,
      };
    };
    
    export default useTypings;