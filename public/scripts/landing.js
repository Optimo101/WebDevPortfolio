function headsOrTails() {
   var random_boolean = Math.random() >= 0.6;
   return random_boolean;
}

function getGridAreaAspectRatio(rows, columns, cellSize, gap) {
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

function getFilteredGridAreaColumns(gridAreas, span, columns) {
   var arr = [];
   var regex = /\d+, (\d+), \d+, \d+/;
   var column2Start = 1 + span;
   column2Start = column2Start.toString();
      
   for (var ga = 0; ga < gridAreas.length; ga++) {
      if( (gridAreas[ga].match(regex)[1] === column2Start)) {
         arr.push(gridAreas[ga]);
      }
   }

   // if (columns >= 6) {
   //    for (var ga = 0; ga < gridAreas.length; ga++) {
   //       if( (gridAreas[ga].match(regex)[1] === (Number(column2Start) + span).toString())) {
   //          arr.push(gridAreas[ga]);
   //       }
   //    }
   // }
   return arr;
}

function getFilteredGridAreaRows(gridAreas, span, rows) {
   var arr = [];
   var regex = /(\d+), \d+, \d+, \d+/;
   var row2Start = 1 + span;
   row2Start = row2Start.toString();
      
   for (var ga = 0; ga < gridAreas.length; ga++) {
      if( (gridAreas[ga].match(regex)[1] === row2Start)) {
         arr.push(gridAreas[ga]);
      }
   }

   // if (rows > 3) {
   //    for (var ga = 0; ga < gridAreas.length; ga++) {
   //       if( (gridAreas[ga].match(regex)[1] === (Number(row2Start) + span).toString())) {
   //          arr.push(gridAreas[ga]);
   //       }
   //    }
   // }
   return arr;
}

function getRandomColorFromSet() {
   // #5A90BF;   Secondary color: rgb(89, 89, 86);  Hover color (links): #91CCFF;  Horizontal bar from 'About Me' section: rgb(155, 180, 202);
   let num = Math.random();
   let color = '#5A90BF';
   if (num <= 0.25) {
      color = 'rgb(89,89,86)';
   } else if (num <= 0.50) {
      color = '#91CCFF';
   } else if (num <= 0.75) {
      color = 'rgb(155, 180, 202)';
   } else {
      color = color;
   }
   return color;

}

function createGridItem(area) {  
   var gridItem = document.createElement('div');
   var tracks = area.match(/(\d+)/g);
   gridItem.style.gridRowStart = tracks[0];
   gridItem.style.gridColumnStart = tracks[1];
   gridItem.style.gridRowEnd = tracks[2];
   gridItem.style.gridColumnEnd = tracks[3];
   gridItem.style.backgroundColor = getRandomColorFromSet();
   gridItem.style.opacity = 1;
   gridItem.style.zIndex = 1;
   // gridItem.style.backgroundImage = 'url(../landing-grid-images/coffee.jpg)';
   // gridItem.style.backgroundSize = 'cover';
   // gridItem.style.backgroundPosition = 'center';
   return gridItem;
}

//Get the grid container
var landingGridElement = document.getElementById('landing-grid');

function recalcLandingGrid() {
   landingGridElement.innerHTML = '';

   var Grid = {};
   Grid.width = Number(window.getComputedStyle(landingGridElement).width.match(/\d+/));
   Grid.height = Number(window.getComputedStyle(landingGridElement).height.match(/\d+/));
   Grid.numOfGridColumns = 12; //hard-coded in landing.css
   Grid.gridGap = 5; //px //hard-coded in landing.css
   Grid.gridCellWidth = (Grid.width - (Grid.gridGap * (Grid.numOfGridColumns - 1))) / Grid.numOfGridColumns;
   Grid.numOfGridRows = Math.floor((Grid.height + Grid.gridGap) / (Grid.gridCellWidth + Grid.gridGap));
   
   landingGridElement.style.gridTemplateRows = `repeat(${Grid.numOfGridRows}, ${Grid.gridCellWidth}px)`;

   Grid.gridAreaSpan = (Grid.gridCellWidth < 25) ? 4 : (Grid.gridCellWidth < 50) ? 3 : 2;
   Grid.numOfGridAreaColumns = Grid.numOfGridColumns / Grid.gridAreaSpan;
   Grid.numOfGridAreaRows = Math.floor(Grid.numOfGridRows / Grid.gridAreaSpan);
   Grid.gridAreaAspectRatio = getGridAreaAspectRatio(Grid.numOfGridAreaRows, Grid.numOfGridAreaColumns, Grid.gridCellWidth, Grid.gridGap);
   
   Grid.allGridAreas = getAllGridAreas(Grid.numOfGridAreaColumns, Grid.numOfGridAreaRows, Grid.gridAreaSpan);
   Grid.filteredGridAreaColumns = getFilteredGridAreaColumns(Grid.allGridAreas, Grid.gridAreaSpan, Grid.numOfGridAreaColumns);
   Grid.filteredGridAreaRows = getFilteredGridAreaRows(Grid.allGridAreas, Grid.gridAreaSpan, Grid.numOfGridAreaRows);
   
   Grid.finalGridAreas = [];

   Grid.allGridAreas.forEach(function(gridArea){
      let flip = headsOrTails();
      if (flip) {
         Grid.finalGridAreas.push(gridArea);
      }
   });

   Grid.filteredGridAreaColumns.forEach(function(gridArea){
      if(!(Grid.finalGridAreas.includes(gridArea))) {
         Grid.finalGridAreas.push(gridArea);
      }
   });

   Grid.filteredGridAreaRows.forEach(function(gridArea){
      if(!(Grid.finalGridAreas.includes(gridArea))) {
         Grid.finalGridAreas.push(gridArea);
      }
   });

   

   //Start makin' DIVS
   Grid.gridItems = [];
   
   //create document fragment to hold all the grid items.
   var fragment = document.createDocumentFragment();

   Grid.finalGridAreas.forEach(function(gridArea) {
      var gridItem = createGridItem(gridArea);
      Grid.gridItems.push(gridItem);
   });

   //append all the created grid item DIVs to the fragment.
   Grid.gridItems.forEach(function(gridItem) {
      fragment.appendChild(gridItem);
   });

   //append the fragment to the grid container.
   landingGridElement.appendChild(fragment);

   console.log(Grid);
}

window.onload = recalcLandingGrid;
window.onresize = recalcLandingGrid;

