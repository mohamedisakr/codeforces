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
  const word = readLine();
  let uppers = 0;
  let lowers = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowers++;
    } else {
      uppers++;
    }
  }

  if (uppers > lowers) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}
