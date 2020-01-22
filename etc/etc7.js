// 사막 횡단

const solution = (oilTank, cost, way, ...wayToWay) => {
  let hasArrival;
  let result = 0;

  for (let i = 0; i < wayToWay.length; i++) {
    if (wayToWay[i].indexOf(oilTank) === -1) {
      hasArrival = false;
    } else {
      hasArrival = true;
    }
  }

  if (!hasArrival) {
    return -1;
  }

  const firstWays = wayToWay.filter(ele => ele[0] === '1');

  return result;
};

// console.log(solution('5', '5 5 5 5', '4', '1 2', '2 3', '3 4', '4 1'));
console.log(solution('4', '1 10 2 15', '4', '1 2', '1 3', '4 2', '4 3'));
