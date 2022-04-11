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
  const cards = readLine().split(" ").map(Number);
  let left = 0;
  let right = n - 1;
  let serejaScore = 0;
  let dimaScore = 0;
  let serejaTurn = true;

  for (let i = 0; i < n; i++) {
    if (cards[left] > cards[right]) {
      if (serejaTurn) {
        serejaScore += cards[left];
        serejaTurn = false;
      } else {
        dimaScore += cards[left];
        serejaTurn = true;
      }

      left++;
    } else {
      if (serejaTurn) {
        serejaScore += cards[right];
        serejaTurn = false;
      } else {
        dimaScore += cards[right];
        serejaTurn = true;
      }

      right--;
    }
  }

  console.log(serejaScore, dimaScore);
}
