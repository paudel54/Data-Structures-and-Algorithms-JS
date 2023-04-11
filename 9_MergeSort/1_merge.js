console.log('Merge test');

function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    //run while loop until and unless any of an array gets empty
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        combined.push(array1[i])
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j])
        j++;
    }
    return combined;
}

const result = merge([8, 6], [2, 9])
const result1 = merge([1, 3, 7, 8], [2, 4, 5, 6])
console.log(result1);