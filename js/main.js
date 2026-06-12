let iznos = 0;
// Product 1
const PRODUCT1_NAME = "Apex Pro Gaming Desktop - RTX 4090";
const PRODUCT1_PRICE = 3499;
const PRODUCT1_QTY = 3;

// Product 2
const PRODUCT2_NAME = "Storm X Gaming Tower - RTX 4080 Super";
const PRODUCT2_PRICE = 2549;
const PRODUCT2_QTY = 4;

// Ostale konstante
const VAT_RATE = 0.2;
const CURRENCY = "USD";
const USD_PER_EUR = 1.16;

// Kupon
const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

// Asocijativni niz sa svim proizvodima
const ALL_PRODUCTS = [
  { name: "Apex Pro Gaming Desktop - RTX 4090", price: 3499, qty: 5 },
  { name: "Aurora RGB Pro - RX 7900 XTX ", price: 2199, qty: 8 },
  { name: "Storm X Gaming Tower - RTX 4080 Super", price: 2549, qty: 7 },
  { name: "NeonStrike Phantom Gaming PC ", price: 1899, qty: 2 },
  { name: "Compact ITX Gaming - RTX 4060 Ti ", price: 1199, qty: 4 },
  { name: "Hydra Custom Loop - RTX 4090", price: 4999, qty: 14 },
];
// Provjera tipova
console.log(typeof PRODUCT1_NAME); //string
console.log(typeof PRODUCT1_PRICE); //number
console.log(typeof PRODUCT1_QTY); //number
console.log(typeof VAT_RATE); // number
console.log(typeof CURRENCY); //string
console.log(typeof USD_PER_EUR); //number

// Funkcija normalize
function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

// Validacija kupona
function validateAndNotify() {
  const USER_INPUT_COUPON = document.getElementById("promo-input").value;

  const normalizedCode = normalizeCoupon(USER_INPUT_COUPON);

  if (isValidCoupon(normalizedCode) === true && normalizedCode === "SAVE10") {
    alert("Vaš kupon donosi 10% popusta.");
  } else if (
    isValidCoupon(normalizedCode) === true &&
    normalizedCode === "SAVE15"
  ) {
    alert("Vaš kupon donosi 15% popusta.");
  } else if (
    isValidCoupon(normalizedCode) === true &&
    normalizedCode === "FREESHIP"
  ) {
    alert("Vaš kupon donosi besplatnu dostavu");
  } else {
    alert("Kupon nije važeći");
  }
}

// Logovanje korisnika
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const normalizedEmail = email.trim();
  const normalizedPassword = password.trim();

  if (normalizedEmail === "admin" && normalizedPassword === "admin") {
    alert("Uspjesno logovanje");
    return true;
  } else {
    alert("Pogresan email ili lozinka.");
    return false;
  }
}

// Pracenje ukupnog iznosa kupovine
function dodajNaIznos(cena) {
  iznos += cena;

  console.log("Iznos ukupne korpe je $" + iznos);
}

// dodajNaIznos(100);
// dodajNaIznos(50);
// dodajNaIznos(25);

// Prikaz ukupnog iznosa preko ikone korpe
function openCart() {
  alert("Ukupni iznos porudzbine je $" + iznos);
}

// funkcija za provjeru da li je kupon u nizi
function isValidCoupon(code) {
  return VALID_COUPONS.includes(code);
}

// Ukupna vriejdnost proizvoda
function calculateTotalValue() {
  let totalvalue = 0;

  for (const product of ALL_PRODUCTS) {
    totalvalue += product.price * product.qty;
  }

  console.log("Ukupna vrijednost lagera je $" + totalvalue);
}

calculateTotalValue();

// Niz sa proizvodiam ciji je lager manji od 10
const lowStock = ALL_PRODUCTS.filter(chechLowStock);

function chechLowStock(product) {
  return product.qty < 10;
}

console.log(lowStock);

// Pretraga proizvoda po imenu
function findProductByName(list, search) {
  for (let product of list) {
    if (product.name.toLowerCase() === search.toLowerCase()) {
      return product;
    }
  }
  return null;
}

console.log(
  findProductByName(ALL_PRODUCTS, "Storm X Gaming Tower - RTX 4080 Super"),
);
