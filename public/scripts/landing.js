//Get the grid container
var landingGridElement = document.getElementById('landing-grid');



function recalcLandingGrid() {
   var Grid = {};
   Grid.width = Number(window.getComputedStyle(landingGridElement).width.match(/\d+/));
   Grid.height = Number(window.getComputedStyle(landingGridElement).height.match(/\d+/));
   Grid.numOfGridColumns = 12; //hard-coded in landing.css
   Grid.gridGap = 5 //px //hard-coded in landing.css
   Grid.gridCellWidth = (Grid.width - (Grid.gridGap * (Grid.numOfGridColumns - 1))) / Grid.numOfGridColumns; 
   Grid.numOfGridRows = Math.floor((Grid.height + Grid.gridGap) / (Grid.gridCellWidth + Grid.gridGap));
   
   
   landingGridElement.style.gridTemplateRows = `repeat(${Grid.numOfGridRows}, ${Grid.gridCellWidth}px)`;
}


window.onload = recalcLandingGrid;
window.onresize = recalcLandingGrid;

