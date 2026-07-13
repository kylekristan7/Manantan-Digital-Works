// ======================================
// MOBILE MENU
// ======================================
const navToggle = document.getElementById("pfNavToggle");
const navList = document.getElementById("pfNavList");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("show-menu");
    });

    // Close menu after clicking a link
    document.querySelectorAll("#pfNavList a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("show-menu");
        });
    });
}


// ======================================
// REVEAL ANIMATION
// ======================================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add("reveal-active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ======================================
// ACTIVE NAVIGATION
// ======================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#pfNavList a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (current && link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


// ======================================
// SEARCH MEMBER
// ======================================
const searchInput = document.getElementById("searchMember");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".pf-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ======================================
// CARD HOVER EFFECT
// ======================================
document.querySelectorAll(".pf-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});


// ======================================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ======================================
const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "scrollTop";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0066ff;
color:white;
font-size:18px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// PAGE LOADER EFFECT
// ======================================
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ======================================
// CONSOLE MESSAGE
// ======================================
console.log("%cManantan Digital Works", "color:#0066ff;font-size:20px;font-weight:bold;");
console.log("Portfolio Loaded Successfully.");
