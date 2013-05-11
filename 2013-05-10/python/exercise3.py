from pyplasm import *


##weel

sr=0.5

gomma=COLOR(BLACK)(DIFFERENCE([ CYLINDER([10,10])(80), CYLINDER([8,10])(80) ]))
cerchio=COLOR(WHITE)(STRUCT([ DIFFERENCE([ CYLINDER([5,2])(80), CYLINDER([2,1])(50) ]),DIFFERENCE([  CYLINDER([8,10])(80), CYLINDER([7,10])(80)]) ]))
r1=T([1,2])([4.5,-sr/2])(GRID([[3],[sr],[2]]))
r2=T([1,2])([-7.5,-sr/2])(GRID([[3],[sr],[2]]))
r3=R([1,2])(PI/2)(STRUCT([r2,r1]))
r4=R([1,2])(PI/4)(STRUCT([r2,r1]))
r5=R([1,2])(-PI/4)(STRUCT([r2,r1]))
r6=R([1,2])(-PI/8)(STRUCT([r2,r1]))
r7=R([1,2])(PI/8)(STRUCT([r2,r1]))
r8=R([1,2])(-3*PI/8)(STRUCT([r2,r1]))
r9=R([1,2])(3*PI/8)(STRUCT([r2,r1]))
raggi=STRUCT([r1,r2,r3,r4,r5,r6,r7,r8,r9])
weel=STRUCT([gomma,cerchio,raggi])
VIEW(weel)