let i = 1;
let sum = 0;
document.writeln("С помощью while" + "<br>");
while (i != 101) {
    sum += i;
    i++;
}
document.writeln(sum + "<br>");
sum = 0;
document.writeln("С помощью for" + "<br>");
for (let i = 1; i < 101; i++) {
    sum += i;
}
document.writeln(sum);