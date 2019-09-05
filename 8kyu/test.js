
// example 1:

var ken = {
  name: 'ken',
  log: function () {
    console.log(this.name);
  }
};

var boundLog = bond(ken.log, ken);
boundLog(); // logs 'ken'

boundLog = bond(ken.log, { name: 'wan' });
boundLog(); // logs 'wan'

// example 2:

var something = function (a, b, c, d, e, f) {
  return a + b + c + d + e + f + this.age;
};

var boundSomething = bond(something, { age: 10 }, 1, 2, 3);
var result = boundSomething(4, 5, 6);

console.log(result === 31); // true

function bond(func, context) {
  const arr = Array.prototype.slice.call(arguments, 2);
  // const arr = [];

  // for (let i = 2; i < arguments.length; i++) {
  //   arr.push(arguments[i]);
  // }

  return function () {
    const arr2 = Array.prototype.slice.call(arguments);
    // for (let i = 0; i < arguments.length; i++) {
    //   arr.push(arguments[i]);
    // }

    return func.apply(context, arr.concat(arr2));
  };

}