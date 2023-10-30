
const slides = document.querySelector(".slides");
const body = document.querySelector("body")
const container = document.querySelector(".container")
const searchInput = document.getElementById("searchInput");
const slideList = document.querySelectorAll(".mid-image");
const div2=document.querySelectorAll(".div2")
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideList.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideList.length) % slideList.length;
  updateSlider();
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`; // 100% for each slide
}

setInterval(nextSlide, 2000); // Change image every 5 seconds (adjust as needed)

const prevButton = document.querySelector(".icon-left");
const nextButton = document.querySelector(".icon-right");
const boxes = document.querySelectorAll(".pro-box");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

var flag = false;
const searchbtn=document.querySelector(".searchbtn")
searchInput.addEventListener("focus", function () {
    if (!flag) {
        container.style.filter = "brightness(50%)";
        container.style.transition="0.3s ease all"
        flag = true;
    }
});
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchText = searchInput.value.toLowerCase();

  boxes.forEach((box) => {
    const title = box.getAttribute("data-title").toLowerCase();
    if (title.includes(searchText)) {
      box.style.display = "flex";
      box.style.flexDirection = "column";


    } else {
      box.style.display = "none";
    }
  });
});

searchInput.addEventListener("blur", function () {
    if (flag) {
        container.style.filter = "";
        container.style.transition="0.3s ease all"

        flag = false;
    }
});