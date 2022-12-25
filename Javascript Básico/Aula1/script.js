//Definindo alerta
//alert("hello world")

//Usar o Console
//console.log("Olá mundo")

//Variáveis
var a;
var b = "HD"

a = "Placa de Captura";

console.log(b);

//Tipos de Dados
//null é a certeza de que não há nada atribuído na variável
//Number
//String
var c = ("Primeira linha\nSegunda linha")
console.log(c);

var d = "1"
var e = 1

console.log(d);
console.log(e);

var i = 10;
//var g = ++i;
var j = i++;

//console.log(g)
console.log(j);

/*++i é diferente de i++, o ++i primeiro incrementa o valor e
depois atribui na variável, enquanto o outro não
*/

var n = 40;
n +=5; // isso é a mesma coisa que n = n + 5

var k = 50;
k /= 2;// isso é a mesma coisa que n = n / 2

console.log(n);
console.log(k);
// essa ideia funciona para todos os operadores aritméticos



var t = "44" * 2;
console.log(t);
/*perceba que mesmo sendo uma string, o JS transformou o 44
em um número ao multiplicá-lo por 2 */

var str = "Casa grande 'texto com aspas' casa pequena"
console.log(str);
/*para usar um texto com aspas em uma string, você deve 
adotar um tipo de aspas para o lado de fora e outro para o
de dentro*/

var p = "3";
var l = "6";

var z = parseInt(l) + parseInt(p);//pode usar parseFloat para números reais
console.log(z);
//transformar strings em números

//Alert e Prompt
//alert("teste");
var nome = prompt("Qual é o seu nome?");
alert("Bom dia, " + nome);

var numero = parseInt(prompt("Digite um número:"));
var dobro = numero + numero;
alert("O dobro de " + numero + " é " + dobro);
/*o prompt retorna uma string, então ao colocar um número
sempre transforme ele em de fato um número com parseInt ou outro*/