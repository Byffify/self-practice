// ฟังก์ชันเพิ่ม property ใหม่เข้า object
function addProperty(obj, key, value) {
  return { ...obj, [key]: value };
}

// ตัวอย่างการใช้งาน
console.log(addProperty({ name: 'John' }, 'age', 25));
// Output: { name: 'John', age: 25 }

console.log(addProperty({}, 'city', 'New York'));
// Output: { city: 'New York' }
