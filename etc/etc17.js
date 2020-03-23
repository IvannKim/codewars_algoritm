/*7번
Write a function generateNewFolderName(existingFolders)
that receives an array of folder names and returns a generated unique folder name using the following rules:
1. If there is no folder with the name "New Folder" in the array, then "New Folder" is returned.
2. If there is a folder with the name "New Folder"
and there is no folder with the name "New Folder (2)",
then "New Folder (2)" is returned ("New Folder (1)" is never used).
3. The N value of "New Folder (N)" should be incremented by 1 until a unique folder name is found.
For example, generateNewFolderName(["New Folder"]) should return "New Folder (2)".
*/

function generateNewFolderName(existingFolders) {
  if (existingFolders.indexOf('New Folder') === -1) {
    return 'New Folder';
  }
  const numberOfNewFolder = existingFolders.reduce((acc, cur) => {
    if (cur === 'New Folder') {
      acc++;
    }
    return acc;
  }, 1);

  return `New Folder (${numberOfNewFolder})`;
}

console.log(generateNewFolderName([]));
console.log(
  generateNewFolderName(['New Folder','qwe','qwe'])
);
