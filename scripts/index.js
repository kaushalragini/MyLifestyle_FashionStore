let bannerCarousel = document.getElementById("bannerCarousel");
let counter = 0;
let links = [
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-10Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-4-10Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-10Nov2022.jpg",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-10Nov2022.gif",
  "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktopp-2-10Nov2022.jpg",
];

let img = document.createElement("img");

img.src = links[counter];
bannerCarousel.append(img);
counter++;

function display() {
  bannerCarousel.innerHTML = null;
  if (counter == 5) {
    counter = 0;
  }
  let img = document.createElement("img");
  img.src = links[counter];
  bannerCarousel.append(img);
  counter++;
}

setInterval(function () {
  display();
}, 2000);
