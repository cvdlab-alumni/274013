from pyplasm import *

toro=TORUS([10,12])([50,50])
cil=CYLINDER([2.0,1.0])(50) 
volante=STRUCT([toro,cil])


VIEW(volante)