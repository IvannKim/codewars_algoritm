const string = 'abc';

const permutateString = string => {
  const results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.slice(0, i) + string.slice(i + 1);
    const innerPermutations = permutateString(charsLeft);

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
};

console.log(permutateString(string));
