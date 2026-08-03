import VegetarianCustomer from "./VegetarianCustomer.js";
import NonVegetarianCustomer from "./NonVegetarianCustomer.js";

const vegCustomer = new VegetarianCustomer();
vegCustomer.order();

console.log("----------------");

const nonVegCustomer = new NonVegetarianCustomer();
nonVegCustomer.order();