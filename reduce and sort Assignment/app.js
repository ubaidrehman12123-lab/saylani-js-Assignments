// # JavaScript Practice Sort & Reduce

// ## Products Array

// ```
const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];
// ```
console.log('Part 1: Sort Questions (Easy to Medium)');
// ## Part 1: Sort Questions (Easy to Medium);
// 1. Sort products by price (low to high);
// const lowToHigh = products.sort((a,b) => a.price - b.price);
// console.log('Sort low To High', lowToHigh);
// // 2. Sort products by price (high to low).
// const HighToLow = products.sort((a,b)=> b.price - a.price);
// console.log('Sort High To low ', HighToLow);
// // 3. Sort products by name (A to Z).
// const sortNameAToZ = products.sort((a, b) => {
//     if (b.name > a.name) {
//         console.log('yes');
//         return -1;
//     } else {
//         console.log('no');
//         return 0
//     }

// })
// console.log('Sort Name A to Z', sortNameAToZ)
// 4. Sort products by rating (highest first).

// const sortHighestFirst = products.sort((a, b) => b.rating - a.rating);
// console.log('Sort Highest First', sortHighestFirst);
// 5. Sort products by quantity (lowest to highest).
// const quantityLowToHigh = products.sort((a , b) => a.quantity - b.quantity);
// console.log(quantityLowToHigh);
// 6. Find the 3 most expensive products using `sort()` and `slice()`.
// const mostExpensive = products.sort((a , b) => b.price - a.price).slice(0, 3);
// console.log(mostExpensive);
// 7. Find the 2 cheapest products using `sort()` and `slice()`.
// const mostcheapset = products.sort((a , b) => a.price - b.price).slice(0, 3);
// console.log(mostcheapset);
// 8. Filter products priced below Rs. 10,000, then sort by price (low to high).
// const filterProducts = products.filter((product) => product.price < 10000 ? product : 0 ).sort((a, b) => a.price - b.price)
// console.log(filterProducts);
// 9. Find the top 3 highest-rated products using `sort()` and `slice()`.
// const topThreeHighestRated = products.sort((a , b) => b.price - a.price).slice(0,3);
// console.log(topThreeHighestRated);
// 10. Sort products by rating (highest first). If ratings are equal, sort by price (low to high).
// const productHighestRating = products.sort((a , b) => {
//     if(!a.rating === b.rating){
//         return a.rating - b.rating
//     }else{
//         return b.rating - a.rating
//     }
// });
// console.log(productHighestRating);

// ------- Part 1 (Sort) is completed-------
// ---
// ## Part 2: Reduce Questions (Easy to Medium)

console.log('Part 2: Reduce Questions (Easy to Medium)');
// // 1. Calculate the total price of all products.
// const calculateTotalPrice = products.reduce((total, product) => {
//     return total + product.price;
// }, 0);
// console.log('Calculate Total Price', calculateTotalPrice);
// // 2. Calculate the total quantity of all products.
// const calculateTotalQuantity = products.reduce((total, product) => {
//     return total + product.quantity;
// }, 0);
// console.log('Calculate Total Quantity', calculateTotalQuantity);
// // 3. Calculate the average price of all products.
// const calculateAverage = products.reduce((total, product) => {
//     return total + product.price;
// }, 0);
// const averagePrice = calculateAverage / products.length;
// console.log('Calculate Average ', averagePrice);
// 4. Find the most expensive product using `reduce()`.
// const mostExpensive = products.reduce((acc, product) => acc.price > product.price ? acc : 0);
// console.log(mostExpensive);
// 5. Find the cheapest product using `reduce()`.
// const mostcheapset = products.reduce((acc, product) => acc.price < product.price ? acc : product);
// console.log('Most Cheapset ', mostcheapset);
// 6. Find the highest-rated product using `reduce()`.
// const highestRated = products.reduce((a, b) => a.rating > b.rating ? a : b);
// console.log('Highest Rated ', highestRated);
// 7. Count how many products have a price greater than Rs. 5,000.
// const expensiveProducts = products.filter(product =>  product.price > 5000);
// console.log(expensiveProducts);
// 8. Calculate the total inventory value using `price * quantity`.
// const totalInventoryValue = products.reduce((total, product) =>  total + (product.price * product.quantity), 0);
// console.log('Total Inventory Value ',totalInventoryValue);
// 9. Calculate the total quantity of products with a rating above 4.3.
// const totalHighRatedQuantity = products.reduce((total, product) => {
//     if (product.rating > 4.3) {
//         return total + product.quantity;
//     } else {
//         return total;
//     }
// }, 0);
// console.log('Total High Rated Quantity ', totalHighRatedQuantity);
// 10. Use one `reduce()` to create an object containing:
// - Total number of products
// - Total quantity
// - Total inventory value

const productSummary = products.reduce((summary, product) => {
    summary.totalProducts++;
    summary.totalQuantity += product.quantity;
    summary.totalInventoryValue += product.price * product.quantity;

    return summary;
}, {
    totalProducts: 0,
    totalQuantity: 0,
    totalInventoryValue: 0
});

console.log('Product Summery ', productSummary);


// ---



// ---

// ## Quick Syntax Reference

// ### Sort: Low to High

// ```
// products.sort((a, b) => a.price - b.price);
// ```

// ### Sort: High to Low

// ```
// products.sort((a, b) => b.price - a.price);
// ```

// ### Reduce: Calculate a Total

// ```
// products.reduce((sum, product) => sum + product.price, 0);
// ```

// ### Preserve the Original Array

// ```
// [...products].sort((a, b) => a.price - b.price);
// ```

// ---

// ## Practice Tips

// - Use arrow functions wherever possible.
// - Understand the accumulator in `reduce()`.
// - Remember that `sort()` modifies the original array.
// - Test your output using `console.log()`.