import PaymentMethod from "./PaymentMethod.js";

export default class CreditCard extends PaymentMethod {
    pay() {
        console.log("Paid using Credit Card");
    }
}