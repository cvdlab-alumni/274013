from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])


def point2D(x,y):
	x=x
	y=y



VIEW(DIFFERENCE([ CYLINDER([1.0,2.0])(80), CYLINDER([0.8,2.0])(80) ]))