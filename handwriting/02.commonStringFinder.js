const a = 'abca';
const b = 'baaaaaaa';

const commonStringFinder = (a, b) => {
  if (!a.length || !b.length) return '';
  
  const splitedA = a.split('');
  const splitedB = b.split('');

  return splitedA.reduce((acc, cur, idx) => {
    const findIndex = splitedB.indexOf(cur);
    const isFirstIndex = splitedA.indexOf(cur);

    if (findIndex !== -1 && isFirstIndex === idx) acc += cur;

    return acc;
  }, '');
};

console.log(commonStringFinder(a, b));
