const initialInput = await Deno.readTextFile("./input-4.txt");
const input = initialInput.split('\n').map(line => line.split(''));;

function isM(char: string) {
  return char === "M";
}
function isA(char: string) {
  return char === "A";
}
function isS(char: string) {
  return char === "S";
}

function checkDiagonals(char1: string, char2: string) {
  return ((isM(char1) && isS(char2)) || (isS(char1) && isM(char2)))
}

let count: number = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const upRight = i > 0 && (j + 1) < input[i].length;
    const upLeft = i > 0 && j > 0;
    const downRight = (i + 1) < input.length && (j + 1) < input[i].length;
    const downLeft = (i + 1) < input.length && j < input[i].length;

    if (isA(input[i][j]) && upRight && upLeft && downRight && downLeft) {
      if (checkDiagonals(input[i - 1][j - 1], input[i + 1][j + 1]) &&
          checkDiagonals(input[i - 1][j + 1], input[i + 1][j - 1])) {
        count++
      }
    }
  }
}

console.log(count);
