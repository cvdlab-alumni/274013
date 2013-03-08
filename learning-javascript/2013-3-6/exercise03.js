var i,j;
var s=" ";
for (j = 1; j < 11; j +=1) {
for (i = 1; i < 11; i +=1) {
if(i!==j)s=s+0
else s=s+1;
if(i<10)s=s+", ";
}s=s+"\n ";}
  console.log(s);
