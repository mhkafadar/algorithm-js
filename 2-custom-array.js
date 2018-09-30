/* Create a stack*/
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;

    }

    this.size = function(){
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var firstStack = new Stack();

firstStack.push("a");
firstStack.push("b");
firstStack.push("c");
console.log(firstStack.peek());
firstStack.push("d");
firstStack.push("e");
console.log(firstStack);
console.log(firstStack.peek());
console.log(firstStack.pop());
console.log(firstStack.peek());