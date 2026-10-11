const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

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






























