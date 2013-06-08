/*
alberi
*/

var dom1D = INTERVALS(1)(4);
var dom2D = PROD1x1([INTERVALS(1)(4),INTERVALS(1)(4)]);

//terreno
var dom = PROD1x1([INTERVALS(40)(20),INTERVALS(40)(20)]);

var piano = new Array();

function terr(alt){
var z=1.5-Math.random();
piano[alt[0],alt[1]]=z;
	return [alt[0],  alt[1], z];
}
var model =MAP(terr)(dom);
DRAW(COLOR([188/255, 152/255, 126/255])(model));



function point2D(x,y){
this.x=x;
this.y=y;}

function punto(){
return new point2D(Math.random(),Math.random());}

//lago
function max(x,y){
var m=0;
for (i = 3; i < x; i +=1) {
  for (j = 3; j < y; j +=1) {
if (piano[i,j]>m) m=piano[i,j]}}
return m
}

var acqua=COLOR( [0, 130/255, 80/255, 0.7])(SIMPLEX_GRID([[-3,10],[-3,15],[max(3+10,3+15)-0.3]]));

var lake=STRUCT([acqua]);
DRAW(lake);

//alberi
function foglie(h){
var domain = PROD1x1([INTERVALS(1)(10),INTERVALS(1)(6)]);
var apex = [0,0,h];
var f =BEZIER(S0)([[0,-1,0],[-1,-1,0],[-1,1,0],[0,1,0]]);
var a1 = MAP(CONICAL_SURFACE(apex)(f))(domain);
var f2=BEZIER(S0)([[0,1,0],[1,1,0],[1,-1,0],[0,-1,0]]);
var a2=MAP(CONICAL_SURFACE(apex)(f2))(domain);
return COLOR( [0, 130/255, 80/255, 0.7])( STRUCT([a1,a2]));}

function albero(x,y){
var alb;
var a=4*Math.random();

for (i = 0; i < x; i +=1) {
  for (j = 0; j < y; j +=1) {
  DRAW(T([0,1,2])([i*3+18,j*3+2,piano[i*3+18,j*3+2]+0.5])( STRUCT([ EXTRUDE([a])(DISK(0.2)(6)),T([2])([a])(foglie(a+1)) ]) ));
}
}
}
albero(7,5)