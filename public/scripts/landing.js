function headsOrTails() {
   var random_boolean = Math.random() >= 0.5;
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
   return arr;
}

function getRandomColorFromSet() {
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
   gridItem.style.zIndex = 2;

   return gridItem;
}

function getRandomGridItems(gridAreas) {
   var indexes= [];

   if(gridAreas.length < 25) {
      while(indexes.length < 4) {
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
         }
      }
   } else if(gridAreas.length < 45) {
      while(indexes.length < 6) {
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
         }
      }
   } else {
      while(indexes.length < 10) {
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
         }
      }
   }

   // console.log(indexes);
   var imageGridAreas = []
   for(var i = 0; i < indexes.length; i++){
      imageGridAreas.push(gridAreas[i]);
   }
   return imageGridAreas;
}




// function addGridItemImages(gridItemsArr, gridItemImagesArr) {
//    var listSize = gridItemsArr.length;

//    if (listSize < 1999) {
//       var randomGridItems = getRandomGridItems(listSize);
//       for(var i = 0; i < randomGridItems.length; i++) {
//          gridItemsArr[randomGridItems[i]].style.backgroundImage = `url(../landing-grid-images/${i}.jpg)`;
//          gridItemsArr[randomGridItems[i]].style.backgroundSize = 'cover';
//          gridItemsArr[randomGridItems[i]].style.backgroundPosition = 'center';
//       }

//    }

// }

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

   Grid.gridAreaSpan = (Grid.gridCellWidth < 25) ? 3 : (Grid.gridCellWidth < 45) ? 2 : 1;
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

   //determine if the upper left grid area is in the final set, delete it if so.
   var firstGridAreaRegEx =/^1, 1, \d+, \d+$/;
   if(firstGridAreaRegEx.test(Grid.finalGridAreas[0])) {
      Grid.finalGridAreas.shift();
   }

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

   
   //create document fragment to hold all the grid items.
   var fragment = document.createDocumentFragment();

   //Start makin' DIVS
   Grid.gridItems = [];
   
   Grid.finalGridAreas.forEach(function(gridArea) {
      var gridItem = createGridItem(gridArea);
      Grid.gridItems.push(gridItem);
   });

   //make some of the grid item's images, based on the total amount of grid items:
   var gridItemImages = [ 
                  '../landing-grid-images/1.jpg',
                  '../landing-grid-images/2.jpg',
                  '../landing-grid-images/3.jpg',
                  '../landing-grid-images/4.jpg',
                  '../landing-grid-images/5.jpg',
                  '../landing-grid-images/6.jpg',
                  '../landing-grid-images/7.jpg',
                  '../landing-grid-images/8.jpg',
                  '../landing-grid-images/9.jpg',
                  '../landing-grid-images/10.jpg'];

   //get random grid areas based on the number of grid items.
   Grid.gridImageAreas = getRandomGridItems(Grid.finalGridAreas);
   
   // addGridItemImages(Grid.gridItems, gridItemImages);

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

