'use strict'


/*
*Exercice1
*/

var GridGenerator = function GridGenerator(xAxis, yAxis){
	this.xAxis = xAxis;
	this.yAxis = yAxis;
	this.matrix = document.createElement('table');
}

GridGenerator.prototype.run = function() {
	this.renderMatrix();
	this.renderCells();
}

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
}

GridGenerator.prototype.renderCells = function() {
  var myCells = document.querySelectorAll('.cells');

  for(var i = 0; i < myCells.length; i++) {
	  myCells[i].style.width = "10px"; 
  	myCells[i].style.height = "10px";
  	myCells[i].style.backgroundColor = "red";
  }
}


var newGrid = new GridGenerator(10, 10);

newGrid.run();
