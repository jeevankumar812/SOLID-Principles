import NonVegMenu from "./NonVegMenu.js";
import DrinksMenu from "./DrinksMenu.js";

export default class NonVegetarianCustomer {
    constructor() {
        this.nonVeg = new NonVegMenu();
        this.drinks = new DrinksMenu();
    }

    order() {
        this.nonVeg.showNonVegMenu();
        this.drinks.showDrinksMenu();
        console.log("Non-Vegetarian customer placed the order.");
    }
}