function navbarFunction() {
    var navbar = document.getElementById('topNav');

    if (navbar.className === 'navbar') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
}

function showBigPicture(id) {
    document.getElementById(id).style.display = 'block';
}

function hideBigPicture(id) {
    document.getElementById(id).style.display = 'none';
}

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none';
        }
    }
});

window.onload = changeSlide;

var number = Math.floor(Math.random() * 4) + 1;

var timer1 = 0;

function currentSlide(n) {
    clearTimeout(timer1);
    number = n - 1;
    changeSlide();
}

function plusSlides(n) {
    clearTimeout(timer1);
    number += n;
    if (number < 0) {
        number = 3;
    }
    changeSlide();
}

function changeSlide() {
    number++;
    if (number > 4) {
        number = 1;
    }
    var image = '<img src=\"images/gallery' + number + '.jpg\">';
    document.getElementById('slideshow').innerHTML = image;

    timer1 = setTimeout('changeSlide()', 3000);
}