//Задча 9.1
let mass = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(mass[1][0]);
//Задча 9.2
let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj.js[0]);
//Задча 9.3
let arr = {
    'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'],
    'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
alert(arr.ru[0]);
alert(arr.en[2]);
//Задча 9.4
let lang = 'ru';
let day = 2;
alert(arr[lang][day-1]);
