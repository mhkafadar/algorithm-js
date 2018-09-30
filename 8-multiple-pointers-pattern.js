// O(n^2)

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])

//  O(n)

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1
    console.log(left);
    console.log(right);
    while (left < right) {
        console.log(left);
        console.log(right);
        if (arr[left] + arr[right] === 0) {
            console.log(left);
            console.log(right);
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else
            left++;
    }
    return false
}

console.log(sumZero([-155, -39, -5, -4 , -3, -2, -1, 0, 1, 2, 4, 17]));