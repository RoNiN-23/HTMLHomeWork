//Задача 15.1
document.writeln("Задача 15.1" + "<br>");
let mass = [1, 2, 3, 4, 5];
for (let i = 0; i < mass.length; i++) {
    document.writeln(mass[i]);
}
//Задача 15.2
document.writeln("Задача 15.2" + "<br>");
let result = 0;
for (let i = 0; i < mass.length; i++) {
    result += mass[i];
}
document.writeln(result);