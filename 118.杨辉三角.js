/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    var i,ii,prevRow,currentRow,result=[];
	do{
		currentRow = [];
		for(i = 0,ii=result.length+1,prevRow =result[ii-2]  ; i<ii ; i++){
			currentRow.push(getValue(i,prevRow));
		}
		result.push(currentRow);
	}while(--numRows)
	return result;
};
function getValue(i,prevRow){
	if(prevRow === undefined) return 1;
	if(i === 0 || i === prevRow.length) return 1;
	return (prevRow[i-1] + prevRow[i]);
};

