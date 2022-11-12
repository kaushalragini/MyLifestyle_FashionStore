const data = [
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
  {
    name: "BOSSINI Men Printed Crew Neck",
    type: "T-shirt",
    originalPrice: 699,
    discountPrice: 499,
    imgUrl:
      "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
    discount: 40,
    buttonImg:
      "https://lmsin.net/cdn-cgi/image/h=50,w=50,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179188-Black-Black-1000011179188_01-2100.jpg",
  },
];

function displayTable(data) {
  let productDiv = document.querySelector("#productDiv");
  productDiv.innerHTML = "";
  data.forEach((ele, i) => {
    let mainDiv = document.createElement("div");
    let itemImg = document.createElement("img");
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.setAttribute("class", "prctBtn");
    let mainInner = document.createElement("div");
    mainInner.setAttribute("class", "maiInner");

    let innerDiv1 = document.createElement("div");
    let prdImg = document.createElement("img");
    prdImg.setAttribute("src", ele.buttonImg);
    let selectTag = document.createElement("select");
    let opt1 = document.createElement("option");
    opt1.value = "red";
    opt1.text = "red";
    selectTag.append(opt1);
    let opt2 = document.createElement("option");
    opt2.value = "yellow";
    opt2.text = "yellow";
    selectTag.append(opt2);
    let opt3 = document.createElement("option");
    opt3.value = "green";
    opt3.text = "green";
    selectTag.append(opt3);
    let opt4 = document.createElement("option");
    opt4.value = "blue";
    opt4.text = "blue";
    selectTag.append(opt4);
    let opt5 = document.createElement("option");
    opt5.value = "pink";
    opt5.text = "pink";
    selectTag.append(opt5);
    let opt6 = document.createElement("option");
    opt6.value = "black";
    opt6.text = "black";
    selectTag.append(opt6);
    innerDiv1.innerText = "";
    innerDiv1.append(prdImg);
    innerDiv1.append(selectTag);

    let innerDiv2 = document.createElement("div");
    innerDiv2.innerText = "size";
    innerDiv1.setAttribute("class", "colorProduct");
    innerDiv2.setAttribute("class", "sizeProduct");
    mainInner.append(innerDiv1, innerDiv2);

    itemImg.setAttribute("src", ele.imgUrl);
    itemImg.setAttribute("class", "productImg");
    mainDiv.append(itemImg, mainInner, btn);
    productDiv.append(mainDiv);
  });
}
window.onload = function () {
  displayTable(data);
};
