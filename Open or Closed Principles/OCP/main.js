import CreditCard from "./CreditCard.js";
import UPI from "./UPI.js";
import PayPal from "./PayPal.js";

const payment1 = new CreditCard();
payment1.pay();

const payment2 = new UPI();
payment2.pay();

const payment3 = new PayPal();
payment3.pay();