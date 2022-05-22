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
  const n = Number(readLine());
  const friends = readLine().split(" ").map(Number);
  const gifts = [];

  for (let i = 0; i < n; i++) {
    gifts[friends[i] - 1] = i + 1;
  }

  console.log(gifts.map((g) => g).join(" "));
}
