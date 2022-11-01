console.log("Cn")//geeting values from user through id's
let a = document.getElementById("i1").value ;
let b = document.getElementById("i2").value ;


//functions

function addition(){
    let a = Number(document.getElementById("i1").value );
let b = Number(document.getElementById("i2").value) ;
    let sum = a+b 
    document.getElementById("i3").value = sum
}

function sub(){
    let a = Number(document.getElementById("i1").value );
    let b = Number(document.getElementById("i2").value) ;
    let subr = a-b
    document.getElementById("i4").value = subr

}

function mul(){
    let a = Number(document.getElementById("i1").value );
    let b = Number(document.getElementById("i2").value) ;
    let mult = a*b
    document.getElementById("i5").value = mult

}

function div(){
    let a = Number(document.getElementById("i1").value );
    let b = Number(document.getElementById("i2").value) ;
    let divi = a/b
    document.getElementById("i6").value = divi

}

function rem(){
    let a = Number(document.getElementById("i1").value );
    let b = Number(document.getElementById("i2").value) ;
    let remi = a%b
    document.getElementById("i7").value = remi

}







