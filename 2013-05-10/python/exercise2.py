from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])


def point2D(x,y):
	x=x
	y=y

def arc(alpha,r,R):
	domain = INTERVALS([[0,alpha],[r,R]])([36,50])
	mapping=function(v)
	a=v[0]
	r=v[1]
	return[r*COS(a),r*SIN(a)]
	model=MAP(mapping)(domain)
	return model