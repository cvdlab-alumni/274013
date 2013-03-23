function edge(a,b){
this.a=a;
this.b=b;
}


function length(e){
return Math.sqrt(Math.pow((e.b.x-e.a.x),2)+Math.pow((e.b.y-e.b.x),2));}
