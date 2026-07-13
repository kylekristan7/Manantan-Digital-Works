const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("show-menu");
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("show-menu");
    });
});

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const counters = document.querySelectorAll(".stat-info h3");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.innerText.replace("+", "");
        const count = +counter.getAttribute("data-count") || 0;

        if (count < target) {
            counter.setAttribute("data-count", count + 1);
            counter.innerText = (count + 1) + "+";
            setTimeout(update, 20);
        } else {
            counter.innerText = target + "+";
        }
    }

    update();
});

function showMember(name) {
    alert("Profile ni " + name);
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            reveal.classList.add("active");
        }
    });
});

const btn = document.getElementById("theme");

if (btn) {
    btn.onclick = () => {

        document.body.classList.toggle("dark");
    };
}

const subtitle = document.querySelector(".hero-subtitle");

if (subtitle) {
    subtitle.innerHTML = "";

    const text = "Building Digital Soliution for Smarter Future";
    let i = 0;

    function typing() {
        if (i < text.length) {
            subtitle.innerHTML += text.charAt(i);
            i++
            setTimeout(typing, 40);
        }
    }
    typing();
}

document.querySelector(".hero-subtitle").innerHTML = "";
typing();

window.addEventListener ("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.display = "none";
    }
});

const nameInput = document.getElementById("name");

if (nameInput) {
    if (nameInput.value === "") {
        console.log("Name is empty");
    }
}

const copyBtn = document.getElementById("copyEmail");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText("manantandigitalworks@gmail.com");
        alert("Email copied!");
    });
}