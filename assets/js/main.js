/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


function sendToWhatsApp() {
    const urlToWhatsApp = `https://wa.me/6281959593035?text=Halo kak, saya ${nama}, ${pesan}`
    window.open(urlToWhatsApp, "_blank")
}


document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.querySelector(".theme");
    const root = document.documentElement;
    const moonIcon = '<i class="bx bx-moon"></i>';
    const sunIcon = '<i class="bx bx-sun"></i>';

    const themeColorButton = document.getElementById("theme-color");
    const themeDropdown = document.getElementById("theme-dropdown");
    const color1 = document.querySelector(".color-1");
    const color2 = document.querySelector(".color-2");
    const color3 = document.querySelector(".color-3");
    const color4 = document.querySelector(".color-4");

    themeColorButton.addEventListener("click", function() {
        themeDropdown.classList.toggle("dropdown-active");
    });

    color1.addEventListener("click", function() {
        document.documentElement.style.setProperty('--first-color', '#4CCD99');
    });

    color2.addEventListener("click", function() {
        document.documentElement.style.setProperty('--first-color', '#FF0080');
    });

    color3.addEventListener("click", function() {
        document.documentElement.style.setProperty('--first-color', '#C40C0C');
    });

    color4.addEventListener("click", function() {
        document.documentElement.style.setProperty('--first-color', '#FF5F00');
    });

    document.addEventListener("click", function(event) {
        if (!themeColorButton.contains(event.target) && !themeDropdown.contains(event.target)) {
            themeDropdown.classList.remove("dropdown-active");
        }
    });

    themeButton.addEventListener("click", function() {
        const isDarkTheme = root.classList.contains("dark-theme");

        if (isDarkTheme) {
            root.style.setProperty("--bg-color", "#ffff");
            root.style.setProperty("--second-color", "#001027");
            root.style.setProperty("--theme-dark", "#d9d9d9");
            themeButton.innerHTML = moonIcon;
        } else {
            root.style.setProperty("--bg-color", "#001027");
            root.style.setProperty("--second-color", "#ffff");
            root.style.setProperty("--theme-dark", "#001e47");
            themeButton.innerHTML = sunIcon;
        }

        root.classList.toggle("dark-theme");
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const aboutImgContainer = document.querySelector(".about__img");

    aboutImgContainer.addEventListener("mousemove", function(event) {
        const rect = aboutImgContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const maxTilt = 15; 

        const tiltX = maxTilt * deltaY;
        const tiltY = -maxTilt * deltaX;

        aboutImgContainer.querySelector('img').style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    aboutImgContainer.addEventListener("mouseleave", function() {
        aboutImgContainer.querySelector('img').style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
 


const scrollTopButton = document.querySelector('.scroll-top-btn');


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});