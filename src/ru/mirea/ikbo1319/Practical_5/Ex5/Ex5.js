//Задача 5.1
let minuteSec = 60;
let hourSec = 60 * minuteSec;
let daySec = hourSec * 24;
let monthSec = daySec * 30;
alert("В часе " + hourSec + " секунд" +
"\nВ дне " + daySec + " секунд"+
"\nВ месяце " + monthSec + " секунд");
//Задача 5.2
date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
alert("Время - " + hour + ":" + minute + ":" + second);
//Задача 5.3
let num = 4;
alert("Квадрат числа "+num+ " = " + Math.pow(num,2));

