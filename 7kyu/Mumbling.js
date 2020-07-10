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

function accum(s) {
  return s.split('').reduce((acc, cur, idx) => {
    let mumble = '';
    for (let i = 0; i < idx + 1; i++) {
      if (i === 0) {
        mumble += cur.toUpperCase();
      } else {
        mumble += cur.toLowerCase();
      }
    }
    return idx === 0 ? (acc += mumble) : (acc += `-${mumble}`);
  }, '');
}

console.log(accum(str));
