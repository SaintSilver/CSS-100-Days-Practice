var fileName = '';
var uploading = false;

var dropzone = document.querySelector('.dropzone');
var fileInput = document.querySelector('input.input');
var uploadBtn = document.querySelector('.upload-btn');
var uploadImg = document.querySelector('.upload');
var syncingImg = document.querySelector('.syncing');
var doneImg = document.querySelector('.done');
var bar = document.querySelector('.bar');
var fileNameSpan = document.querySelector('.filename');

dropzone.addEventListener('drag', stopEvent);
dropzone.addEventListener('dragstart', stopEvent);
dropzone.addEventListener('dragend', stopEvent);
dropzone.addEventListener('dragover', stopEvent);
dropzone.addEventListener('dragenter', stopEvent);
dropzone.addEventListener('dragleave', stopEvent);
dropzone.addEventListener('dragdrop', stopEvent);

dropzone.addEventListener('dragover',dragOn);
dropzone.addEventListener('dragenter',dragOn);

dropzone.addEventListener('dragleave',dragOff);
dropzone.addEventListener('dragend',dragOff);

dropzone.addEventListener('drop',drop);
fileInput.addEventListener('change',drop);

uploadBtn.addEventListener('click',function(){
    if(!uploading && fileName !== ''){
        uploading = true;
        uploadBtn.innerHTML = 'Uploading...';
        dropzone.style.display = 'none';
        
        syncingImg.classList.add('active');
        doneImg.classList.add('active');
        bar.classList.add('active');
        setTimeout(showDone, 3200);
    } else {
        alert('There is no file.');
    }
});

function showDone(){
    uploadBtn.innerHTML = 'DONE';
}

function drop(e){
    if(e.dataTransfer === undefined){
        //file input change event
        fileName = this.files[0].name;
        fileNameSpan.innerHTMl = fileName;
    } else {
        //file drag n drop event
        fileName = e.dataTransfer.files[0]['name'];
    }
    
    fileNameSpan.innerHTML = fileName;
    uploadImg.style.display = 'none';
}

function stopEvent(e){
    e.preventDefault();
    e.stopPropagation();
}

function dragOn(){
    dropzone.classList.add('is-dragover');
}

function dragOff(){
    dropzone.classList.remove('is-dragover');
}




