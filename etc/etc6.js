// 추석

const solution = (S1, S2, S3) => {
  if (S1 === S2 && S2 === S3 && S3 === S1) {
    return S1.length
  }
  const splitedStr = S1.split('');

  return splitedStr;
};

// console.log(solution('qwerasdfzxcv', 'qwerasdfzxcv', 'qwerasdfzxcv'));
console.log(solution('abcdefg', 'acfbdeg', 'aabbccddeeffgg'));
