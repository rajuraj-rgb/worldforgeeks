burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.left-navbar')
rightnav = document.querySelector('.right-navbar')
let icon = document.querySelector(".container");

burger.addEventListener('click', ()=>{
				navbar.classList.toggle('h-nav-resp')
		 leftnav.classList.toggle('v-class-resp')
})
icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
});