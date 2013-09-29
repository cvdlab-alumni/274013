from pyplasm import *


SIMPLEX_GRID=COMP([INSR(PROD),AA(QUOTE)])
###maniglia nera
s=6.1
man1=SIMPLEX_GRID([[0.3,-1.4,0.3],[0.2],[0.3]]);
dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)]);
c0 = BEZIER(S1)([[0.11,0,0.3],[0.3,-0.1,0.3],[1.7,-0.1,0.3],[2,0,0.3]]);
c1 = BEZIER(S1)([[0,0.1,0.3],[0.3,0.1,0.6],[1.7,0.1,0.6],[2,0.1,0.3]]);
c2 = BEZIER(S1)([[0,0.15,0.3],[0.3,0.15,0.6],[1.7,0.15,0.6],[2,0.15,0.3]]);
c3 = BEZIER(S1)([[0.1,0.2,0.3],[0.3,0.3,0.3],[1.7,0.3,0.3],[2,0.2,0.3]]);
maniglia =COLOR([0,0,0])( STRUCT([man1,MAP(BEZIER(S2)([c0,c1,c2,c3]))(dom2D)]));
###mobiletto
strut=COLOR([1,1,1])(STRUCT([SIMPLEX_GRID([[6.3],[14],[-7.3,0.3]]),SIMPLEX_GRID([[6],[14],[0.3]]),SIMPLEX_GRID([[6],[0.3,-4,0.3,-4.4,0.3,-4.4,0.3],[-0.3,7]]),SIMPLEX_GRID([[0.3],[14],[7.6]])]))
sp1=COLOR([0,0.168,0.107])(STRUCT([SIMPLEX_GRID([[-6,4],[0.2],[7.3]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,-4.7,4.9],[7.3]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,4.6],[2.2,-0.1,1.9,-0.1,1.9,-0.1,1]])]))
maniglie=STRUCT([T([1,3])([7.5,6.8])(R([2,3])(PI/2)(maniglia))])
mobiletto=STRUCT([strut,sp1,maniglie])

VIEW(mobiletto);
