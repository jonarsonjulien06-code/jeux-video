const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = [ 'video/God of WAR.mp4', 'video/This New Game Is Basically The Last Of Us(720P_HD).mp4', 'video/GTA 6 New Gameplay Leak EPIC VICE YACHT - Cop Chases_(720P_HD).mp4',];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if (index === 2){
        index = -1;
    }
})