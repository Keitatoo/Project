const slides = document.querySelectorAll(".slides img");
const texts = document.querySelectorAll(".overlay p");
let slideIndex = 0;
let textIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        // intervalId = setInterval(nextSlide, 5000)
    }
    if(texts.length > 0){
        texts[textIndex].classList.add("displayText");
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}

function showText(index){
    if(index >= texts.length){
        textIndex = 0;
    }
    else if(index < 0){
        textIndex = texts.length - 1;
    }
    texts.forEach(text =>{
        text.classList.remove("displayText");
    })
    texts[textIndex].classList.add("displayText");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    textIndex--;
    showSlide(slideIndex);
    showText(textIndex);
}

function nextSlide(){ 
    slideIndex++;
    textIndex++;
    showSlide(slideIndex);
    showText(textIndex);
}


