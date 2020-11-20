//Задача 5.1
alert(getRandomInt(1,100));
//Задача 5.2
let mass = new Array(10);
for(let  i = 0; i < mass.length;i++){
    mass[i] = getRandomInt(1,100);
}
alert(mass);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}