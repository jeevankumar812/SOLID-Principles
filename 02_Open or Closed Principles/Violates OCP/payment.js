class Payment {
    pay(method) {
        if (method === "credit") {
            console.log("Paid using Credit Card");
        } else if (method === "upi") {
            console.log("Paid using UPI");
        }
    }
}

const payment = new Payment();
payment.pay("upi");