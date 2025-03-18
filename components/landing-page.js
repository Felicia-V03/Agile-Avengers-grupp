import { getElements } from "../utils/domUtils.js";


let slideIndex = 0;
let slideInterval;

export function initSlider() {
    let slides = getElements(".slide");
    
    if (slides.length === 0) {
        console.error("🚨 Inga slides hittades! Kontrollera att HTML-koden är korrekt.");
        return;
    }

    showSlides(slideIndex);
    startAutoSlide();
}

export function showSlides(index) {
    let slides = getElements(".slide");
    let dots = getElements(".dot");

    if (slides.length === 0) {
        console.error("🚨 Fel: Det finns inga slides att visa.");
        return;
    }

    // Justera index om det är utanför gränserna
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }

    // Dölj alla slides
    slides.forEach(slide => slide.style.display = "none");

    // Ta bort "active" från alla prickar
    dots.forEach(dot => dot.classList.remove("active"));

    // ✅ Säkerhetskontroll innan vi ändrar `style.display`
    if (slides[slideIndex]) {
        slides[slideIndex].style.display = "block";
        dots[slideIndex]?.classList.add("active"); // `?.` undviker fel om dots saknas
    } else {
        console.error("🚨 Fel: slides[" + slideIndex + "] är undefined!");
    }
}

// Funktion för att byta till nästa/föregående slide
export function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide();
}

// Funktion för att starta automatisk bildväxling
export function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // Byt bild var 3:e sekund
}

// Funktion för att stoppa automatisk bildväxling
export function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Återställ automatisk bildväxling efter manuell interaktion
export function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}
