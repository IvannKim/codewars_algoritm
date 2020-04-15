const a = 'asdf_9@hackerrank.com';

const sol = (str) => {
var re = new RegExp('[a-z]_*[0-9]*@hackerrank.com');


  return re.test(str);
};

console.log(sol(a));
