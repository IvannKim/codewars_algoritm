/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spa */

const string = 'abracadabra'

const getCount = string => {
    let vowelsCount = 0;
    const splitedString = string.split('')
    splitedString.forEach(element => {
        element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u' ? vowelsCount++ : 0
    })
    return vowelsCount;
}

console.log(getCount(string))