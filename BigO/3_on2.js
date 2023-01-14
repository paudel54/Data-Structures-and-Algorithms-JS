//O(n)  , its is proportional 
//as value of n is greater number of operation is greater
//in below code if n = 9 , it must execute 9 operations

function logItems(n) {
    for (let i = 0; i < n; i++) { //O(n)
        for (let j = 0; j < n; j++) { //O(n)
            console.log(i, j);
        }
    }



}

logItems(10);
//for loop inside for loop produces O(n*n) => O(n^2)
//no matter if loop is nested multiple time O(n^4), O(n^3) => alwwys be written as O(n^2)
//O(n^2) has much number of operations to perform than O(n) can be visaulized on any google search for ease graph analysis,
///learn more details on chat gpt if you wish for