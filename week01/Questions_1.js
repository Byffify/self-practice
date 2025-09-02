// โจทย์ข้อ 1: (จาก Chat GPT)
// ให้ array letters = [..."Hello World"]
// ใช้ for/of loop เพื่อสร้าง string ที่เก็บเฉพาะตัวอักษรที่อยู่ใน ตำแหน่ง index คู่
// ใช้ join() รวม array กลับมาเป็น string เดิม "Hello World"

const letters = [..."Hello World"]; //จากโจทย์

let evenLetter = "";

for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
    evenLetter += letters[i];
  }
}

console.log("ตัวอักษร index คู่:", evenLetter);  

const ori = letters.join("");
console.log("รวม string เดิม:", ori);  