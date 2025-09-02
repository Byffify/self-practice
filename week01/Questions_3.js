// ข้อ 3: Array.from() + map (จาก Chat GPT)
// ให้ array-like object
// let arrLike = {0: 2, 1: 4, 2: 6, length: 3};
// แปลงเป็น array จริงด้วย Array.from()
// ใช้ parameter ที่ 2 ของ Array.from() (callback) เพื่อยกกำลังสองให้กับทุกค่า
// แสดงผลลัพธ์ [4, 16, 36]

let arrLike = {0: 2, 1: 4, 2: 6, length: 3}
let newArr = Array.from(arrLike, number => number ** 2)

console.log(newArr)