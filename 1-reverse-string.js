// functions: push, pop, peek, length

var letters = []; // this is our stack

let word = "racecar";

var rword = "";

// put letters to stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
    console.log(letters);
}

console.log("push finished");
console.log(letters);
console.log("pop will begin");

// pop of the letters in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
    console.log(letters);

}

if (rword === word) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

console.log(letters);



