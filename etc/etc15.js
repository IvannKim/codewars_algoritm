//5번
function calcAvgHeight(data) {
  if (!Object.keys(data).length) {
    return null;
  }
  let numberOfPerson = 0;
  let allHeight = 0;
  for (const person in data) {
    for (const bodySize in data[person]) {
      if (bodySize === 'height') allHeight += data[person][bodySize];
    }
    numberOfPerson++;
  }
  return allHeight / numberOfPerson;
}
var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
console.log(avgHeight);
