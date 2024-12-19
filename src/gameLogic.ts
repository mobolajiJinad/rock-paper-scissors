export type Choice = "rock" | "paper" | "scissors";

const choices: Choice[] = ["rock", "paper", "scissors"];

export const getRandomChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const determineWinner = (
  playerChoice: Choice,
  houseChoice: Choice
): string => {
  if (playerChoice === houseChoice) return "draw";
  if (
    (playerChoice === "rock" && houseChoice === "scissors") ||
    (playerChoice === "paper" && houseChoice === "rock") ||
    (playerChoice === "scissors" && houseChoice === "paper")
  ) {
    return "player";
  }
  return "house";
};
