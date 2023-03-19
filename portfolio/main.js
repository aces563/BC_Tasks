const goUP = document.querySelector(".gototop");
const header = document.querySelector('header');
const mobButton = document.querySelector('#menu');
const menuItems = document.querySelectorAll("nav ul li a");
const nav = document.querySelector("nav ul");

window.addEventListener('scroll', goToTop);

function goToTop(){
    if (this.pageYOffset > 100){
        goUP.classList.add('active');
    }
    else{
        goUP.classList.remove('active');
    }
}

window.onscroll = function() {scrollFunction()};


const scrollFunction = () => {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        header.classList.add('bg')
    }
   else{
       header.classList.remove('bg')
   }  
}

const mobMenu = () => {

    for (const link of menuItems){
        link.addEventListener('click', mobMenu)

    }

    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive')

    }
    else {
        nav.classList.add('responsive')
    }
}

const goUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  

mobButton.addEventListener("click", mobMenu);
goUP.addEventListener('click', goUp)