function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }

 }


window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scroll-top')
        scroll.classList.toggle('active', this.window.scrollY > 450)
})

function backtop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}