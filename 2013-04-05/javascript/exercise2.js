function point2D(x,y){
this.x=x;
this.y=y;}

function arc(alpha,r,R){
var domain = DOMAIN([[0,alpha],[r,R]])([36,50]);
var mapping=function(v){
var a=v[0];
var r=v[1];
return[r*COS(a),r*SIN(a)]}
var model=MAP(mapping)(domain);
return model;
}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;

var p1=new point2D(86,65)
var p2=new point2D(226,65)
var p3=new point2D(365,65)
var p4=new point2D(505,65)
var p5=new point2D(644,65)

var p6=new point2D(86,331)
var pq=new point2D(160,331)
var q7=new point2D(86,392)
var q8=new point2D(160,383)

var pil=EXTRUDE([h])(DISK(r)());
var quad=EXTRUDE([h])(T([0,1])([r,r])(SIMPLEX_GRID([[r*2],[r*2]])));





function arc(alpha,r,R){
var domain = DOMAIN([[0,alpha],[r,R]])([36,50]);
var mapping=function(v){
var a=v[0];
var r=v[1];
return[r*COS(a),r*SIN(a)]}
var model=MAP(mapping)(domain);
return model;
}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;

circ1=EXTRUDE([10])(T([0,1])([560,266+66.5])(R([0,1])(-PI/2)((arc(PI,0,66.5)))));
circ2=EXTRUDE([10])(T([0,1])([154+31,178])(R([0,1])(PI)((arc(PI,0,31)))));

var floor0=STRUCT([SIMPLEX_GRID([[-80,560-80],[-325,399-325],[10]]),  SIMPLEX_GRID([[-154,560-154],[-266,325-266],[10]]),  SIMPLEX_GRID([[-154,511-154],[-178,266-178],[10]]),circ1,circ2]);

var floor1=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,156-60,-242+156,333-242],[-h,10]]),SIMPLEX_GRID([[-80,300-80,-381+300,651-381],[-156,242-156],[-h,10]]),SIMPLEX_GRID([[-22,141-22,-388+141,651-388],[-333,386-333],[-h,10]])]);

var floor2=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,348-60],[-h*2,10]]),SIMPLEX_GRID([[-80,140-80,-318+140,c.x-318],[-348,d.y-348],[-h*2,10]])]);
var floor3=STRUCT([SIMPLEX_GRID([[-360,651-360],[-60,402-60],[-h*3,10]]),SIMPLEX_GRID([[-80,651-80],[-396,404-396],[-h*3,10]])]);
var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-h*4,10]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-h*4,10]])]);




var pilla1=T([1])([p1.y])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(pil),T([0])([p3.x])(pil),T([0])([p4.x])(pil),T([0])([p5.x])(pil)]));

var pilla2=T([1])([331])(STRUCT([T([0])([160])(quad),T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));

var pilla3=T([1])([q7.y])(STRUCT([T([0,1])([160,-q7.y+q8.y])(quad),T([0])([86])(pil)]));

var pillars0=STRUCT([pilla1,pilla2,pilla3]);



var pilla12=T([1,2])([p1.y-r,h])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla22=T([1,2])([331,h])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars1=STRUCT([pilla12,pilla22]);

var pilla13=T([1,2])([p1.y-r,h*2])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla23=T([1,2])([331,h*2])(STRUCT([T([0])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars2=STRUCT([pilla13,pilla23]);


var pilla14=T([1,2])([p1.y-r,h*3])(STRUCT([T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla24=T([1,2])([331,h*3])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars3=STRUCT([pilla14,pilla24]);





floors=STRUCT([floor1,floor0,floor2,floor3,floor4]);
pillars=STRUCT([pillars0,pillars1,pillars2,pillars3]);

var building=STRUCT([pillars,floors])


DRAW(building)
