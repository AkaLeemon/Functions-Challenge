// 1️⃣ Create a function called greet that takes a name and returns a greeting message
var name  = "Big Guy"

function greet(name) {
 return "Hello " + name + "!" + " How are??"
}
console.log(greet("Big Guy"))


// 2️⃣ Create a function called calculateArea that takes width and height and returns the area
function calculateArea(num1, num2) {
    var areaHeight = num1
    var areaWidth = num2
return areaHeight * areaWidth
}
console.log(calculateArea(9, 10))


// 3️⃣ Create a function called applyFunction that applies a function to a number
function applyFunction;
    for (var num of numbers) {(num0, num1, num2, num3, num4) {
    var numbers = [num0, num1, num2, num3, num4]
        console.log(num * 2);
    }
}
  console.log(applyFunction(1, 2, 3, 4));

// 4️⃣ Create a function called findMax that takes three numbers and returns the largest
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
console.log(findMax(70, 421, 19))
// 5️⃣ Create a function called isEven that returns true if a number is even, false if odd
function isEven(num1) {
    return (num1 % 2 === 0)
}
console.log(isEven(5))


// 6️⃣ (hard) Create a function called factorial that returns the factorial of a given number
function factorial() {

}

// 7️⃣ Create a function called reverseString that reverses a given string
function reverseString() {

}

// 8️⃣ (Hard)Create a function called countVowels that counts the number of vowels in a string
function countVowels() {

}

// 9️⃣ (SHard) Create a function called fibonacci that returns the nth Fibonacci number
function fibonacci() {

}

// 🔟 (SHard) Create a function called isPalindrome that checks if a string is a palindrome
function isPalindrome() {

}

module.exports = { greet, calculateArea, applyFunction, findMax, isEven, factorial, reverseString, countVowels, fibonacci, isPalindrome };
