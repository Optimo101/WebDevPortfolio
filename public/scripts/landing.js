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

function createGridItem(area, type, index) {  
   var gridItem = document.createElement('div');
   var tracks = area.match(/(\d+)/g);
   gridItem.style.gridRowStart = tracks[0];
   gridItem.style.gridColumnStart = tracks[1];
   gridItem.style.gridRowEnd = tracks[2];
   gridItem.style.gridColumnEnd = tracks[3];

   if(type === 'colored'){
      gridItem.style.opacity = 1;
      gridItem.style.zIndex = 2;
      gridItem.style.backgroundColor = getRandomColorFromSet();
   }

   if(type === 'coloredOverlay') {
      gridItem.style.backgroundColor = '#5A90BF';
      gridItem.style.opacity = .4;
      gridItem.style.zIndex = 2;
   }

   if (type === 'image'){
      gridItem.style.opacity = 1;
      gridItem.style.zIndex = 1;
      gridItem.style.backgroundImage = `url(../landing-grid-images/${index}.jpg)`;
      gridItem.style.backgroundSize = 'cover';
      gridItem.style.backgroundPosition = 'center';
   }

   if (type === 'titleItem'){
      gridItem.style.opacity = 1;
      gridItem.style.zIndex = 2;
      gridItem.style.display = 'flex';
      gridItem.style.flexDirection = 'row';
      gridItem.style.justifyContent = 'center';
      gridItem.style.alignItems = 'center';
      gridItem.style.backgroundColor = 'rgb(89, 89, 86)';
   }

      if (type === 'firstLastNameItem'){
      gridItem.style.opacity = 1;
      gridItem.style.zIndex = 2;
      gridItem.style.display = 'flex';
      gridItem.style.flexDirection = 'row';
      gridItem.style.justifyContent = 'center';
      gridItem.style.alignItems = 'center'; 
      gridItem.style.backgroundColor = '#5A90BF';
      gridItem.style.textAlign = 'center';
      }
      
      if (type === 'yearItem'){
         gridItem.style.opacity = 1;
         gridItem.style.zIndex = 2;
         gridItem.style.display = 'flex';
         gridItem.style.flexDirection = 'row';
         gridItem.style.justifyContent = 'center';  
         gridItem.style.alignItems = 'center';
         gridItem.style.backgroundColor = 'rgb(52, 199, 199)';
         gridItem.style.textAlign = 'center';
      }
   return gridItem;
}

function getRandomGridItems(gridAreas) {
   var indexes= [];
   if(gridAreas.length < 25 && gridAreas.length > 0 ) {
     for(var i = 0; i < 4; i++){
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
         }
      }
   } else if(gridAreas.length < 45 && gridAreas.length > 0) {
      for(var i = 0; i < 6; i++){
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
        }
      }
   } else if(gridAreas.length >= 45) {
      for(var i = 0; i < 10; i++){
         var index = Math.floor(Math.random()*gridAreas.length);
         if(!(indexes.includes(index))) {
            indexes.push(index);
        }
      }
   } else{
      return "nothing";
   }

   var imageGridAreas = [];
   for(var i = 0; i < indexes.length; i++){
      imageGridAreas.push(gridAreas[indexes[i]]);
   }

   return imageGridAreas;
}

//Get the grid container
var landingGridElement = document.getElementById('landing-grid');
// var landingGridElement = document.getElementById('landing-button');

function recalcLandingGrid() {
   landingGridElement.style.display = 'grid';
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

   if(Grid.numOfGridAreaRows < 4) {
      landingGridElement.style.display = 'flex';
      landingGridElement.style.flexDirection = "row";
      landingGridElement.style.justifyContent = "center";
      landingGridElement.style.alignItems = 'center';
      var landscapeItemElement = document.createElement('h1');
         landscapeItemElement.style.margin = '5px';
         landscapeItemElement.style.color = 'rgb(89, 89, 86)';
         landscapeItemElement.style.fontFamily = 'Raleway';
         landscapeItemElement.style.fontSize = '20pt';
         landscapeItemElement.style.textTransform = 'uppercase';
         landscapeItemElement.style.letterSpacing = '1px';
         landscapeItemElement.style.textAlign = 'center'
         var t = document.createTextNode("Jared Schiller 2019 Portfolio");
         landscapeItemElement.appendChild(t);
      landingGridElement.appendChild(landscapeItemElement);
      
   } else {
      landingGridElement.style.display = 'grid';
      landingGridElement.style.flexDirection = "";
      landingGridElement.style.justifyContent = "";
      landingGridElement.style.alignItems = '';

      Grid.workingGridAreas = [];

      Grid.allGridAreas.forEach(function(gridArea){
         let flip = headsOrTails();
         if (flip) {
            Grid.workingGridAreas.push(gridArea);
         }
      });

      //determine if the upper left grid area is in the final set, delete it if so.
      var firstGridAreaRegEx =/^1, 1, \d+, \d+$/;
      if(firstGridAreaRegEx.test(Grid.workingGridAreas[0])) {
         Grid.workingGridAreas.shift();
      }

      Grid.filteredGridAreaColumns.forEach(function(gridArea){
         if(!(Grid.workingGridAreas.includes(gridArea))) {
            Grid.workingGridAreas.push(gridArea);
         }
      });

      Grid.filteredGridAreaRows.forEach(function(gridArea){
         if(!(Grid.workingGridAreas.includes(gridArea))) {
            Grid.workingGridAreas.push(gridArea);
         }
      });
         
      //get random grid areas based on the number of grid items.
      Grid.gridImageAreas = getRandomGridItems(Grid.workingGridAreas);


      Grid.finalGridAreas = Grid.workingGridAreas.filter(function(finalGridArea){
         return Grid.gridImageAreas.includes(finalGridArea) === false;
      });

      //create document fragment to hold all the grid items.
      var fragment = document.createDocumentFragment();

      //Start makin' DIVS
      Grid.gridItems = [];
      
      Grid.finalGridAreas.forEach(function(gridArea) {
         var gridItem = createGridItem(gridArea, 'colored');
         Grid.gridItems.push(gridItem);
      });

      Grid.gridImageAreas.forEach(function(gridArea) {
         var gridItem = createGridItem(gridArea, 'coloredOverlay');
         Grid.gridItems.push(gridItem);
      });

      for(var i = 0; i < Grid.gridImageAreas.length; i++) {
         var gridItem = createGridItem(Grid.gridImageAreas[i], 'image', i);
         Grid.gridItems.push(gridItem);
      };

      //specially place portfolio title
      var portfolioArea;
      if(Grid.numOfGridAreaColumns <= 6 ) {
         portfolioArea = `${1 + Grid.gridAreaSpan} / ${1 + Grid.gridAreaSpan} / ${1 + (Grid.gridAreaSpan*2)} / 13`;
      } else {
         portfolioArea = `${1 + Grid.gridAreaSpan} / ${1 + (Grid.gridAreaSpan * 2)} / ${1 + (Grid.gridAreaSpan*2)} / 8`;
      }
         var portfolioItem = createGridItem(portfolioArea, 'titleItem');
         var portfolioItemElement = document.createElement('h1');
         portfolioItemElement.style.margin = '5px';
         portfolioItemElement.style.color = '#f4f6f6';
         portfolioItemElement.style.fontFamily = 'Raleway';
         portfolioItemElement.style.fontSize = '18pt';
   
         if(Grid.numOfGridAreaColumns == 6 ) {
            portfolioItemElement.style.fontSize = '24pt';
         }

         portfolioItemElement.style.textTransform = 'uppercase';
         portfolioItemElement.style.letterSpacing = '1px';
         var t = document.createTextNode("PORTFOLIO");
         portfolioItemElement.appendChild(t);
         portfolioItem.appendChild(portfolioItemElement);
         Grid.gridItems.push(portfolioItem);
      
      //specially place name
      if(Grid.numOfGridAreaColumns <= 6 ) {
         firstLastNameArea =  `${1 + (Grid.gridAreaSpan * 2)} / 1 / ${1 + (Grid.gridAreaSpan * 3)} / ${13 - Grid.gridAreaSpan}`;
      } else {
         firstLastNameArea = `${1 + (Grid.gridAreaSpan * 2)} / 1 / ${1 + (Grid.gridAreaSpan * 3)} / ${13 - (Grid.gridAreaSpan * 6)}`;
      }
         var firstLastNameItem = createGridItem(firstLastNameArea, 'firstLastNameItem');
         var firstLastNameItemElement = document.createElement('h1');
         firstLastNameItemElement.style.margin = '5px';
         firstLastNameItemElement.style.color = '#f4f6f6';
         firstLastNameItemElement.style.fontFamily = 'Raleway';
         firstLastNameItemElement.style.fontSize = '18pt';

         if(Grid.numOfGridAreaColumns == 6 ) {
            firstLastNameItemElement.style.fontSize = '24pt';
         }

         firstLastNameItemElement.style.textTransform = 'uppercase';
         firstLastNameItemElement.style.letterSpacing = '1px';
         var t = document.createTextNode("Justin Schiller");
         firstLastNameItemElement.appendChild(t);    
         firstLastNameItem.appendChild(firstLastNameItemElement);
         Grid.gridItems.push(firstLastNameItem);

      

   var yearItemArea;
      //specially place year
      if(Grid.numOfGridAreaColumns <= 6 ) {
         yearItemArea =  `${(((Grid.numOfGridAreaRows * Grid.gridAreaSpan) + 1) - Grid.gridAreaSpan)} / ${13 - (Grid.gridAreaSpan * 2)} / ${((Grid.numOfGridAreaRows * Grid.gridAreaSpan) + 1)} / 13`;
      } else {
         yearItemArea =  `${(((Grid.numOfGridAreaRows * Grid.gridAreaSpan) + 1) - Grid.gridAreaSpan)} / ${13 - (Grid.gridAreaSpan * 3)} / ${((Grid.numOfGridAreaRows * Grid.gridAreaSpan) + 1)} / ${13 - (Grid.gridAreaSpan * 1)}`;
      }
      var yearItem = createGridItem(yearItemArea, 'yearItem');
      var yearItemElement = document.createElement('h1');
      yearItemElement.style.color = '#f4f6f6';
      yearItemElement.style.fontFamily = 'Raleway';
      yearItemElement.style.fontSize = '18pt';
      yearItemElement.style.textTransform = 'uppercase';
      yearItemElement.style.letterSpacing = '1px';
      var t = document.createTextNode("2019");
      yearItemElement.appendChild(t);    
      yearItem.appendChild(yearItemElement);
      Grid.gridItems.push(yearItem);

      //append all the created grid item DIVs to the fragment.
      Grid.gridItems.forEach(function(gridItem) {
         fragment.appendChild(gridItem);
      });

      //append the fragment to the grid container.
      landingGridElement.appendChild(fragment);
   }
}

window.onload = recalcLandingGrid;
window.onresize = recalcLandingGrid;
