import Chance from "chance";  // Import Chance
import { useCallback, useState } from "react";

const chance = new Chance();  // Initialize Chance instance

const generateWords = (count: number) => {
  return chance.sentence({ words: count }).toLowerCase();  // Use chance for word generation
};

const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;
