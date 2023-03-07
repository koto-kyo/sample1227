let obj = {
    name: "john",
    age:30
};

let map = new Map(Object.entries(obj));

console.log(map.get('age'));

map.forEach( (value, key) =>{
    console.log(`${key}:${value}`);
});
