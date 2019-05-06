let grid1 = document.getElementById("grid1");
let grid2 = document.getElementById("grid2");
let grid3 = document.getElementById("grid3");
let grid4 = document.getElementById("grid4");

let grid1Title = document.getElementById("grid1-title");
let grid2Title = document.getElementById("grid2-title");
let grid3Title = document.getElementById("grid3-title");
let grid4Title = document.getElementById("grid4-title");

let grid1Summary = document.getElementById("grid1-summary");
let grid2Summary = document.getElementById("grid2-summary");
let grid3Summary = document.getElementById("grid3-summary");
let grid4Summary = document.getElementById("grid4-summary");

let grid1Icon = document.getElementById("grid1-icon");
let grid2Icon = document.getElementById("grid2-icon");
let grid3Icon = document.getElementById("grid3-icon");
let grid4Icon = document.getElementById("grid4-icon");



grid1.addEventListener("mouseover", function(){
    grid1Title.style.fontWeight = 700;
    grid1Icon.classList.add("hidden");
    grid1Icon.style.opacity = 0;
    grid1Summary.classList.remove("height-zero");
    grid1Summary.classList.remove("hidden");
    grid1Summary.style.opacity = 1;
    grid1Summary.style.margin = "15px";
});
grid1.addEventListener("mouseout", function(){
    grid1Title.style.fontWeight = 400;
    grid1Icon.classList.remove("hidden");
    grid1Icon.style.opacity = 1;
    grid1Summary.classList.add("hidden");
    grid1Summary.classList.add("height-zero");
    grid1Summary.style.opacity = 0;
    grid1Summary.style.margin = "15px 15px 0px 15px";
});


grid2.addEventListener("mouseover", function(){
    grid2Title.style.fontWeight = 700;
    grid2Icon.classList.add("hidden");
    grid2Icon.style.opacity = 0;
    grid2Summary.classList.remove("hidden");
    grid2Summary.classList.remove("height-zero");
    grid2Summary.style.opacity = 1;
    grid2Summary.style.margin = "15px";
});
grid2.addEventListener("mouseout", function(){
    grid2Title.style.fontWeight = 400;
    grid2Icon.classList.remove("hidden");
    grid2Icon.style.opacity = 1;
    grid2Summary.classList.add("height-zero");
    grid2Summary.classList.add("hidden");
    grid2Summary.style.opacity = 0;
    grid2Summary.style.margin = "15px 15px 0px 15px";
});


grid3.addEventListener("mouseover", function(){
    grid3Title.style.fontWeight = 700;
    grid3Icon.classList.add("hidden");
    grid3Icon.style.opacity = 0;
    grid3Icon.classList.add("height-zero");
    grid3Summary.classList.remove("hidden");
    grid3Summary.classList.remove("height-zero");
    grid3Summary.style.opacity = 1;
    grid3Summary.style.margin = "15px";
});
grid3.addEventListener("mouseout", function(){
    grid3Title.style.fontWeight = 400;
    grid3Icon.classList.remove("hidden");
    grid3Icon.style.opacity = 1;
    grid3Icon.classList.remove("height-zero");
    grid3Summary.classList.add("height-zero");
    grid3Summary.classList.add("hidden");
    grid3Summary.style.opacity = 0;
    grid3Summary.style.margin = "0px 15px 5px 15px";
});


grid4.addEventListener("mouseover", function(){
    grid4Title.style.fontWeight = 700;
    grid4Icon.classList.add("hidden");
    grid4Icon.style.opacity = 0;
    grid4Icon.classList.add("height-zero");
    grid4Summary.classList.remove("hidden");
    grid4Summary.classList.remove("height-zero");
    grid4Summary.style.opacity = 1;
    grid4Summary.style.margin = "15px";
});
grid4.addEventListener("mouseout", function(){
    grid4Title.style.fontWeight = 400;
    grid4Icon.classList.remove("hidden");
    grid4Icon.style.opacity = 1;
    grid4Icon.classList.remove("height-zero");
    grid4Summary.classList.add("height-zero");
    grid4Summary.classList.add("hidden");
    grid4Summary.style.opacity = 0;
    grid4Summary.style.margin = "15px 15px 5px 15px";
});

let flex1Icon = document.getElementById("flex1-icon");
let flex2Icon = document.getElementById("flex2-icon");
let flex3Icon = document.getElementById("flex3-icon");
let flex4Icon = document.getElementById("flex4-icon");

let flex1Title = document.getElementById("flex1-title");
let flex2Title = document.getElementById("flex2-title");
let flex3Title = document.getElementById("flex3-title");
let flex4Title = document.getElementById("flex4-title");

let flex1Summary = document.getElementById("flex1-summary");
let flex2Summary = document.getElementById("flex2-summary");
let flex3Summary = document.getElementById("flex3-summary");
let flex4Summary = document.getElementById("flex4-summary");

flex1.addEventListener("mouseover", function(){
    flex1Title.classList.add("hidden");
    flex1Title.style.opacity = 0;
    flex1Title.style.width = "0";
    flex1Title.style.marginLeft = "0";
    flex1Summary.classList.remove("hidden");
    flex1Summary.classList.remove("height-zero");
    flex1Summary.style.opacity = 1;
    flex1Icon.style.transform = "scale(1.2)";
});
flex1.addEventListener("mouseout", function(){
    flex1Title.classList.remove("hidden");
    flex1Title.style.opacity = 1;
    flex1Title.style.marginLeft = "5%";
    flex1Summary.classList.add("hidden");
    flex1Summary.style.opacity = 0;
    flex1Icon.style.transform = "scale(1)";
});

flex2.addEventListener("mouseover", function(){
    flex2Title.classList.add("hidden");
    flex2Title.style.opacity = 0;
    flex2Title.style.width = "0";
    flex2Title.style.marginLeft = "0";
    flex2Summary.classList.remove("hidden");
    flex2Summary.classList.remove("height-zero");
    flex2Summary.style.opacity = 1;
    flex2Icon.style.transform = "scale(1.2)";
});
flex2.addEventListener("mouseout", function(){
    flex2Title.classList.remove("hidden");
    flex2Title.style.opacity = 1;
    flex2Title.style.marginLeft = "5%";
    flex2Summary.classList.add("hidden");
    flex2Summary.style.opacity = 0;
    flex2Icon.style.transform = "scale(1)";
});

flex3.addEventListener("mouseover", function(){
    flex3Title.classList.add("hidden");
    flex3Title.style.opacity = 0;
    flex3Title.style.width = "0";
    flex3Title.style.marginLeft = "0";
    flex3Summary.classList.remove("hidden");
    flex3Summary.classList.remove("height-zero");
    flex3Summary.style.opacity = 1;
    flex3Icon.style.transform = "scale(1.2)";
});
flex3.addEventListener("mouseout", function(){
    flex3Title.classList.remove("hidden");
    flex3Title.style.opacity = 1;
    flex3Title.style.marginLeft = "5%";
    flex3Summary.classList.add("hidden");
    flex3Summary.style.opacity = 0;
    flex3Icon.style.transform = "scale(1)";
});

flex4.addEventListener("mouseover", function(){
    flex4Title.classList.add("hidden");
    flex4Title.style.opacity = 0;
    flex4Title.style.width = "0";
    flex4Title.style.marginLeft = "0";
    flex4Summary.classList.remove("hidden");
    flex4Summary.classList.remove("height-zero");
    flex4Summary.style.opacity = 1;
    flex4Icon.style.transform = "scale(1.2)";
});
flex4.addEventListener("mouseout", function(){
    flex4Title.classList.remove("hidden");
    flex4Title.style.opacity = 1;
    flex4Title.style.marginLeft = "5%";
    flex4Summary.classList.add("hidden");
    flex4Summary.style.opacity = 0;
    flex4Icon.style.transform = "scale(1)";
});

