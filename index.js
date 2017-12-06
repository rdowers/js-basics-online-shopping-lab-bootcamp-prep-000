var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function genPrice() {
  var n;
  n = Math.floor(Math.random() * 100);
  return n;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
 cart.push({[item]: genPrice()});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    //stuff for 1 entry goes here. "In your cart, you have item1 at $n." (This part works.)
    var response
      for (var i=0; i < cart.length; i++) {
          var currentPair = cart[i]; // this gives us {chicken: 10}
          var currentItem = Object.keys(currentPair)[0]; // this gives us "chicken"
          var currentPrice = currentPair[currentItem]; // get the value
          response = `${currentItem} at $${currentPrice}`;
        }
    console.log(`In your cart, you have ${response}.`);
  } else if (cart.length === 2) {
    //stuff for 2 entries goes here. "In your cart, you have item1 at $x and item2 at $y." (This works.)
    var response_two = "In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[1])[0]]+ ".";
      
    console.log(response_two);
  } else {
    //stuff for 3+ entries goes here. "In your cart, you have item1 at $x, item2 at $y, item3 at $z, and item4 at $a." This passes.
    var lastList = Object.keys(cart[cart.length-1])[0] + " at $" + cart[cart.length-1][Object.keys(cart[cart.length-1])[0]];
    var firstList="";
    for (i = 0; i < cart.length-1; i++) {
    firstList +=  Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ", "
    }
    console.log("In your cart, you have " + firstList + "and " + lastList + ".");
  }
}

// total() passes.

function total() {
  var totalPrice = 0;
    for (var i=0; i < cart.length; i++) {
      var currentPair = cart[i]; // this gives us {chicken: 10}
      var currentItem = Object.keys(currentPair)[0]; // this gives us "chicken"
      var currentPrice = currentPair[currentItem]; // get the value
      totalPrice = totalPrice + currentPrice;
    }
    return totalPrice;
  }

function removeFromCart(item) {
  // // 4. The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
  //   + If the cart does not contain a matching item, the function should print out `That item is not in your cart.` and return the unchanged cart.
  //   + If the item *is* present in the cart, the function should remove the object from the cart and then return the updated cart.
  //   + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter, then remove it if it matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.
  //Code goes here.
  // okay, so cart is an array of objects. iterate over the array, and each time test for hasOwnProperty("beef") or whatever, and if it passes, splice it out.
  
  for (i = 0; i < cart.length; i++) {
    
  }
  
  
}

function placeOrder(cardNumber) {
// 5. The `placeOrder()` function accepts one argument, a credit card number.
//     + If no argument is received, the function should print out `Sorry, we don't have a credit card on file for you.`.
//     + If a card number is received, the function should print out `Your total cost is $71, which will be charged to the card 83296759.` (where `71` is the value returned by `total()` and `83296759` is the credit card number passed to `placeOrder()`). Then, it should empty the `cart` array.
//     Code goes here.


}
