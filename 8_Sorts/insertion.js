console.log('Insertion Sort')
// for an array: [1,2,4,3,5,6]
let temp
function insertionSort(array) {
    // we initiate array compareising with 2nd index
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        // index of array must be marked on if it goes -ve index must be controlled on
        for (var j = i - 1; array[j] > temp & j > -1; j--) {
            array[j + 1] = array[j]
        }
        // move to left and when for loop breaks then put drop the value
        array[j + 1] = temp;
    }
    return array
}

console.log(insertionSort([4, 19, 6, 2, 7, 5]));