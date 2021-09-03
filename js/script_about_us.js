let headerButtons = document.getElementsByClassName("headerButton");
let header = document.getElementById("header");
var coloredHeader;

let width = window.innerWidth;
let height = window.innerHeight;


window.onload = function() {responsiveMain()};
window.onresize = function() {resize()};

function responsiveMain(){
  if(width < 733){
    
    document.getElementById("Copyright").style.fontSize = "0.5em";
    document.getElementById("menuButton").style.display = "initial";
    for(let i = 0; i < headerButtons.length; i++){
      headerButtons[i].style.display = "none";
    }
    //console.log("Plus Petit");
  } else {

    document.getElementById("Copyright").style.fontSize = "0.8em";
    document.getElementById("menuButton").style.display = "none";
    for(let i = 0; i < headerButtons.length; i++){
      headerButtons[i].style.display = "initial";
    }
    //console.log("Plus Grand");
  }
}

function resize(){
    width = window.innerWidth;
    height = window.innerHeight;
    responsiveMain()
}