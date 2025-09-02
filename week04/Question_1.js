// 1. map()
// โจทย์: แปลง array ของ string ให้กลายเป็นความยาวของแต่ละคำ
// Input: ["cat", "elephant", "dog"]
// Output: [3, 8, 3]

function wordLengths(arr) {
  return arr.map(s => s.length);
}

console.log(wordLengths(["cat", "elephant", "dog"]));

