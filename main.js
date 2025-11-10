let navbar= document.querySelector('#navbar');
let links= document.querySelectorAll('.nav-link');
let logonavbar= document.querySelector('#logonavbar');




window.addEventListener('scroll', () => {
    let scrolled= window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        navbar.style.height= '70px';
        links.forEach( (link)=> {
        link.style.color= 'var(--black)';
        });
        logonavbar.src= 'http://127.0.0.1:5500/media/logo-black.png';
 }else{
    navbar.classList.add('bg-black');
        navbar.classList.ad('bg-yellow'); 
           navbar.style.height= '140px';
           links.forEach( (link)=> {
        link.style.color= 'var(--yellow)';
        });
        logonavbar.src= 'http://127.0.0.1:5500/media/logo-yellow.png';
    }
});