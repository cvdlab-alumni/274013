function upp(s){
return s.charAt(0).toUpperCase()+s.slice(1);}

console.log(upp("ciao"));
console.log('\x50');


function cap(s){
var t="";

if(s.charAt(0) <'\x41' || s.charAt(0)) >'\x5a'
|| s.charAt(0)) <'\x41' || s.charAt(0)) >'\x5a') 
return upp(s.slice(1))
else return s.charAt(0)+cap(s.slice(1)); }

console.log(cap("\"hello world"));
