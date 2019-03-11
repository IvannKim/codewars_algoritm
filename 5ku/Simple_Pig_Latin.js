/* Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

각 단어의 첫 글자를 끝으로 이동시킨 다음 "ay"를 단어 끝에 추가하십시오. 
구두점을 그대로 둡니다.
*/

const str = 'Hello world !';

function pigIt(str) {
    let result = []
    const splitedStr = str.split(' ')
    splitedStr.forEach(word => {
        const splitedWord = word.split('')
        if (word === '!' || word === '?') {
            result.push(splitedWord.join(''))
        } else {
            const z = splitedWord.shift()
            splitedWord.push(z, 'ay')
            result.push(splitedWord.join(''))
        }
    })
    return result.join(' ')
}

console.log(pigIt(str))