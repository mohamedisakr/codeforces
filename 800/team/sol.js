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
  let imp = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let line = readLine().split(" ");

    for (let j = 0; j < line.length; j++) {
      if (line[j] === "1") {
        count++;
      }
    }

    if (count >= 2) {
      imp++;
    }
  }
  console.log(imp);
}
