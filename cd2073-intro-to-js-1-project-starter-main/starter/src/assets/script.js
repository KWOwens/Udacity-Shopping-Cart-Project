/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

// Products array
const products = [
	{
		name: "Cherry",
		price: 5.5,
		quantity: 0,
		productId: 24300,
		image: "./images/cherry.jpg",
	},
	{
		name: "Orange",
		price: 1.5,
		quantity: 0,
		productId: 67200,
		image: "./images/orange.jpg",
	},
	{
		name: "Strawberry",
		price: 3.0,
		quantity: 0,
		productId: 78700,
		image: "./images/strawberry.jpg",
	},
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

// empty cart array
let cart = [];

// helper functions
let totalPaid = 0;

function getProductByIdFromList(productId, productList) {
	return productList.find((product) => product.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

//adds product to cart
function addProductToCart(productId) {
	let cartItem = getProductByIdFromList(productId, cart); //uses helper function
	if (cartItem) {
		cartItem.quantity += 1;
		return cart;
	}
	//If not in cart, get product
	let product = getProductByIdFromList(productId, products); //uses helper function

	if (product) {
		product.quantity = 1;
		cart.push(product);
	}
	return cart;
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

//increases product in cart
function increaseQuantity(productId) {
	let cartItem = getProductByIdFromList(productId, cart); //uses helper function

	if (cartItem) {
		cartItem.quantity += 1;
	}

	return cart;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

//decreases product in cart
function decreaseQuantity(productId) {
	let cartItem = getProductByIdFromList(productId, cart);

	if (cartItem) {
		cartItem.quantity -= 1;
		if (cartItem.quantity === 0) {
			let index = cart.findIndex((item) => item.productId === productId);
			cart.splice(index, 1);
		}
	}
	return cart;
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

//removes product from cart
function removeProductFromCart(productId) {
	let index = cart.findIndex((item) => item.productId === productId);
	if (index !== -1) {
		cart.splice(index, 1);
	}
	return cart;
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

// calculates cart total
function cartTotal() {
	let total = 0;

	cart.forEach((item) => {
		total += item.price * item.quantity;
	});

	return total;
}

/* Create a function called emptyCart that empties the products from the cart */

// empties cart
function emptyCart() {
	cart = [];
	remainingBalance = 0;
	return cart;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

// calculates balance due and amount paid
function pay(amount) {
	let amountPaid = Number(amount);
	let cartAmount = Number(cartTotal());

	totalPaid += amountPaid;

	if (totalPaid >= cartAmount) {
		let change = totalPaid - cartAmount;
		emptyCart();
		totalPaid = 0;
		return change;
	}
	let stillOwed = cartAmount - totalPaid;
	return -stillOwed;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
	products,
	cart,
	addProductToCart,
	increaseQuantity,
	decreaseQuantity,
	removeProductFromCart,
	cartTotal,
	pay,
	emptyCart,
	/* Uncomment the following line if completing the currency converter bonus */
	// currency
};
