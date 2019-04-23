/* Mumbling

This time no story, no theory. 
The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string 
which includes only letters from a..z and A..Z. */

const str = 'abcd';

function accum(string) {
    // resArray.push(str[0])
    // resArray.push(str[1]+str[1])
    // resArray.push(str[2]+str[2]+str[2])
    // resArray.push(str[3]+str[3]+str[3]+str[3])
    let res = []
    const splitedStr = string.split('')
    splitedStr.forEach((str, index) => {
        res.push(str.toUpperCase() + index)
    })
    return res
}

console.log(accum(str));