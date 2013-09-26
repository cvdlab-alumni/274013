from pyplasm import *


SIMPLEX_GRID=COMP([INSR(PROD),AA(QUOTE)])

###mobiletto
strut=COLOR([1,1,1])(STRUCT([SIMPLEX_GRID([[6],[14],[0.3,-7,0.3]]),SIMPLEX_GRID([[6],[0.3,-4,0.3,-4.4,0.3,-4.4,0.3],[-0.3,7]]),SIMPLEX_GRID([[0.3],[14],[7.6]])]))
sp1=COLOR([0,0.168,0.107])(STRUCT([SIMPLEX_GRID([[-6,4],[0.2],[-0.3,7]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,-4.7,4.6],[-0.3,7]]) , SIMPLEX_GRID([[-6,0.2],[-4.4,4.6],[-0.3,1.9,-0.1,1.9,-0.1,1.9,-0.1,1]])]))
mobiletto=STRUCT([strut,sp1])
VIEW(mobiletto);