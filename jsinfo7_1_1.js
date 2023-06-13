"use strict"

let user ={
    name:"John"
};

Object.defineProperty(user,"name",{
    writable: false   //上書き専用
});

user.name = "Pete"

console.log(user.name);