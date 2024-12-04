import { initialInput } from "./1-0.ts";

const input = initialInput.split(/\s/g).filter(Boolean);

const listOne: number[] = [];
const listTwo: number[] = [];

input.forEach((input, index) => {
  if (index % 2 === 0) {
    return listOne.push(Number(input));
  }
  return listTwo.push(Number(input));
});

function getMultiples(input: number[]) {
  if (!input.length) return 0;
  let total: number = 0;

  const matching = listTwo.filter((x) => x === input[0]);
  total = matching.length * input[0];

  return total + getMultiples(input.slice(1));
}

const answer = getMultiples(listOne);

console.log({ answer });
