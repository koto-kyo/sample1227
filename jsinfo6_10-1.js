let user = {
    firstName:"Jhon",
    sayHi() {
        console.log(`Hello,${this.firstName}!`);
    }
};

setTimeout(function() {
    user.sahHi();
}, 1000);