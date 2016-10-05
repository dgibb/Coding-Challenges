/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var a=0;
    var b=0;
    var n= matrix.length-1;
    for(var i=0; i<n/2; i++){
        for(var j=0; j<n-i-i; j++){
            a=matrix[j+i][n-i];
            matrix[j+i][n-i]=matrix[i][j+i];//
            b=matrix[n-i][n-j-i];
            matrix[n-i][n-j-i]=a;
            a=matrix[n-j-i][i];
            matrix[n-j-i][i]=b;
            matrix[i][j+i]=a;
            }
        }
};
