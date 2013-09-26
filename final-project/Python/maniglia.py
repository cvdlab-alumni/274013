from pyplasm import *
from numpy import *

SIMPLEX_GRID = COMP([INSR(PROD),AA(QUOTE)])
###maniglia nera
man1=SIMPLEX_GRID([[0.3,-1.4,0.3],[0.2],[0.3]]);
dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)]);
c0 = BEZIER(S1)([[0.11,0,0.3],[0.3,-0.1,0.3],[1.7,-0.1,0.3],[2,0,0.3]]);
c1 = BEZIER(S1)([[0,0.1,0.3],[0.3,0.1,0.6],[1.7,0.1,0.6],[2,0.1,0.3]]);
c2 = BEZIER(S1)([[0,0.15,0.3],[0.3,0.15,0.6],[1.7,0.15,0.6],[2,0.15,0.3]]);
c3 = BEZIER(S1)([[0.1,0.2,0.3],[0.3,0.3,0.3],[1.7,0.3,0.3],[2,0.2,0.3]]);
maniglia =COLOR([0,0,0])( STRUCT([man1,MAP(BEZIER(S2)([c0,c1,c2,c3]))(dom2D)]));
VIEW(maniglia)
