// 2. filter()
// โจทย์: คืนค่าตัวเลขที่มากกว่า 50 เท่านั้น
// Input: [10, 55, 80, 23, 60]
// Output: [55, 80, 60]

function greaterThan(nums) {
  return nums.filter(n => n > 50);
}

console.log(greaterThan([10, 55, 80, 23, 60]));
