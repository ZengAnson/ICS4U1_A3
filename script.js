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

function heron(a, b, c){
    console.log("hi");
    const root=Math.sqrt(4*a*a*b*b-Math.pow((a*a+b*b-c*c), 2));
    if (a>0 && b>0 && c>0){
        if (root>0){
            return (Math.round(root*25, 2))/100;
        }
    } return "No triangle";
}

function ambCase(angle, a, b){
    //checks if there is a triangle
    if (angle>0 && a>0 && b>0){
        const h = b*Math.sin(angle*Math.PI/180);
        if (angle<=90){
            if (a==h){
                return "One triangle";
            } else if (a>b){
                return "Right triangle";
            } else if (h<a && a<b){
                return "Two triangles (ambiguous case)";
            }
        } if (a>b){
            return "One triangle";
        }
    } return "No triangle";
}

function newton(guess){
    let x0=guess
    let x1=x0
    function fx (x){
        return 6*Math.pow(x, 4) - 13*Math.pow(x, 3) - 18*Math.pow(x, 2) + 7*x + 6;
    }

    function fx1 (x){
        return 24*Math.pow(x, 3) - 39*Math.pow(x, 2) - 36*x + 7
    }

    do {
        x0=x1
        x1=x0-fx(x0)/fx1(x0);
    } while (Math.abs(x0-x1)>0.0001);
    return Math.round(x1*100)/100;
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