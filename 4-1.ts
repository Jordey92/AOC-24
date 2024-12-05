const initialInput = await Deno.readTextFile("./input-4.txt");
const input = initialInput.split('\n').map(line => line.split(''));;

function isX(char: string) {
  return char === "X";
}
function isM(char: string) {
  return char === "M";
}
function isA(char: string) {
  return char === "A";
}
function isS(char: string) {
  return char === "S";
}

let count: number = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    // check right
    if (isX(input[i][j])) {
      if ((j + 3) < input[i].length) {
        if (isM(input[i][j + 1]) && isA(input[i][j + 2]) && isS(input[i][j + 3])) {
        count ++;
        }
      }

      // check down
      if ((i + 3) < input.length) {
        if (isM(input[i + 1][j]) && isA(input[i + 2][j]) && isS(input[i + 3][j])) {
        count ++;
        }
      }

      // check down right
      if ((i + 3) < input.length && (j + 3) < input[i].length) {
        if (isM(input[i + 1][j + 1]) && isA(input[i + 2][j + 2]) && isS(input[i + 3][j + 3])) {
          count ++;
        }
      }

      // check down left
      if ((i + 3) < input.length && (j - 3) >= 0) {
        if (isM(input[i + 1][j - 1]) && isA(input[i + 2][j - 2]) && isS(input[i + 3][j - 3])) {
          count ++;
        }
      }
    }

  if (isS(input[i][j])) {
    // check right
    if ((j + 3) < input[i].length) {
      if (isA(input[i][j + 1]) && isM(input[i][j + 2]) && isX(input[i][j + 3])) {
      count ++;
      }
    }

    // check down
    if ((i + 3) < input.length) {
      if (isA(input[i + 1][j]) && isM(input[i + 2][j]) && isX(input[i + 3][j])) {
      count ++;
      }
    }

    // check down right
    if ((i + 3) < input.length && (j + 3) < input[i].length) {
      if (isA(input[i + 1][j + 1]) && isM(input[i + 2][j + 2]) && isX(input[i + 3][j + 3])) {
        count ++;
      }
    }

    // check down left
    if ((i + 3) < input.length && (j - 3) >= 0) {
      if (isA(input[i + 1][j - 1]) && isM(input[i + 2][j - 2]) && isX(input[i + 3][j - 3])) {
        count ++;
      }
    }
  }
  }
}

console.log(count);
