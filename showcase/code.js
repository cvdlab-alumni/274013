var base=COLOR([1,1,1])(SIMPLEX_GRID([[25.5],[26.5],[2]]));

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(30)]);
var c0 = BEZIER(S0)([[-2,-1,3],[5,0,7],[16,0,7],[25,-1,3]]);
var c1 = BEZIER(S0)([[-3,1,3],[5,1,7],[16,1,7],[26,1,3]]);
var c2 = BEZIER(S0)([[-3,27,3],[5,27,7],[16,27,7],[26,27,3]]);
var c3 = BEZIER(S0)([[-2,28,3],[5,28,7],[16,28,7],[25,28,3]]);
var sopra = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);

var c0s= BEZIER(S0)([[-2,-1,2],[5,-1,0.5],[16,-1,0.5],[25,-1,2]]);
var c1s= BEZIER(S0)([[-3,1,2],[5,1,0.5],[16,1,0.5],[26,1,2]]);
var c2s= BEZIER(S0)([[-3,27,2],[5,27,0.5],[16,27,0.5],[26,27,2]]);
var c3s = BEZIER(S0)([[-2,28,2],[5,28,0.5],[16,28,0.5],[25,28,2]]);
var sotto = MAP(BEZIER(S1)([c0s,c1s,c2s,c3s]))(domain);

var dx = MAP(BEZIER(S1)([c3,c3s]))(domain);

var sx = MAP(BEZIER(S1)([c0,c0s]))(domain);

var model=STRUCT([base,sopra,sotto,dx,sx]);

DRAW(model);

