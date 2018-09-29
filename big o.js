function subtotals(array) {
    var subtotalArray = Array(array.length);
    console.log(subtotalArray);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        console.log("first for loop " + subtotal + " is the Subtotal")
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
            console.log("second for loop " + subtotal + " is the Subtotal")
        }
        subtotalArray[i] = subtotal;
        console.log("I AM HERE");
    }
    console.log("before the return");
    return subtotalArray;
}

console.log(subtotals([2, 4, 5, 10, 20]));