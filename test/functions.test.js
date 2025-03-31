const { greet, calculateArea, applyFunction, findMax, isEven, factorial, reverseString, countVowels, fibonacci, isPalindrome } = require("../functions");

test("greet function", () => {
    expect(greet("Alice")).toBe("Hello, Alice! Welcome to the coding challenge.");
    expect(greet("Bob")).toBe("Hello, Bob! Welcome to the coding challenge.");
});

test("calculateArea function", () => {
    expect(calculateArea(5, 10)).toBe(50);
    expect(calculateArea(7)).toBe(49);
});

test("applyFunction function", () => {
    function double(x) { return x * 2; }
    function square(x) { return x * x; }
    expect(applyFunction(double, 5)).toBe(10);
    expect(applyFunction(square, 4)).toBe(16);
});

test("findMax function", () => {
    expect(findMax(3, 7, 5)).toBe(7);
    expect(findMax(10, 20, 30)).toBe(30);
});

test("isEven function", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
});

test("factorial function", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
});

test("reverseString function", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});

test("countVowels function", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("JavaScript")).toBe(3);
});

test("fibonacci function", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(8)).toBe(21);
});

test("isPalindrome function", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});