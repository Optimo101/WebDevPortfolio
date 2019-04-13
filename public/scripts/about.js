let grid1 = document.getElementById("grid1");
let grid2 = document.getElementById("grid2");
let grid3 = document.getElementById("grid3");
let grid4 = document.getElementById("grid4");

let grid1Content = document.getElementById("grid1-content");
let grid2Content = document.getElementById("grid2-content");
let grid3Content = document.getElementById("grid3-content");
let grid4Content = document.getElementById("grid4-content");

let grid1Overlay = document.getElementById("grid1-overlay");
let grid2Overlay = document.getElementById("grid2-overlay");
let grid3Overlay = document.getElementById("grid3-overlay");
let grid4Overlay = document.getElementById("grid4-overlay");

grid1.addEventListener("mouseover", function(){
    grid1Content.classList.add("hidden");
    grid1Overlay.classList.remove("hidden");
});
grid1.addEventListener("mouseout", function(){
    grid1Content.classList.remove("hidden");
    grid1Overlay.classList.add("hidden");
});


grid2.addEventListener("mouseover", function(){
    grid2Content.classList.add("hidden");
    grid2Overlay.classList.remove("hidden");
});
grid2.addEventListener("mouseout", function(){
    grid2Content.classList.remove("hidden");
    grid2Overlay.classList.add("hidden");
});


grid3.addEventListener("mouseover", function(){
    grid3Content.classList.add("hidden");
    grid3Overlay.classList.remove("hidden");
});
grid3.addEventListener("mouseout", function(){
    grid3Content.classList.remove("hidden");
    grid3Overlay.classList.add("hidden");
});


grid4.addEventListener("mouseover", function(){
    grid4Content.classList.add("hidden");
    grid4Overlay.classList.remove("hidden");
});
grid4.addEventListener("mouseout", function(){
    grid4Content.classList.remove("hidden");
    grid4Overlay.classList.add("hidden");
});