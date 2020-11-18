//Задача 17.1
document.writeln("Задача 17.1" + "<br>");
let mass = [2,9,15,0,4];
for(let i = 0;i < mass.length;i++){
    if(mass[i] > 3 && mass[i]<10)document.writeln(mass[i]);
}
document.writeln("<br>");
//Задача 17.2
document.writeln("Задача 17.2" + "<br>");
mass = [3,-1,2,-4,-5,7,8];
let result = 0;
for(let i = 0;i < mass.length;i++){
    if(mass[i] > 0)result += mass[i];
}
document.writeln(result);
document.writeln("<br>");
//Задача 17.3
document.writeln("Задача 17.3" + "<br>");
mass = [1,2,5,9,4,13,4,10];
for(let i = 0;i < mass.length;i++) {
    if (mass[i] !== 4) {
        document.writeln("Есть!");
        break;
    }
}
document.writeln("<br>");
//Задача 17.4
document.writeln("Задача 17.4" + "<br>");
let str = "";
mass = [10,20,30,50,235,3000];
for(let i = 0;i < mass.length;i++){
    str = mass[i].toString();
    if(str.charAt(0) === '1' || str.charAt(0) === '2' || str.charAt(0) === '5')document.writeln(str);
}
document.writeln("<br>");
//Задача 17.5
document.writeln("Задача 17.5" + "<br>");
mass = [1,2,3,4,5,6,7,8,9];
for(let i = 0;i < mass.length;i++){
    document.write('-'+mass[i]);
}
document.writeln("<br>");
//Задача 17.6
document.writeln("Задача 17.6" + "<br>");
mass = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресение",]
for(let i = 0;i < mass.length;i++){
    if(mass[i] === "Суббота" || mass[i] === "Воскресение")document.writeln("<b>"+mass[i]+"</b>");
    else document.writeln(mass[i]);
}
document.writeln("<br>");
//Задача 17.7
document.writeln("Задача 17.7" + "<br>");
let day = "Пятница";
for(let i = 0;i < mass.length;i++){
    if(mass[i] === day)document.writeln("<i>"+mass[i]+"</i>");
    else document.writeln(mass[i]);
}
document.writeln("<br>");
//Задача 17.8
document.writeln("Задача 17.8" + "<br>");
let n = 1000;
let num = 0;
while (n >= 50){
    n /= 2;
    num++;
}
document.writeln("Число - "+n + "<br>");
document.writeln("Кол-во итераций - " + num);
