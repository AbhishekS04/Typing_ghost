import { useCallback, useState } from "react";
import { faker } from '@faker-js/faker';

// Generate a coherent English string with a specified number of words
const generateWords = (wordCount: number, useSentences = false) => {
  let text = useSentences ? faker.lorem.sentences(2) : faker.word.words(wordCount); // Use sentences or words
  const wordsArray = text.split(' '); // Split into individual words
  return wordsArray.slice(0, wordCount).join(' ').replace(/[^\w\s]|_/g, "").toLowerCase(); // Remove punctuation and lowercase
};

const useWords = (count: number, useSentences = false) => {
  const [words, setWords] = useState<string>(generateWords(count, useSentences));

  const updateWords = useCallback(() => {
    setWords(generateWords(count, useSentences));
  }, [count, useSentences]);

  return { words, updateWords };
};

export default useWords;
