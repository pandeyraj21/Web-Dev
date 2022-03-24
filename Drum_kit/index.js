var j = document.querySelectorAll(".drum").length;

for (var i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
  Play(button);
  addanimation(button);
    });
  }

  document.addEventListener("keypress",function(event){
    Play(event.key);
    addanimation(event.key);
  });


function Play(Button){
  switch (Button) {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;

    case "a":
      var A = new Audio("sounds/tom-2.mp3");
      A.play();
      break;

    case "s":
      var S = new Audio("sounds/tom-3.mp3");
      S.play();
      break;

    case "d":
      var D = new Audio("sounds/tom-4.mp3");
      D.play();
      break;

    case "j":
      var J = new Audio("sounds/snare.mp3");
      J.play();
      break;

    case "k":
      var K = new Audio("sounds/crash.mp3");
      K.play();
      break;

    case "l":
      var L = new Audio("sounds/kick-bass.mp3");
      L.play();
      break;

    default:
      console.log("Button");
  }
}

function addanimation(currentkey){

  var z=document.querySelector("."+ currentkey);
  z.classList.add("pressed");

  setTimeout(function(){
    z.classList.remove("pressed");

  },100);
}
