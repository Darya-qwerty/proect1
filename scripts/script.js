//3.2
'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});


//3.3
let currentIndex = 0; 

const slider = document.querySelectorAll(".urist__item");
const prevButton = document.querySelector(".urist__left");
const nextButton = document.querySelector(".urist__right");
const visibleCards = 2;
updateSlider();

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = slider.length - visibleCards;
    }

    updateSlider();
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slider.length - visibleCards) {
        currentIndex++;
    }
    else {
        currentIndex = 0; 
    }
    updateSlider();
});

function updateSlider() {
    slider.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            item.style.display = "block";
        }

        else {
            item.style.display = "none";
        }
    });
}

//3.4
const uristsContainer = document.querySelector(".urist");

  if (uristsContainer) {
    const dataTitleUrist= [
            "Иванов Иван Иванович",
            "Васильев Сергей Иванович",
            "Васильев Сергей Иванович",
            "Иванова Инна Николаевна",
        ];

        const titleUrist =uristsContainer.querySelectorAll(".urist__subtitle");

      titleUrist.forEach((item, index) => {

      item.textContent = dataTitleUrist[index];
           });
    }

