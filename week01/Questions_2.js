// ข้อ 2: Array Destructuring + Rest (จาก Chat GPT)
// ให้ array
// const nums = [10, 20, 30, 40, 50];
// ใช้ array destructuring เพื่อแยกตัวแปร a, b รับค่า 10 และ 20
// ใช้ rest operator เพื่อเก็บค่าที่เหลือไว้ในตัวแปร others
// แสดงผลลัพธ์ดังนี้


const nums = [10, 20, 30, 40, 50]; //จากโจทย์
const [a, b, ...others] = nums;

console.log("a =", a);
console.log("b =", b);
console.log("others =", others);
