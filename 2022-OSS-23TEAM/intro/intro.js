
let bgImages = ["Amumu_0.jpg", "Darius_0.jpg", "Fiora_0.jpg", "Garen_0.jpg","MonkeyKing_0.jpg","Sett_0.jpg","Warwick_0.jpg"];
let bgLen = bgImages.length;
let background = document.getElementById("background-intro");

let ALTERING_TIMING0 = 240;
let ALTERING_TIMING1 = 300;
let ALTERING_TIMING2 = 360;

let count = 0;
let opa = 1;
let idx = 0;


//quick-menu
let topBtn = document.getElementById("top_btn");
let homeBtn = document.getElementById("home_btn");

topBtn.addEventListener("click", () => {
    smoothScrollTop(0);
})

//background cycle
function shuffle(array) { array.sort(() => Math.random() - 0.5); }

window.addEventListener("load", ()=>{
    //init
    shuffle(bgImages);
    //background cycle
    showImages();
});

let showImages = ()=>{
    count++;
    if(count > ALTERING_TIMING0 && count < ALTERING_TIMING1){
        opa = 1 + ((ALTERING_TIMING0-count)/60);
        background.style.opacity = opa;
    }else if(count === ALTERING_TIMING1){
        idx++;
        if(idx === bgLen){idx = 0; shuffle(bgImages);}
        background.setAttribute("src",`2022-OSS-23TEAM/intro/${bgImages[idx]}`);
    }else if(count > ALTERING_TIMING1 && count < ALTERING_TIMING2){
        opa = ((count - ALTERING_TIMING1) / 60);
        background.style.opacity = opa;
    }else if(count === ALTERING_TIMING2){
        count = 0;
    }
    
    requestAnimationFrame(showImages);
}

