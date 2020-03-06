const arr = [10, 0, 0, 4, 20];
const num = 8;

const solution = (arr, num) => {
  let remainingNumber = 0;
  let fixableDay = 0;

  arr.forEach(element => {
    if (element || remainingNumber) {
      fixableDay++;
    }
    remainingNumber = Math.max(remainingNumber + element - num, 0);
  });

  fixableDay += Math.ceil(remainingNumber / num);

  return fixableDay;
};

const result = solution([10, 0, 0, 4, 20], 8);
console.log(result);

console.log(solution([100, 100], 10));
console.log(solution([27, 0, 0, 0, 9], 9));
console.log(solution([6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6], 3));
