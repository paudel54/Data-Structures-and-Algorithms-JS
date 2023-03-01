// infinite loop leads to stack overflow
// CallStack

function funcThree() {
    console.log(' i am func three')
}


function funcTwo() {
    funcThree()
    console.log('I am func Two');
}


function funcOne() {
    funcTwo()
    console.log('I am function one')
}

const a = funcOne();
console.log(a);


