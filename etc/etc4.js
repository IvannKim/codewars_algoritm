// 피보나치 수열

const n = 10;

const fibonacci = num => {
  let i = 0;
  let num1 = 0;
  let num2 = 1;
  const arr = [0, 1];

  while (i < num) {
    const newNum = num1 + num2;
    arr.push(newNum);

    num1 = num2;
    num2 = newNum;
    i++;
  }
  return arr[10];
};

console.log(fibonacci(n));
