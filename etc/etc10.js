const checkPalindrome = s => {
  const len = s.length;
  // input을 배열로 바꾼다.
  const input = s.split('');
  // 입력값을 뒤집는다.
  const reverse = s
    .split('')
    .reverse()
    .join('');
  let cnt = 51;

  for (let i = 0; i < len; i++) {
    let temp = 0;
    let flag = true;

    for (let j = 0; j < len - i; j++) {
      console.log(
        `i is ${i} j is ${j} input[i+j] ${input[i + j]} reverse ${reverse[j]}`
      );
      if (input[i + j] == reverse[j]) {
        ++temp;
        console.log(`temp is ${temp}`);
      } else {
        flag = false;
        break;
      }
    }
    if (temp > 0 && flag) {
      temp = len - temp;
      cnt = cnt > temp ? temp : cnt;
    }
  }
  return len + cnt;
};

console.log(checkPalindrome('abab'));
console.log(checkPalindrome('abacaba'));
console.log(checkPalindrome('qwerty'));
