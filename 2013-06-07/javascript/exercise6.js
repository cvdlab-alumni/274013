/*Exercise 6
lar_to_obj
*/


//LAR
function lar_to_obj(v,fv) {
var l = v.length;
	var r = "###vertici:\n";
	for (var i=0; i<l; i++){
		if (v[i][2]==undefined)
			r+="v   "+v[i][0]+"   "+v[i][1]+"  0 \n";
		else	r+="v   "+v[i][0]+"   "+v[i][1]+"  "+v[i][2]+'\n';
	}
r+="\n\n###celle:\n";
var l = fv[0].length;
	for(var i=0; i<l; i++){
		var m = fv[i].length;
		for(var j=0; j<m;j++){
if (j==0)r+="f  "
	if (j==m-1)r+=fv[i][j]+"\n";
		else	r+=fv[i][j]+" "; 			 		
	}
}
return r;
}

/* dati di esempio della lezione del 2013-06-04/examples.py  */

var fv = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
];
var v = [[0,6],
[0,0],
[3,0],
[6,0,4],
[0,3,4],
[3,3],
[6,3],
[6,6],
[3,6]];

/* prova*/
var prova= lar_to_obj(v,fv);