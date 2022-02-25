process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

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

  watermelon();
});

function readline() {
  return inputString[currentLine++];
}

/* Common Template Ends */
function watermelon() {
  let w = +readline(); // Read Input divisibleBy2
  const divisibleBy2 = w % 2 === 0 && w !== 2 ? "YES" : "NO";
  console.log(divisibleBy2); // Gives Output
}

// const w = Number(readline());

// if (w <= 2 || w % 2 != 0) console.log("NO\n");
// else console.log("YES\n");

// if (w % 2 === 0 && w > 2) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
