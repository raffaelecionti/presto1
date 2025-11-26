let navbar= document.querySelector('#navbar');
let links= document.querySelectorAll('.nav-link');
let logonavbar= document.querySelector('#logonavbar');
let lightsaber= document.querySelector('#lightsaber');
let collapse= document.querySelector('#collapse');
let check= false;



window.addEventListener('scroll', () => {
    let scrolled= window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
         collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height= '70px';
        links.forEach( (link)=> {
        link.style.color= 'var(--black)';
        });
        logonavbar.src= 'http://127.0.0.1:5500/media/logo-black.png';
        logolightsaber.src= 'http://127.0.0.1:5500/media/spadalasernera-black.png';
 }else{
    navbar.classList.add('bg-black');
        navbar.classList.ad('bg-yellow'); 
         collapse.classList.add('bg-black');
        collapse.classList.ad('bg-yellow'); 
           navbar.style.height= '140px';
           links.forEach( (link)=> {
        link.style.color= 'var(--yellow)';
        });
        logonavbar.src= 'http://127.0.0.1:5500/media/logo-yellow.png';
         logolightsaber.src= 'http://127.0.0.1:5500/media/spadalasergialla-yellow.png';
    }
});


lightsaber.addEventListener('click', () => {
    if (check == false){
    lightsaber.style.transform= 'rotate(-90deg)';
    check= true;    
    }else{
        lightsaber.style.transform= 'rotate(0deg)';
        check= false;
    }
   
});




let SecondNumber= document.querySelector('#SecondNumber');
let FirstNumber= document.querySelector('#FirstNumber');
let thirdNumber= document.querySelector('thirdNumber');

let confirm = true;

function createInterval( n, element, time ){
let counter= 0;
let interval= setInterval( () => {
if(counter < n){
    counter++
    element.innerHTML= counter;
}else{
    console.log('adesso mi fermo')
    clearInterval(interval);
}
}, time);
setTimeout( () => {
    confirm= true;
}, 8000);
}


createInterval(100, FirstNumber, 100);
createInterval(200, SecondNumber, 50);
createInterval(300, thirdNumber, 30);


let observer= new IntersectionObserver (   (entries) =>  {

entries.forEach( (entry) => {
    if(entry.isIntersecting){
createInterval(100, FirstNumber, 100);
createInterval(200, SecondNumber, 50);
createInterval(300, thirdNumber, 30);
confirm= false;

    }
});

});

observer.observe(FirstNumber);



let rewievs = [
{user: 'matteo', description: `il miglior sito di annunci del mondo`, rank: 5},
{user: 'alin', description: `veramente non mi da nulla`, rank: 1},
{user: 'michael', description: `mi piace tranne per Star Trek`, rank: 3},
{user: 'arina', description: `Star Wars è meglio!`, rank: 5},
]
let swiperWrapper= document.querySelector('.swiper-wrapper');
rewievs.forEach( (recensione) => {
let div = document.createElement('div');
div.classList.add('swiper-slide');
div.innerHTML=
 <div class="card-rewiev">
            <p class="lead text-center">${recensione.description}</p>
            <p class="h4 text-center">${recensione.user}</p>
            <div class="d-flex justify-content-center star">
               
            </div>
        </div>

;

swiperWrapper.appendChild(div);
});

let stars = document.querySelectorAll('.star');

stars.forEach( (star, index) =>{
    for(let i=1; 1<= rewievs[index].rank; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star', 'text-yellow', 'mx-1');
        star.appendChild(icon);
    }

    let difference= 5 - rewievs[index].rank;

     for(let i=1; 1<= difference; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star', 'text-yellow', 'mx-1');
        star.appendChild(icon);
    }
})


//swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
 effect: "flip",
grabCursor: true,
loop: true,
  

 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});












