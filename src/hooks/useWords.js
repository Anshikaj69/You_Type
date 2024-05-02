import {
     paragraph
  } from 'txtgen'
import { useCallback, useState } from "react";

const generateWords = (count) =>{
   return paragraph(count).toLowerCase();
}

const useWords  =(count) => {
    const [words, setWords] = useState(generateWords(count));

    const updateWords = useCallback(() => {
      setWords(generateWords(count));
      console.log(words)
    }, [count]);
  
    return { words, updateWords };
}

export default useWords
