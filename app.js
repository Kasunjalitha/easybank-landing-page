const burgerMenu = document.querySelector(".burger-menu");
const crossLine = document.querySelectorAll(".cross-line");
const slideBurgerMenu = document.querySelector(".slide-burger-menu");
const mainSection = document.querySelector(".main-section");
const preloader = document.querySelector(".preloader");

document.body.classList.add("scroll-hide");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("remove");
    document.body.classList.remove("scroll-hide");
  }, 2000);

  let winHeight_1 = screen.height - 70;
  let winHeight_2 = screen.height - 70;

  if (screen.height > 1024) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  } else if (screen.height < 415) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  }

  if (screen.width < screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else if (screen.width == screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else {
    mainSection.style.height = `${winHeight_2}px`;
    mainSection.style.maxHeight = `${winHeight_2}px`;
  }
});

window.addEventListener("resize", () => {
  let winHeight_1 = screen.height - 70;
  let winHeight_2 = screen.height - 70;

  if (screen.height > 1024) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  } else if (screen.height < 415) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  }

  if (screen.width < screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else if (screen.width == screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else {
    mainSection.style.height = `${winHeight_2}px`;
    mainSection.style.maxHeight = `${winHeight_2}px`;
  }

  if (screen.width >= 768 && slideBurgerMenu.classList.contains("open")) {
    slideBurgerMenu.classList.remove("open");
    document.body.classList.remove("scroll-hide");
    crossLine.forEach((cl) => {
      cl.classList.remove("open");
    });
  }
});

window.addEventListener("orientationchange", () => {
  let winHeight_1 = screen.height - 70;
  let winHeight_2 = screen.height - 70;

  if (screen.height > 1024) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  } else if (screen.height < 415) {
    winHeight_1 = 768;
    winHeight_2 = 768;
  }

  if (screen.width < screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else if (screen.width == screen.height) {
    mainSection.style.height = `${winHeight_1}px`;
    mainSection.style.maxHeight = `${winHeight_1}px`;
  } else {
    mainSection.style.height = `${winHeight_2}px`;
    mainSection.style.maxHeight = `${winHeight_2}px`;
  }
});

burgerMenu.addEventListener("click", () => {
  crossLine.forEach((cl) => {
    cl.classList.toggle("open");
  });
  slideBurgerMenu.classList.toggle("open");
  document.body.classList.toggle("scroll-hide");
});
