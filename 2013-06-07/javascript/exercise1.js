/*
Exercise 1

A digital terrain model (DTM) is normally defined as a map that associates the vertices of a simplicial decomposition of a 2D rectangle (corresponding to a geographical map) with three coordinate functions x(u,v), y(u,v), z(u,v), where x(u,v) and y(u,v) are the selectors of the first and second coordinate of the vertices, and z(u,v) provides the height (altitude) of vertices. This one can be obtained by adding or subtracting a (relatively small) random number to the altitude values. HINT: To provide the initial values of altitude it is recommended to use either some mathematical function of two variables, or a surface generated from a few control points. The random correction of altitude must obviously be executed in a second computing stage.

Produce a model of mountainous terrain using the approach described above.
*/

//terreno
var dom = PROD1x1([INTERVALS(40)(20),INTERVALS(40)(20)]);

var piano = new Array();
var v=Array()
function rilievi(alt){  //codice proveniente da modifica della mia funzione dell'arco di circonferenza
var z=1.5-Math.random();
piano[alt[0],alt[1]]=z
var r=[alt[0],  alt[1], z];
v.push(r)
	return [alt[0],  alt[1], z];
}
var model =MAP(rilievi)(dom)
DRAW(COLOR([188/255, 152/255, 126/255])(model));
