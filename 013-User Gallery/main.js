var profile = document.querySelectorAll('.profile');
var detail = document.querySelector('.detail');
var close = document.querySelector('.close');
var profileImgDiv = document.querySelector('.image img');

for(var i = 0; i < profile.length; i++){
    profile[i].addEventListener('click', function(){
        var profileImg = this.querySelector('img');
        profileImgDiv.src = profileImg.src;
        detail.classList.add('active');
    });
}

close.addEventListener('click',function(){
    detail.classList.remove('active');
})
