
// Dark and Light Mode
var colorMode = "light";

function changeMode() {
  var bodyElement = document.getElementById("body");
  var themeToggleButton = document.getElementById("themeToggle");

  // Toggle the color mode
  colorMode = (colorMode === "dark") ? "light" : "dark";
  bodyElement.setAttribute("data-bs-theme", colorMode);

  bodyElement.style.backgroundColor = (colorMode === "dark") ? '#000000' : '#f9f5ec';

  // Change the icon based on the color mode
  if (colorMode === "dark") {
    themeToggleButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
            </svg>
        `;
  } else {
    themeToggleButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>
        `;
  }
}

// Data for women's clothing, shoes, and accessories
var womenClothingData = {
  names: ["Wide High Jeans", "Cropped Blouse", "Text-motif T-shirt", "Fine-knit Top", "Crinkled Wrap Skirt", "Maxl Skirt", "Flared Low Jeans", "Wide High Jeans"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7c%2F13%2F7c13c5bec2a451851e674911f1b11653c65eab44.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd8%2F49%2Fd849d7939788c5723070e5fcb067f46bba2bfe56.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbe%2F13%2Fbe13083a3a084e405a68e81fc13fabda00a640a9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1e%2F0b%2F1e0bab0728b1309e44a6dd1d13a950fa16ac3089.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9a%2Fad%2F9aaddd2508216ff2a62a3bff1585bfa26da6d4e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffd%2F70%2Ffd70424ce9aa5119c1c96898c52caa0a93987f50.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F42%2F18%2F4218f4f01afcbe98fc8a2f6ae42903cc9520375c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6d%2F8e%2F6d8e718a0bc3773af0c28780cae27264daed3557.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_highwaisted%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F3e%2F283eebf84aed7c4fadcbe6b007e85aa93fae337d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F37%2Fe1374a2fa227e1d1f6ca798ead52ff260ca033a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2F2c%2F032cc62668fe1fcad6c9fc9bb6b428d4ba05ec94.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F4c%2F6e4c14a3298c4041799c56cdbf1701f61a2c9c92.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbe%2Ff2%2Fbef296d03760f30d10edb59c29302ccb6eeb7eea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F24%2Fd9%2F24d97798acb2903ba5a5602b6ee290058b28fb09.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2F16%2F65166943e5783c140b74cc4ee59be062eb38ecee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb2%2F96%2Fb296e410f42721245850802d83a12d52c50d0ac1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

var womenShoesData = {
  names: ["Strap Sandals", "Ruched-shaft Boots", "Chunky loafers", "Loafers", "Pointed Court Shoes", "Ballet Pumps", "Trainers", "Ballet Pumps"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2F31%2F39319cfec2a95a1a82c35b40b618a9d45577d143.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2F02%2Ffa0239b1ae3ebfa58a0e69266bdc14e0c148511f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F74%2F8a%2F748ad28472baf3a0b41fdeb937f689ada4429731.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Feb%2Ffe%2Febfe50f43f676a5cdcacd92df66639d2909c05ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BLadies_shoes_loafers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd1%2Fea%2Fd1eae412a1b291b5eeaa88a882521950cf3d6099.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BENVIRONMENT%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F09%2Ff5%2F09f53db1a613d1840b29b419d25353343ef2c1fa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_ballerinas_flats%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F87%2Fb8%2F87b8c86384219083a20b571d007c9be2c8e92138.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F65%2Fa2%2F65a2506e019a7d6ec18f43e291bbc92465077c75.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_ballerinas_flats%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fe3%2Fdbe35235abb50728a9340256bae25bba75c4f309.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F37%2F0a3797b7292ddd729ece76ada95c8e90f411718e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8d%2F1d%2F8d1d9036f2f269744317707c3905a3f739b5490c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F74%2F91%2F749163510bc75ce2286073d13265509515a03ac1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F62%2Fe3%2F62e371ae7fab4338b110708b3ab26980e3085f1e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F68%2F23%2F6823f74c154f4a685b0c1e903eb1db47816cbb2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F80%2F4980d27c442f405108cc0ba246f42509f499d5ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2Fe0%2F6ce0134f3ab4af6032357de52f324b5b1ffa783c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

var womenAccessoriesData = {
  names: ["Crossbody Bag", "Braided Tote Bag", "Sphere Earrings", "2-pack Necklaces", "ScRib-knit Hatarf", "Cotton Twill Cap", "Waist Belt", "Leather Belt"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8a%2F58%2F8a5828cf9a8f069cebe1d8e88141890141346abe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6c%2Ff9%2F6cf990c5df9d1e97e3d30776b8dee52cfc402e2c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fda%2F30%2Fda305a5c3623d7083735e8ce5df9556a7ca05545.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_jewellery_earrings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F29%2F8e29ea56bf7f1b50ce8a25b15b920d144257ce35.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F70%2F27%2F70278d57e3d7b9cef19dce837f0fb0cf27e0917c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc8%2Ff2%2Fc8f2842a92db9c6a1f41eda01668170cf8aa01dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_hats_caps%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F6b%2F9f6bd5f0ebd6fcaba28c9c1c079d0b2d88dc9579.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd1%2F18%2Fd118e21393e8f5386b5df573240ed8a2fc6ed397.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2Fa5%2F15a559c8dc7db9871ba2d90e01ab49fe432dabdf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5e%2F42%2F5e42acb97bfd8d6649f16a9bf5de1473bcd8e913.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0f%2F76%2F0f76aafd2087ea714ce329f4fd5975bcc3f00267.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb2%2Fa2%2Fb2a2e8ab8d0c67d11c7050c3fb388b2e187e17ec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fea%2F00%2Fea007d40604faab10c542637e9b52954858f7b20.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2Ffb%2F8ffbfd437e3ec088ca1b1b25faab7ad435bbae8f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fee%2Fee%2Feeeee24c70355143e14fa1c7ef2e3c8757707df7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F00%2F1600bef6c0833879765d9628e4c89eb2249af3a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

// Data for men's clothing, shoes, and accessories
var menClothingData = {
  names: ["Regular Fit", "Knit Polo Shirt", "Loose Fit", "Denim Jacket", "Baggy Jeans", "Relaxed Jeans", "Slim Fit Trousers", "Slim Fit Suit Trousers"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0a%2Fa3%2F0aa382330b6a2666290b268bdb459c10e79374e5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bsportswear_men_clothing_tops_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F93%2Fa5%2F93a560e3a4ff5271c18efd717d2fd39cd0b5ff86.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5b%2F80%2F5b808d65ccdd90d49d0f5a5ea6920096a506edef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F74%2Fa2%2F74a28c024bf5f5c00b1276798ce55d6a0b94cb0b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_denimjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd0%2Ff2%2Fd0f2643be7ead907e10f1e815d1bdbc6e89bd741.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fae%2Fc4%2Faec40d81b3ae1ab580581627eb1cea0f4558736b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_relaxed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9b%2Fce%2F9bce518347964b3c7729a45067fea07fd30a9ff1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_dressed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F26%2F8e%2F268e938222fd270321ff40532383a902709f44ee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",

  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbd%2F0d%2Fbd0d5e7521a11d114776de7e2e1f6378fc0d2dd5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F37%2Fd537ed1a884c044cc1b325b27b2791cb769a8684.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2Fad%2F93ad19e2f69a4c60b899d0a45bdee605750fe3ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F00%2F4c%2F004c083e20e934fd23c576a3eb0656655a772adf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F13%2F7f%2F137f5a03b8ff03712f0bac9400c04a2001f0e5c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F20%2Fa6%2F20a6c0ac03f12544c7b357b90bccdcc11c552149.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_relaxed%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fec%2Ff8ecc8b14a1d4652ef8e522e7710644c78f6a74e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F3b%2F0d3b8a09b94bd598bb013065472f15911f8bb51e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

var menShoesData = {
  names: ["Brushed-suede Boots", "Loafers", "Chunky Loafers", "Crossover Sandals", "Derby Shoes", "Moccasin-seam Shoes", "Trainers", "Trainers"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdb%2F82%2Fdb82d8f980122586ff189de2924009f0726347de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2b%2F74%2F2b7431ccd990155c99180c6390a12f47ea7b85c1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7b%2F8f%2F7b8f3d14686458d936668e0f299b12dd15e9f94c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F42%2Fa5%2F42a5400e930a8fe0707abbd76b13284defb40c9a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F45%2Fda%2F45dab781ce841b79bb7b49ba21a26d6eb84da535.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8a%2F03%2F8a03ae382e1af2db18192d79528fa03370da4f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2Ff5%2F33f5596dbc343f91e808b8371da7f2718ffe55a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F13%2Fda13f1f94371e05bf2295444cba353a58213b2ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2F3f%2F693f18de05859ed5151e4f5af788817032071aa5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe6%2F00%2Fe6007e7228fd59f1a72767cfd5ecbcfd034025d5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2F6a%2F2f6a156c4ac86e28686fae6adf142bb0369b9c15.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F97%2F8c%2F978ca9952e6657619891e0e7d7e6a00d510dbb40.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F75%2F65%2F756503d68b74e591f2dd6d70413be779fb8d8428.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff0%2F9a%2Ff09afc4c93dfcb0762e511376643b3052c08bfa6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F3f%2F9f3f2a5311b0638815df93401e4efe65286e288b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3f%2Fdd%2F3fdd2d1e2b3614c602c348ea52d751079d66c706.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
};

var menAccessoriesData = {
  names: ["Crossbody Bagelt", "Small Shoulder Bag", "Leather Belt", "Rib-knit Hat", "Appliquéd Cap", "2-pack Necklaces", "2 pairs Earrings", "Satin Bow Tie"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F45%2F14%2F4514262511740c1ff0339d30b77b16106831df1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F83%2F27%2F83277bb6c9834f83bd49896a3be8ca094583ec93.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2F08%2F0c08391fb17547985a19eab5a778addb14117bd1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fef%2Fc7%2Fefc7a955fa6c2ce6288190dba340c0c9161dceff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5d%2F95%2F5d95ecc3da1e78f79def7968eab5845d307fa68b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatscaps_caps%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2F4d%2Fd44d5b8a3775f5ad28972c6c22fd472099f81eed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_necklaces%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2F58%2Fe558198af6a5469cfd572ad579cfc1187deb0f9e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2Fc0%2Fbcc0209a508bcd3fc6b65f03723c8d9de028c38e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_ties_bowties_handkerchiefs%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa6%2F33%2Fa633fb10add3b751ea41a7651c178d1cec28a60c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F91%2F76%2F9176a7726a08a71ae8768b8c754b62378de5c25c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6a%2Fab%2F6aab8e9dc52e38736ab38ec4cdb5fcbdca68bf2e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbc%2Fd9%2Fbcd9324c60a08c37f84d613330fa6a38de4a5948.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe2%2F12%2Fe212d6d198929701d570330099aa3d445b07ca5f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatscaps_caps%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2F5b%2Fb85b1867cbd0934dee3119a0219e686adf29348e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_necklaces%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2f%2F9b%2F2f9b6cf3a75b53d0554f3af6da86b104221ecb16.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9e%2F69%2F9e695af28c6728be347d7567071ae8158d1a1151.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_ties_bowties_handkerchiefs%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
};

// Data for kids' clothing, shoes, and accessories
var kidClothingData = {
  names: ["Reversible Jacket", "Muslin Blouse", "Cotton Overshirt", "Canvas Shacket", "Wide Fit Jeans", "Denim Dungaree Shorts", "Cotton-blend Jeans", "Twill Cargo Joggers"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7c%2Fa3%2F7ca3220e6178fd1a157b144133007fed55543e5d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F31%2Fe2%2F31e2e9d0c5ec322d4639c943bd57f2e3e5ed4f32.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fed%2Ff6%2Fedf63236ea3c3b18c2511f7d652b2e3caec7053e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F65%2Fcd%2F65cd58633fc73a32107377f71c09fa25c86eca30.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2Fac%2Fd6accb8f4d2f97d8222e2c8c22cefae880e2b72d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_trousersjeans_jeans_relaxed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc7%2Fd0%2Fc7d0d3f73f5f92c906886c2238fa0b7129d83e47.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_shorts_denim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7e%2Fc4%2F7ec456ebd53e9d8b40293a59089bea6dd5e8f6f0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F16%2F1b%2F161bb9c477b978d8de0c54346db0418502da2029.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F4b%2F8e4bee8be967b2d770136481eecd02ebcd64900a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe7%2Fe4%2Fe7e4b68a4f737c1467668270edb0c4667be91429.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F84%2F25%2F84252527cf66f1aa2ae81a8ba29451d2eb939b4f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2F5a%2F005a499ff81f08ba29af6bab5dd2921cf55af6e7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7e%2F85%2F7e8596b6398e0069372a118a0d404e36b8d830d5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2Fdb%2Fdfdbd1ecc77dac465297a730356765e6ffa3d0cc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff4%2F91%2Ff4911195d62e7f60a9f5535470687007fd64819b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2Fb0%2F86b0bf52d8392b039db79a52af1ade7108a7e6fc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
};

var kidShoesData = {
  names: ["Boots", "Ballet Pumps", "Ankle Strap Sandals", "Canvas Trainers", "Chelsea Boots", "Trainers", "Ankle Strap Sandals", "Printed Pool Shoes",],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F78%2Fb8%2F78b8d617eb5b4480a510c5354085e082bf1089d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb1%2F81%2Fb181a81801f4a7726281bfb9a143cd88eaa0f0f3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F33%2F6d%2F336da7c33ddca315ce579dbbbc99d5dbb5dc671c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_shoes_sandalsflipflops%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3e%2Fee%2F3eee8b8c8d5b8ca3620ac983c3ce3afd70dbf1db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_shoes_trainers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F94%2F5e%2F945e93242d672a3506caa0ab436ded7ec0555272.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Ff6%2Fa2f686236e2352031d9a1f04400bec4558aef3b5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_shoes_trainers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F7e%2F157e10c755953e1ea5f4aab517972ce4cbcd75bb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe6%2F1a%2Fe61a5fb918c232a430b73604aff3700886d821f0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2Fcb%2Fedcbfa3e303e248107fed992a9b320b139c8ff78.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2Fa8%2Fdca801d72b6ad309def3bd8eeb03c338dbddb98c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fc8%2F80c8c710dd837b256182c1b411db80d76d680e03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_shoes_sandalsflipflops%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2F5a%2F1e5a423b8ab024905f26b476d343534824277556.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_shoes_trainers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcd%2F44%2Fcd445b0816aa20df0890fe3dab5d77e7d966c113.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5d%2F54%2F5d5426f41d121389e3a2eb9a1c6b829a1fcbc29e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_shoes_trainers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2F4a%2F204a9d6c4bbcef8955cb3b650c4913c3b704e3f5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbd%2F2b%2Fbd2b4756ad1d3b74ca09785733fb3b8d45235ebf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  ],
};

var kidAccessoriesData = {
  names: ["Wide Alice Band", "Witch Fancy Dress", "Backpack", "Appliquéd Beanie", "Hat", "Belt", "Motif-detail Cap", "Pre-tied Tie"],
  pics: [
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3a%2F82%2F3a82e5fcaa7af4d3b6ffb04516daac44dcf6fbbc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_accessories_hairaccessories%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fad%2Ff2%2Fadf23d6c773d950755fcdd8a22d4e85e9c2b56ae.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_boys_newarrivals%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd2%2F72%2Fd272c82a067b5e91c5673fe1b5711e5629560c75.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcb%2F53%2Fcb533bb53c60cf539b6aa0c70573d637e2b200de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb2%2F90%2Fb29009edb4e440aff8c53b714ccdbce0fc0d1a2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F76%2Fa4%2F76a4d9b8758fb21ce22933d2d0b0aa758f6f6565.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_accessories_beltssuspenders%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F37%2Fca%2F37ca5e4edef05a99b5f11ed6243181f69b7aec56.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_olderboys_accessories_hats%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2Fd1%2F10d1d5bf4ebc16f2158ebdadea7bbc80b2ae6fd7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_accessories_tiesbowties%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  ],
  backPics: [
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2Fda%2F92da112465fa22c8b80a434c20c5657e01df9c4c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2Fb9%2Fddb98d2a018abb03a5c23a945fa59576385631dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6d%2Fcb%2F6dcba4e88c044d4bca0b5402d0e02538f322e7bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd8%2Fef%2Fd8ef328cce0268b84d7cc9eae9ffca1dc29b2904.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fad%2F6c%2Fad6ce3fc845f6e5440cb0647a794a541d94dbf2b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1f%2Fb2%2F1fb246914cea1142cce087269741970b4770038e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_accessories_beltssuspenders%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F00%2F5b%2F005b4c93445a1ffd04173bac6a1dcd5f87e18958.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_olderboys_accessories_hats%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc5%2F4c%2Fc54ce9115001601e4468aef6058de4e7ec48aa98.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boys_accessories_tiesbowties%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  ],
};

// Function to generate cards using string concatenation
function generateCards(data, containerId, imgPrefix) {
  var container = document.getElementById(containerId);

  // Check if the container exists
  if (!container) {
    return;
  }

  for (var i = 0; i < data.names.length; i++) {
    container.innerHTML +=
      '<div class="col-xl-3 col-md-4 col-sm-6 col-6 p-3">' +
      '<div class="card my-3" id="' + imgPrefix + i + '" ' +
      'onmouseenter="addShadow(\'' + imgPrefix + i + '\'); showBackImage(\'' + imgPrefix + 'Img' + i + '\')" ' +
      'onmouseleave="removeShadow(\'' + imgPrefix + i + '\'); showFrontImage(\'' + imgPrefix + 'Img' + i + '\')">' +
      '<img id="' + imgPrefix + 'Img' + i + '" src="' + data.pics[i] + '" class="card-img-top">' +
      '<div class="card-body">' +
      '<h5 class="card-title regular-text fw-bold">' + data.names[i] + '</h5>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
}

// Generate cards for clothing, shoes, and accessories only if the container exists
if (document.getElementById("womenClothesContainer")) {
  generateCards(womenClothingData, "womenClothesContainer", "wc");
}
if (document.getElementById("womenShoesContainer")) {
  generateCards(womenShoesData, "womenShoesContainer", "ws");
}
if (document.getElementById("womenAccessoriesContainer")) {
  generateCards(womenAccessoriesData, "womenAccessoriesContainer", "wa");
}
if (document.getElementById("menClothesContainer")) {
  generateCards(menClothingData, "menClothesContainer", "mc");
}
if (document.getElementById("menShoesContainer")) {
  generateCards(menShoesData, "menShoesContainer", "ms");
}
if (document.getElementById("menAccessoriesContainer")) {
  generateCards(menAccessoriesData, "menAccessoriesContainer", "ma");
}
if (document.getElementById("kidClothesContainer")) {
  generateCards(kidClothingData, "kidClothesContainer", "kc");
}
if (document.getElementById("kidShoesContainer")) {
  generateCards(kidShoesData, "kidShoesContainer", "ks");
}
if (document.getElementById("kidAccessoriesContainer")) {
  generateCards(kidAccessoriesData, "kidAccessoriesContainer", "ka");
}

// Function to show the back image when mouse enters
function showBackImage(id) {
  var imgElement = document.getElementById(id);
  var index = id.replace(/[^0-9]/g, "");

  // Determine the category based on the prefix of the ID
  if (id.startsWith("ws")) {
    imgElement.src = womenShoesData.backPics[index];
  } else if (id.startsWith("wa")) {
    imgElement.src = womenAccessoriesData.backPics[index];
  } else if (id.startsWith("wc")) {
    imgElement.src = womenClothingData.backPics[index];
  } else if (id.startsWith("ms")) {
    imgElement.src = menShoesData.backPics[index];
  } else if (id.startsWith("ma")) {
    imgElement.src = menAccessoriesData.backPics[index];
  } else if (id.startsWith("mc")) {
    imgElement.src = menClothingData.backPics[index];
  } else if (id.startsWith("ks")) {
    imgElement.src = kidShoesData.backPics[index];
  } else if (id.startsWith("ka")) {
    imgElement.src = kidAccessoriesData.backPics[index];
  } else if (id.startsWith("kc")) {
    imgElement.src = kidClothingData.backPics[index];
  }
}

// Function to show the front image when mouse leaves
function showFrontImage(id) {
  var imgElement = document.getElementById(id);
  var index = id.replace(/[^0-9]/g, "");
  // Determine the category based on the prefix of the ID
  if (id.startsWith("ws")) {
    imgElement.src = womenShoesData.pics[index];
  } else if (id.startsWith("wa")) {
    imgElement.src = womenAccessoriesData.pics[index];
  } else if (id.startsWith("wc")) {
    imgElement.src = womenClothingData.pics[index];
  } else if (id.startsWith("ms")) {
    imgElement.src = menShoesData.pics[index];
  } else if (id.startsWith("ma")) {
    imgElement.src = menAccessoriesData.pics[index];
  } else if (id.startsWith("mc")) {
    imgElement.src = menClothingData.pics[index];
  } else if (id.startsWith("ks")) {
    imgElement.src = kidShoesData.pics[index];
  } else if (id.startsWith("ka")) {
    imgElement.src = kidAccessoriesData.pics[index];
  } else if (id.startsWith("kc")) {
    imgElement.src = kidClothingData.pics[index];
  }
}

// Function to add shadow
function addShadow(id) {
  document.getElementById(id).classList.add("shadow");
}

// Function to remove shadow
function removeShadow(id) {
  document.getElementById(id).classList.remove("shadow");
}

