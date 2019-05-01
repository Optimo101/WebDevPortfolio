//Get the grid container
var landingGridElement = document.getElementById('landing-grid');

function getGridAreaAspectRatio(rows, columns, cellSize, gap, span) {
   let width = ((cellSize * columns) + (gap * (columns -1)));
   let height = ((cellSize * rows) + (gap * (rows -1)));
   return width / height;
}

function getAllGridAreas(columns, rows, span) {
   var arr = [];
   for(var c = 1; c < ((columns * span) + 1); c += span) {
      for(var r = 1; r < ((rows * span) + 1); r += span) {
         arr.push(`${r}, ${c}, ${r + span}, ${c + span}`);
      }
   }
   return arr;
}

function createGridItem(area) {
   var gridItem = document.createElement('div');
   var tracks = area.match(/(\d+)/g);
   gridItem.style.gridRowStart = tracks[0];
   gridItem.style.gridColumnStart = tracks[1];
   gridItem.style.gridRowEnd = tracks[2];
   gridItem.style.gridColumnEnd = tracks[3];
   gridItem.style.backgroundColor = 'pink';
   return gridItem;

}
function recalcLandingGrid() {
   landingGridElement.innerHTML = '';

   var Grid = {};
   Grid.width = Number(window.getComputedStyle(landingGridElement).width.match(/\d+/));
   Grid.height = Number(window.getComputedStyle(landingGridElement).height.match(/\d+/));
   Grid.numOfGridColumns = 12; //hard-coded in landing.css
   Grid.gridGap = 5 //px //hard-coded in landing.css
   Grid.gridCellWidth = (Grid.width - (Grid.gridGap * (Grid.numOfGridColumns - 1))) / Grid.numOfGridColumns; 
   Grid.numOfGridRows = Math.floor((Grid.height + Grid.gridGap) / (Grid.gridCellWidth + Grid.gridGap));
   Grid.gridAreaSpan = (Grid.gridCellWidth < 25) ? 3 : (Grid.gridCellWidth < 63) ? 2 : 1;
   Grid.numOfGridAreaColumns = Grid.numOfGridColumns / Grid.gridAreaSpan;
   Grid.numOfGridAreaRows = Math.floor(Grid.numOfGridRows / Grid.gridAreaSpan);
   Grid.gridAreaAspectRatio = getGridAreaAspectRatio(Grid.numOfGridAreaRows, Grid.numOfGridAreaColumns, Grid.gridCellWidth, Grid.gridGap, Grid.gridAreaSpan);
   Grid.gridAreas = getAllGridAreas(Grid.numOfGridAreaColumns, Grid.numOfGridAreaRows, Grid.gridAreaSpan);
   Grid.gridItems = [];
   landingGridElement.style.gridTemplateRows = `repeat(${Grid.numOfGridRows}, ${Grid.gridCellWidth}px)`;

   //create document fragment to hold all the grid items.
   var fragment = document.createDocumentFragment();
   //create grid item DIV elements for every grid area.
   Grid.gridAreas.forEach(function(gridArea){
      var gridItem = createGridItem(gridArea);
      Grid.gridItems.push(gridItem);
   });
   //append all the created grid item DIVs to the fragment.
   Grid.gridItems.forEach(function(gridItem){
      fragment.appendChild(gridItem);
   })
   //append the fragment to the grid container.
   landingGridElement.appendChild(fragment);

   console.log(Grid);
}

window.onload = recalcLandingGrid;
window.onresize = recalcLandingGrid;

