/* set setInterval to 15000 */
function startInterval(){
  Interval = setInterval(showSlides, 15000000);
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
  clearInterval(Interval);
  showSlides(slideIndex = n);
  startInterval();
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slide");
  
  let dots = document.getElementsByClassName("dot");
  if (n < 1){
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "inline-flex";
  dots[slideIndex-1].className += " active";
  
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }
}

