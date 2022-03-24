var songIndex=0;
var audioElement=new Audio('songs/1.mp3');
var masterplay=document.getElementById('masterplay');
var myProgessBar=document.getElementById('myProgessBar');
var gif=document.getElementById('gif');
var mastersongName=document.getElementById('mastersongName');
var songItems =Array.from(document.getElementsByClassName('songItem'));




var songs=[
{songName:"Salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Ghana-kasoota",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName:"Game",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName:"Wishlist",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName:"Koonch",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName:"AAm jihe munde",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
{songName:"sanam teri kasam",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
{songName:"Sultan",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
{songName:"Dangal",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
{songName:"teri baari",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},

]


songItems.forEach((element,i) => {

    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});

masterplay.addEventListener('click',()=>{
if(audioElement.paused||audioElement.currentTime<=0){
 audioElement.play();
 mastersongName.innerText=songs[songIndex].songName;
 masterplay.classList.remove('fa-play-circle');
 masterplay.classList.add('fa-pause-circle');

 document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');
 document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');

 gif.style.opacity=1;
}else
{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');

   document.getElementById(`${songIndex}`).classList.remove('fa-pause-circle');
   document.getElementById(`${songIndex}`).classList.add('fa-play-circle');
    gif.style.opacity=0;

}

})

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgessBar.value=progress; 

})

myProgessBar.addEventListener('change',()=>{

    audioElement.currentTime=(myProgessBar.value *audioElement.duration)/100;

})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        if(songIndex==parseInt(e.target.id)){
            audioElement.pause();
           masterplay.classList.remove('fa-pause-circle');
          masterplay.classList.add('fa-play-circle');
          gif.style.opacity=0;
        } else{
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`songs/${songIndex+1}.mp3`;
           
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
          
    
            mastersongName.innerText=songs[songIndex].songName;
            
            gif.style.opacity=1;
        }
       

    })

})

document.getElementById('forward').addEventListener('click',()=>{

          if(songIndex>=9){

            songIndex=0;
          }else{
            songIndex += 1;
          }
             mastersongName.innerText=songs[songIndex].songName;
            audioElement.src=`songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex-1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


