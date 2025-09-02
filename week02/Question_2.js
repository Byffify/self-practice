// ข้อ 2: การใช้ reduce()
// ให้ array const prices = [100, 250, 50, 300];
// จงหาผลรวมของราคาทั้งหมดด้วย reduce()

const prices = [100, 250, 50, 300];

const result = prices.reduce((sum, val) => sum + val, 0);
console.log(result); 