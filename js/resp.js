burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
let icon = document.querySelector(".container");

burger.addEventListener('click', ()=>{
				navbar.classList.toggle('h-nav-resp')
		 navList.classList.toggle('v-class-resp')
})
icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
});