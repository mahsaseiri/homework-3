var output = document.getElementById("output");

var value = 0;
var sum = 0;
var input1 = 0;
var sub1 = 0;
var mult1 = 1;
var char;
var div1 = 0;
var sign = 1;


function number0() {
    var input = document.getElementById("input0");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);

}

function number1() {
    var input = document.getElementById("input1");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number2() {
    var input = document.getElementById("input2");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number3() {
    var input = document.getElementById("input3");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number4() {
    var input = document.getElementById("input4");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number5() {
    var input = document.getElementById("input5");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number6() {
    var input = document.getElementById("input6");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number7() {
    var input = document.getElementById("input7");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number8() {
    var input = document.getElementById("input8");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);
}

function number9() {
    var input = document.getElementById("input9");
    output.innerHTML += input.innerHTML;
    input1 = Number(output.innerHTML);

}

function myneg() {
    sign = -1;
    input1 *= sign;
    output.innerHTML = input1;
}

function mypos() {
    sign = 1;
    input1 *= sign;
    output.innerHTML = input1;
}

function mydot() {
    var input = document.getElementById("dot");
    output.innerHTML += input.innerHTML;

}

function mysqrt() {
    input1 = Math.sqrt(input1);
    output.innerHTML = input1;

}

function mysum() {
    char = "+";
    sum += input1;
    output.innerHTML = "";
}

function mysub() {
    char = "-";
    sub1 = input1;
    sub1 -= 0;
    output.innerHTML = "";
}

function mymult() {
    char = "*";
    mult1 *= input1;
    output.innerHTML = "";
}

function mydiv() {
    char = "/";
    div1 = input1;
    input1 = 1;
    div1 /= input1;
    output.innerHTML = "";
}

function equal() {
    if (char == "+") {
        output.innerHTML = sum + input1;
        input1 = Number(output.innerHTML);
        sum = 0;
    } else if (char == "*") {
        output.innerHTML = mult1 * input1;
        input1 = Number(output.innerHTML);
        mult1 = 1;
    } else if (char == "/") {
        output.innerHTML = div1 / input1;
        input1 = Number(output.innerHTML);
        div1 = input1;
    } else if (char == "-") {
        output.innerHTML = sub1 - input1;
        input1 = Number(output.innerHTML);
        sub1 = input1;


    } else {
        output.innerHTML = input1;
    }
}

function myclr() {
    input1 = 0;
    output.innerHTML = "";
}