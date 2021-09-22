function fun1(){
var x = document.getElementById('weight');
 var w = parseFloat(x.value);
 return w;

}
function fun2(){
    var y = document.getElementById('height');
    var h = parseFloat(y.value);
    return h/100;
}
function results(){
var weight =fun1();

console.log(weight);
var height =fun2();
console.log(height);
    let res = weight/(height*height);
    res = res.toFixed(1);
    //let screenvalue ="";
    //screenvalue +=res;
   
    
    document.getElementById('bmi').value = res;
    if(res >= 18.5 && res <= 25){
        document.getElementById('mode').innerHTML ='Normal';
        document.getElementById('mode').style.color ='green';
    }else if(res <18.5){
        document.getElementById('mode').innerHTML ='Underweight';
        document.getElementById('mode').style.color ='blue';
    }else{
        document.getElementById('mode').innerHTML ='Overweight';
        document.getElementById('mode').style.color ='red';
    }


}

function reset(){
    document.getElementById('weight').value.clear();
    document.getElementById('height').value.clear();
    document.getElementById('bmi').value.clear();
}




