// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    //compare 2 strings where the arrays are joined
    if (word1.join('') === word2.join('')) {
        //return true
        return true;
    } else {
        //return false
        return false;
    }

}
