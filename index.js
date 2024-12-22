var ele =document.querySelectorAll(".drum").length;
for(var i=0;i<ele;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var btn=this.innerHTML;
    giveSound(btn);
    animationBtn(btn);
  })}
  document.addEventListener("keypress", function(ele){
    giveSound(ele.key);
    animationBtn(ele.key);
  })
  function giveSound(key){
    switch (key) {
      case 'c':
        var audio = new Audio('sounds/crash.mp3');
         audio.play();
        break;
      case 'h':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
      case 'u':
        var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
       break;
      case 'd':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
      case 'a':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
      case 'y':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        default :
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
  }
    
  function animationBtn(btn){
    var activebtn=document.querySelector("."+btn);
    activebtn.classList.add("pressed");
    setTimeout(() => {
      activebtn.classList.remove("pressed");
    }, 100);
  }

