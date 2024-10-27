function heron(){
    //document.getElementById("heronA").innerHTML;
    let a = 0;
    let b = 4;
    let c = 5;
    if (a<=0 || b<=0  || c<=0){
        //FIX THIS RETURN STATEMENT
        return console.log("no work");
    } else {
        let area=1/4 * Math.sqrt(4*a*a*b*b-Math.pow((a*a+b*b-c*c), 2));
        console.log (area);
    }
}

function ambCase(){
    let angle=2;
    let a=240;
    let b=9;
    if (angle<=0 || a<=0  || b<=0){
        //FIX THIS RETURN STATEMENT
        return console.log("no work");
    }
    //put this in one line with a declaration
    angle=angle*Math.PI/2
    //move this declaration up
    let h=b*Math.sin(angle)
    if (a<=90){
        if (a<h){
            return console.log("no triangle");
        } else if (a==h){
            return console.log("right triangle");
        } else if (a>b){
            return console.log("one triangle");
        } else if (h<a && a<b){
            return console.log("two triangles (ambiguous case)");
        }
    } else {
        if (a<b || a==h){
            return console.log("no triangle");
        } else { //check if it is only else
            return console.log("one triangle");
        }
    }
}

function newton(){
    let g=1; //NEEDS INPUT --> get input
    let x=g;
    do {
        g=x;
        x=g-(6*Math.pow(g, 4) - 13*Math.pow(g, 3) - 18*Math.pow(g, 2) + 7*g + 6)/(24*Math.pow(g, 3) - 39*Math.pow(g, 2) - 36*g + 7);
    } while (Math.abs(x-g)>0.0001);
    console.log(x);
}

function polynomial(){ //THEORETICAL
    let coString=document.getElementById("polyCo");
    let coeff=coString.split(" ");
    let expString=document.getElementById("polyExp");
    let exp=expString.split(" ");
    let x=0; //change
    let output;
    for (let i=0; i<coeff.length(); i++){
        output+=coeff[i]*Math.pow(x, exp[i]);
    }
}


// heron();
// ambCase();
// newton();