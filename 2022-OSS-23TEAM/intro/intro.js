
let bg_images = ["Amumu_0.jpg", "Darius_0.jpg", "Fiora_0.jpg", "Garen_0.jpg","MonkeyKing_0.jpg","Sett_0.jpg","Warwick_0.jpg"]
let background = document.querySelector("body");

//quick-menu
let topBtn = document.getElementById("top_btn");
let homeBtn = document.getElementById("home_btn");

topBtn.addEventListener("click", () => {
    smoothScrollTop(0);
})

//background
function shuffle(array) { array.sort(() => Math.random() - 0.5); }

window.addEventListener("load", ()=>{
    //images suffle
    shuffle(bg_images);
    

})
