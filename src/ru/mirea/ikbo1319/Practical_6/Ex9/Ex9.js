//Задача 9.1
let str = "я учу javascript";
alert(str.length);
//Задача 9.2
alert('Substr - ' + str.substr(2,3) + ' ' + str.substr(6,10)
+ '\nSubstring - ' + str.substring(2,5) + ' ' + str.substring(6,16)
+'\nSlice - ' + str.slice(2,5) + ' ' + str.slice(6,16));
//Задача 9.3
str = "я учу javascript";
alert(str.indexOf('учу'));
//Задача 9.4
let n =10;
let result = "";
if(str.length <= n)result = str;
else {
    for(let i = 0; i < n; i++){
        result += str[i];
    }
    result += '...';
    alert(result);
}