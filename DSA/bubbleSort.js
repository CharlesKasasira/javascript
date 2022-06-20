/**
 * BUBBLE SORT
 * Bubble sort is the simplest of all sorting algorithms, it compares two items and sorts them until the end.
 * we scan the array from left to right and if the items are out of order, we swap them.
 * here is an example of a bubble sort in javascript sort an array.
 */

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length - i; j++){// by doing j < arr.length - i, we reduce on the time by ending
                                                // before the last already sorted index.
            if( arr[j] < arr[j-1]){
                // let temp = arr[j];
                // arr[j] = arr[j-1];
                // arr[j-1] = temp;
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr;
}

let myArray = [2, 8, 4, 2, 3];
let myArray2 = [8, 7, 6, 5, 4, 3, 2, 1];

let out1 = bubbleSort(myArray);
let out2 = bubbleSort(myArray2);
console.log(out1);
console.log(out2);