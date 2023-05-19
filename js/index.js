//// 슬라이드쇼 
let slideIndex = 0;
showSlides();

function showSlides() {
   let i;
   const slides = document.getElementsByClassName('img-slide');
   const dot = document.getElementsByClassName('dot');

   for( i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dot[i].classList.remove("active");
   }
   slideIndex++;
   if(slideIndex > slides.length){
      slideIndex = 1;
   }
   slides[slideIndex -1].style.display = "block";
   dot[slideIndex-1].classList.add('active');
   setTimeout(showSlides, 5000);
}
document.getElementsByClassName('tablinks')[0].click();

function openBest(e, bid){
 
    const tabcontent = document.getElementsByClassName('besttabcontent');
    for(i=0; i<tabcontent.length; i++){
       tabcontent[i].style.display="none";
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for(i=0; i<tablinks.length; i++){
       tablinks[i].classList.remove('active');
    }
    
    document.getElementById(bid).style.display = 'block';
    e.currentTarget.classList.add('active');
 }