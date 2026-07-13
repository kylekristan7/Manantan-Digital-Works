/*=====================================
    MANANTAN DIGITAL WORKS
    FLOW ANIMATION
=====================================*/

const cards = document.querySelectorAll(".flow-card");

/*=====================================
SCROLL REVEAL
=====================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {
    observer.observe(card);
});


/*=====================================
CARD HOVER EFFECT
=====================================*/

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*=====================================
CLICK ANIMATION
=====================================*/

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.animate([
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(.96)"
            },
            {
                transform: "scale(1)"
            }
        ], {

            duration: 250

        });

    });

});


/*=====================================
AUTO HIGHLIGHT FLOW
=====================================*/

let current = 0;

setInterval(() => {

    cards.forEach(card => {

        card.style.boxShadow = "";

        card.style.borderWidth = "";

    });

    cards[current].style.boxShadow =
        "0 0 30px rgba(13,110,253,.45)";

    cards[current].style.borderWidth = "3px";

    current++;

    if (current >= cards.length) {

        current = 0;

    }

}, 1800);


/*=====================================
SMOOTH PAGE LOAD
=====================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});