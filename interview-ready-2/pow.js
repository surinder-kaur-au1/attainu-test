'use strict';

var numberPow = function(x,y){
    var z= y/2;
    if(y == 0){
      return 1;
      console.log(x,y,z);
    } else if(y%2 == 0){
      
      var temp = Math.Pow(x, z) * Math.Pow(x, z);
      return temp;
    } else {
      var a = x * Math.Pow(x, z)* Math.Pow(x, z);
      return a;
    }
  var result = numberPow(2, 3);
  console.log(result);