//Задача 4.1
let str = "abcde";
for (let i = 0; i < str.length; i += 2) {
    alert(str[i]);
}
//Задача 4.2
let num = "12345";
let pr = 1;
for (let i = 0; i < num.length; i++) {
    pr *= parseInt(num[i]);
}
alert("Произведение всех цифр числа " + num + " = " + pr);
