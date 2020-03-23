//3번
function sortByPriceAscending(jsonString) {
  const items = JSON.parse(jsonString);
  items.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    } else {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });
  return JSON.stringify(items);
}
const temp =
  '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]';
console.log(typeof sortByPriceAscending(temp));
console.log(sortByPriceAscending(temp));
// '[{"name":"eggs","price":1},{"name":"r ice","price":4.04},{"name":"coffee","p rice":9.99}]';
