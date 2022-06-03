function toggleTheme() { 
            // Obtains an array of all <link> 
            // elements. 
            // Select your element using indexing. 
            var theme = document.getElementById('theme');
            var btn = document.getElementById('darkMode-btn')
            
            btn.classList.toggle('.DM-btn-bg')

            // Change the value of href attribute  
            // to change the css sheet. 
            if (theme.getAttribute('href') == 'dark-mode.css') { 
                theme.setAttribute('href', 'light-mode.css'); 
            } else { 
                theme.setAttribute('href', 'dark-mode.css'); 
            }
}
