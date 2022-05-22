"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function main() {
  let n = Number(readLine());
  let skills = readLine().split(" ").map(Number);
  let ones = 0;
  let twos = 0;
  let threes = 0;

  for (let i = 0; i < n; i++) {
    if (skills[i] === 1) {
      ones++;
    }
    if (skills[i] === 2) {
      twos++;
    }
    if (skills[i] === 3) {
      threes++;
    }
  }
  console.log(n);
  console.log(skills);
  console.log(Math.min(ones, Math.min(twos, threes)));
}
