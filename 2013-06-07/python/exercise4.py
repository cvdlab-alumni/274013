from pyplasm import *
from numpy import *

SIMPLEX_GRID = COMP([INSR(PROD),AA(QUOTE)])
dom2D = INSR ( PROD ) ( [ INTERVALS ( 40) ( 10 ) , INTERVALS ( 40) ( 10 ) ] )
def terreno ( p ) :
    x,y = p
    return [x,y ,1.5- random.random()]
terr= MAP ( terreno ) ( dom2D )

###lago

acqua=COLOR( [0, 130, 80, 0.7])(SIMPLEX_GRID([[-3,10],[-3,15],[1]]));

model=STRUCT([acqua,terr]);
VIEW(model);