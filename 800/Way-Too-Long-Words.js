"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";
let input_currentline = 0;
let input_array;

process.stdin.on("data", function (chunk) {
  input += chunk;
});

function readLine() {
  return input_array[input_currentline++];
}

const convertToAbbreviation = (word) => {
  const len = word.length;
  len <= 10
    ? console.log(word)
    : console.log(`${word.charAt(0)}${len - 2}${word.charAt(len - 1)}`);
};

process.stdin.on("end", function () {
  input_array = input.split("\n");
  let n = parseInt(readLine());
  console.log(`n : ${n}`);
  for (let i = 0; i < n; i++) {
    let word = readLine();
    console.log(`word : ${word}`);
    convertToAbbreviation(word);
  }
});

// consider this code
/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the reverseArray function below.
function reverseArray(a) {
    return a.reverse();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}

*/
