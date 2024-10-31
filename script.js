//event action listener for heron button
document.getElementById("heronCalc").addEventListener("click", function(){
    const sideA=document.getElementById("heronA").value;
    const sideB=document.getElementById("heronB").value;
    const sideC=document.getElementById("heronC").value;
    document.getElementById("heronArea").value=heron(sideA, sideB, sideC);
});

//event action listener for ambiguous case button
document.getElementById("ambCalc").addEventListener("click", function(){
    const angle=document.getElementById("ambAngle").value;
    const sideA=document.getElementById("ambSideA").value;
    const sideB=document.getElementById("ambSideB").value;
    document.getElementById("ambType").value=ambCase(angle, sideA, sideB);
});

//event action listener for newton button
document.getElementById("newtonCalc").addEventListener("click", function(){
    const guess=document.getElementById("newRoot").value;
    document.getElementById("newApp").value=newton(guess);
});

//event action listener for polynomial button
document.getElementById("polyCalc").addEventListener("click", function(){
    const coefficient=document.getElementById("polyCo").value;
    const exponent=document.getElementById("polyExp").value;
    const xvalue=document.getElementById("polyX").value;
    document.getElementById("polyFun").value=polynomial(coefficient, exponent, xvalue).eq;
    document.getElementById("polyEva").value="f(x) = " + polynomial(coefficient, exponent, xvalue).sum;

});


function heron(a, b, c){
    const root=Math.sqrt(4*a*a*b*b-Math.pow((a*a+b*b-c*c), 2));
    if (a>0 && b>0 && c>0){
        if (root>0){ //checks if root is imaginary
            return (Math.round(root*25, 2))/100;
        }
    } return "No triangle";
}

function ambCase(angle, a, b){
    //checks if there is a triangle
    if (angle>0 && a>0 && b>0){
        const h = b*Math.sin(angle*Math.PI/180);
        if (angle<=90){ //checks if angle is acute
            if (a==h){
                return "One triangle";
            } else if (a>b){
                return "Right triangle";
            } else if (h<a && a<b){
                return "Two triangles (ambiguous case)";
            }
        } if (a>b){ //checks if angle is obtuse
            return "One triangle";
        }
    } return "No triangle"; //case a<h, angle>90 && a<b||a==b
}

function newton(guess){
    let x0=guess;
    let x1=x0;
    function fx (x){ //functions for visibility
        return 6*Math.pow(x, 4) - 13*Math.pow(x, 3) - 18*Math.pow(x, 2) + 7*x + 6;
    } function fx1 (x){
        return 24*Math.pow(x, 3) - 39*Math.pow(x, 2) - 36*x + 7
    }
    do {
        x0=x1;
        x1=x0-fx(x0)/fx1(x0);
    } while (Math.abs(x0-x1)>0.0001);
    return Math.round(x1*100)/100; //returns root value
}

function polynomial(coeff, exp, x){ //polynomial function
    let coefficient=coeff.split(" ");
    let exponent=exp.split(" ");
    const output = { //object
        sum: 0,
        eq: "",
    }
    for (let i=0; i<coefficient.length; i++){
        output.eq += coefficient[i] + "x^" + exponent[i] + " ";
        if (parseInt(coefficient[i])-0>=0 && i+1<coefficient.length){
            output.eq += "+"; //adds + sign if coefficient is negative and not the first value
        }
        let value = parseInt(coefficient[i]) * Math.pow(x, parseInt(exponent[i]));
        output.sum+=value;
        console.log(output.sum);
    } return (output);
}