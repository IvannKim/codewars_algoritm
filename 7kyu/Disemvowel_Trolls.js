/*Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

console.log(
  (function (str) {
    let res = '';
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++) {
      if (vowelList.indexOf(str[i].toLowerCase()) === -1) {
        res += str[i];
      }
    }
    return res;
  })('This website is for losers LOL!')
);
