// 3. reduce() จากเพื่อน
// โจทย์: หาผลรวม
// Input: [1, 2, 3, 4]
// Output: 10
// Input: [10, -5, 7]
// Output: 12

function sumNumber(number) {
    return number.reduce((total, val) => total + val , 0)
}

console.log(sumNumber([1, 2, 3, 4]))
console.log(sumNumber([10, -5, 7]))