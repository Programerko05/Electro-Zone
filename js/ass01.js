// Proizvodi
let product1 = {
  id: 1,
  name: "Apex Pro Gaming Desktop - RTX 4090",
  price: 3499,
  quantity: 4,
  category: "titanforce",
};

let product2 = {
  id: 2,
  name: "Storm X Gaming Tower - RTX 4080 Super",
  price: 2549,
  quantity: 5,
  category: "electrobuild",
};

let product3 = {
  id: 3,
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

// Funkcija za dodavanje proizvoda u korpu
function addToCart(cart, product, qty) {
  let found = false;

  if (qty <= 0) {
    console.log("Kolicina proizvoda mora biti veca od 0!");
    return;
  }
  // Provjera da li ima proizvoda na stanju
  if (!isInStock(product, qty)) {
    // Ukoliko nema ispis u koznoli da nema dovoljno proizvoda na stanju
    console.log(`Nema dovoljno proizvoda ${product.name} na stanju!`);
  } else {
    // Ukoliko ima, samnjujemo kolicinu proizoda na stanju za kolicinu koja je dodata u korpu
    product.quantity -= qty;

    // Prolazimo kroz sve proizvode u korpi i provjeravamo da li je proizvod vec dodat u korpu
    cart.items.forEach((item) => {
      if (item.id === product.id) {
        found = true;
        // Ukoliko je proizvod vec dodat, povecavamo kolicinu proizvoda u korpi za kolicinu koja je dodata
        item.quantity += qty;
      }
    });

    if (!found) {
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: qty,
      });
    }
  }

  // Azuriranje ukupne cijene proizvoda u korpi
  cart.totalPrice = calculateTotal(cart);
}

// Funkciaj za izracunavanje ukupne cijene proizvoda u korpi
function calculateTotal(cart) {
  let total = 0;
  cart.items.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

// Funckija za uklanjanje proizvoda iz korpe
function removeFromCart(cart, productId) {
  let inCart = false;

  // Prolazimo kroz sve proizvode u korpi i provjeravamo da li je proizvod sa datim ID-om u njoj.
  cart.items.forEach((item, index) => {
    if (item.id === productId) {
      // Ukoliko jeste psotavljamo inCart na true i povecavamo kolicinu proizvoda na stanju za kolicniu koja je uklonjena iz korpe.
      inCart = true;

      products.forEach((product) => {
        if (product.id === productId) {
          product.quantity += item.quantity;
        }
      });

      // Uklanjamo proizvod iz korpe i azuriramo ukupnu cijenu prozvoda u korpi.
      cart.items.splice(index, 1);
      cart.totalPrice = calculateTotal(cart);
    }
  });

  // Ukoliko proizvod nije u korpi, ispisujemo poruku u konzoli
  if (!inCart) {
    console.log(`Proizvod sa ID ${productId} nije u korpi!`);
  }
}

// Funkcija za filtriranje proizvoda po cijeni
const getCheapProducts = (products, limit) => {
  return products.filter((product) => product.price < limit);
};

// Funkcija za filtriranje proizvoda po kategoriji
const getProductsByCategory = function (products, category) {
  return products.filter(function (p) {
    return p.category === category;
  });
};

// TESTIRANJE FUNKCIJA

// Funkcija calculateTotal
console.log("Funkcija caluculateTotal");
console.log("Slucaj kada je korpa prazna");
console.log(calculateTotal(cart));

// funkcija isInStock
console.log("Funkcija isInStock");
console.log(isInStock(product1, 3));
console.log(isInStock(product2, 10));
console.log(isInStock(product1, 4));
console.log(isInStock(product1, 0));
console.log(isInStock(product1, -4));
console.log(isInStock(product1, 111));

// funkcija addToCart
console.log("1. Dodavanje jednog proizvoda u korpu!");
console.log("Prije dodavanja proizvoda u korpi: ", cart);
console.log("Prije dodavanja broj proivoda na stanju: ", product1);

addToCart(cart, product1, 2);
console.log(
  "Testiranje funkcije calculateTotal nakon dodavanja proizvoda u korpu",
);
console.log(calculateTotal(cart));

console.log("Nakon dodavanja proizvoda u korpi: ", cart);
console.log("Nakon dodavanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("2. Dodavanje proizvoda kog nema dovoljno na stanju.");
console.log("Prije dodavanja proizvoda u korpi: ", cart);
console.log("Prije dodavanja broj proivoda na stanju: ", product1);

addToCart(cart, product1, 15);

console.log("Nakon dodavanja proizvoda u korpi: ", cart);
console.log("Nakon dodavanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("3. Dodavanje proizvoda koji je vec u korpi");
console.log("Prije dodavanja proizvoda u korpi: ", cart);
console.log("Prije dodavanja broj proivoda na stanju: ", product1);

addToCart(cart, product1, 1);

console.log("Nakon dodavanja proizvoda u korpi: ", cart);
console.log("Nakon dodavanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("4. Kolicina koju doadajemo je 0");
console.log("Prije dodavanja proizvoda u korpi: ", cart);
console.log("Prije dodavanja broj proivoda na stanju: ", product1);

addToCart(cart, product1, 0);

console.log("Nakon dodavanja proizvoda u korpi: ", cart);
console.log("Nakon dodavanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("5. Kolicina koju doadajemo je negativna");
console.log("Prije dodavanja proizvoda u korpi: ", cart);
console.log("Prije dodavanja broj proivoda na stanju: ", product1);

addToCart(cart, product1, -1);

console.log("Nakon dodavanja proizvoda u korpi: ", cart);
console.log("Nakon dodavanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

// funkcija removeFromCart

console.log("Funkcija RemoveFromCart");
console.log("1. Uklanjanje postojeceg proizvoda");
console.log("Prije uklanjanja proizvoda u korpi: ", cart);
console.log("Prije uklanjanja broj proivoda na stanju: ", product1);

removeFromCart(cart, product1.id);

console.log("Nakon uklanjanja proizvoda u korpi: ", cart);
console.log("Nakon uklanjanja ostalo je proizvoda na stanju: ", product1);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("2. Uklanjane proizvoda koji ne postoji u korpi");
console.log("Prije uklanjanja proizvoda u korpi: ", cart);
console.log("Prije uklanjanja broj proivoda na stanju: ", product1);

removeFromCart(cart, product3.id);

console.log("Nakon uklanjanja proizvoda u korpi: ", cart);
console.log("Nakon uklanjanja ostalo je proizvoda na stanju: ", product3);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

console.log("3. Uklanjane proizvoda u praznoj korpi");
// Postavljanje korpe na prazan niz
cart.items = [];
console.log("Prije uklanjanja proizvoda u korpi: ", cart);
console.log("Prije uklanjanja broj proivoda na stanju: ", product1);

removeFromCart(cart, product3.id);

console.log("Nakon uklanjanja proizvoda u korpi: ", cart);
console.log("Nakon uklanjanja ostalo je proizvoda na stanju: ", product3);
console.log("Ukupna cijena korpe: ", cart.totalPrice);

// FUNKCIJA getCheapProducts
console.log("Funkcija getCheapProducts");
console.log(getCheapProducts(products, 5000));
console.log(getCheapProducts(products, 1000));

// Funkcija getProductsByCategory
console.log("Funkcija getProductsByCategory");
console.log(getProductsByCategory(products, "titanforce"));
// Nema kategorije vraca prazan niz
console.log(getProductsByCategory(products, "apple"));
