function upp(s){
return s.toUpperCase();}


console.log(upp("ciao ciao"));

function cap(s){
var t="";

if((s.charAt(0)) ==="\"") 
return (s.charAt(1)).toUpperCase() + cap(2)
else if(s.charAt(0)===" ") 
return " "+s.charAt(1).toUpperCase()+cap(2)
else return s.charAt(1)+cap(2); }

console.log(cap("\"hello world"));
