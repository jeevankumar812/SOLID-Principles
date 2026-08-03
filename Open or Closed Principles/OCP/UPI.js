import PaymentMethod from "./PaymentMethod.js";

export default class UPI extends PaymentMethod {
    pay() {
        console.log("Paid using UPI");
    }
}