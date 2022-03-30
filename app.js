let slideIndex = 1;

const plusSlide = (n) => {
    showSlide(slideIndex += n);
}


const showSlide = (n) => {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length-1) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length-1}

    for(let i = 0; i < slides.length-1; i++ ){
        slides[i].style.display = "none";
    }
    slideIndex++;
    console.log(slideIndex)
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(showSlide, 3000);
}

showSlide(slideIndex);
