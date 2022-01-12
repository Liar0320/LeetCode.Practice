/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
const KEYSMAP__LINE1 = 'qwertyuiop';
const KEYSMAP__LINE2 = 'asdfghjkl';
const KEYSMAP__LINE3 = 'zxcvbnm';

var findWords = function(words) {
 
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if(!validRule(element)){
            words.splice(index,1);
            index--;
        }
    }

    return words;
};

/**
 * 
 * @param {string} str 
 */
function validRule(str) {
    str = str.toLowerCase();

    let rule = null;
    let index = 0;
    let firstChar = str[index++];
    if(KEYSMAP__LINE1.includes(firstChar)){
        rule = KEYSMAP__LINE1;
    }else if(KEYSMAP__LINE2.includes(firstChar)){
        rule = KEYSMAP__LINE2;
    }else if(KEYSMAP__LINE3.includes(firstChar)){
        rule = KEYSMAP__LINE3;
    }
 

    while (rule.includes(str[index])) {

        index++;
    }

    return str.length === index;
}