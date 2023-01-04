let toggleNavStatus = false;
let toggleNav = function () {

  let getSidebarUl = document.querySelector(".color-menu ul");
  let getSidebarLinks = document.querySelectorAll(".nav-side-bar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}

let btnGroen = document.querySelector(".color1");
let btnBlauw = document.querySelector(".color2");
let btnRood = document.querySelector(".color3");
let btnOranje = document.querySelector(".color4");
let btnRoze = document.querySelector(".color5");

btnGroen.addEventListener("click", () => {
  document.body.style.background = "lightgreen";
  getNavbarUl.style.visibility = "hidden";
});

btnBlauw.addEventListener("click", () => {
  document.body.style.background = "lightblue";
  getNavbarUl.style.visibility = "hidden";
});

btnRood.addEventListener("click", () => {
  document.body.style.background = "red";
  getNavbarUl.style.visibility = "hidden";
});

btnOranje.addEventListener("click", () => {
  document.body.style.background = "orange";
  getNavbarUl.style.visibility = "hidden";
});

btnRoze.addEventListener("click", () => {
  document.body.style.background = "lightpink";
  getNavbarUl.style.visibility = "hidden";
});

