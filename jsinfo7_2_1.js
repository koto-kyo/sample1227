"use strict"

let user = {
    name:"John",
    surname:"Smith",

    get fullName() {
        return `${this.name}${this.surname}`;
    },
    set fullName(value){
        [this.name, this.surname] = value.split(" ")  　　　　　　 //[]に注目　splitの後のホワイトスペースで分ける
    }
};

user.fullName = "Alice Couper";　　//ホワイトスペースで区切られた文字が入る
console.log(user.name);
console.log(user.surname);

console.log(user.fullName);


