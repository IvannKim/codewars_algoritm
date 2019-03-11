const array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

function solution(array) {
    let result = [];
    for (let i = 0; i < array[0].length; i++) {
        if (i === 0) {
            for (let j = 0; j < array[0].length; j++)
                result.push(array[i][i + j])
        } else {
            if (i === 1) {
                for (let k = 0; k < array[0].length-2; k++)
                result.push(array[i][i])
            }
        }
    }
    console.log(result)
}

console.log(solution(array))