from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])


def point2D(x,y):
	x=x
	y=y

gomma=COLOR(BLACK)(DIFFERENCE([ CYLINDER([1.0,1.0])(80), CYLINDER([0.8,1.0])(80) ]))

VIEW(gomma)