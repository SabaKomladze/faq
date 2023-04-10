const button = document.getElementsByClassName('sec');

for( i = 0; i < button.length; i++ ){

    button[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};