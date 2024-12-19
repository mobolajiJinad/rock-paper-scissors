import { useState } from "react";

import BgTriangle from "./assets/bg-triangle.svg";
import IconRock from "./assets/icon-rock.svg";
import IconScissors from "./assets/icon-scissors.svg";
import IconPaper from "./assets/icon-paper.svg";

function Home() {
  const [score, setScore] = useState(10);
  const [playerChoice, setPlayerChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [winner, setWinner] = useState("");

  const handleHouseChoice = () => {
    setHouseChoice("rock");

    makeDecision();
  };

  const makeDecision = () => {
    setWinner("player");
  };

  const resetGame = () => {
    setScore(0);
    setPlayerChoice("");
    setHouseChoice("");
    setWinner("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-around items-center">
      <header className="border-2 mb-6 w-full flex justify-between items-center p-3 rounded-lg border-gray-500 ">
        <h1 className="w-1/2 text-left leading-none font-extrabold text-white text-2xl break-words">
          Rock <br /> Paper <br /> Scissors
        </h1>

        <div className="py-2 px-5 bg-white rounded-lg min-w-8">
          <h4 className="text-gray-700 uppercase font-extrabold text-xs">
            Score
          </h4>
          <p className="text-2xl font-extrabold text-gray-900">{score}</p>
        </div>
      </header>

      {!playerChoice ? (
        <section className="relative">
          <img src={BgTriangle} alt="" className="w-full h-auto" />

          <div
            className="bg-white h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md border-8 border-[#4464F9] flex items-center justify-center rounded-full absolute -top-9 left-0"
            onClick={() => setPlayerChoice("rock")}
          >
            <img src={IconRock} alt="" />
          </div>

          <div
            className="bg-white h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md border-8 border-[#ECA31B] flex items-center justify-center rounded-full absolute -top-9 right-0"
            onClick={() => setPlayerChoice("paper")}
          >
            <img src={IconPaper} alt="" />
          </div>

          <div
            className="bg-white h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md border-8 border-[#DD3754] flex items-center justify-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"
            onClick={() => setPlayerChoice("scissor")}
          >
            <img src={IconScissors} alt="" />
          </div>
        </section>
      ) : (
        <section className="flex justify-between w-full gap-4 items-center">
          <div>
            <div className="bg-white h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md border-8 border-[#4464F9] flex items-center justify-center rounded-full">
              <img src={IconRock} alt="" />
            </div>
            <h3 className="text-xl uppercase font-bold mt-2 text-gray-300">
              You picked
            </h3>
          </div>

          {!houseChoice ? (
            <div>
              <div
                className="bg-black/30 h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md rounded-full"
                onClick={() => {
                  handleHouseChoice();
                }}
              ></div>
              <h3 className="text-lg uppercase font-bold mt-2 text-gray-300">
                The house picked
              </h3>
            </div>
          ) : (
            <div>
              <div className="bg-white h-28 w-28 cursor-pointer hover:shadow-2xl hover:h-32 hover:w-32 shadow-md border-8 border-[#4464F9] flex items-center justify-center rounded-full">
                <img src={IconRock} alt="" />
              </div>
              <h3 className="text-lg uppercase font-bold mt-2 text-gray-300">
                The house picked
              </h3>
            </div>
          )}
        </section>
      )}

      {winner && (
        <div>
          {winner === "player" ? (
            <h3 className="text-3xl uppercase font-bold mt-2 text-[#4464F9]">
              You Win
            </h3>
          ) : (
            <h3 className="text-3xl uppercase font-bold mt-2 text-[#DD3754]">
              You Lose
            </h3>
          )}

          <button
            className="bg-gray-200 py-2 px-8 border border-gray-400 rounded-md text-gray-900 text-2xl font-bold capitalize my-4"
            onClick={() => resetGame()}
          >
            play again
          </button>
        </div>
      )}

      <a
        href="/rules"
        className="text-gray-200 cursor-pointer py-3 px-8 border border-gray-400 rounded-md"
      >
        Rules
      </a>
    </div>
  );
}

export default Home;
