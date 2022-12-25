"use strict";
/*Esse use strict é feito para evitar você de esquecer de coloca um var ou um let ou um const na variável. Ele só permite a existência de variáveis com esses valores na frente */



/*No Js se tu declarar uma variável assim: x =7, ele automaticamente vai colocar o var */
/*var x = 7;
console.log(x);*/

/*Quando você cria uma variável dentro de um escopo local, como o function, você espera que essa variável não possa ser usada fora dele, já que ela não é global. Contudo quando você não identifica que aquilo é uma variável, o js acaba deixando ela global, mesmo estando dentro de um escopo local */
/*Teste isso com o var na variável e sem o var */
function imprimir(){
    x = 7;
    console.log(x);
}
imprimir();
console.log(x);
console.log(window);

