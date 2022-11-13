const prdName = document.querySelector("#productName");
const prdPrice = document.querySelector("#productPrice");
const prdImg1 = document.querySelector("#productImg1");
const prdImg2 = document.querySelector("#productImg2");
const prdImg3 = document.querySelector("#productImg3");
const prdImg4 = document.querySelector("#productImg4");
function loadDetailPage(lsData) {
  prdName.innerText = lsData.name;
  prdPrice.innerText = `₹${lsData.discountPrice} Inclusive of all taxes`;
  prdImg1.setAttribute("src", lsData.imgUrl);
  prdImg2.setAttribute("src", lsData.imgUrl);
  prdImg3.setAttribute("src", lsData.imgUrl);
  prdImg4.setAttribute("src", lsData.imgUrl);
}

window.onload = function () {
  const lsData = JSON.parse(localStorage.getItem("productDetail")) || {};
  if (lsData !== {}) {
    loadDetailPage(lsData);
  }
};

const addCartBtn = document.addEventListener("click", () => {
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const dataToAdd = JSON.parse(localStorage.getItem("productDetail")) || {};
  cartData.push(dataToAdd);
  localStorage.setItem("cartData", JSON.stringify(cartData));
});
