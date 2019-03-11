/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. 

0부터 숫자까지 3과 5의 배수를 나열하고 총합을 구하시오.
- 3,5의 배수 일경우 하번만 계산
*/

const n = 10;

function solution(n) {
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
}

console.log(solution(n))