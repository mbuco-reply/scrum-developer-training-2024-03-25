import calculate from "./calculationBackend";
import isPalindrome from "./calculationBackend"; 

test('add 1 and 2 correctly', () => {
    const result = calculate("+", 1, 2);
    expect(result.result).toEqual(3);
})

test('add 999999 and -2222222222222 correctly', () => {
    const result = calculate("+", 999999, -2222222222222);
    expect(result.result).toEqual(-2222221222223);
})

test('add 4,294,967,295 and 4,294,967,295 correctly', () => {
    const result = calculate("+", 4294967295, 4294967295);
    expect(result.result).toEqual(8589934590);
})

test('add -333 and -200 correctly', () => {
    const result = calculate("+", -333, -200);
    expect(result.result).toEqual(-533);
})

test('subtract 999 and 9999999999 correctly', () => {
    const result = calculate("-", 9999999999, 999);
    expect(result.result).toEqual(9999999000);
})

test('subtract 999 and 9999999999 correctly', () => {
    const result = calculate("-", 999,9999999999 );
    expect(result.result).toEqual(-9999999000);
})

test('multiply 9999 and 9999999 correctly', () => {
    const result = calculate("*", 9999, 9999999);
    expect(result.result).toEqual(99989999001);
})


test('multiply -9999 and 9999999 correctly', () => {
    const result = calculate("*", -9999, 9999999);
    expect(result.result).toEqual(-99989999001);
})


test('divide 1 and 2 correctly', () => {
    const result = calculate("/", 1, 2);
    expect(result.result).toEqual(0.5);
})

test('divide 1 and 0 correctly', () => {
    const result = calculate("/", 1, 0);
    expect(result.result).toEqual(NaN);
})

test('divide 0 and -25 correctly', () => {
    const result = calculate("/", 0, -25);
    expect(result.result).toEqual(0);
})

test('divide 100 and -3 correctly', () => {
    const result = calculate("/", 100, -3);
    expect(result.result).toEqual(-33.333333333333336);
})

test('testing isPalindrome function', () => {
    expect(isPalindrome(1)).toEqual(true);
    expect(isPalindrome(11)).toEqual(true);
    expect(isPalindrome(111)).toEqual(true);
    expect(isPalindrome(12321)).toEqual(true);
    expect(isPalindrome(12345)).toEqual(false);
    expect(isPalindrome(123321)).toEqual(true);
    expect(isPalindrome(123456)).toEqual(false);
    expect(isPalindrome(123454321)).toEqual(true);
    expect(isPalindrome(123456789)).toEqual(false);
    expect(isPalindrome(123454321)).toEqual(true);
    expect(isPalindrome(123456789)).toEqual(false);
    expect(isPalindrome(123454321)).toEqual(true);
    expect(isPalindrome(123456789)).toEqual(false);
    expect(isPalindrome(123454321)).toEqual(true);
})