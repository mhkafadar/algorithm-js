// count unique numbers

function countUniqueValues(arr) {
    let left = 0;
    let right = 1;
    let count = 0;
    if(!arr[left]) {
        return 0;
    }
    while (right < arr.length) {
        if(arr[left] === arr[right]) {
            left++;
            right++;
        }
        if(arr[left] < arr[right]) {
            count++;
            left++;
            right++;
        }
    }
    return count + 1;
}

console.log(countUniqueValues([1, 3, 3, 3, 3, 5, 5, 7, 9, 19, 20])); // 7

// second solution

function countUniqueValues2(arr) {
    let left, right, counter;
    left = 0;
    right = 1;
    counter = 0;

    while(left < arr.length) {
        if (arr[left] != arr[right]) counter++;
        left++;
        right++;
    }

    return counter;
}

console.log(countUniqueValues2([1, 3, 3, 3, 3, 5, 5, 7, 9, 19, 20])); // 7

// third solution

function countUniqueValues3(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues3([1, 3, 3, 3, 3, 5, 5, 7, 9, 19, 20])); // 7


// forth solution

function countUniqueValues4(arr) {
    let p1 = 0;
    let p2 = 1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[p1] !== arr[p2 + i]) {
            p1++;
            arr[p1] = arr[p2 + i];
        }

    }

    return p1;
}


console.log(countUniqueValues4([1, 3, 3, 3, 3, 5, 5, 7, 9, 19, 20])); // 7
