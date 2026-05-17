// ======================================================
// RIB2'S SPARKLE AND PRESTIGE CLEANERS
// COMPLETE WEBSITE JAVASCRIPT
// ======================================================


// ======================================================
// COMPANY INFORMATION
// ======================================================
const companyInfo = {
    name: "Rib2's Sparkle and Prestige Cleaners",
    phone: "+267 78187872",
    email: "info@rib2scleaners.com",
    services: [
        "Residential Cleaning",
        "Commercial Cleaning",
        "Deep Cleaning",
        "Move-In/Move-Out Cleaning",
        "Carpet and Upholstery Cleaning",
        "Post Construction Cleaning"
    ]
};


// ======================================================
// WELCOME MESSAGE
// ======================================================
window.addEventListener("load", () => {

    setTimeout(() => {

        alert(
            "Welcome to " +
            companyInfo.name +
            "!\n\nProfessional cleaning for homes, offices & businesses."
        );

    }, 1000);
});


// ======================================================
// TYPING EFFECT FOR HERO TITLE
// ======================================================
const headline = document.getElementById("typing-headline");

const text = companyInfo.name;

let index = 0;

function typingEffect() {

    if(index < text.length){

        headline.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);
    }
}

headline.innerHTML = "";

typingEffect();


// ======================================================
// DARK MODE TOGGLE
// ======================================================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme", "light");
    }
});


// ======================================================
// LOAD SAVED THEME
// ======================================================
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        themeToggle.innerHTML = "☀️";
    }
});


// ======================================================
// BACK TO TOP BUTTON
// ======================================================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(document.documentElement.scrollTop > 150){

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

function topFunction(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ======================================================
// SMOOTH SCROLLING
// ======================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ======================================================
// CARD HOVER EFFECTS
// ======================================================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });
});


// ======================================================
// FADE-IN ANIMATION ON SCROLL
// ======================================================
const fadeElements = document.querySelectorAll(".card, section");

function revealOnScroll(){

    fadeElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active-fade");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ======================================================
// SERVICE SEARCH FEATURE
// ======================================================
const searchInput = document.getElementById("serviceSearch");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if(text.includes(filter)){

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }
        });
    });
}


// ======================================================
// LIVE DATE & TIME
// ======================================================
function updateDateTime(){

    const dateElement = document.getElementById("datetime");

    if(dateElement){

        const now = new Date();

        dateElement.innerHTML = now.toLocaleString();
    }
}

setInterval(updateDateTime, 1000);


// ======================================================
// CONTACT FORM VALIDATION
// ======================================================
const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === ""){

            alert("Please fill in all fields.");

            return;
        }

        if(!email.includes("@")){

            alert("Please enter a valid email address.");

            return;
        }

        alert(
            "Thank you " +
            name +
            "! Your message has been sent successfully."
        );

        contactForm.reset();
    });
}


// ======================================================
// AUTO IMAGE SLIDER
// ======================================================
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides(){

    slides.forEach(slide => {

        slide.style.display = "none";
    });

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;
    }

    if(slides.length > 0){

        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();


// ======================================================
// TESTIMONIAL ROTATOR
// ======================================================
const testimonials = [
    "Excellent cleaning service!",
    "Very professional and reliable.",
    "My office has never looked this clean.",
    "Affordable and high quality cleaning.",
    "Highly recommended for homes and businesses."
];

let testimonialIndex = 0;

function rotateTestimonials(){

    const testimonialBox =
        document.getElementById("testimonial");

    if(testimonialBox){

        testimonialBox.innerHTML =
            testimonials[testimonialIndex];

        testimonialIndex++;

        if(testimonialIndex >= testimonials.length){

            testimonialIndex = 0;
        }
    }
}

setInterval(rotateTestimonials, 4000);


// ======================================================
// MOBILE NAVBAR AUTO CLOSE
// ======================================================
const navLinks =
document.querySelectorAll(".nav-link");

const navbarCollapse =
document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navbarCollapse.classList.contains("show")){

            navbarCollapse.classList.remove("show");
        }
    });
});


// ======================================================
// CONSOLE BRANDING
// ======================================================
console.log(
    "========================================="
);

console.log(companyInfo.name);

console.log("Professional Cleaning Services");

console.log("Phone: " + companyInfo.phone);

console.log("Email: " + companyInfo.email);

console.log("=========================================");


// ======================================================
// SERVICE DISPLAY IN CONSOLE
// ======================================================
console.log("OUR SERVICES:");

companyInfo.services.forEach(service => {

    console.log("- " + service);
});


// ======================================================
// WEBSITE LOADED SUCCESSFULLY
// ======================================================
console.log("Website Loaded Successfully!");