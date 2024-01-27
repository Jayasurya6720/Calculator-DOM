var container = document.createElement("div");
container.setAttribute("class","container")


var calculator = document.createElement("div");
calculator.setAttribute("class","cal")


var input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id","sr")




function foo (tag,it,att1,val1,att2,val2) {
    var bt = document.createElement(tag);
    bt.innerText = (it);
    bt.setAttribute(att1,val1)
    bt.setAttribute(att2,val2)
    return bt;
}

var bt1 = foo("button","Cl","onclick","Clear()","id","cl");
var bt2 = foo("button","Del","onclick","del()","id","cl");
var bt3 = foo("button","%","onclick","display('%')","id","cl");
var bt4 = foo("button","/","onclick","display('/')","id","cl");
var bt6 = foo("button","7","onclick","display('7')","id","7");
var bt7 = foo("button","8","onclick","display('8')","id","8");
var bt8 = foo("button","9","onclick","display('9')","id","9");
var bt9 = foo("button","*","onclick","display('*')","id","cl");
var bt10 = foo("button","4","onclick","display('4')","id","4");
var bt11 = foo("button","5","onclick","display('5')","id","5");
var bt12 = foo("button","6","onclick","display('6')","id","6");
var bt13 = foo("button","-","onclick","display('-')","id","cl");
var bt14 = foo("button","1","onclick","display('1')","id","1");
var bt15 = foo("button","2","onclick","display('2')","id","2");
var bt16 = foo("button","3","onclick","display('3')","id","3");
var bt17 = foo("button","+","onclick","display('+')","id","cl");
var bt18 = foo("button",".","onclick","display('.')","id",".");
var bt19 = foo("button","0","onclick","display('0')","id","0");


var input1 = document.createElement("button")
input1.innerText= ("=");
input1.setAttribute("onclick","cal()")
input1.setAttribute("class","equal")


calculator.append(input,bt1,bt2,bt3,bt4,bt6,bt7,bt8,bt9,bt10,bt11,
          bt12,bt13,bt14,bt15,bt16,bt17,bt18,bt19,input1)
container.append(calculator)




document.body.append(container)

var str = document.getElementById("sr");

function display(num){
    str.value += num;
}

function cal(){
    try{
        str.value= eval(str.value);
    }
    catch(err){
        alert("Invalid input")
    }
}
function Clear(){
    str.value = "";
}
function del(){
    str.value = str.value.slice(0,-1);
}