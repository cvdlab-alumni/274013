/*Exercise 6
lar_to_obj
*/


//terreno
var dom1D = INTERVALS(1)(4);
var dom2D = PROD1x1([INTERVALS(1)(4),INTERVALS(1)(4)]);

//terreno
var dom = PROD1x1([INTERVALS(40)(20),INTERVALS(40)(20)]);

var piano = new Array();
var v=Array()
function terr(alt){  //codice provenente da modifica della mia funzione dell'arco di circonferenza
var z=1.5-Math.random();
piano[alt[0],alt[1]]=z
var r=[alt[0],  alt[1], z];
v.push(r)
	return [alt[0],  alt[1], z];
}
var model =MAP(terr)(dom)
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

var acqua=COLOR( [0, 130/255, 80/255, 0.7])(SIMPLEX_GRID([[-3,10],[-3,15],[-0.5,max(3+10,3+15)-0.8]]));

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
  DRAW(T([0,1,2])([i*3+18,j*3+2,piano[i*3+18,j*3+2]])( STRUCT([ EXTRUDE([a])(DISK(0.2)(6)),T([2])([a])(foglie(a+1)) ]) ));
}
}
}
albero(7,5)

//case
function casa(h,e){
points=[[0,0],[0,3],[1.5,4.5],[3,3],[3,0]]
punti=[[4,0],[2,6]]
return R([1,2])([PI/2])( EXTRUDE([e+1])(POLYLINE(points)));}

var tc=21
function home(x,y){
for (i = 0; i < x; i +=1) {
  for (j = 0; j < y; j +=1) {
  DRAW(COLOR([1,0,0])(T([0,1,2])([i*7+18,j*7+tc,0.5])(casa(Math.random()*2,Math.random()*2))));
}
}
};

home(3,2)


//case2
function casa2(h,e){
points=[[0,0],[0,3],[3,3],[3,0]]
punti=[[4,0],[2,6]]
return R([1,2])([PI/2])( EXTRUDE([e+1])(POLYLINE(points)));}

var tc=21
function home2(x,y){
for (i = 0; i < x; i +=1) {
  for (j = 0; j < y; j +=1) {
  DRAW(COLOR([1,0,0])(T([0,1,2])([i*7+18,j*7+tc+14,0.5])(casa2(Math.random()*2,Math.random()*2))));
}
}
};

home2(3,1)

//strade

var largh=3
DRAW(COLOR([0,0,0])( STRUCT([ SIMPLEX_GRID([[-18+largh,largh,-4,largh,-4,largh],[-tc+largh,3*7],[-1,0.3]]),SIMPLEX_GRID([[-18+largh,3*7+3],[-tc+largh+3,largh,-4,largh,-4,largh],[-1,0.3]])])));

//LAR
function lar_to_obj(v,fv) {
var l = v.length;
	var r = "###vertici:\n";
	for (var i=0; i<l; i++){
			r+="v   "+v[i][0]+"   "+v[i][1]+"  "+v[i][2]+'\n';
	}
r+="\n\n###celle:\n";
var l = fv[0].length;
	for(var i=0; i<l; i++){
		var m = fv[i].length;
		for(var j=0; j<m;j++){
if (j==0)r+="f  "
	if (j==m-1)r+=fv[i][j]+"\n";
		else	r+=fv[i][j]+" "; 			 		
	}
}
return r;
}