/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var P=true;
    var n=x.toString().length;
    for (var i=0; i<n; i++){
        if (x.toString().charAt(i)!=x.toString().charAt(n-(i+1))){
            P=false;
        }
    }
    return P;
};
