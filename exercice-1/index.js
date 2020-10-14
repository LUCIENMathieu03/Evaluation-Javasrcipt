'use strict'

/*
*Exercice1
*/


/**
 * GridGenerator
* @constructor
*/
var GridGenerator = function GridGenerator(xAxis, yAxis){
  this.xAxis = xAxis;
  this.yAxis = yAxis;
  this.matrix = document.createElement('table');
}


/**
 * run
* @return {GridGenerator} this
*/
GridGenerator.prototype.run = function() {
  this.renderMatrix();
  this.renderCells();
  setInterval(this.renderCellsColor.bind(this), 2000);

  return this; 
}

/**
 * renderMatrix
* @return {GridGenerator} this
*/
GridGenerator.prototype.renderMatrix = function() {
    for(var i = 0; i <= this.yAxis; i++){
        var tr = document.createElement('tr');

        for(var j = 0; j < this.xAxis; j++ ){
            var td = document.createElement('td');

            td.classList.add('cells');
            tr.appendChild(td);
        }

        this.matrix.appendChild(tr);
    }
    
    document.body.appendChild(this.matrix);

    return this;
}


/**
 * renderCell
* @return {GridGenerator} this
*/
GridGenerator.prototype.renderCells = function() {
  var myCells = document.querySelectorAll('.cells');

  for(var i = 0; i < myCells.length; i++) {
    myCells[i].style.width = "40px"; 
    myCells[i].style.height = "40px";
  }
  return this;
}


/**
 * renderCellColor
* @return {GridGenerator} this
*/
GridGenerator.prototype.renderCellsColor = function() {
  var myCells = document.querySelectorAll('.cells');

  for(var i=0; i < myCells.length; i++) {
    var changeInterval = Math.floor(Math.random() * 1000)+1000; // return a number between 1000 & 2000 ([1s , 2s])
    var randomColor = (Math.floor((Math.random() * 16777215)+1)).toString(16); // return a big int in hexadecimal 

    while (randomColor.length < 6){   // randomColor must have 6 number/letter to represent a color in hexadecimal 
      randomColor = "0"+ randomColor;
    }
    console.log(randomColor);

  setInterval(this.changeCellColor.bind(this), changeInterval, randomColor, myCells[i]);
  }

}

/**
 * changeCellColor
* @param {number} color 
* @param {number} cell 
* @return {GridGenerator} this
*/
GridGenerator.prototype.changeCellColor = function(color, cell) {
  cell.style.backgroundColor = '#' + color;
  return this;
}


var newGrid = new GridGenerator(10, 10);

newGrid.run();