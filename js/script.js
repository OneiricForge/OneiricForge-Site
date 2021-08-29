let headerButtons = document.getElementsByClassName("headerButton");
let header = document.getElementById("header");



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    document.getElementById("header").style.backgroundColor = 'rgb(255, 255, 255)';
    for(let i = 0; i < headerButtons.length; i++){
        headerButtons[i].style.color = 'rgb(27, 32, 39)';
    }
  } else {
    document.getElementById("header").style.backgroundColor = 'transparent';
    for(let i = 0; i < headerButtons.length; i++){
        headerButtons[i].style.color = 'rgb(255, 255, 255)';
    }
  }
}




//#1b202700