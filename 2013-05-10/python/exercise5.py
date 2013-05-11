import sys
sys.path.append("/home/giorgio/workspace/larpy")
from lar import *
from scipy import *
#cofano
domain = INTERVALS(1)(36)
domain2 = PROD([INTERVALS(1)(40), INTERVALS(1)(1)])
domain3= PROD([INTERVALS(1)(40),domain2])

p1=[[5,5,0],[0,0,0],[45,0,0],[45,5,0]]
p2=[[0,10,0],[0,10,30],[50,10,30],[50,10,0]]
p3=[[0,40,0],[18,40,10],[40,40,10],[50,40,0]]
p4=[[0,70,0],[14,70,10],[40,70,10],[50,70,0]]

p5=[[0,0,0],[10,0,30],[50,5,0]]
p6=[[0,0,0],[10,0,30],[50,5,0]]

b1=BEZIER(S1)
b2=BEZIER(S2)
b3=BEZIER(S3)
l1=b1(p1)
l2=b1(p2)
l3=b1(p3)
l4=b1(p4)
l5=b1(p5)
l6=b1(p6)
S1=b2([l1,l2,l3,l4])
cofano=COLOR(BLUE)(MAP(S1)(domain2))

VIEW(cofano)