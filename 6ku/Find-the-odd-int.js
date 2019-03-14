/* Find the odd int

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

const arr = [5, 4, 3, 2, 9, 5, 4, 3, 2, 10, 10]

function findOdd(arr) {
    let count = 0;
    arr.sort((a, b) => a - b)
    console.log(arr)
    let arr1 = arr[0];
    arr.forEach((element) => {
        if (arr1 === element) count++
    })
    if (count % 2 === 0) {
        arr.splice(0, count)
        return findOdd(arr);
    } else return arr1
}

console.log(findOdd(arr))