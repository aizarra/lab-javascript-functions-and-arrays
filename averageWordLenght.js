 const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

 function averageWordLength(words) {
 let avg = words.join('').length / words.length
 return avg  
 }
console.log(averageWordLength(words))