// Single Swap Sort

/* 주어진 array가 단 한번의 swap으로 non-decreasing order로 sort될 수 있다면 true, 그렇지 않다면 false를 반환하는 함수를 작성하세요. */

const singleSwapSort = array => {
  return !!(
    array.reduce((acc, cur, idx) => {
      if (cur - array[idx + 1] > 0) {
        for (let i = idx + 1; i < array.length; i++) {
          if (array[i] === array[i + 1]) {
            acc++;
          }
        }
      }
      return acc;
    }, 0) === 1
  );
};

console.log(singleSwapSort([1, 5, 3, 3, 7]));
console.log(singleSwapSort([1, 3, 5, 3, 4]));
