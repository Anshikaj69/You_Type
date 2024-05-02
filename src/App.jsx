import React from "react";
import GeneratedWords from "./components/GeneratedWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import logo from './assets/logo.svg'

const App = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();

  return (
    <>
    <div className="flex flex-col justify-center items-center  ">
      <img src={logo} className="w-[10%] mb-5 "></img>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords key={words} words={words} />
        {/* User typed characters will be overlayed over the generated words */}
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className="mx-auto mt-5 text-slate-500"
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />

      <footer className="text-slate-300 mt-5 mx-[10%] ">  
        By Anshika Jaiswal
      </footer>
      </div>
    </>
  );
};

const WordsContainer = ({ children }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="text-primary-400 font-medium text-start flex flex-row items-start justify-start w-[38%]">Time: {timeLeft}</h2>;
};

export default App;

