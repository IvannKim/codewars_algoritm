/* Persistent Bugger
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number */

const num = 9;

function persistence(num) {
    let count = 0;
    let res = 1;
    if (num >= 10) {
        let splitedNum = String(num).split('')
        splitedNum.forEach(element => res *= element)
        count++
        return persistence(res, count)
    } else {
        return count
    }
}
console.log(persistence(num))

function fibonacci(num) {
	var answer = 0;
	if( num <= 1 ) {
		return num;
	}
	else if( num > 1 ) {
		answer = fibonacci(num-1) + fibonacci(num-2);
	}
	return answer;
}

// function persistence(num) {
//     let count = 0;
//     let res = 1
//     const splitedNum = String(num).split('')
//     splitedNum.forEach(element => res *= element)
//     if (res < 10) {
//         return count
//     } else {
//         count++
//         return persistence(res, count)
//     }
// }