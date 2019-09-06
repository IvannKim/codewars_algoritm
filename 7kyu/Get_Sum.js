/*Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2*/

function GetSum(a, b) {
  if (b - a === 1 || b - a < 0) return a + b;
  
  let endPoint = 0;
  while (endPoint <= b) {
    a++;
    endPoint++;
  }
  return a;
}

console.log(GetSum(0, -1));
