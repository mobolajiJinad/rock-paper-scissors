import { useState } from "react";

import { getRandomChoice, determineWinner, Choice } from "./gameLogic";

import BgTriangle from "./assets/bg-triangle.svg";
import IconRock from "./assets/icon-rock.svg";
import IconScissors from "./assets/icon-scissors.svg";
import IconPaper from "./assets/icon-paper.svg";

function Home() {
  const [score, setScore] = useState(0);

  const [playerChoice, setPlayerChoice] = useState<Choice | "">("");
  const [houseChoice, setHouseChoice] = useState<Choice | "">("");
  const [winner, setWinner] = useState("");

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);

    setTimeout(() => {
      const housePick = getRandomChoice();
      setHouseChoice(housePick);

      const gameWinner = determineWinner(choice, housePick);
      setWinner(gameWinner);

      if (gameWinner === "player") setScore((prev) => prev + 1);
      if (gameWinner === "house") setScore((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1_000);
  };

  const resetGame = () => {
    setPlayerChoice("");
    setHouseChoice("");
    setWinner("");
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-100 justify-around items-center">
      {/* Header */}
      <header className="w-full md:mx-6 border-4 mb-6   max-w-3xl mx-auto flex justify-between items-center p-4 rounded-lg border-gray-500 ">
        <h1 className="w-1/2 text-left leading-none font-extrabold text-3xl break-words">
          Rock <br /> Paper <br /> Scissors
        </h1>

        <div className="py-2 px-6  rounded-lg bg-white">
          <h4 className="text-gray-700 uppercase font-extrabold text-xs">
            Score
          </h4>
          <p className="text-4xl font-extrabold text-gray-900">{score}</p>
        </div>
      </header>

      {/* Game Board */}
      {!playerChoice ? (
        <section className="relative w-full md:w-3/5  my-12">
          <img src={BgTriangle} alt="" className="w-full h-auto" />

          <div
            className="bg-white h-28 w-28 md:h-40 md:w-40 cursor-pointer hover:shadow-xl md:-left-6 hover:scale(110) shadow-md border-8 border-[#4464F9] flex items-center justify-center rounded-full absolute -top-9 left-0"
            onClick={() => handlePlayerChoice("rock")}
          >
            <img src={IconRock} alt="Rock" />
          </div>

          <div
            className="bg-white h-28 w-28 md:h-40 md:w-40 cursor-pointer hover:shadow-xl md:-right-6 hover:scale(110) shadow-md border-8 border-[#ECA31B] flex items-center justify-center rounded-full absolute -top-9 right-0"
            onClick={() => handlePlayerChoice("paper")}
          >
            <img src={IconPaper} alt="Paper" />
          </div>

          <div
            className="bg-white h-28 w-28 md:h-40 md:w-40 cursor-pointer hover:shadow-xl hover:scale(110) shadow-md border-8 border-[#DD3754] flex items-center justify-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"
            onClick={() => handlePlayerChoice("scissors")}
          >
            <img src={IconScissors} alt="Scissors" />
          </div>
        </section>
      ) : (
        <section className="flex justify-between md:gap-8 lg:w-1/2 lg:mx-auto w-full gap-4 items-center">
          {/* Player Choice */}
          <div>
            <div
              className={`bg-white h-28 w-28 md:h-40 md:w-40 lg:w-48 lg:h-48 shadow-md border-8 border-[#4464F9] flex items-center justify-center rounded-full`}
            >
              <img
                src={
                  playerChoice === "rock"
                    ? IconRock
                    : playerChoice === "paper"
                      ? IconPaper
                      : IconScissors
                }
                alt="Player Choice"
              />
            </div>
            <h3 className="text-xl uppercase font-bold mt-2 text-gray-300">
              You picked
            </h3>
          </div>

          {/* House Choice */}
          <div>
            {!houseChoice ? (
              <div className="bg-black/30 h-28 w-28 shadow-md rounded-full animate-pulse"></div>
            ) : (
              <div
                className={`bg-white  h-28 w-28 md:h-40 md:w-40 lg:w-48 lg:h-48 shadow-md border-8 border-[#ECA31B] flex items-center justify-center rounded-full`}
              >
                <img
                  src={
                    houseChoice === "rock"
                      ? IconRock
                      : houseChoice === "paper"
                        ? IconPaper
                        : IconScissors
                  }
                  alt="House Choice"
                />
              </div>
            )}
            <h3 className="text-xl uppercase font-bold mt-2 text-gray-300">
              The house picked
            </h3>
          </div>
        </section>
      )}

      {/* Result and Actions */}
      {winner && (
        <div className="text-center">
          {winner === "player" ? (
            <h3 className="text-4xl uppercase font-bold mt-4 text-[#4464F9]">
              You Win
            </h3>
          ) : winner === "house" ? (
            <h3 className="text-4xl uppercase font-bold mt-4 text-[#DD3754]">
              You Lose
            </h3>
          ) : (
            <h3 className="text-4xl uppercase font-bold mt-4 text-gray-300">
              Draw
            </h3>
          )}
          <button
            className="bg-[#ECA31B] py-2.5 px-10 border border-transparent rounded-lg text-gray-900 text-xl font-bold capitalize mt-4 hover:bg-[#c88916] transition-all"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}

      <a
        href="/rules"
        className="text-gray-200 cursor-pointer lg:self-end py-3 px-8 border border-gray-400 rounded-md"
      >
        Rules
      </a>
    </div>
  );
}

export default Home;
