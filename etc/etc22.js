// const a = ['o/', 'w/', 'e/', './', './', './'];
const a = ['x/', 'y/', '../', 'z/', './'];

const sol = (arr) => {
  return arr.reduce((acc, cur) => {
    if (cur === '../') {
      acc.pop();
    } else if (cur !== './') {
      acc.push(cur);
    }
    return acc;
  }, []).length;
};

console.log(sol(a));
// const result = [];
// arr.map((ele) => {
//   if (ele === '../') {
//     result.pop();
//   } else if (ele === './') {
//   } else {
//     result.push(ele);
//   }
// });
// return result.length;
