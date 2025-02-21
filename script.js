let advantCards = document.querySelectorAll('.tarifs-cards__elem');

advantCards.forEach(card => {
    let button = card.querySelector('.elem-btn');

    if (button.parentElement.className.includes("popular")) {
        button.addEventListener("mouseover", (e) => {
            card.style.borderColor = "#0446F0";
        })
        button.addEventListener("mouseout", (e) => {
            card.style.borderColor = "#EDF4FB";
        })
    } else {
        button.addEventListener("mouseover", (e) => {
            card.style.borderColor = "#FF4E00";
        })
        button.addEventListener("mouseout", (e) => {
            card.style.borderColor = "#EDF4FB";
        })
    }
});





let menuButton = document.querySelector(".menu-icon");
let menu = document.querySelector(".adapt-menu");
let closeBlock = document.querySelector(".close-block");
let closeMenuButton = document.querySelector(".button-close");

let zeroScale = () => menuButton.style.transform = 'scale(1)';

const toggleMenu = (isOpen) => {
    menuButton.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    menuButton.style.transform = isOpen ? 'scale(1.05)' : 'scale(1)';
};

menuButton.addEventListener('mouseover', () => toggleMenu(true));
menuButton.addEventListener('mouseout', () => toggleMenu(false));

menuButton.addEventListener('click', () => {
    toggleMenu(true);
    setTimeout(zeroScale, 200);
});

const toggleContentMenu = (isOpen) => {
    menu.style.transform = isOpen ? 'translateY(0%)' : 'translateY(-100%)';
    closeMenuButton.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(-90deg)';
    closeMenuButton.style.scale = isOpen ? '1' : '0';
};

menuButton.addEventListener('click', () => toggleContentMenu(true));
closeMenuButton.addEventListener('click', () => toggleContentMenu(false));