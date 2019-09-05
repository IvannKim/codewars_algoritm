const a = 'abca';
const b = 'baa';

const commonStringFinder = (a, b) => {
  const splitedA = a.split('');
  let splitedB = b.split('');

  return splitedA.reduce((acc, cur) => {
    if (splitedB.indexOf(cur) !== -1) acc += cur;
    splitedB = splitedB.filter(e => splitedB[splitedB.indexOf(cur)] !== e);

    return acc;
  }, '');
};

console.log(commonStringFinder(a, b));
