var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

// var slideIndex = 0; 
// showSlides();
   
// function showSlides() { 
//     var i; 

//     var slides = document.getElementsByClassName("image-sliderfade");  
      
//     var dots = document.getElementsByClassName("dot");  
  
//     for (i = 0; i < slides.length; i++) { 
//         slides[i].style.display = "none";  
//     } 
   
//     slideIndex++;  
   
//     if (slideIndex > slides.length) { 
//         slideIndex = 1; 
//     } 
   
//     for (i = 0; i < dots.length; i++) { 
//         dots[i].className = dots[i].className. 
//                             replace("active", ""); 
//     } 
   
//     // slides[slideIndex - 1].style.display = "block"; 
//     // dots[slideIndex - 1].className += "active";
  
//     setTimeout(showSlides, 2000);  
// }