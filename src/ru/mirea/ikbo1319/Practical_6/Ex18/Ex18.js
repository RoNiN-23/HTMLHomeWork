//Задача 18.1
let mass = [1,2,3,4,5];
mass.splice(1,2);
alert(mass);
//Задача 18.2
mass = [1,2,3,4,5];
mass = mass.splice(1,3);
alert(mass);
//Задача 18.3
mass = [1,2,3,4,5];
let mass1 = mass.splice(3,4);
mass.splice(3,4);
let mass2 = ['a','b','c'];
mass = mass.concat(mass2);
mass = mass.concat(mass1);
alert(mass);
//Задача 18.4
mass = [1,2,3,4,5];
mass1 = ['a','b','c','e'];
let result = [0,0,0];
result = mass1.splice(0,2);
result.unshift(mass.splice(0,1));
result = result.concat(mass.splice(0,3));
result.push(mass1.splice(0,1));
result.push(mass.splice(0,1));
result.push(mass1.splice(0,1));
alert(result);