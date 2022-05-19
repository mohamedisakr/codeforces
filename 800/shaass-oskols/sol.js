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
  const n = readLine();
  const a = readLine().split(" ").map(Number);
  const m = readLine();

  for (let i = 0; i < m; i++) {
    let [x, y] = readLine().split(" ").map(Number);

    x = x - 1;

    a[x - 1] += y - 1;
    a[x + 1] += a[x] - y;
    a[x] = 0;
  }

  for (let i = 0; i < n; i++) {
    console.log(a[i]);
  }
}
