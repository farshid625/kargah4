const products = [
  {
    id: 1,
    name: "تی شرت",
    description:
      "تی شرت از جنس پنبه مناسب فصل تابستان که بسیار می تواند شما را زیبا جلوه دهد",
    price: 10,
    img: "./images/51ulmT3YUZL._AC_UY1000_.jpg",
  },
  {
    id: 2,
    name: "هودی",
    description:
      "هودی زمستانی یک انتخاب عالی است.چرا که شما را نه تنها در برابر سرما محفوظ می کند بلکه ظاهری زیبا به شما می بخشد",
    price: 20,
    img: "./images/6abcdbfa82c04b7388dd85f1c6d22c4c.jpg",
  },
  {
    id: 3,
    name: "شال گردن",
    description:
      "شال گردن شیک که می تواند در فصل زمستان آن را بپوشید تا متمایز جلوه کنید.",
    price: 30,
    img: "./images/81oFNdLRGuL._AC_UL1500_.jpg",
  },
  {
    id: 4,
    name: "شلوار",
    description:
      "هم در مجالس و هم در محیط کار می توانید این شلوار را بپوشید.بدون شک شما را در بین اطرافیانتان به شخصی شیک پوش بدل می کند",
    price: 30,
    img: "./images/sp-pgm-dc-11 (1).jpg",
  },
  // Add more products as needed
];

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.slice(1);
  const pairs = queryString.split("&");
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value || "");
  }
  return params;
}

const queryParams = getQueryParams();
const productId = queryParams.productId;

const product = products.find((product) => product.id == productId);

const productContainer = document.getElementById("product-container");
const divContainer = document.createElement("div");

divContainer.innerHTML = `
  <div class="product-img">
    <img src=${product.img}>
  </div>
  <div class="info-container">
    <h1>${product.name}</h1>
    <h3>${product.description}</h3>
    <h4>${product.price}قیمت:‌دلار</h4>
  </div>
`;

productContainer.appendChild(divContainer);
