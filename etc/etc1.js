/* 자연수가 들어있는 배열 arr가 매개변수로 주어질 때,
배열 안의 숫자들 중 한 번씩만 나타나는 (즉, 중복되어 나타나지 않는)
숫자들만 오름차순으로 정렬하여 return 하도록 solution 함수를 완성하시오.
만약 그러한 숫자가 없다면 배열에 -1을 채워서 return 하시오.

* 제한사항
- arr의 길이나 원소는 1 이상 10만 이하의 자연수.

[2, 1, 3, 3] [1, 2]
[3, 4, 4, 2, 5, 2, 5, 5] [3]
[3, 5, 3, 5, 7, 5, 7] [-1]*/

// const arr = [3, 4, 4, 2, 5, 2, 5, 5];
// const arr = [3, 5, 3, 5, 7, 5, 7];
const arr = [2, 1, 3, 3];

const solution = array => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }

  array.length = 0;

  for (let i in obj) {
    if (obj[i] !== 1) {
      array[array.length] = Number(i);
    }
  }

  return array.length === 0 ? [-1] : array;
};

console.log(solution(arr));
