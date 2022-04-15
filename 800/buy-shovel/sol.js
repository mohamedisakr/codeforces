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
  let [k, r] = readLine().split(" ").map(Number);
  let shovels = 1;
  let abort = false;

  for (let i = 1; i < 11 && abort === false; i++) {
    if ((k * i) % 10 === 0 || (k * i) % 10 === r) {
      shovels = i;
      abort = true;
      break;
    }
    if (abort === true) {
      break;
    }
  }
  console.log(shovels);
}
