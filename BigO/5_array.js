let array = [2, 4, 6, 8];

//pushes at end
//O(1), single operation
array.push(10);
console.log(array);
//take last element of array out
//O(1)
array.pop();
console.log(array);

//removes 1st array element, this causes re-indexing of array element
//O(n)
array.shift();
console.log(array);

//adds to first element, this causes re-indexing of array element
//O(n)
array.unshift(2);
console.log(array);

//note
//searching item by index results to O(1) whereas searching by value is O(n)