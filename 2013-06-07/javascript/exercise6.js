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
