var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(array, element){var array=array.unshift(`${element}`);return(array)}
function addElementToBeginningOfArray(array,element){var newArray=[`${element}`,...array];return newArray}
