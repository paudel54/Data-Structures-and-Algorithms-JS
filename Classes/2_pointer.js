//pointer concepts

let num1 = 5;
let num2 = num1;

console.log(num1)
console.log(num2)

console.log('changing num1 value');
num1 = 15;
console.log(num1)
console.log(num2)

//here although num1 is changed num2 is not equal to num1 , so to fix this problem we needed the pointer

//objects are passed or linked by ref, in JS

let obj1 = {
    value: 11
}

//now bj2 also points the obj1 on same memory location, here value is not copied but memory location is targetted
let obj2 = obj1;

//we changed value of obj 2 but value of obj1 also got changed, this proves objects dont copy value but reference in JS
obj2.value = '30';

console.log(obj1);

