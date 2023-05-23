let animal = {
    eats: true
};

function Rabbit(name){
    this.name = name;
}　　　　　　　　　　　　　　　　　/*セミコロンつけない */

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log( rabbit.eats);