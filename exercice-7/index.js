'use strict'

/*
*Exercice 7
*/


/**
 * computeNode
* @constructor
*/
var computeNote = function computeNote(noteTab){

	var noteCounter = noteTab.length ;
	var sum =0;

	for (var i = 0; i < noteTab.length; i++){
		sum += noteTab[i];

	}
	return sum/noteCounter;

}


var myNote = [10, 13, 13, 12, 15, 12, 11, 16, 14];
console.log(computeNote(myNote));