// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

// Back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Auto slideshow
let slideIndex = 1;
let autoSlide;

function showSlides(n) {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active-dot"));

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active-dot");
}

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

showSlides(slideIndex);
startAutoSlide();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Close mobile menu when click link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
