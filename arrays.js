var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(Array,itemToAdd){Array.unshift(`${itemToAdd}`)}
function addElementToBeginningOfArray(array,element){array=[`${element}`,...array]}
