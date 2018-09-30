function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

// another solution

function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let strObj1 = {};
    let strObj2 = {};
    for (let char of str1) {
        strObj1[char] = (strObj1[char] || 0) + 1;
    }
    for (let char of str2) {
        strObj2[char] = (strObj2[char] || 0) +1;
    }
    for (let key in strObj1) {
        if (!(key in strObj2)) {
            return false
        }

        if(strObj1[key] !== strObj2[key]) {
            console.log(strObj1[key]);
            console.log(strObj2[key]);
            return false
        }
    }
    return true
}

console.log(checkAnagram('anagram', 'naagram'));