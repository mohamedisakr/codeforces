"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  const n = 5;
  const { EOL } = require("os");
  const lines = inputString.split(EOL);
  let row = -1;
  let col = -1;
  let abort = false;

  for (let i = 0; i < n; i++) {
    let a = lines[i].split(" ").map(Number);
    for (let j = 0; j < n && !abort; j++) {
      if (a[j] == 1) {
        row = i;
        col = j;
        abort = true;
        break;
      }
      if (abort) {
        break;
      }
    }
  }
  console.log(Math.abs(2 - row) + Math.abs(2 - col));
});
