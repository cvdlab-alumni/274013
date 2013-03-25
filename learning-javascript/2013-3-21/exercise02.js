function edge (a, b) {
this.a = a;
this.b = b;
}


Edge.prototype.length= function(){
return Math.sqrt(Math.pow((this.b.x-this.a.x),2)+Math.pow((this.b.y-this.b.x),2));}
