const arr = [3, 2, 1];

const solution = arr => {
  let count = 0;
  let flag = false;
  for (let i = 0; i < arr.length - 1; i++) {
    flag = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
      count++;
    }
  }
  if (!flag) return `[${arr}], ${count}번`;
};

console.log(solution(arr));

function sortNumbers(arr) {
  let count = 1;
  let done = false;
  for (let x = 1; !done; x++) {
    done = true;
    for (let y = 0; y < arr.length - x; y++) {
      if (arr[y] > arr[y + 1]) {
        const temp = arr[y + 1];
        arr[y + 1] = arr[y];
        arr[y] = temp;
        done = false;
      }
    }
    count++;
  }
  return `[${arr}], ${count}번`;
}

console.log(sortNumbers(arr));
