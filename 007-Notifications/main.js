var searchIcon = document.querySelector('.search-icon');
var searchInput = document.querySelector('.search-input');
var menuIcon = document.querySelector('.menu-icon');
var panel = document.querySelector('.panel');
var menu = document.querySelector('.menu');

searchIcon.addEventListener('click',function(){
    searchInput.classList.toggle('active');
});

menuIcon.addEventListener('click',function(){
    panel.classList.toggle('show-menu');
    menu.classList.toggle('active')
});

