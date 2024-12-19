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
    <div className="flex min-h-screen flex-col items-center justify-around text-gray-100">
      {/* Header */}
      <header className="mx-auto mb-6 flex w-full max-w-3xl items-center justify-between rounded-lg border-4 border-gray-500 p-4 md:mx-6">
        <h1 className="w-1/2 break-words text-left text-3xl font-extrabold leading-none">
          Rock <br /> Paper <br /> Scissors
        </h1>

        <div className="rounded-lg bg-white px-6 py-2">
          <h4 className="text-xs font-extrabold uppercase text-gray-700">
            Score
          </h4>
          <p className="text-4xl font-extrabold text-gray-900">{score}</p>
        </div>
      </header>

      {/* Game Board */}
      {!playerChoice ? (
        <section className="relative my-12 w-full md:w-3/5">
          <img
            src={BgTriangle}
            alt=""
            className="mx-auto h-auto w-full md:w-2/3"
          />

          <div
            className="absolute -top-9 left-0 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border-8 border-[#4464F9] bg-white shadow-md hover:scale-110 hover:shadow-xl md:left-2 md:h-32 md:w-32 lg:h-40 lg:w-40"
            onClick={() => handlePlayerChoice("rock")}
          >
            <img src={IconRock} alt="Rock" />
          </div>

          <div
            className="absolute -top-9 right-0 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border-8 border-[#ECA31B] bg-white shadow-md hover:scale-110 hover:shadow-xl md:right-2 md:h-32 md:w-32 lg:h-40 lg:w-40"
            onClick={() => handlePlayerChoice("paper")}
          >
            <img src={IconPaper} alt="Paper" />
          </div>

          <div
            className="absolute bottom-0 left-1/2 flex h-28 w-28 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-8 border-[#DD3754] bg-white shadow-md hover:scale-110 hover:shadow-xl md:h-32 md:w-32 lg:h-40 lg:w-40"
            onClick={() => handlePlayerChoice("scissors")}
          >
            <img src={IconScissors} alt="Scissors" />
          </div>
        </section>
      ) : (
        <section className="flex w-full items-center justify-between gap-4 md:gap-8 lg:mx-auto lg:w-1/2">
          {/* Player Choice */}
          <div>
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#4464F9] bg-white shadow-md md:h-40 md:w-40 lg:h-48 lg:w-48">
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
            <h3 className="mt-2 text-xl font-bold uppercase text-gray-300">
              You picked
            </h3>
          </div>

          {/* House Choice */}
          <div>
            {!houseChoice ? (
              <div className="h-28 w-28 animate-pulse rounded-full bg-black/30 shadow-md"></div>
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#ECA31B] bg-white shadow-md md:h-40 md:w-40 lg:h-48 lg:w-48">
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
            <h3 className="mt-2 text-xl font-bold uppercase text-gray-300">
              The house picked
            </h3>
          </div>
        </section>
      )}

      {/* Result and Actions */}
      {winner && (
        <div className="text-center">
          {winner === "player" ? (
            <h3 className="mt-4 text-4xl font-bold uppercase text-[#4464F9]">
              You Win
            </h3>
          ) : winner === "house" ? (
            <h3 className="mt-4 text-4xl font-bold uppercase text-[#DD3754]">
              You Lose
            </h3>
          ) : (
            <h3 className="mt-4 text-4xl font-bold uppercase text-gray-300">
              Draw
            </h3>
          )}
          <button
            className="mt-4 rounded-lg border border-transparent bg-[#ECA31B] px-10 py-2.5 text-xl font-bold capitalize text-gray-900 transition-all hover:bg-[#c88916]"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}

      <a
        href="/rules"
        className="my-4 cursor-pointer rounded-md border border-gray-400 px-8 py-3 text-gray-200 md:self-end"
      >
        Rules
      </a>
    </div>
  );
}

export default Home;
