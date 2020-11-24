//Задача 11.1
let str = "я учу javascript";
let mass = str.split(' ');
alert(mass);
//Задача 11.2
mass = str.split('');
alert(mass);
//Задача 11.3
let date = "2020-11-18";
mass = date.split('-');
mass = mass.reverse()
date = mass.join('.')
alert(date);