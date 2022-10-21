const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

let singleWords = wordsUnique.filter((c, index) => {
  return wordsUnique.indexOf(c) === index;
})

console.log(singleWords)

// wordsUnique.forEach((element, index) => {
//   console.log(`${element} - ${index} - ${wordsUnique.indexOf(element)}`);
// });

//function uniquifyArray() {}