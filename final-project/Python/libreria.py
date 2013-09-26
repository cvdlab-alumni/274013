from pyplasm import *
from numpy import *

SIMPLEX_GRID=COMP([INSR(PROD),AA(QUOTE)])

lib=COLOR(GREEN)(STRUCT([SIMPLEX_GRID([[5],[16.2],[0.3,-5,0.3,-5,0.3,-5,0.3]]) , SIMPLEX_GRID([[5],[0.3,-5,0.3,-5,0.3,-5,0.3],[16.2]])]))
VIEW(lib)
