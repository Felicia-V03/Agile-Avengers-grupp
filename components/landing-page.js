import { getElements, addClass } from "../utils/domUtils.js";

let slideIndex = 1;
showSlides(slideIndex);

// Nästa/Föregående knapp
export function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail-knappar
export function currentSlide(n) {
  showSlides(slideIndex = n);
}

export function showSlides(n) {
  let slides = getElements(".slide");
  let dots = getElements(".dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Dölj alla bilder
  slides.forEach(slide => slide.style.display = "none");

  // Ta bort "active" från alla prickar
  dots.forEach(dot => dot.classList.remove("active"));

  // Visa den valda sliden och markera aktiv prick
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  
  setTimeout(showSlides, 5000);
}

// Gör funktionerna globala
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;


//========== Automatic Slideshow =================
// let slideIndex = 0;
// showSlides();

// export async function showSlides() {

//     let slides = getElements(".slide");

//     // Säkerhetskontroll om inga slides finns
//     if (slides.length === 0) {
//         console.error("Inga slides hittades!");
//         return;
//     }

//     // Dölj alla slides
//     slides.forEach(slide => slide.style.display = "none");

//     // Öka index och loopa tillbaka om det är för stort
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }

//     // Visa aktuell slide
//     slides[slideIndex - 1].style.display = "block";

//     // Växla bild var 5:e sekund
//     setTimeout(showSlides, 5000);
// }
