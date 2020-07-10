/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const lowerStr = str[i].toLowerCase();
    if (lowerStr === 'o') {
      const findedStrIdex = stack.indexOf('x');
      if (findedStrIdex !== -1) {
        stack.splice(findedStrIdex, 1);
      } else {
        stack.push(lowerStr);
      }
    } else if (lowerStr === 'x') {
      const findedStrIdex = stack.indexOf('o');
      if (findedStrIdex !== -1) {
        stack.splice(findedStrIdex, 1);
      } else {
        stack.push(lowerStr);
      }
    }
  }
  console.log('hi');
  return stack.length === 0 ? true : false;
}
