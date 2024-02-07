/////////Theme////
let mode = document.querySelector(".theme");
let body = document.querySelector("body");

let changeMode = "light";

mode.addEventListener("click", () => {
    if (changeMode === "light") {
        changeMode = "dark";
        body.style.backgroundColor = "#222";
        body.style.color = "white";
        body.classList.remove("dark-mode");
        mode.innerText = "Light mode";
    } else {
        changeMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.classList.add("dark-mode");
        mode.innerText = "Dark mode";
    }

});

/////Mene/////////
const menu_icon = document.querySelector(".menu-icon");
const close_icon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu-link");

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
close_icon.addEventListener('click', () => {
    menu.classList.remove("active");
});

menuLink.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});

//Type Writer////
const typed = document.querySelector('.typed');
const items = typed.getAttribute('data-typed-items').split(', ');

function typeWriter(text, i) {
    if (i < text.length) {
        typed.textContent = text.substring(0, i + 1);
        setTimeout(() => {
            typeWriter(text, i + 1);
        }, 100);
    }
}

function startTyping() {
    items.forEach((item, index) => {
        setTimeout(() => {
            typeWriter(item.trim(), 0);
        }, index * 6000);
    });
}

const modeButton = document.querySelector('.theme');
modeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

startTyping();

//Filter Projects//////
let filteritems = document.querySelectorAll('.portfolio-filter li');

function activePortfolio() {
    filteritems.forEach(el => {
        el.classList.remove('filter-acive');
        this.classList.add('filter-active');
    })
}

filteritems.forEach(el => {
    el.addEventListener('click', activePortfolio);

})

// Filter Projects

const filterItems = document.querySelectorAll('.project-filter li');
const projectBoxes = document.querySelectorAll('.pro-box');

filterItems.forEach((item) => {
    item.addEventListener('click', function () {
        const selectedFilter = this.getAttribute('data-filter');

        projectBoxes.forEach((box) => {
            box.style.display = 'none';
        });
        //Show
        if (selectedFilter === '*') {
            projectBoxes.forEach((box) => {
                box.style.display = 'block';
            });
        } else {
            const filteredBoxes = document.querySelectorAll(selectedFilter);
            filteredBoxes.forEach((box) => {
                box.style.display = 'block';
            });
        }
        //Remove
        filterItems.forEach((item) => {
            item.classList.remove('filter-active');
        });
        this.classList.add('filter-active');
    });
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

