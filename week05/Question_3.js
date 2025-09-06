//  • Write a function getFreqOfWords(sentence) that returns an object with keys representing 
// unique words in lowercase and values representing the frequency of occurrences of each 
// word with ignore case in the sentence. If the input string is null or undefined, return 
// undefined.


function getFreqOfWords(sentence) {
  if (typeof sentence !== 'string' || !sentence.trim()) {
    return undefined
  }

  let words = sentence.toLowerCase().split(" ");
  let count = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (count[word]) {
      count[word] = count[word] + 1;
    } else {
      count[word] = 1;
    }
  }
  return count;
}


//  • Output
console.log(getFreqOfWords('Today is present and present is your gift'));
 //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'));
 //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null)); //undefined
console.log(getFreqOfWords(undefined)); //undefined