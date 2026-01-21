// shopping-cart.js

// Initialize the cart if it doesn't exist in localStorage
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  
  const shoppingCart = {
    // Add an item to the cart
    addItem: function(itemName, itemPrice) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push({ name: itemName, price: itemPrice });
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    
    // Remove an item from the cart (by index)
    removeItem: function(index) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    
    // Get the items in the cart
    getItems: function() {
      return JSON.parse(localStorage.getItem('cart'));
    },
    
    // Clear the cart
    clearCart: function() {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };
  
  // Export the shoppingCart object to make it accessible in other scripts
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = shoppingCart;
  }
  