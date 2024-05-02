// accept only letters and whitespaces
export const iskeyboardCodeAllowed = (code) => {
    return (
      code.startsWith("Key") ||
      code.startsWith("Digit") ||
      code === "Backspace" ||
      code === "Space"
    );
  };
  
  export const countErrors = (actual, expected) => {
    const expectedCharacters = expected.split("");
  
    return expectedCharacters.reduce((errors, expectedChar, i) => {
      const actualChar = actual[i];
      if (actualChar !== expectedChar) {
        errors++;
      }
      return errors;
    }, 0);
  };
  
  export const calculateAccuracyPercentage = (errors, total) => {
    if (total > 0) {
      const corrects = total - errors;
      return (corrects / total) * 100;
    }
  
    return 0;
  };
  
  export const formatPercentage = (percentage) => {
    return percentage.toFixed(0) + "%";
  };
  
  export const calculateWPM = (totalTyped, timeElapsed) => {
    // Assuming average word length is 5 characters
    const wordsTyped = totalTyped / 5;
    const minutesElapsed = timeElapsed / 60; // convert seconds to minutes
    const wpm = wordsTyped / minutesElapsed;
    return Math.round(wpm);
};

  export const debug = (str) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(str);
    }
  };
  