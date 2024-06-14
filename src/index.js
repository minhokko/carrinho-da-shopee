import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];
 
console.log("Bem vindo ao carrinho da shopee!");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", 58.99, 2);
const item2 = await createItem("hotwheels lamborghini", 57.99, 3);

//Adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

//deletei dois itens do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);

