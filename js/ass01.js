// Proizvodi
let product1 = {
  id: "001",
  name: "Apex Pro Gaming Desktop - RTX 4090",
  price: 3499,
  quantity: 4,
  category: "titanforce",
};

let product2 = {
  id: "002",
  name: "Storm X Gaming Tower - RTX 4080 Super",
  price: 2549,
  quantity: 5,
  category: "electrobuild",
};

let product3 = {
  id: "003",
  name: "NeonStrike Phantom Gaming PC",
  price: 1899,
  quantity: 9,
  category: "neonstrike",
};

// Korisnik
let user1 = {
  username: "dragan123",
  email: "jerkovixdragan@gmail.com",
  isLoggedIn: true,
};

// Korpa
let cart = {
  items: [],
  totalPrice: 0,
};

// Niz proizvoda
let products = [product1, product2, product3];

// Funkcija za provjeru kolicine proizvoda u korpi i na stanju
function isInStock(product, qty) {
  return product.quantity >= qty;
}

// console.log(isInStock(product1, 3));
// console.log(isInStock(product2, 10));
// console.log(isInStock(product1, 4));
// console.log(isInStock(product1, 0));
// console.log(isInStock(product1, -4));
// console.log(isInStock(product1, 111))

function add