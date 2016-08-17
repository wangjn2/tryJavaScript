var a = 1;

function outer(c){
    var b = 2;
    function inner(d){
        console.log("a: " + a);
        console.log("b: " + b);
        console.log("c: " + c);
        console.log("d: " + d);
    }
    return inner;
}

var b = 1;

f1 = outer(3);
f1(4);
