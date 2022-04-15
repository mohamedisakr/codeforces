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
  let colors = [];
  let guests = 0;

  for (let i = 0; i < n; i++) {
    let [home, guest] = readLine().split(" ").map(Number);
    colors.push([home, guest]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && colors[i][0] === colors[j][1]) {
        guests++;
      }
    }
  }

  console.log(guests);
}
