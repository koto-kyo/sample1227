let fruits =["Apple","Orange","Plum"];

console.log( 'fruits[0] is',fruits[0]);

fruits[2] = "Pear";

fruits[3] = "Lemon";

console. log( fruits[2]);
console.log( fruits[3]);
console.log('length is',fruits.length);
    
console.log('fruits array is',fruits);

let mixArr = ['Apple',{name: 'John'}, true, function() {console.log("Hello");}];
console.log(mixArr[1].name);
console.log(mixArr[3]());

for (let i= 0; i<fruits.length; i++) {
    console.log(fruits[[i]]);
}

for(let fruit of fruits) {
    console.log(fruit);
}