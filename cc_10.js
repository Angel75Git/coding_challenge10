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