
let bg_images = ["Amumu_0.jpg", "Darius_0.jpg", "Fiora_0.jpg", "Garen_0.jpg","MonkeyKing_0.jpg","Sett_0.jpg","Warwick_0.jpg"]
let background = document.querySelector("body");
let idx = 0;

//quick-menu
let topBtn = document.getElementById("top_btn");
let homeBtn = document.getElementById("home_btn");

topBtn.addEventListener("click", () => {
    smoothScrollTop(0);
})

//background
function shuffle(array) { array.sort(() => Math.random() - 0.5); }

window.addEventListener("load", ()=>{

    shuffle(bg_images);
    //background cycle
    setTimeout(showImage,5000);
});

function showImage(){
    //images suffle
    idx = (idx+1)%(bg_images.length);
    background.style.backgroundImage=`url(2022-OSS-23TEAM/intro/${bg_images[idx]})`;
    setTimeout(showImage,5000);
}

function ch_bg()
{   
    idx = (idx+1)%(bg_images.length);
    background.style.backgroundImage=`url(2022-OSS-23TEAM/intro/${bg_images[idx]})`;
}

