var els = document.getElementsByClassName('no-animation');

document.querySelector('.menu-icon').addEventListener('click',function(){
    while(els[0]){ els[0].classList.remove('no-animation'); }
    this.classList.toggle('active');
});