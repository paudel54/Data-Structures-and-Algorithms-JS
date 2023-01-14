//O(n)  , its is proportional 
//as value of n is greater number of operation is greater
//in below code if n = 9 , it must execute 9 operations

function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        //worst case take O(n)
    }

    for (let j = 0; j < n; j++) {
        console.log(j);
        //worst case  O(n)
    }

    // total case to resolve whole progam is O(n) + O(n) = O(2n)
    //here constant 2 can be dropped to simplify and written as O(n)
}

logItems(9);
//output 0,1,2,3,4,5,6,7,8. in total 9 operations