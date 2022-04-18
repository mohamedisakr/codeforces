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
  let stones = readLine();
  let instructions = readLine();
  let pos = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (stones[pos] === instructions[i]) {
      pos += 1;
    }
  }
  console.log(pos + 1);
}
