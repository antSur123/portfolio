/* run showSlides every 15 sec */
function startInterval(){
  Interval = setInterval(showSlides, 15000);
}


/* show first slide */
let slideIndex = 1;
showSlides(slideIndex);


/* set slide */
function setSlide(n){
  clearInterval(Interval);
  showSlides(slideIndex = n);
  startInterval();
}


/* switch slide */
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

