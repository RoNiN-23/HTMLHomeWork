//Задача 16.1
document.writeln("Задача 16.1" + "<br>");
let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (objKey in obj) {
    document.writeln("Ключ - " + objKey + ", элемент - " + obj[objKey] + "<br>");
}


//Задача 16.2
document.writeln("Задача 16.2" + "<br>");
obj = {Коля: 200, Вася: 300, Петя: 400};
for (objKey in obj) {
    document.writeln(objKey + " - " + "зарплата " + obj[objKey] + " долларов" +"<br>");
}


