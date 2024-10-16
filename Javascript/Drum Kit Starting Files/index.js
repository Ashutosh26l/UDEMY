var numbersOfDrumsButtons=document.querySelectorAll(".drum").length;
for(var i=0;1<numbersOfDrumsButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var audio=new audio("sounds/tom-1.mp3");
        audio.play();
    });
}-