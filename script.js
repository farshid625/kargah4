document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn")) {
    showMainPage();
  }
  loadProducts();
});

const products = [
  {
    id: 1,
    name: "تی شرت",
    description: "تی شرت از جنس پنبه",
    price: 10,
    img: "./images/51ulmT3YUZL._AC_UY1000_.jpg",
  },
  {
    id: 2,
    name: "هودی",
    description: "هودی زمستانی",
    price: 20,
    img: "./images/6abcdbfa82c04b7388dd85f1c6d22c4c.jpg",
  },
  {
    id: 3,
    name: "شال گردن",
    description: "شال گردن شیک",
    price: 30,
    img: "./images/81oFNdLRGuL._AC_UL1500_.jpg",
  },
  {
    id: 4,
    name: "شلوار",
    description: "شلوار مردانه",
    price: 30,
    img: "./images/sp-pgm-dc-11 (1).jpg",
  },
  // Add more products as needed
];

const users = [
  {
    userName: "Hesam",
    password: "Khedri",
  },
  {
    userName: "Ali",
    password: "password",
  },
  {
    userName: "Farshid",
    password: "life",
  },
];

document.getElementById("toggleIcon").addEventListener("click", function (e) {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.textContent = "🙈"; // Change the icon to "hide" icon
  } else {
    passwordField.type = "password";
    toggleIcon.textContent = "👁️"; // Change the icon to "show" icon
  }
});

const cart = [];

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", login);

function login(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  let flag = false;
  users.find((user) => {
    if (username == user.userName && password == user.password) {
      flag = true;
      return;
    }
  });

  if (flag) {
    localStorage.setItem("loggedIn", "true");
    showMainPage();
  } else {
    error.style.display = "block";
  }
}

function showMainPage() {
  document.getElementById("login-container").classList.remove("active");
  document.getElementById("main-container").classList.add("active");
}

// {
//    <button id="product-button" onclick="addToCart(${product.id})">افزودن به سبد خرید</button>
// }

function loadProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <a href='./product.html?productId=${product.id}'>مشاهده جزییات</a>

      `;
    const productButton = document.createElement("button");
    productButton.id = "product-button";
    productButton.innerHTML = "افزودن به سبد خرید";
    productButton.addEventListener("click", () => {
      addToCart(product.id);
    });

    productElement.appendChild(productButton);
    container.appendChild(productElement);
  });
}

function addToCart(productId) {
  console.log(productId);
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

{
  /* <button onclick="removeFromCart(${index})">حذف</button> */
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
          <span>${item.name} - $${item.price}</span>
      `;
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "حذف";
    removeButton.addEventListener("click", () => {
      removeFromCart(index);
    });

    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);
  });
  document.getElementById("cart-total").innerText = `Total: $${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function filterProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <button onclick="addToCart(${product.id})">افزودن به سبد خرید</button>
      `;
    container.appendChild(productElement);
  });
}

function checkout() {
  alert("Checkout functionality not implemented yet.");
}
