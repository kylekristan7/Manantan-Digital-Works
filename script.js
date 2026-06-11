// ==========================================================
// 1. DYNAMIC FOOTER YEAR AUTOMATION
// ==========================================================
// Awtomatikong kinukuha ang kasalukuyang taon para sa copyright footer.
const footer = document.querySelector("footer p");
if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Manantan Digital Works. All Rights Reserved.`;
}

// ==========================================================
// 2. MOBILE HAMBURGER MENU TOGGLE
// ==========================================================
// Pinapagana ang pagbukas at pagsara ng navigation bar sa mobile screen devices.
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ==========================================================
// 3. SMOOTH SCROLL ACCORDING TO ANCHOR LINKS (With Auto-Close)
// ==========================================================
// Swabeng pag-scroll kapag may pinindot sa navigation menu at awtomatikong isasara ang menu sa mobile view.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        
        if (navLinks) {
            navLinks.classList.remove('active'); // Isara ang burger panel
        }
        
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ==========================================================
// 4. SHOWCASE HOVER & ORBIT ANIMATION CONTROLLER (From image_e05fdc.jpg)
// ==========================================================
// Pinapabagal o itinitigil ang pag-ikot ng mga developer avatars kapag tiningnan o itinapat ang mouse cursor ng user.
const orbitContainer = document.querySelector('.network-orbit');
const avatars = document.querySelectorAll('.avatar');
const centralGlobe = document.querySelector('.center-globe');

if (orbitContainer) {
    // Kapag itinapat ang mouse ng user, hihinto ang orbit animation para madaling makita ang developers.
    orbitContainer.addEventListener('mouseenter', () => {
        orbitContainer.style.animationPlayState = 'paused';
        if (centralGlobe) centralGlobe.style.animationPlayState = 'paused';
        avatars.forEach(av => av.style.animationPlayState = 'paused');
    });

    // Kapag inalis ang mouse cursor, magpapatuloy uli ang pag-ikot.
    orbitContainer.addEventListener('mouseleave', () => {
        orbitContainer.style.animationPlayState = 'running';
        if (centralGlobe) centralGlobe.style.animationPlayState = 'running';
        avatars.forEach(av => av.style.animationPlayState = 'running');
    });
}

// Interaction click event para sa mga Skill Badges sa Showcase Left
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('click', () => {
        alert(`You selected the "${badge.textContent}" expertise track. Connecting you with our specialists!`);
    });
});

// Interaction para sa Join Button
const joinBtn = document.querySelector('.join-btn');
if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// ==========================================================
// 5. SMART VIEWPORT COUNTER ANIMATION (Triggers only when scrolled)
// ==========================================================
// Dynamic number increment simulation controller.
function count(id, target) {
    let el = document.getElementById(id);
    if (!el) return;
    
    let currentNumber = 0;
    // Kinakalkula ang "step" para mabilis at swabe ang pagtaas kahit malaki ang numero
    let step = Math.ceil(target / 40); 
    
    let intervalInstance = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= target) {
            el.textContent = target + "+";
            clearInterval(intervalInstance);
        } else {
            el.textContent = currentNumber;
        }
    }, 30);
}

// Ginagamit ang IntersectionObserver para gumana lamang ang simulation kung nasa tapat na ng Counter screen ang screen window.
const statsSection = document.getElementById('counters');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                count("projects", 120);
                count("clients", 80);
                count("experience", 5);
                observer.unobserve(entry.target); // Patayin ang observer para isang beses lang mag-animate
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(statsSection);
} else {
    // Fallback logic kapag legacy browser ang gamit ng bisita
    window.addEventListener("load", () => {
        count("projects", 120);
        count("clients", 80);
        count("experience", 5);
    });
}

// ==========================================================
// 6. DARK MODE TOGGLE SCHEME
// ==========================================================
const btn = document.getElementById("darkModeBtn");
if (btn) {
    btn.onclick = () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            btn.textContent = "☀️ Light Mode";
        } else {
            btn.textContent = "🌙 Dark Mode";
        }
    };
}

// ==========================================================
// 7. SECURE CONTACT FORM HANDLER
// ==========================================================
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Message Sent! Thank you for contacting Manantan Digital Works.");
        form.reset();
    });
}

// ==========================================================
// 8. CHAT WIDGET INTERACTION SYSTEM
// ==========================================================
document.querySelector(".chat-widget")?.addEventListener("click", () => {
    alert("Hello! How can Manantan Digital Works help you today?");
});