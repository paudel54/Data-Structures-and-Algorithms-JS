console.log('I am selection Sort')
// Let Array = [4,2,6,5,1,3]

function selectionSort(array) {
    // Min Variable Tracks the index of an array. 

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (i !== min) {
            // Swapping when i and min are not equal
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

    }
    // console.log(array);
    return array;
}

console.log(selectionSort([4, 27, 1, 54, 3, 98]))
console.log(selectionSort([4, 6, 1, 8]))
// selectionSort([3, 0, 7, 1, 8, 9])

console.log(selectionSort([4, 2, 6, 5, 1, 3]));