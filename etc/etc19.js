/*15번
Implement the  ndHobbyists function that takes an object consisting of peoples names mapped to their respective hobbies,
and a hobby. The function should return an Array containing the names of the people (in any order) that enjoy the hobby.*/
function findHobbyists(hobbies, hobby) {
  const result = [];
  for (const person in hobbies) {
    if (hobbies[person].indexOf(hobby) !== -1) {
      result.push(person);
    }
  }
  return result;
}
var hobbies = {
  John: ['Piano', 'Puzzles', 'Yoga'],
  Adam: ['Drama', 'Fashion', 'Pets'],
  Mary: ['Magic', 'Pets', 'Reading']
};
console.log(findHobbyists(hobbies, 'Yoga'));
