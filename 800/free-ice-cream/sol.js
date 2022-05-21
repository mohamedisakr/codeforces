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
  let [n, x] = readLine().split(" ").map(Number);
  let distress = 0;

  for (let i = 0; i < n; i++) {
    let [op, packs] = readLine().split(" ");

    if (op === "+") {
      x += Number(packs);
    } else {
      if (packs > x) {
        distress += 1;
      } else {
        x -= Number(packs);
      }
    }
  }
  console.log(x, distress);
}

/*
function main() {
  const [n, x] = readLine().split(" ").map(Number);
  console.log(n, x);
  let leftPacks = x;
  let distress = 0;
  let plus = 0;
  let minus = 0;
  let loop = 0;

  for (let i = 0; i < n; i++) {
    loop += 1;
    let [op, packs] = readLine().split(" ");
    console.log(op, packs);
    if (op === "+") {
      plus += 1;
      leftPacks += Number(packs);
    } else if (op === "-") {
      minus += 1;
      if (packs > leftPacks) {
        distress += 1;
      } else {
        leftPacks -= Number(packs);
      }
    }
  }
  console.log(leftPacks, distress);
  // console.log("add: ", plus, "subtract: ", minus);
  // console.log("loop: ", loop);
}
*/
