class Order {
    constructor(items) {
        this.items = items;
    }

    calculateTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    saveToDatabase() {
        console.log("Saving order to database...");
    }

    sendConfirmationEmail() {
        console.log("Sending confirmation email...");
    }
}

const order = new Order([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 }
]);

console.log(order.calculateTotal());
order.saveToDatabase();
order.sendConfirmationEmail();