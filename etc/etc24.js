const array = ['{}[]()', '{[}]}'];

const braces = (arr) => {
 return arr.reduce((acc, cur) => {
   const res = [];
   cur.split('').forEach((ele) => {
    if (ele === ']' && res[res.length - 1] === '[') {
      res.pop();
    } else if (ele === '}' && res[res.length - 1] === '{') {
      res.pop();
    } else if (ele === ')' && res[res.length - 1] === '(') {
      res.pop();
    } else {
      res.push(ele);
    }
  });
  res.length === 0 ? acc.push('YES') : acc.push('NO');
  return acc;
 }, []);
};

console.log(braces(array));