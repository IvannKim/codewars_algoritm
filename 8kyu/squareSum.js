function squareSum(array) {
  return array.reduce((acc, cur) => (acc += Math.pow(cur, 2)), 0);
}

console.log(squareSum([2, 3]));
