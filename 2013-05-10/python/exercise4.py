from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])
toro=COLOR(BLACK)(TORUS([10,12])([50,50]))
cil=DIFFERENCE([ CYLINDER([2.0,0.5])(50) ,CYLINDER([1.0,0.4])(50) ])
ts=1.5
t1=T([1])([-ts/2])(GRID([[ts],[10],[0.5]]))
t2=R([1,2])(PI/2)(t1)
t3=R([1,2])(-PI/2)(t1)
volante=STRUCT([toro,cil,t1,t2,t3])


VIEW(volante)