//크루아상
// const S = '()((';
const S = '))(())(())(())';

const solution = str => {
  const arr = [];
  if(str[0] === ')') {
    return 'No'
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      arr.push(str[i]);
    } else if (str[i] === ')') {
      arr.pop();
    }
  }

  // return arr.length === 0 ? 'Yes' : 'No';
  return arr;
};

console.log(solution(S));
