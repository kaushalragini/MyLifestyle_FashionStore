function displayData(data, totalCost) {
  const cartDiv = document.querySelector("#cartData");
  cartDiv.innerHtml = "";
  data.forEach((ele, i) => {
    let mainDiv = document.createElement("div");
    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "rightdivc");
    let itemImg = document.createElement("img");
    // let btn = document.createElement("button");
    // btn.innerText = "ADD TO CART";
    // btn.setAttribute("class", "prctBtn");
    // btn.style.cursor = "pointer";
    // btn.addEventListener("click", () => {
    //   const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    //   cartData.push(ele);
    //   localStorage.setItem("cartData", JSON.stringify(cartData));
    // });
    let mainInner = document.createElement("div");
    mainInner.setAttribute("class", "maiInner");

    let innerDiv1 = document.createElement("div");

    innerDiv1.innerText = "";
    // innerDiv1.append(prdImg);
    // innerDiv1.append(selectTag);

    let innerDiv2 = document.createElement("div");

    itemImg.setAttribute("src", ele.imgUrl);
    itemImg.setAttribute("class", "productImg");
    itemImg.style.cursor = "pointer";
    itemImg.addEventListener("click", () => {
      localStorage.setItem("productDetail", JSON.stringify(ele));
      window.location.href = "detail.html";
    });
    const name = document.createElement("p");
    name.innerText = ele.name;
    const price = document.createElement("p");
    price.innerText = `₹ ${ele.discountPrice}`;
    mainDiv.append(itemImg, name, price);
    cartDiv.append(mainDiv, rightDiv);
  });
}

window.onload = function () {
  let totalCost = 0;
  const lsData = JSON.parse(localStorage.getItem("cartData"));
  lsData.forEach((ele, i) => {
    let amount = Number(parseFloat(ele.discountPrice.replace(/,/g, "")));
    totalCost = totalCost + amount;
  });
  const mrp = document.querySelector("#totalMrp");
  mrp.innerText = `Total MRP: ${totalCost}`;
  displayData(lsData, totalCost);
};
