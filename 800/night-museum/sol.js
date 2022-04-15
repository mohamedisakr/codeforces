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
  let s = readLine();
  let rotations = 0;

  let min = Math.abs(s.charCodeAt(0) - 97);

  if (min > 13) {
    rotations += 26 - min;
  } else {
    rotations += min;
  }

  for (let i = 1; i < s.length; ++i) {
    min = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    if (min > 13) {
      rotations += 26 - min;
    } else {
      rotations += min;
    }
  }

  console.log(rotations);
}
