// infinite loop leads to stack overflow
// CallStack

// function funcThree() {
//     console.log(' i am func three')
// }


// function funcTwo() {
//     funcThree()
//     console.log('I am func Two');
// }


// function funcOne() {
//     funcTwo()
//     console.log('I am function one')
// }

// const a = funcOne();
// console.log(a);

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);

}
const a = factorial(4);
console.log(a);


