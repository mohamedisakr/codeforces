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
  const n = readLine().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    let word = readLine();
    let len = word.length;
    if (len > 10) {
      console.log(`${word.charAt(0)}${len - 2}${word.charAt(len - 1)}`);
    } else {
      console.log(word);
    }
  }
}
