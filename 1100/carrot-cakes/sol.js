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

/**
 *  n --> the number of cakes needed
 *  t --> the time needed for one oven to bake k cakes
 *  k --> the number of cakes baked at the same time
 *  d --> the time needed to build the second oven.
 */
function main() {
  const [n, t, k, d] = readLine().split(" ").map(Number);

  // let oneOven = parseFloat((n - 1) / (k * t));
  let oneOven = parseFloat(((n - 1) / k) * t);

  if (d < oneOven) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
