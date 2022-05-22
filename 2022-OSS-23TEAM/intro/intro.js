
let bgImages = ["Amumu_0.jpg", "Darius_0.jpg", "Fiora_0.jpg", "Garen_0.jpg","MonkeyKing_0.jpg","Sett_0.jpg","Warwick_0.jpg"];
let bgLen = bgImages.length;
let background = document.getElementById("background-intro");

let ALTERING_TIMING0 = 6*60;
let ALTERING_TIMING1 = 7*60;
let ALTERING_TIMING1_2 = 8*60;
let ALTERING_TIMING2 = 9*60;

let count = 120;
let opa = 1;
let idx = -1;



//quick-menu
let topBtn = document.getElementById("top_btn");
let homeBtn = document.getElementById("home_btn");

function smoothScrollTop(){
	document.documentElement.scrollTop = 0;
}

topBtn.addEventListener("click", () => {
    smoothScrollTop(0);
})

homeBtn.addEventListener("click", () => {
    //go to home
    location.href = "index.html";
})

//background cycle
function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

window.addEventListener("load", ()=>{
    //init
    shuffle(bgImages);
    //background cycle
    showImages();
});

let showImages = ()=>{
    count++;
    if(count > ALTERING_TIMING0 && count < ALTERING_TIMING1){
        opa = 1 + ((ALTERING_TIMING0-count) / 60);
        background.style.opacity = opa;
    }else if(count === ALTERING_TIMING1){
        idx = (idx+1) % bgLen;
        background.setAttribute("src",`2022-OSS-23TEAM/intro/${bgImages[idx]}`);
    }else if(count > ALTERING_TIMING1_2 && count < ALTERING_TIMING2){
        opa = ((count - ALTERING_TIMING1 - 60) / 60);
        background.style.opacity = opa;
    }else if(count === ALTERING_TIMING2){
        count = 0;
    }
    
    requestAnimationFrame(showImages);
}

