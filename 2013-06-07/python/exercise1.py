from pyplasm import *
from numpy import *
dom2D = INSR ( PROD ) ( [ INTERVALS ( 40) ( 20 ) , INTERVALS ( 40) ( 20 ) ] )
def terreno ( p ) :
    x,y = p
    return [x,y , random.random()]
VIEW ( MAP ( terreno ) ( dom2D ))