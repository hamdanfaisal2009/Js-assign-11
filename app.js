const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

//========================== Sort Questions ====================

// 1 Sort products by price (low to high).

// products.sort((a, b) => a.price - b.price);
// console.log(products);

// 2 Sort products by price (high to low).

// products.sort((a, b) => b.price - a.price);
// console.log(products);

// 3 Sort products by name (A to Z).

// products.sort((a, b) => a.name.localeCompare(b.name));
// console.log(products);

// 4 Sort products by rating (highest first).

// products.sort((a, b) => b.rating - a.rating )
// console.log(products);

// 5 Sort products by quantity (lowest to highest).

// products.sort((a, b) => a.quantity - b.quantity )
// console.log(products);

// 6 Find the top 3 highest-price products using sort() and slice().

// const demandedProducts = products.sort((a,b) => b.price - a.price ).slice(0 , 3)
// console.log(demandedProducts);

// 7 Find the 2 cheapest products using sort() and slice().

// const demandedProducts = products.sort((a,b) => a.price - b.price ).slice(0 , 2)
// console.log(demandedProducts);

// 8 Find products below Rs. 10,000 and then sort by price.

// const under10k = products.filter(product => product.price < 10000).sort((a,b) => a.price - b.price );
// console.log(under10k);

// 9 Find the top 3 highest-ratede products using sort() and slice().

// const demandedProducts = products.sort((a,b) => b.rating - a.rating ).slice(0 , 3)
// console.log(demandedProducts);

// 10 Sort products by rating (highest first). If ratings are equal, sort by price (low to high).

// const sortedProducts = products.sort((a, b) => {
//     if (b.rating !== a.rating) {
//         return b.rating - a.rating;
//     }
//     return a.price - b.price;
// });

// console.log(products);

// ========================= Reduce Questions =========================

// 1 Calculate the total price of all products.

// const sumOfprice = products.reduce((sum, product) => sum + product.price, 0);
// console.log(sumOfprice);

// 2 Calculate the total quantity of all products.

// const sumOfquantity = products.reduce((sum, product) => sum + product.quantity, 0);
// console.log(sumOfquantity);

// 3 Calculate the average price of all products.

// const totalPrice = products.reduce((sum, current) => sum + current.price, 0);
// const averagePrice = totalPrice / products.length;
// console.log(averagePrice);

// 4 Find the most expensive product using reduce().

// const expensiveProduct =  products.reduce((max , product) => {
//     return product.price > max.price ? product : max;
// }) ;
// console.log(expensiveProduct);

// 5 Find the most cheapest product using reduce().

// const cheapestProduct =  products.reduce((max , product) => {
//     return product.price < max.price ? product : max;
// }) ;
// console.log(cheapestProduct);

// 6 Find the highest-rated product using reduce().

// const highratedProduct =  products.reduce((max , product) => {
//     return product.rating > max.rating ? product : max;
// }) ;
// console.log(highratedProduct);

// 7 Count how many products have a price greater than Rs. 5,000.

// const expensiveProductsCount = products.reduce((count, product) => {
//     return product.price > 5000 ? count + 1 : count;
// }, 0);
// console.log(expensiveProductsCount)

// 8 Calculate the total inventory value using price * quantity.

// const totalValue = products.reduce((accumulator, product) => {
//     return accumulator + (product.price * product.quantity);
// }, 0);
// console.log(totalValue);

// 9 Calculate the total quantity of products with a rating above 4.3.

// const totalQuantity = products.filter(product => product.rating > 4.3).reduce((sum, product) => sum + product.quantity, 0);
// console.log(totalQuantity);

// 10 Use one `reduce()` to create an object containing:
//  Total number of products
//  Total quantity
//  Total inventory value

const inventoryMetrics = products.reduce((acc, product) => {
    acc.totalProducts += 1;
    acc.totalQuantity += product.quantity;
    acc.totalInventoryValue += product.price * product.quantity;

    return acc;
},{
    totalProducts: 0, totalQuantity: 0, totalInventoryValue: 0 
});
console.log(inventoryMetrics);

