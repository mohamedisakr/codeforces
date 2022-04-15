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
  let [a1, a2, a3, a4] = readLine().split(" ").map(Number);
  const s = readLine();

  const charsMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let notFound = 0;
    if (!charsMap.get(s[i])) {
      charsMap.set(s[i], ++notFound);
    } else {
      let found = charsMap.get(s[i]);
      charsMap.set(s[i], ++found);
    }
  }

  let total = 0;
  if (Number(charsMap.get("1"))) {
    total += Number(charsMap.get("1")) * a1;
  }
  if (Number(charsMap.get("2"))) {
    total += Number(charsMap.get("2")) * a2;
  }
  if (Number(charsMap.get("3"))) {
    total += Number(charsMap.get("3")) * a3;
  }
  if (Number(charsMap.get("4"))) {
    total += Number(charsMap.get("4")) * a4;
  }

  console.log(total);
}
