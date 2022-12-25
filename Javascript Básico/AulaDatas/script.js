/*Sabendo o que é um objeto em JS, podemos ver que
Date é um objeto, que você deve passar valores em seu
argumento para, assim, modificar o ano, o mês, etc..*/

//var d = new Date(milliseconds);
//var d = new Date(dateString);
//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//var d = new Date(1000);
//var d = new Date("sep 24 2017 00:00");
var d = new Date(2018, 09, 24, 22,45);
console.log(d.getFullYear());