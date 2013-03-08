function identity(n){
var i,j;
var s=" ";
for (j = 1; j < n+1; j +=1) {
for (i = 1; i < n+1; i +=1) {
if(i!==j)s=s+0
else s=s+1;
if(i<n)s=s+", ";
}s=s+"\n ";}
return s;}

console.log(identity(8));
