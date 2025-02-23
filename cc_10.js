//Task 1
console.log("Task 1");

class Product {
    constructor(name, id, price, stock) {
        this.name = name,
        this.id = id,
        this.price = price,
        this.stock = stock
    }
    //getDetails method
    getDetails(){
        return `Name: ${this.name}, Product ID: ${this.id}, Price: $${this.price}, Stock Number: ${this.stock}`
    }
    //New update method
    updateStock(quantity){
        return this.stock = this.stock - quantity//changing the stock by quantity
    }
}
//Laptop Product
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails())

prod1.updateStock(3); //removing 3 stocks from a 10 stocks
console.log(prod1.getDetails())

//task 2
console.log("Task 2");

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId,
        this.product = product,
        this.quantity = quantity,
        this.totalPrice = product.price * quantity 
        product.updateStock(quantity)  //Goes back to product class to update stock
    }
    //Again an details method
    getOrderDetails(){
        return `OrderId: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity} Total Price: $${this.totalPrice}`
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

//Task 3 
console.log("Task 3");
class Inventory {
    constructor(products) {
        this.products = []; //using a empty array
    }
    addProduct(product) {
        return this.products.push(product);//Pushing a new product to the array
    }
    listProducts() {
        return this.products.forEach(product => console.log(product.getDetails()));
    }
}
//Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"