from pyplasm import *
from numpy import *

GRID = COMP([INSR(PROD),AA(QUOTE)])
SIMPLEX_GRID=GRID
lib=COLOR(GREEN)(STRUCT([SIMPLEX_GRID([[5],[16.2],[0.3,-5,0.3,-5,0.3,-5,0.3]]) , SIMPLEX_GRID([[5],[0.3,-5,0.3,-5,0.3,-5,0.3],[16.2]])]))
VIEW(lib)