// Answer # 1

function reverseNumber() {
    var num = +prompt("Enter any number","123456");
    num = num.toString().split('').reverse().join('');
    document.write(num)
}

// Answer # 2

function palindromeString() {
    var userInput = prompt("Enter any String","madam");
    reverseuserInput = userInput.toString().split('').reverse().join('');
    if (userInput === reverseuserInput) {
        document.write("its palindrome string")
    }
    else {
        alert("its NOt");
    }
}

// Answer # 3

function combinationString() {
    var userStr = prompt("Enter any String","frog");
    var comString = [];
    for (var i = 0; i < userStr.length; i++) {
        for (var j = i + 1; j < userStr.length + 1; j++) {
            comString.push(userStr.slice(i, j));
        }
    } document.write(comString);
}

// Answer # 4

function sortString() {
    var inputUser = prompt("Enter any String","strawberry");
    var sorting = inputUser.split('').sort().join('');
    document.write(sorting);
}

// Answer # 5

function upperCaseString() {
    var str = prompt('enter Sentence',"the quick brown fox jump over the lazy dog");
    var arr = str.toString().split(' ');
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    document.write(newarr.join(' '));
}

// Answer # 6

function longestWord() {
    var word = prompt('enter a sentence',"Web Development");
    var array1 = word.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    document.write(result);
}

// Answer # 7

function countVowels() {
    var sentence = prompt("enter any sentence","Internationalisation");
    count = sentence.match(/[aeiou]/gi || []).length;
    document.write(count);
}

// Answer # 8

function primeNumber() {
    var nums = +prompt("enter any number","13");
    if (nums === 1) {
        return false;
    }
    // else if (nums === 2) {
    //     return true;
    // } 
    else {
        for (var i = 2; i < nums; i++) {
            if (nums % i === 0) {
                document.write("It is not a prime Number");
                return false;
                break;
            }
        }
        document.write("It is a prime Number");
        return true;
    }
}

// Answer # 9 

function types(value) {
    var dtypes = [Function,Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}
console.log(types(65));
console.log(types('Hello World'));
console.log(types(true));

// Answer # 10 

function getNums() {
    var arr = [1, 2, 3, 4, 5]
    console.log(arr);
    var max = Math.max.apply(null, arr);
    // console.log(max);
    arr.splice(arr.indexOf(max), 1)
    var secMax = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    // console.log(min);
    arr.splice(arr.indexOf(min), 1)
    var secMin = Math.min.apply(null, arr);
    var result = [];
    result.push(secMax, secMin);
    console.log(result);
    document.write(result);
}