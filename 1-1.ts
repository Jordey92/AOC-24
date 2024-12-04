import { initialInput } from "./input-1.ts";

const input = initialInput.split(/\s/g).filter(Boolean);

const listOne: number[] = [];
const listTwo: number[] = [];

input.map((input, index) => {
  if (index % 2 === 0) {
    return listOne.push(Number(input));
  }
  return listTwo.push(Number(input));
});

listOne.sort();
listTwo.sort();

function getDifference(input1: number[], input2: number[]) {
  if (!input1.length && !input2.length) return 0;
  return (
    Math.abs(input2[0] - input1[0]) +
    getDifference(input1.slice(1), input2.slice(1))
  );
}

const answer = getDifference(listOne, listTwo);
console.log(answer);
