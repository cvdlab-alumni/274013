//PlayStation3 my2011

var base=SIMPLEX_GRID([[25],[26],[2]]);

var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(40)]);
var c0 = BEZIER(S0)([[-1,-1,3.5],[5,-1,6],[16,-1,6],[25,-1,3]]);
var c1 = BEZIER(S0)([[-3,1,3],[5,1,6],[16,1,6],[25,1,3]]);
var c2 = BEZIER(S0)([[-1,27,3.5],[5,27,6],[16,27,6],[25,27,3]]);
var c3 = BEZIER(S0)([[0,15,3],[5,15,6],[16,15,6],[25,15,3]]);
var c4 = BEZIER(S0)([[-3,14,3],[5,14,6],[16,14,6],[25,14,3]]);
var sopra = MAP(BEZIER(S1)([c0,c2]))(domain);

var c0s= BEZIER(S0)([[-3,-1,2],[5,-1,0.5],[16,-1,0.5],[25,-1,2]]);
var c1s= BEZIER(S0)([[-3,1,2],[5,1,0.5],[16,1,0.5],[25,1,2]]);
var c2s= BEZIER(S0)([[-3,27,2],[5,27,0.5],[16,27,0.5],[25,27,2]]);
var c3s = BEZIER(S0)([[-3,15,2],[5,51,0.5],[16,15,0.5],[25,15,2]]);
var sotto = MAP(BEZIER(S1)([c0s,c1s,c2s]))(domain);

var dx = MAP(BEZIER(S1)([c2,c2s]))(domain);
var sx = MAP(BEZIER(S1)([c0,c0s]))(domain);

var dietro=T([1])([-1])(SIMPLEX_GRID([[-24,1],[28],[-2,1]]));
var points = [[0,0],[2,0],[2,1.5],[0,0.8]];
var cells = [[0,1,2],[0,3,2]];
var sd = EXTRUDE([14])(SIMPLICIAL_COMPLEX(points)(cells));
var ss=SIMPLEX_GRID([[2],[0.5],[-14,14]]);
var sl=STRUCT([SIMPLEX_GRID([[-2,0.5],[0.8,-0.3,0.4],[-14,14]]),SIMPLEX_GRID([[-2,0.5],[-0.7,0.5],[-14,2,-10,2]])]);

var power=T([0,2])([-2,2.5])(STRUCT([ COLOR([0,0,0])(  EXTRUDE([0.01])(DISK(0.5)()) ),COLOR([1,0,0])(T([0])([-0.3])(  EXTRUDE([0.03])(DISK(0.05)()) )) ]));
var eject=T([0,1,2])([-2,6,2.5])(STRUCT([  COLOR([0,0,0])( EXTRUDE([0.02])(DISK(0.5)()) ), COLOR([0,0,1])(T([0])([-0.3])(  EXTRUDE([0.03])(DISK(0.05)()) )) ]));
var davanti=STRUCT([T([0,1,2])([-3,27,2])(R([1,2])(PI/2)(STRUCT([sd,ss,sl]))) ]);

var usb=T([0])([-0.1])( STRUCT([SIMPLEX_GRID([[0.1],[-21.5,1,-1,1],[-0.5,0.5] ]) ]) );
var led=COLOR([0,1,0])( T([0])([-0.1])( STRUCT([SIMPLEX_GRID([[0.1],[-17,0.1,-0.3,0.11],[-0.4,0.1] ]) ]) ));

var hdd=T([0])([-0.1])( STRUCT([SIMPLEX_GRID([[0.1],[-0.5,0.8,-0.5,0.8,-0.5,0.8,-0.5,0.8],[-0.2,0.1] ]) ]) );
var aria=STRUCT([SIMPLEX_GRID([[-25,0.1],[-1,0.02,-1.5,0.02,-1.5,0.02,-1.5,0.02,-1.5,0.02],[-1,0.46]]) , SIMPLEX_GRID([[-25,0.1],[-1,6.1],[-1,0.02,-0.2,0.02,-0.2,0.02]]) ,SIMPLEX_GRID([[-25,0.1],[-1,24.18],[-2,0.02,-0.2,0.02,-0.2,0.02,-0.2,0.02]]) ,SIMPLEX_GRID([[-25,0.1],[-1,0.02,-3,0.02,-3,0.02,-3,0.02,-3,0.02,-3,0.02,-3,0.02,-3,0.02,-3,0.02,-3],[-2,0.68]])]);
var eth=STRUCT([SIMPLEX_GRID([[-25,0.1],[-10,0.2,-1,0.2],[-0.7,0.8]]) , SIMPLEX_GRID([[-25,0.1],[-10,1.4],[-0.7,0.2]]), SIMPLEX_GRID([[-25,0.1],[-10,0.5,-0.4,0.5],[-1.3,0.2]]) ]);
var v220=STRUCT([SIMPLEX_GRID([[-25,0.1],[-24,1.5],[-0.5,0.8]]) ]);
var comp=STRUCT([SIMPLEX_GRID([[-25,0.1],[-18,1.5],[-0.8,0.4]]) ]);
var hdmi=STRUCT([SIMPLEX_GRID([[-25,0.1],[-13,1.5],[-0.8,0.2]]) ]);
var corpo=COLOR([47/255, 51/255, 53/255])(STRUCT([base,sopra,sotto,dietro,davanti,dx,sx]));
var pezzi=COLOR([0,0,0])(STRUCT([hdd,aria,eth,v220,comp,hdmi,usb ]));
var model=STRUCT([eject, power,corpo,pezzi,led]);