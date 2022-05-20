"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

let text = "";
process.stdin.on("data", (inputStdin) => {
  // inputString += inputStdin;
  text += inputStdin;
});

process.stdin.on("end", (_) => {
  const { EOL } = require("os");
  const lines = text.split(EOL); /*your input text, split by lines*/
  var a = new Map();
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "a" && text[i] <= "z") {
      a.set(text[i]);
    }
  }
  console.log(a.size);
});

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function main() {
//   let text = "";
//   const { EOL } = require("os");
//   const lines = text.split(EOL);
//   const map = new Map();
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] >= "a" && text[i] <= "z") {
//       map.set(text[i]);
//     }
//   }
//   console.log(map.size);
// }

/*
function main() {
  // const line = [...readLine().split(/[ \(,\){}]+/)].filter(
  const line = [...readLine().split(/[ \(\s+)(,\){}]+/)].filter(
    (item) =>
      item !== "{" || item !== "}" || item !== "," || item.trim().length > 0
  );
  // const letters = line
  //   .filter((item) => item !== "{" || item !== "}")
  //   .split(" "); //.map(Number);
  console.log(line);
  // console.log(letters);
  let distinct = 0;
}
*/
