/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = "";
    let regexp = /[0-9]/g;
    // remove whitespace at ends
    s = s.trim();
    // check for negative sign
    if (s[0] === "-" || s[0] === "+") {
        result += s[0];
        s = s.slice(1);
        if (!regexp.test(s[0])) {
            return 0;
        }
    }
    // apply numbers to string until not a number
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        regexp = /[0-9]/g;
        if (regexp.test(char)) {
            result += char;
        } else {
            break;
        }
    }
    // check for int size
    const INT_MAX = Math.pow(2, 31) -1;
    const INT_MIN = Math.pow(-2, 31);

    if (result >= INT_MAX) {
        return INT_MAX
    }
    if (result <= INT_MIN) {
        return INT_MIN;
    }

    return result;
};


// I- string
// O- int
// C-
// E-


// discards whitespace
// negative or positive
// then numbers
// if the first sequence is not an integral number
// str empty
// only whitespace
// no conversion return 0
// 32 bit integer size

// result * 10 + currInt