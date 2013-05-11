from pyplasm import *

toro=COLOR(BLACK)(TORUS([10,12])([50,50]))
cil=DIFFERENCE([ CYLINDER([2.0,0.5])(50) ,CYLINDER([1.0,0.2])(50) ])
volante=STRUCT([toro,cil])


VIEW(volante)