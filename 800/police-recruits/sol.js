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
  let n = readLine();
  const events = readLine().split(" ").map(Number);

  let police = 0;
  let crime = 0;

  for (let i = 0; i < n; i++) {
    if (events[i] > 0) {
      police += events[i];
    } else {
      if (police < 1) {
        crime++;
      } else {
        police--;
      }
    }
  }

  console.log(crime);
}
