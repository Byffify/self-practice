// ข้อ 3: การใช้ splice() และ slice()
// ให้ array let fruits = ["Apple", "Banana", "Cherry", "Durian"];
// ใช้ splice() ลบ "Banana" ออก และเพิ่ม "Blueberry" เข้าไปแทน
// ใช้ slice() เพื่อเลือกเฉพาะ 2 element แรก

let fruits = ["Apple", "Banana", "Cherry", "Durian"];

fruits.splice(1, 1, "Blueberry");
console.log(fruits); 

const result = fruits.slice(0,2);
console.log(result)
