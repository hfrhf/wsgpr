var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  focus  : 'center',
  direction: 'rtl' 
} );

splide.mount();



let NavUl = document.getElementById("nav-ul");
let BtnOpen = document.getElementById("menu");
let btnclose = document.getElementById("mobile-arrow");
let logo = document.getElementById("mobile-logo");
let login = document.getElementById("li-login");
let imgUl = document.querySelectorAll(".img-ul-mobile");

btnclose.onclick = () => {
    NavUl.classList.remove("active");
    logo.classList.remove("active-mobile-logo");
    btnclose.classList.remove("active-mobile-arrow");
    document.body.classList.remove("lock-scroll");
    login.style.display="none"


  
  
  
    
}

BtnOpen.onclick = () => {
    NavUl.classList.add("active");
    logo.classList.add("active-mobile-logo");
    btnclose.classList.add("active-mobile-arrow");
    login.style.display="block"
    document.body.classList.add("lock-scroll");
    imgUl.forEach(function(img) {
     
   
      img.classList.add("active-img");



});
    

}




let NavScroll=document.getElementById("navbar")

window.onscroll=()=>{
  if(this.scrollY>=300){
    NavScroll.classList.add("active-nav")
  }else{
    NavScroll.classList.remove("active-nav")
  }
}














