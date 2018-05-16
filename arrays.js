var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(array, element){var Aarray=array.unshift(`${element}`);return(Aarray)}
function addElementToBeginningOfArray(array,element){var newArray=[`${element}`,...array];return newArray}
