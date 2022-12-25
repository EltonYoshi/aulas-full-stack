
function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "auau",
    speak: speakGeneric
}


let cat = {
    sound: "miaumiau",
    speak: speakGeneric
}
dog.speak();
cat.speak();
/*O this é algo que varia, o this pode estar representando o gato ou o cachorro, pois em cada situação ele é chamado e é atribuido a algo */
/*se você chamar o speakGeneric fora de algo que ele possa definir o this dele, o valor será undefined */
speakGeneric()

/*Quando se usa o bind, ele dá um contexto para this, então ele pode encontrar um valor para ele */
let bindedFunction = speakGeneric.bind(dog);
bindedFunction();