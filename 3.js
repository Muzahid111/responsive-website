// Typing Script js
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "You tuber", "Blogger" ],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer",  "You tuber", "Blogger" ],
    typeSpeed: 100,
    backSpeed: 80,
});

// show/hide faqs ans
const faqs =  document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})

// show/hide nav menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

}
closeBtn.addEventListener('click', closeNav)

// nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.
    toggle('window-scroll', window.scrollY>100);
})

