// //  finding if two array has simlar elements:

// function itemCommon(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) return true;
//         }
//     }
//     return false;
// }
// let array1 = [1, 6, 5]
// let array2 = [0, 1, 9]
// console.log(itemCommon(array1, array2))

// writing mucj more efficient code with object method:
let array1 = [1, 3, 5]
let array2 = [2, 4, 5]

function itemCommon(array1, array2) {
    let obj = {}
    for (let i = 0; i < array1.length; i++) {
        obj[array1[i]] = true;
    }
    for (let j = 0; j < array2.length; j++) {
        // checking key to array1
        if (obj[array2[j]]) return true
    }
    return false
}

console.log(itemCommon(array1, array2));
