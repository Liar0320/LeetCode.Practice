/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 * @description
 * 首先board肯定是一个 2 * 2 的数组
 * 验证每一行是否成立 成立的条件每个元素都不相等且在1-9
 * vaildRows() 
 * 验证每一列是否成立 成立的条件每个元素都不相等且在1-9
 * vaildCols()
 * 验证每个区块内是否成立  成立的条件每个元素都不相等且在1-9
 * vaildRect()
 * 小块思想 循环 9次 拆分成数组 可以进行判断
 * 大块思想 循环 9次 拆分成数组 可以进行判断
	for(var j = 0 ;j< 9; j++){
		var countX = j % 3 + 3*_i;
		var countY = Math.floor(j/3) + 3*i;
		if(!validBool(result,board[countX][countY])){
			console.log(result,countX,countY)
			return false;
		}
    }
 * 成立的条件每个元素都不相等且在1-9
	function validBool(obj,val){
		return 0<val&&val<10&&(!(val in obj))
	}
 */
var isValidSudoku = function(board) {
    function validBool(obj,val){
		if(val === ".") return true;
		if( (0<val&&val<10)&&(!(val in obj))){
			obj[val] = "";
			return true;
		}else{
			return false;
		}
	}
	function vaildRows(board){
		var result;
		for(var i = 0;i<board.length;i++){
			result = {};
			for(var j = 0; j<board[i].length;j++){
				if(!validBool(result,board[i][j])){
					console.log(result,i,j);
					return false;
				}
			}
		}
		return true;
	}
	function vaildCols(board){
		var result;
		for(var i = 0;i<board.length;i++){
			result = {};
			for(var j = 0; j<board[i].length;j++){
				if(!validBool(result,board[j][i])){
					console.log(result,j,i);
					return false;
				}
			}
		}
		return true;
	}
	function vaildRect(board){
		var result ;
		for(var _i = 0 ; _i<3;_i++){
			for(var i =0 ; i < 3; i++){
				result = {};
				for(var j = 0 ;j< 9; j++){
					var countX = j % 3 + 3*_i;
					var countY = Math.floor(j/3) + 3*i;
					if(!validBool(result,board[countX][countY])){
						console.log(result,countX,countY);
						return false;
					}
				}
			}
		}
		return true;
	}
    
    
	return vaildRows(board)&&vaildCols(board)&&vaildRect(board);
};

