/*14번
Return true if the substrings "John" and "Mary" appear the same number of times in the given string;
otherwise return false.
String comparison should be case insensitive.*/
function johnMary(str) {
  let numberOfJohn = 0;
  let numberOfMary = 0;
  const splitedString = str.toUpperCase().split('&');

  splitedString.forEach(element => {
    if (element === 'JOHN') {
      numberOfJohn++;
    }
    if (element === 'MARY') {
      numberOfMary++;
    }
  });
  return numberOfJohn === numberOfMary ? true : false;
}
console.log(johnMary('John&Mary&John&Mary'));
