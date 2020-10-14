'use strict'

/*
*Exercice2
*/


/**
* DrawBar
*@param {number} sum
*@param {number} nbr
* @constructor
*/
var DrawBar = function DrawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

/**
* displayBar
* @return {DrawBar} this
*/
DrawBar.prototype.displayBar = function() {
  var bar = document.createElement('progress');

  bar.style.width = '100%';
  bar.setAttribute('max' , this.sum);
  bar.setAttribute('value' , this.nbr);
  document.body.appendChild(bar);
  
  return this;
}

var myLoadingBar = new DrawBar(100, 75);
myLoadingBar.displayBar();
