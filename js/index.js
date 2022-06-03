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

function toggleTheme() { 
            // Obtains an array of all <link> 
            // elements. 
            // Select your element using indexing. 
            var theme = document.getElementById('theme');
            var btn = document.getElementById('darkMode-btn')
            
            btn.classList.toggle('.DM-btn-bg')

            // Change the value of href attribute  
            // to change the css sheet. 
            if (theme.getAttribute('href') == 'css/dark-theme.css') { 
                theme.setAttribute('href', 'css/light-theme.css'); 
            } else { 
                theme.setAttribute('href', 'css/dark-theme.css'); 
            }
}
