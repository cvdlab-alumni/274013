function upp(s){
return s.charAt(0).toUpperCase()+s.slice(1);}

console.log(upp("ciao"));


function cap(s){
var t="";

if((s.charAt(0)) ===("\"" || " ")) 
return s.charAt(0).toUpperCase()+cap(s.slice(1))
else return s.charAt(0)+cap(s.slice(1)); }

console.log(cap("\"hello world"));
