var random1=  Math.floor(Math.random()*6)+1;
var random_image1="dice"+random1 +".png";
var new1 =document.querySelectorAll("img")[0];
new1.setAttribute("src",random_image1);


var random2=  Math.floor(Math.random()*6)+1;
var random_image2="dice"+random2 +".png";
var new2 =document.querySelectorAll("img")[1];
new2.setAttribute("src",random_image2);

if(random_image1>random_image2){
  document.querySelector("h1").innerHTML="🏆Player1 Win";
}else if(random_image2>random_image1){
  document.querySelector("h1").innerHTML="🏆Player2 Win";
}else{
  document.querySelector("h1").innerHTML="🔐Refresh me";
}
