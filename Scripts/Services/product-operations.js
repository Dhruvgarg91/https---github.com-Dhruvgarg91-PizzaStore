// Products CRUD Operation
// C - Create  , R  - Read, U - Update , D - Delete
import Product from "../Models/product.js";
import doNetworkCall from "./api-client.js";
export default async function readAllProducts() {
  try {
    const obj = await doNetworkCall();
    const pizzas = obj["Vegetarian"];
    const pizzaArray = pizzas.map((pizza) => {
      const pizzaObject = new Product(
        pizza.id,
        pizza.name,
        pizza.price,
        pizza.url
      );
      return pizzaObject;
    });
    return pizzaArray;
  } catch (err) {
    throw err;
  }
}
