import PaymentMethod from "./PaymentMethod.js";

export default class PayPal extends PaymentMethod {
    pay() {
        console.log("Paid using PayPal");
    }
}