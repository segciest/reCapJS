// index.js
import { getData } from "../services/fetchAPI.js";
let arrProduct = [];
const fetchData = async () => {
  try {
    arrProduct = await getData();
    console.log(arrProduct);
    renderProduct(arrProduct);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
fetchData();

// render product
const renderProduct = async (arrProduct) => {
  let content = "";
  arrProduct.map((item, index) => {
    if (item.name != "string") {
      content += `
    <div class="productItem rounded">
          <!-- img -->
          <div class="productImg">
            <img src="${item.image}" alt="" />
          </div>
          <h3 class="productName">${item.name}</h3>
          <div class="productMore">
            <div class="buy">
              <button class="buyNowBtn btn py-2 bg-green-300 hover:bg-green-400">
                <a target="_blank" href="./detail.html?idSanPham=${item.id}">Detail</a>
              </button>
            </div>
            <div class="price">
              <p>$${item.price}</p>
            </div>
          </div>
    </div>
    `;
    }
  });
  console.log(content);
  document.querySelector(".product-container").innerHTML = content;
};
