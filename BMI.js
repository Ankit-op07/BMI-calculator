function fun1(){
var x = document.getElementById('weight');
 var w = parseFloat(x.value);
 return w;

}
function fun2(){
    var y = document.getElementById('height');
    var h = parseFloat(y.value);
    return h;
}
function results(){
var weight =fun1();
console.log(weight);
var height =fun2();
console.log(height);
    let res = weight/(height*height);
    res = res.toFixed(1);
    let screenvalue ="";
    screenvalue +=res;
    document.getElementById('bmi').value = screenvalue;

}





