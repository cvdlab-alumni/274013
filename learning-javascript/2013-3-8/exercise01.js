var array = [1,2];

console.log(
array
.filter(function (element){
return element % 2  === 0;})
.map(function (element){
return element * 2;
})
.filter(function(element){

return element %4===0;})
.reduce(function (a,b){
return a+b;
})

);
