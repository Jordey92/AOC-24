const initialInput = await Deno.readTextFile("./input-3.txt");

function getNumbersInRow(input: string): number {
  const nums: number[] = [];
  let i = 0;
  while (i < input.length) {
    if (!isNaN(Number(input[i]))) {
      nums.push(Number(input[i]));
      i++;
    } else {
      break;
    }
  }
  return Number(nums.join(""));
}

function checkIfRealInput(input: string) {
  for (let i = 0; i < input.length; i++) {
    const isU = input[i + 1] === "u";
    const isL = input[i + 2] === "l";
    const isLBracket = input[i + 3] === "(";
    const firstNumCheck = getNumbersInRow(input.slice(i + 4));
    const commaCheckIndex = i + 4 + String(firstNumCheck).length;
    const isComma = input[commaCheckIndex] === ",";
    const secondNumCheck = getNumbersInRow(input.slice(commaCheckIndex + 1));
    const rBracketIndex = commaCheckIndex + 1 + String(secondNumCheck).length;
    const isRBracket = input[rBracketIndex] === ")";

    if (isU && isL && isLBracket && isComma && isRBracket) {
      return Number(firstNumCheck) * Number(secondNumCheck);
    }
    return 0;
  }
}

let answer = 0;
let enabled = true;

for (let i = 0; i < initialInput.length; i++) {
  if (initialInput.slice(i, i + 4) === "do()") enabled = true;
  if (initialInput.slice(i, i + 7) === "don't()") enabled = false;
  if (initialInput[i] === "m" && enabled) {
    const newInput = initialInput.slice(i);
    const result = checkIfRealInput(newInput) ?? 0;
    answer += result;
  }
}

console.log(answer);
