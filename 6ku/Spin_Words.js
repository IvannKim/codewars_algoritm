/* Stop gninnipS My sdroW

Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const sentence = "Hey fellow warriors";

function spinWords(str) {
    let res = [];
    const splitedStr = str.split(' ')
    console.log(splitedStr)
    splitedStr.forEach(element => {
        let word = [];
        let splitedElement = element.split('')
        if (splitedElement.length > 5) {
            splitedElement.forEach(ele => {
                word.unshift(ele)
            })
            res.push(word.join(''))
        } else {
            res.push(element)
        }
    })
    return res.join(' ')
}

console.log(spinWords(sentence))