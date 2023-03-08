function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (i !== min) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}


// selectionSort([4, 2, 6, 5, 1, 3])


console.log(selectionSort([4, 27, 1, 54, 3, 98]))
console.log(selectionSort([4, 6, 1, 8]))