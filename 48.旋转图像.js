/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var _len = matrix.length - 1;
	//var count = _len - 2;
	for(var j = 0 ;j <_len ; j++){
		for(var i = 0 + j ;i< _len - j;i ++){
			var origin = {
				x:j,
				y:i,
				data:matrix[j][i]
			};
			sort(j,i,origin,matrix,_len);
		}
	}
  
    
	function sort(x,y,origin,rect,len){
		var current_x = len - y;
		var current_y = x;
		if(current_x === origin.x && current_y === origin.y){
			rect[x][y] = origin.data;
			return true;
		}else{
			rect[x][y] = rect[current_x][current_y];
			return sort(current_x,current_y,origin,rect,len);
		}
	}
};

