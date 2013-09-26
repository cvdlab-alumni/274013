//Giorgio Cerrito 274013

var domain = INTERVALS(1)(22);
var dom3D = DOMAIN([[0,1],[0,1]])([20,20]);

function arc(f,alpha,r,R){
var domain = DOMAIN([[f,alpha],[r,R]])([10,30]);
var mapping=function(v){
var a=v[0];
var r1=v[1];
return[r1*COS(a),r1*SIN(a)]}
var model=MAP(mapping)(domain);
return model;
}

var toro = function (R, r) {
  return function (v) {
    var a = v[0];
    var b = v[1];
    var x = (r * COS(a) + R) * COS(b);
    var y = (r * COS(a) + R) * SIN(b);
    var z = (r * SIN(a));
    return [x,y,z];
  }
}

//piedino con ruota
var domainWheel = DOMAIN([[0,2*PI],[0,1]])([20,20])
var wheel = MAP(toro(0.4,0.3))(DOMAIN([[0,2*PI],[0,2*PI]])([20,20]))
var perno=EXTRUDE([0.4])(DISK(0.2)())
var sup=T([0,1])([-0.1,-0.1])(SIMPLEX_GRID([[0.2],[1],[-0.4,0.2]]))
var ruota=T([1,2])([0.5,-0.8])(R([1,2])(PI/2)(COLOR([0,0,0])(STRUCT([wheel,perno,sup]))))

//ripiano nero rotante
var colon=EXTRUDE([2])(DISK(0.5)())
var rot=EXTRUDE([0.31])(DISK(1)())

function smus(a,t){
return EXTRUDE([0.2])(arc(a,t,0,0.5))
}
var lati=STRUCT([ T([0,1,2])([2,4,2])(smus(0,PI/2)), T([0,1,2])([-1,4,2])(smus(PI/2,PI)), T([0,1,2])([-1,-4,2])(smus(PI,2*PI)), T([0,1,2])([2,-4,2])(smus(PI,2*PI)) ])
var pian=T([0,1,2])([-1.5,-4.5,2])(STRUCT([ SIMPLEX_GRID([[4],[-0.5,8],[0.2]]), SIMPLEX_GRID([[-0.5,3],[0.5,-8,0.5],[0.2]]) ]))
var pied=COLOR([0/255,0/255,0/255])(T([0,1,2])([1.3,7.5,7.3])(STRUCT([pian,lati,colon,rot])))
DRAW(pied)

//pannello verde dritto
var smu1=STRUCT([ T([0,1])([5.5,16.2])(smus(0,PI/2)), T([0,1])([0.5,16.2])(smus(PI/2,PI)), T([0,1])([5.5,0.5])(smus(PI,2*PI)), T([0,1])([0.5,0.5])(smus(PI,2*PI)) ])
var pian1=STRUCT([ SIMPLEX_GRID([[6],[-0.5,15.7],[0.2]]), SIMPLEX_GRID([[-0.5,5],[0.5,-15.7,0.5],[0.2]]) ])
var list1=SIMPLEX_GRID([[-4,0.1],[-1,14],[-0.3,0.1]])
var panel1=T([1,2])([-15.2,8]) (R([0,1])(-3.3*PI/5)( (R([0,2])(-PI/2)( STRUCT([list1,COLOR([0/255,168/255,107/255])(STRUCT([smu1,pian1])) ]) )) ))


//pannello verde ondulato
function verde1(){
var controlpoints = [[0.5, 6,0], [8.9, 6.0,0], [5.9, 3,0], [16.5, 3,0]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[0.5, 0,0], [8.6, 0,0], [5.7, 0,0], [16.5, 0,0]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return COLOR([0/255,168/255,107/255])(out);
}

function verde2(){
var controlpoints = [[0.5, 6,0.2], [8.9, 6.0,0.2], [5.9, 3,0.2], [16.5, 3,0.2]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[0.5, 0,0.2], [8.6, 0,0.2], [5.7, 0,0.2], [16.5, 0,0.2]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return COLOR([0/255,168/255,107/255])(out);
}

function verde3(){
var controlpoints = [[0.5, 6,0.2], [8.9, 6.0,0.2], [5.9, 3,0.2], [16.5, 3,0.2]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[0.5, 6,0], [8.9, 6.0,0], [5.9, 3,0], [16.5, 3,0]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return COLOR([0/255,168/255,107/255])(out);
}

function verde4(){
var controlpoints = [[0.5, 0,0.2], [8.6, 0,0.2], [5.7, 0,0.2], [16.5, 0,0.2]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[0.5, 0,0], [8.6, 0,0], [5.7, 0,0], [16.5, 0,0]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return COLOR([0/255,168/255,107/255])(out);
}

function sides(){
var lati=STRUCT([ T([0,1])([16.5,2.5])(smus(0,PI/2)), T([0,1])([0.5,5.5])(smus(PI/2,PI)), T([0,1])([0.5,0.5])(smus(PI,2*PI)), T([0,1])([16.5,0.5])(smus(PI,2*PI)) ])
var pian=STRUCT([ SIMPLEX_GRID([[0.5],[-0.5,5],[0.2]]),SIMPLEX_GRID([[-16.5,0.5],[-0.5,2],[0.2]])   ])
var pied=COLOR([0/255,168/255,107/255])(STRUCT([pian,lati]))
return pied
}

var list2=SIMPLEX_GRID([[-0.5,7],[-4,0.1],[-0.3,0.1]])
var panel2=T([1,2])([-15,8])( R([0,2])(PI/2)( R([0,1])(PI/2)( STRUCT([verde1(),verde2(),verde3(),verde4(),list2,sides()]))))
DRAW(panel2)



//supporto scrivania rotante
var colon1=EXTRUDE([1.4])(DISK(0.5)())
var rot1=EXTRUDE([0.31])(DISK(1)())
var sop=COLOR([0/255,0/255,0/255])(T([0,1,2])([2,1,7.3])(STRUCT([colon1,rot1])))
DRAW(sop)

//mobiletto
var strut=COLOR([255/255,255/255,255/255])(STRUCT([SIMPLEX_GRID([[6],[14],[0.3,-7,0.3]]),SIMPLEX_GRID([[6],[0.3,-4,0.3,-4.4,0.3,-4.4,0.3],[-0.3,7]]),SIMPLEX_GRID([[0.3],[14],[7.6]])]))
var sp1=COLOR([0/255,168/255,107/255])(STRUCT([SIMPLEX_GRID([[-6,4],[0.2],[-0.3,7]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,-4.7,4.6],[-0.3,7]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,4.6],[-0.3,1.9,-0.1,1.9,-0.1,1.9,-0.1,1]])]))
var ruote=STRUCT([T([0,1])([1,1])(ruota),T([0,1])([1,12])(ruota),T([0,1])([5,1])(ruota),T([0,1])([5,12])(ruota)])
var mobiletto=STRUCT([strut,sp1,ruote])
DRAW(mobiletto)
//libreria
function libreria(){
var lib=T([1])([20])(COLOR([0/255,168/255,107/255])(STRUCT([SIMPLEX_GRID([[5],[16.2],[0.3,-5,0.3,-5,0.3,-5,0.3]]) , SIMPLEX_GRID([[5],[0.3,-5,0.3,-5,0.3,-5,0.3],[16.2]])])));
return lib;
}
DRAW(libreria())

//piedi scrivania
var piede=COLOR([0/255,0/255,0/255])(EXTRUDE([8.5])(DISK(0.4)()))
var piedi=STRUCT([T([0,1])([16,-18])(STRUCT([piede,ruota])),T([0,1])([14,-21])(STRUCT([piede,ruota]))])

//Scrivania

function sopra(){
var dom2D = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var controlpoints = [[2.8, 39.8,0.3], [4.9, 38.5,0.3], [4.9, 38.5,0.3], [6.6, 37.6,0.3],[5.9, 37.9,0.3], [9.5, 35.7,0.3], [8.7, 35.4,0.3], [10.7, 37.9,0.3],[17.2, 44.2,0.3], [17.5, 45,0.3], [26.8, 47.4,0.3], [28.5, 47.5,0.3], [28.2, 47.1,0.3], [28.2, 50.1,0.3], [28.2, 52.7,0.3], [28.2, 50.8,0.3], [28.2, 54.6,0.3]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[2.8, 39.8,0.3], [5.4, 44.2,0.3], [6.7, 47,0.3], [11, 54.6,0.3]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return out;
}

function sotto(){
var controlpoints = [[2.8, 39.8,0], [4.9, 38.5,0], [4.9, 38.5,0], [6.6, 37.6,0],[5.9, 37.9,0], [9.5, 35.7,0], [8.7, 35.4,0], [10.7, 37.9,0],[17.2, 44.2,0], [17.5, 45,0], [26.8, 47.4,0], [28.5, 47.5,0], [28.2, 47.1,0], [28.2, 50.1,0], [28.2, 52.7,0], [28.2, 50.8,0], [28.2, 54.6,0]];
var cM = BEZIER(S0)(controlpoints);
var curve = MAP(cM)(domain);

var controlpoints2 = [[2.8, 39.8,0], [5.4, 44.2,0], [6.7, 47,0], [11, 54.6,0]];
var cM2 = BEZIER(S0)(controlpoints2);
var curve2 = MAP(cM2)(domain);

var out = MAP(BEZIER(S1)([cM,cM2]))(dom3D);
return out;
}

function bordic(){
var controlpoints = [[2.8, 39.8,0.3], [4.9, 38.5,0.3], [4.9, 38.5,0.3], [6.6, 37.6,0.3],[5.9, 37.9,0.3], [9.5, 35.7,0.3], [8.7, 35.4,0.3], [10.7, 37.9,0.3],[17.2, 44.2,0.3], [17.5, 45,0.3], [26.8, 47.4,0.3], [28.5, 47.5,0.3], [28.2, 47.1,0.3], [28.2, 50.1,0.3], [28.2, 52.7,0.3], [28.2, 50.8,0.3], [28.2, 54.6,0.3]];
var cM = BEZIER(S0)(controlpoints);
var controlpoints1 = [[2.8, 39.8,0], [4.9, 38.5,0], [4.9, 38.5,0], [6.6, 37.6,0],[5.9, 37.9,0], [9.5, 35.7,0], [8.7, 35.4,0], [10.7, 37.9,0],[17.2, 44.2,0], [17.5, 45,0], [26.8, 47.4,0], [28.5, 47.5,0], [28.2, 47.1,0], [28.2, 50.1,0], [28.2, 52.7,0], [28.2, 50.8,0], [28.2, 54.6,0]];
var cM1 = BEZIER(S0)(controlpoints1);
var out = MAP(BEZIER(S1)([cM,cM1]))(dom3D);
return out;
}

function bordi2(){
var controlpoints2 = [[2.8, 39.8,0], [5.4, 44.2,0], [6.7, 47,0], [11, 54.6,0]];
var cM2 = BEZIER(S0)(controlpoints2);
var controlpoints3 = [[2.8, 39.8,0.3], [5.4, 44.2,0.3], [6.7, 47,0.3], [11, 54.6,0.3]];
var cM3 = BEZIER(S0)(controlpoints3);
var out = MAP(BEZIER(S1)([cM2,cM3]))(dom3D);
return out;
}

function bordi1(){
var controlpoints3 = [[28.2, 54.6,0], [21, 54.6,0], [18.2, 54.6,0], [11, 54.6,0]];
var cM3 = BEZIER(S0)(controlpoints3);
var controlpoints2 = [[28.2, 54.6,0.3], [21, 54.6,0.3], [18.2, 54.6,0.3], [11, 54.6,0.3]];
var cM2= BEZIER(S0)(controlpoints2);
var out = MAP(BEZIER(S1)([cM2,cM3]))(dom3D);
return out;
}


var tavolo=R([0,1])([PI/2])(T([0,1,2])([-26,-54.6,8.5])(STRUCT([bordi1(),bordi2(),bordic(),sopra(),sotto()])))
var scrivania=STRUCT([tavolo,piedi,panel1])
DRAW(scrivania)