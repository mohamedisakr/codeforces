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

// n --> the number of oranges,
// b --> the maximum size of the orange that fits in the juicer
// d --> determines the condition when the waste section should be emptied.
function main() {
  const [n, b, d] = readLine().split(" ").map(Number);
  const sizes = readLine().split(" ").map(Number);
  let emptyCount = 0;
  let storage = 0;

  for (let i = 0; i < n; i++) {
    if (sizes[i] > b) {
      continue;
    }

    storage += sizes[i];

    if (storage > d) {
      emptyCount += 1;
      storage = 0;
    }
  }

  console.log(emptyCount);
}
