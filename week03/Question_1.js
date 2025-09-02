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

let sentence = "Armminho is the best player in the world";
console.log(getFreqOfWords(sentence));
