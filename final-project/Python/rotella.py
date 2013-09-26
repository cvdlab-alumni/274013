from pyplasm import *
from numpy import *


SIMPLEX_GRID=COMP([INSR(PROD),AA(QUOTE)])

###piedino con ruotaTORUS([1,2])([20,20])
wheel = TORUS([0.2,0.7])([20,20]);
perno=CYLINDER([0.2,0.6])(18)
sup=T([0,1])([-0.1,-0.1])(SIMPLEX_GRID([[0.2],[0.8],[-0.4,0.2]]));
ruota=T([2,3])([0.5,-0.8])(R([2,3])(PI/2)(COLOR([0,0,0])(STRUCT([wheel,perno,sup]))));
VIEW(ruota)
