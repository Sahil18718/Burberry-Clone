class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    checkout(paymentMethod) {
      const total = this.calculateTotal();
      console.log(`Total amount: $${total.toFixed(2)}`);
      console.log(`Payment method: ${paymentMethod}`);
      console.log('Order placed successfully!');
    }
  }
  
  const products = [
    new Product('T-shirt', 15.99),
    new Product('Jeans', 29.99),
    new Product('Shoes', 49.99),
    new Product('Hat', 9.99),
    // Add more products as needed
  ];
  
  const cart = new ShoppingCart();
  
  cart.addItem(products[0], 2);
  cart.addItem(products[2], 1);
  
  console.log('Items in cart:');
  for (const item of cart.items) {
    console.log(`${item.product.name} - Quantity: ${item.quantity}`);
  }
  
  const paymentMethod = 'Credit Card';
  cart.checkout(paymentMethod);
  