function fun1(){
    var age = 0;
    var a = document.getElementById("a1").value;
    a=Number(a);
    var b= document.getElementById("a4").value;
    b=Number(b);
    a=a+(b/12);
    console.log(a,'12');
        if (a > 20) {
            age = age + 2;
            a = a - 21;
            a = a / 4;
            age += a;
            console.log(age,'ew');
        }
        else{
            age=a/10.5;
        }
    var b=parseInt(age);
    var c=age-b;
    c=c*12;
    d=parseInt(c);
    c=c-d;
    c=c*30;
    c=Math.ceil(c);
    console.log(c,d);
    document.getElementById("a2").value = b +'years '+ d+ 'Months '+ c +'days';
    document.getElementById("a1").value+=" Years";
}
function fun2(){
    document.getElementById("a1").value="";
    document.getElementById("a2").value="";
}