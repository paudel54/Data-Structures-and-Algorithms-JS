// ARRAY [4,6,1,7,3,2,5]

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp;
}
//pivot helper Functions
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    //swap first index and the swapIndex element
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left = 0, right = array.length - 1) {
    //here if check is kept when items  in array gets single item then they should not get executed
    //like a filter
    if (left < right) {
        let pivotIndex = pivot(array, left, right)
        //recursive, function calling function to acheive same repetative task
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }
    return array
}



let testArray = [4, 6, 1, 7, 3, 2, 5]
console.log(pivot(testArray));
// [2,1,3,4,6,7,5]
//now break apart left of pivot point 4 and right side of it
console.log(testArray);
let result = quickSort([4, 6, 1, 7, 3, 2, 5]);

console.log(result);