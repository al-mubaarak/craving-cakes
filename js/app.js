const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header')
const menuTabs = document.querySelector('.menu-tabs')
const menuItem = document.querySelectorAll('.menu-tab-item')
const menuTabContent = document.querySelectorAll('.menu-tab-content')

navToggler.addEventListener('click', toggleNav)

function toggleNav(){
    nav.classList.toggle('open');
    navToggler.classList.toggle('active');
}

document.addEventListener('click', function(e){
    if(e.target.closest('.nav-items')){
        toggleNav();
    }
});

// sticky header
window.addEventListener('scroll', function(){
    const navHeight = nav.getBoundingClientRect().height -150;
    if(this.pageYOffset > navHeight){
        header.classList.add('sticky')
    } else{
        header.classList.remove('sticky');
    };
})
// ....menu tabs
menuTabs.addEventListener('click', function(e){
    const Data = e.target.dataset.target;
    // console.log(Data);
    
    if(Data){
        menuItem.forEach(function(eachItem) {
            eachItem.classList.remove('active')
            e.target.classList.add('active')
        });
        menuTabContent.forEach(function(eachContent){
            eachContent.classList.remove('active')
            const contentId = eachContent.getAttribute('id')
            if(Data === contentId ){
                // console.log(`this is ${contentId}`);
                eachContent.classList.add('active')
            }
        })
    }
    AOS.init();
})

// preloader fade out
const preloader = document.querySelector('.page-loader')

window.addEventListener('load', function(){
    preloader.classList.add('fade-out')
    AOS.init();
})
