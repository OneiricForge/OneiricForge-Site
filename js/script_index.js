let headerButtons = document.getElementsByClassName("headerButton");
let header = document.getElementById("header");
let Lorem = "";
var coloredHeader;

let width = window.innerWidth;
let height = window.innerHeight;


window.onload = function() {responsiveMain()};
window.onresize = function() {resize()};

function responsiveMain(){
  Lorem = document.getElementById("LoremText").innerHTML.toString();
  if(width < 733){
    document.getElementById("mainImage").style.backgroundSize = "75%";
    document.getElementById("mainImage").style.backgroundPositionY = "30%";
    document.getElementById("mainImage").style.minHeight = "400px";
    document.getElementById("mainText").style.fontSize = "1.3em";
    
    document.getElementById("Copyright").style.fontSize = "0.5em";
    document.getElementById("menuButton").style.display = "initial";
    for(let i = 0; i < headerButtons.length; i++){
      headerButtons[i].style.display = "none";
    }
    //console.log("Plus Petit");
  } else {
    //document.getElementById("mainImage").style.backgroundSize = "auto 40%";
    document.getElementById("mainImage").style.backgroundPositionY = "40%";
    document.getElementById("mainImage").style.minHeight = "580px";
    document.getElementById("mainText").style.fontSize = "3em";

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

function ShowLorem(){
  document.getElementById("LoremText").innerHTML = Lorem;
}

function HideLorem(){
  document.getElementById("LoremText").innerHTML = "";
}

  /*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    document.getElementById("header").style.backgroundColor = 'rgb(255, 255, 255)';
    for(let i = 0; i < headerButtons.length; i++){
        headerButtons[i].style.color = 'rgb(27, 32, 39)';
        //headerButtons[i].is('::after').style.backgroundColor = 'rgb(27, 32, 39)';
        //headerButtons[i].style.backgroundColor = 'rgb(27, 32, 39)';
        if(headerButtons[i].is(":hover")){
          if(coloredHeader == false) headerButtons[i].style.color = 'rgb(255, 255, 255)';
          else headerButtons[i].style.color = 'rgb(27, 32, 39)';
        } 
        else
        {
          if(coloredHeader == false) headerButtons[i].style.color = 'rgb(27, 32, 39)';
          else headerButtons[i].style.color = 'rgb(255, 255, 255)';
        }
        
    }
    coloredHeader = true;
  } else {
    document.getElementById("header").style.backgroundColor = 'transparent';
    for(let i = 0; i < headerButtons.length; i++){
        headerButtons[i].style.color = 'rgb(255, 255, 255)';
        //headerButtons[i].is('::after').style.backgroundColor = 'rgb(255, 255, 255)';
        //headerButtons[i].style.backgroundColor = 'rgb(255, 255, 255)';
        if(headerButtons[i].is(":hover")){
          if(coloredHeader == false) headerButtons[i].style.color = 'rgb(255, 255, 255)';
          else headerButtons[i].style.color = 'rgb(27, 32, 39)';
        } 
        else
        {
          if(coloredHeader == false) headerButtons[i].style.color = 'rgb(27, 32, 39)';
          else headerButtons[i].style.color = 'rgb(255, 255, 255)';
        }
    }
    coloredHeader = false;
  }

  //console.log(coloredHeader)
}


  for(let i = 0; i < headerButtons.length; i++){
    if(headerButtons[i].is(":hover")){
      if(coloredHeader == false) headerButtons[i].style.color = 'rgb(255, 255, 255)';
      else headerButtons[i].style.color = 'rgb(27, 32, 39)';
    } 
    else
    {
      if(coloredHeader == false) headerButtons[i].style.color = 'rgb(27, 32, 39)';
      else headerButtons[i].style.color = 'rgb(255, 255, 255)';
    }
  }*/


//#1b202700