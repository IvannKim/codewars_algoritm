/*
Create a function (or write a script in Shell) that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers.
*/

const number = 2;

const even_or_odd = number => number % 2 ? 'Odd' : 'Even'

console.log(even_or_odd(number))