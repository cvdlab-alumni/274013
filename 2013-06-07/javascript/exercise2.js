/*
lago
*/
var dom1D = INTERVALS(1)(4);
var dom2D = PROD1x1([INTERVALS(1)(4),INTERVALS(1)(4)]);

//terreno
var dom = PROD1x1([INTERVALS(40)(20),INTERVALS(40)(20)]);

var piano = new Array();

function terr(alt){
var z=1.5-Math.random();
if(alt[1]>25 && alt[0]<12) z=Math.random()*alt[1]/5
piano[alt[0],alt[1]]=z;
	return [alt[0],  alt[1], z];
}
var model =MAP(terr)(dom);
DRAW(COLOR([188/255, 152/255, 126/255])(model));


//lago
function max(x,y){
var m=0;
for (i = 3; i < x; i +=1) {
  for (j = 3; j < y; j +=1) {
if (piano[i,j]>m) m=piano[i,j]}}
return m
}

var lake=COLOR( [0, 130/255, 80/255, 0.7])(SIMPLEX_GRID([[-3,10],[-3,15],[-0.5,max(3+10,3+15)-0.8]]));

DRAW(lake);