// ข้อ 1: การใช้ map() และ filter()
// ให้ array [3, 10, 15, 22, 33, 42];
// ใช้ map() เพื่อสร้าง array ใหม่ที่เก็บเลขยกกำลังสองทั้งหมด
// ใช้ filter() เพื่อเลือกเลขที่มากกว่า 20 ออกมา

const numbers = [3, 10, 15, 22, 33, 42]

const squared = numbers.map(num => num ** 2);
console.log(squared); //[ 9, 100, 225, 484, 1089, 1764 ]

const result = squared.filter(num => num > 20);
console.log(result); //[ 100, 225, 484, 1089, 1764 ]