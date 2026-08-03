// VegetarianCustomer.js
class VegetarianCustomer extends RestaurantMenu {
    vegMenu() {
        console.log("Ordering Paneer Butter Masala");
    }

    nonVegMenu() {
        throw new Error("I don't eat Non-Veg");
    }

    drinksMenu() {
        throw new Error("Not Interested");
    }

    sweetsMenu() {
        throw new Error("Not Interested");
    }
}

const customer = new VegetarianCustomer();

customer.vegMenu();
customer.nonVegMenu();   // ❌ Error