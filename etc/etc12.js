const solution = roomNumber => {
  const roomNumStr = `${roomNumber}`.split('');
  const numberDictionary = {};

  roomNumStr.forEach(element => {
    let temp = element;

    if (Number(element) === 9) {
      temp = 6;
    }
    if (!numberDictionary[temp]) {
      numberDictionary[temp] = 1;
    } else {
      numberDictionary[temp]++;
    }
  });

  numberDictionary[6] = Math.round(numberDictionary[6] / 2);

  if (isNaN(numberDictionary[6])) {
    delete numberDictionary[6];
  }

  const numberSet = Object.values(numberDictionary).reduce((a, b) =>
    Math.max(a, b)
  );

  return numberSet;
};

console.log(solution(99999));
console.log(solution(122));
console.log(solution(9999));
console.log(solution(12635));
console.log(solution(888888));
console.log(solution(735002));
