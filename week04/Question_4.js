// 4. find()
// โจทย์: หาสินค้าชิ้นแรกที่มีราคาเกิน 100 บาท
const products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 120 },
  { name: "Bag", price: 250 }
];
// Output: { name: "Book", price: 120 }

function findMore(products) {
  return products.find(pro => pro.price > 100);
}

console.log(findMore(products))