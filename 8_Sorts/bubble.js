// easiest sort 

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array;
}

const a = bubbleSort([9, 1, 3, 4, 2, 7, 5, 3, 0]);
console.log(a);