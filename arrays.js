var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(Array,itemToAdd){Array.unshift(`${itemToAdd}`)}
function addElementToBeginningOfArray(array,element){var newArray=[`${element}`,...array];return newArray}
