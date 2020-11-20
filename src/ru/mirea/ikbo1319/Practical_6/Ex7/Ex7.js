//Задача 7.1
let arr = [12, 15, 20, 25, 59, 79];
let sr = 0;
for(let i = 0;i < arr.length;i++){
    sr+=arr[i];
}
alert(sr/arr.length);
//Задача 7.2
let x = 5;
let result = 1;
if(x === 1 || x === 0){
    result = 1;
}
else {
    for (let i = 1; i < x; i++) {
        result *= (i + 1);
    }
}
alert(result);