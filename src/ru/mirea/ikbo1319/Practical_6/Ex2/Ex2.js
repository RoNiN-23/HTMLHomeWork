//Задача 2.1
let st;
alert(("2 в степени 10"+Math.pow(2,10)));
//Задача 2.2
alert("Квадратный корень из 245 - "+Math.sqrt(245));
//Задача 2.3
let mass = [4,2,5,19,13,0,10];
let result = 0;
for(let i = 0; i < mass.length;i++){
    result += Math.pow(mass[i], 3);
}
alert("Квадратный корень из суммы кубов массива - "+ Math.sqrt(result));