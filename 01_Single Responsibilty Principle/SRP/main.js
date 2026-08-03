import Order from "./Order.js";
import OrderRepository from "./OrderRepository.js";
import EmailService from "./EmailService.js";

const items = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 }
];

const order = new Order(items);

console.log("Total:", order.calculateTotal());

const repository = new OrderRepository();
repository.save(order);

const emailService = new EmailService();
emailService.sendConfirmation(order);