/*
terreno DTM
*/

//terreno
var dom = PROD1x1([INTERVALS(40)(10),INTERVALS(40)(10)]);

var piano = new Array();
var v=Array(); //vettore dei vertici

function terr(alt){  //codice provenente da modifica della mia funzione dell'arco di circonferenza
var z=1.5-Math.random();
piano[alt[0],alt[1]]=z;
var r=[alt[0],  alt[1], z];
v.push(r);
return [alt[0],  alt[1], z];
}
var model =MAP(terr)(dom);
DRAW(COLOR([188/255, 152/255, 126/255])(model));
