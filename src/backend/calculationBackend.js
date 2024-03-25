// Check if the passed number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * operation is one of "+", "-", "/", "*"
 *
 * result is simply the mathematical result of the operation
 * palindrome should be true if the result is a palindrome (e.g. 12321) and false otherwise
 */
function calculate(operation, a, b) {
    let result;
    switch (operation) {
        case "+":
                result = a + b;
        case "-":
                result = a - b;
        case "*":
                result = a * b;
        case "/":
                result = a / b;
        default:
                result = 0;
    }
    return {
        
        result,
        palindrome: isPalindrome(result)
    };
}

export default calculate;

