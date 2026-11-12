const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// // 1. Calculate the total price of all products.
// const calculateTotalPrice = products.reduce((acc, current) => acc += current.price, 0);
// console.log(calculateTotalPrice)
// // 2. Calculate the total quantity of all products.
// const calculateTotalQuantity = products.reduce((acc, current) => acc += current.quantity, 0)
// console.log('Calculate Total Quantity', calculateTotalQuantity);
// // 3. Calculate the average price of all products.
// const calculateAverage = products.reduce((acc, current) => {
//     acc += current.price;
//     return acc / products.length;
// }, 0)
// console.log('Calculate Average', calculateAverage);
// 4. Find the most expensive product using `reduce()`.
// const mostExpensive = products.reduce((acc, current) => acc.price > current.price ? acc : products)
// console.log('Most Expensive', mostExpensive);
// 5. Find the cheapest product using `reduce()`.
// const mostcheapset = products.reduce((acc, current) => acc.price < current.price ? acc : current);
// console.log('Most Cheapset ',mostcheapset);
// 6. Find the highest-rated product using `reduce()`.
// const highestRated = products.reduce((acc, product) => acc.rating > product.rating ? acc : product);
// console.log('Highest Rated ', highestRated);
// 7. Count how many products have a price greater than Rs. 5,000.
// const highestPriceProducts = products.reduce((acc, product) => acc.price > 5000 ? acc : product);
// console.log('Highest Price Products ', highestPriceProducts);
// 8. Calculate the total inventory value using `price * quantity`.
// const calculateTotalPrice = products.reduce((acc, current) =>  acc + (current.price * current.quantity), 0);
// console.log('Calculate Total Price ', calculateTotalPrice);
// 9. Calculate the total quantity of products with a rating above 4.3.
// Long term
// const calculateTotalQuantity = products.reduce((acc, current) => {
//     if (current.rating > 4.3) {
//         return acc + current.quantity
//     } else {
//         return acc
//     }
// }, 0)
// console.log('Calculate Total Quantity ', calculateTotalQuantity);
// Short term
// const quantity = products.reduce((acc, current) => current.rating > 4.3 ? acc + current.quantity : acc, 0);
// console.log("Total Qunatity ", quantity)

// 10. Use one `reduce()` to create an object containing:
// - Total number of products
// - Total quantity
// - Total inventory value
// const containingProducts = products.reduce((acc, current) => {
//     acc.totalProducts++;
//     acc.totalQuantity += current.quantity;
//     acc.totalIventoryValue += current.price * current.quantity;
//     return acc
// }, {
//     totalProducts: 0,
//     totalQuantity: 0,
//     totalIventoryValue: 0
// })
// console.log(containingProducts);


const containingProducts = products.reduce((acc, current) => {

}, {});
console.log(containingProducts);