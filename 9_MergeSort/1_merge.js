console.log('Merge test');

//merge helper function
function merge(array1, array2) {
    console.log('received arrays 1 and 2', array1, array2)
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
    console.log('combined on Merge', combined)
    return combined;

}

// const result = merge([8, 6], [2, 9])
// const result1 = merge([1, 3, 7, 8], [2, 4, 5, 6])
// console.log(result1); 
//merge sort function break items into half and half and half until we get on unit value
//merge helper will do merge recursively
function mergeSort(array) {
    if (array.length === 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid)
    //merge sort breaks array into chunk unit, 
    //merge sorts and merge smaller chunks into larger unit
    console.log('this is left', left);
    console.log('this is right', right);
    //recursive calling self until array breaks to unit 
    return merge(mergeSort(left), mergeSort(right));
}
const result = mergeSort([8, 6, 2, 9]);
console.log(result);