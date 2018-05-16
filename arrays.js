var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(Array,element){return(Array.unshift(`${element}`))}
function addElementToBeginningOfArray(array,element){var newArray=[`${element}`,...array];return newArray}
