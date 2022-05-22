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
  const cities = readLine().split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    let first = Math.abs(cities[i] - cities[0]);
    let last = Math.abs(cities[i] - cities[n - 1]);
    let max = Math.max(first, last);

    let min = Number.NEGATIVE_INFINITY;
    if (i === 0) {
      min = Math.min(Math.abs(cities[i] - cities[i + 1]));
    } else if (i === n - 1) {
      min = Math.min(Math.abs(cities[i] - cities[i - 1]));
    } else {
      min = Math.min(
        Math.abs(cities[i] - cities[i - 1]),
        Math.abs(cities[i] - cities[i + 1])
      );
    }

    console.log(min, max);
  }
}
