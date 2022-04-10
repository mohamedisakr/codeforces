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
  const n = readLine();
  let prev = "";
  let groups = 0;

  for (let i = 0; i < n; i++) {
    let current = readLine();
    groups += Number(current !== prev);
    prev = current;
  }

  console.log(groups);
}
