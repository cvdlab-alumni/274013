var array=[];

function carica(n){
var i;
for(i=0;i<n;i+=1)array[i]=Math.ceil(100/Math.random());}

carica(9);

var res=
array
.filter(function (element){
return (element % 2)-1  === 0;})
.sort(function(value1, value2) {
 return value2 < value1;})
;
console.log(res);
