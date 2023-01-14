let array = [2, 4, 6, 8];

//pushes at end
array.push(10);
console.log(array);
//take last element of array out
array.pop();
console.log(array);

//removes 1st array element, this causes re-indexing of array element
array.shift();
console.log(array);

//adds to first element, this causes re-indexing of array element
array.unshift(2);
console.log(array);