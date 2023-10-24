//https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
//Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    //check if there is a trailing zero
    if (num.slice(-1) == 0) {
        //if there is a trailing zero, replace with nothing using regex
        return num.replace(/0+$/, '')
    } else {
        //else return the number
        return num
    }
};
//here is my first attempt, where it worked but for only if there was 1 trailing zero
// var removeTrailingZeros = function(num) {
//     if (num.slice(-1) == 0) {
//         return num.slice(0, -1)
//     } else {
//         return num
//     }
// };