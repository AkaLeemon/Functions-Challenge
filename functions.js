// 1️⃣ Create a function called greet that takes a name and returns a greeting message
function greet(name) {
    return `Hello, ${name}! Welcome to the coding challenge.`;
}

// 2️⃣ Create a function called calculateArea that takes width and height and returns the area
function calculateArea(width, height = width) {
    return width * height;
}

// 3️⃣ Create a function called applyFunction that applies a function to a number
function applyFunction(fn, num) {
    return fn(num);
}

// 4️⃣ Create a function called findMax that takes three numbers and returns the largest
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// 5️⃣ Create a function called isEven that returns true if a number is even, false if odd
function isEven(num) {
    return num % 2 === 0;
}

// 6️⃣ (hard) Create a function called factorial that returns the factorial of a given number
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

// 7️⃣ Create a function called reverseString that reverses a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 8️⃣ (Hard)Create a function called countVowels that counts the number of vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

// 9️⃣ (SHard) Create a function called fibonacci that returns the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 🔟 (SHard) Create a function called isPalindrome that checks if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { greet, calculateArea, applyFunction, findMax, isEven, factorial, reverseString, countVowels, fibonacci, isPalindrome };
