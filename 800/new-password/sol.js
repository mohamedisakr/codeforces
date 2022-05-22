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

const lowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function main() {
  let [n, k] = readLine().split(" ").map(Number);
  var password = "";

  for (var i = 0; i < n; i++) {
    password += lowers[i % k];
  }

  console.log(password);
}

/*
// solution 1: repeat k unit from beginning, no advance to K+ units
function main() {
  let [n, k] = readLine().split(" ").map(Number);

  let start = 0;
  let password = "";

  for (let i = 0; i < n; i++) {
    password += lowers[start];
    if (start + 1 === k) {
      start = 0;
    } else {
      start++;
    }
  }
  console.log(password);
}
*/

/*
function main() {
  let [n, k] = readLine().split(" ").map(Number);
  console.log("n: ", n, " k: ", k);
  let password = "";
  const lowers = "abcdefghijklmnopqrstuvxyz";
  // for (let start = 0; n > k; start += k) {
  //   // start >= n,
  //   // console.log("loop");
  //   password += lowers.substring(start, k);
  //   // start += k;
  //   n -= k;
  //   console.log("n: ", n, " start: ", start, " password: ", password);
  // }
  let start = 0;
  while (n > k) {
    password += lowers.substring(start, k);
    start += k;
    n -= k;
    console.log("n: ", n, " start: ", start, " password: ", password);
  }
  console.log("n: ", n, " start: ", start);
  console.log(password);
}
*/

/*
// n --> the length of the password
// k --> the number of distinct symbols
// the password should consist only of lowercase Latin letters
// any two consecutive symbols in the password must be distinct
function main() {
  const [n, k] = readLine().split(" ").map(Number);
  let password = "";
  const lowers = "abcdefghijklmnopqrstuvxyz";

  // take the first k
  // if k < n, take the secod k till password is n chars
  let len = n;
  let start = 0;
  while (len > 0) {
    // n = 4, k = 3
    console.log(
      "old password: ",
      password,
      "old password length: ",
      password.length
    );

    if (len > k) {
      password += lowers.substring(start, k);
      len -= k;
      start = k + 1;
    } else {
      console.log("start: ", start);
      console.log("len: ", len);
      password += lowers.substring(start, len);
      len -= len;
    }
  }
  console.log(
    "final password: ",
    password,
    "final password length: ",
    password.length
  );
  console.log(password);
}
*/
