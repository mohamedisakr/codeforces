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
  const username = readLine();
  const set = new Set(username);

  if (set.size % 2 === 0) {
    console.log("CHAT WITH HER!");
  } else {
    console.log("IGNORE HIM!");
  }
}
