import { initialInput } from "./input-2.ts";

const arr = initialInput
  .split(/\r?\n/)
  .map((x) => x.split(" ").filter(Number).map(Number));

function isAscending(arr: number[]) {
  return arr.every(function (x, i) {
    return i === 0 || x > arr[i - 1];
  });
}

function isDescending(arr: number[]) {
  return arr.every(function (x, i) {
    return i === 0 || x < arr[i - 1];
  });
}

function isWithinRange(arr: number[]) {
  return arr.every(function (x, i) {
    return i === 0 || Math.abs(x - arr[i - 1]) <= 3;
  });
}

function isSafe(arr: number[]) {
  return (isAscending(arr) || isDescending(arr)) && isWithinRange(arr);
}

function countSafeValues(arr: number[][]): number {
  if (!arr.length) return 0;

  return Number(isSafe(arr[0])) + countSafeValues(arr.slice(1));
}

const answer = countSafeValues(arr);

console.log(answer);
