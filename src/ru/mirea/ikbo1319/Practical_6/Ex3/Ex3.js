//Задача 3.1
let a = 379;
let full;
let ten;
let hundred;
full = Math.sqrt(a);
alert("До целых: " + Math.round(full));

ten = Math.sqrt(a).toFixed(1);
alert("До десятых: " + ten);

hundred = Math.sqrt(a).toFixed(2);
alert("До сотых: " + hundred);
//Задача 3.2
let fres = Math.floor(Math.sqrt(587));
let cres = Math.ceil(Math.sqrt(587));
let obj = {floor: fres, ceil: cres};
alert("Floor - " + obj.floor);
alert("Ceil - " + obj.ceil);