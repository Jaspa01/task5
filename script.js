// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

const fToC = function(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp + (9/5) + 32);
    const result = fTemp+ '\xB0F is ' + fToCel + '\xB0C.'
        return(result);
}
// console.log(fToC(30));
// result = 30°F is 63.8°C.

// console.log(fToC(15));
// result = 15°F is 48.8°C.

// console.log(fToC(42));
// result = 42°F is 75.8°C.

// console.log(fToC(19.5));
// result = 19.5°F is 53.3°C.


// 2. Create a function that will calculate the average of numbers in an array.

function avg(average) {
    var sum = 0;

    for (let i = 0; i < average.length; i++) {
        sum += average[i];
    }
    return sum / average.length;
}
// console.log(avg([1, 5, 6, 19]))
// result = 7.75

// console.log(avg([7, 5, 65, 19]))
// result = 44 

// console.log(avg([8, 32, 23, 78]))
// result = 35.25


// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}
// n = 3, x = 1, y = 3 
// result = true
// n = 100, x = 5, y = 3 
// result = false
// n = 12, x = 2, y = 6
// result = true


// 4. Create a function that will output the first 100 prime numbers.

function prime() {
    var number = document.getElementById("prime").value;
    var isPrime;
    // var number = 100;
    for(let i=2; i<=number; i++) {
        isPrime = 1;
        for (let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = 0;
                break;
            }
        }
        if(isPrime === 1) {
            console.log(i);
        }
    }
}
 prime();


// 5. Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num) {
    if (num <= 1) return false;
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}
// isPrime(98);
// result = false

// isPrime(13);
// result = true

// isPrime(56);
// result = false

// isPrime(17);
//  result = true


// 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

const nums = [-3, 1, -0.16, 3.21, -16, -9, 20, 21, 90, 304, -342];

const getpositiveNumbers = (nums) => nums.filter(value => value > 0);
    var positives = getpositiveNumbers(nums);

    // console.log(positives);

    // result = [1, 3.21, 20, 21, 90, 304];

    
// 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"

function fizzBuzz(num) {
    let numArray = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            numArray.push("FizzBuzz");
        } else if (i % 3 == 0) {
            numArray.push("Fizz");
        } else if (i % 5 == 0) {
            numArray.push("Buzz");
        } else { numArray.push(i) };
    }
    return numArray;
}
// console.log(fizzBuzz(100));

// result = (100) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 
// 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 
// 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 
// 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']




// 8. The marketing team is spending way too muc time typing in hashtags. Lets create a hashtag genrator for them, our hashtag generator will meet te following criteria:
//   	a. It must start with a hash symbol, #.
//   	b. Ignore all spaces in the input.
//   	c. All words must have their first letter capitalized.
//   	d. If the final result is going to be longer than 140 characters, it should return false.
//   	e. If the input or result is an empty string, it should return false.

function generateHashtag(str) {
    const result = capitalize(str);

    return result.length > 140 || !result ? false : `#$(result)`;
}

function capitalize(str) {
    let result ="";
    
    str.split("").forEach(word => {
        if (word) {
            result += `${word.charAt(0).toUpperCase()}${word.substr(1, word.length)}`;
        }
    });

    return result
}

