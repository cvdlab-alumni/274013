from pyplasm import *



gomma=COLOR(BLACK)(DIFFERENCE([ CYLINDER([1.0,1.0])(80), CYLINDER([0.8,1.0])(80) ]))
cerchio=COLOR(YELLOW)(STRUCT([ CYLINDER([0.3,0.2])(80),DIFFERENCE([ CYLINDER([0.8,1.0])(80), CYLINDER([0.7,1.0])(80) ]) ]))
weel=STRUCT([gomma,cerchio])
VIEW(weel)