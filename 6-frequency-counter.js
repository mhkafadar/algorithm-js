// // 0(n^2) to O(n)
//
// // O(n^2)
//
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }
//
// same([1,2,3,2], [9,1,4,4]);


// refactored to O(n)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        // undefined, null, NaN, 0, false are false( some of them falsy)
        // a || b || c || d || e    // returns first true variable    // if all of them are false, returns last one
        console.log(frequencyCounter1);
        console.log(val);
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        console.log(frequencyCounter1[val]);
        console.log(frequencyCounter1);
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,4,5], [1,4,9,16,25]));

