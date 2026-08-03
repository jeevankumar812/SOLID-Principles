import VegMenu from "./VegMenu.js";

export default class VegetarianCustomer extends VegMenu {
    order() {
        this.showVegMenu();
        console.log("Vegetarian customer placed the order.");
    }
}