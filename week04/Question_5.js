// 5. sort()
// โจทย์: เรียง string ตามตัวอักษร
// Input: ["banana", "apple", "cherry"]
// Output: ["apple", "banana", "cherry"]

function sortStrings(arr) {
  return [...arr].sort();
}

console.log(sortStrings(["banana", "apple", "cherry"]));