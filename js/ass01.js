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

// Funkcija za dodavanje proizvoda u korpu
function addToCart(cart, product, qty) {
  // Provjera da li ima proizvoda na stanju
  if (!isInStock(product, qty)) {
    // Ukoliko nema ispis u koznoli da nema dovoljno proizvoda na stanju
    console.log(`Nema dovoljno proizvoda ${product.name} na stanju!`);
  } else {
    // Ukoliko ima, samnjujemo kolicinu proizoda na stanju za kolicinu koja je dodata u korpu
    product.quantity -= qty;

    // Prolazimo kroz sve proizvode u korpi i provjeravamo da li je proizvod vec dodat u korpu
    cart.items.ForEach((item) => {
      if (item.id === product.id) {
        // Ukoliko je proizvod vec dodat, povecavamo kolicinu proizvoda u korpi za kolicinu koja je dodata
        item.quantity += qty;
      } else {
        // Ukoliko proizvod nije dodat u korpu, dodajemo ga
        cart.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: qty,
        });
      }
    });
  }
}
