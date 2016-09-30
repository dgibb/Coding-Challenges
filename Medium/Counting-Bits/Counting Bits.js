/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var number=[];                      
    for (var i = 0; i <= num; i++) {    
        var bits=findBits(i);         
        number.push(bits);          
    }
    return number;
};

var findBits = function(i){ 
    var count=0;
    while (i!==0){          
        if (i & 1==1){      
            count++;        
        } 
        i=i>>1;             
    }                      
    return count;
};
