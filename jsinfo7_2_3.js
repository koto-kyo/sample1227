let user = {
    get name(){
        return this._name;
    },
 
    set name(value) {
        if(value.length <4){
            console.log("Name in too short, need at least 4");
            return;
        }
        this._name = value;  // _name アンダーバーのついたプロパティは直接変更してはいけない
    }
};

user.name ="Pete";
console.log(user.name);

user.name = ""