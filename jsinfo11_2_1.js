let promise = new Promise(function(resolve,reject) {
 setTimeout(() => reject(new Error("Whoops!")),1000)
});

promise.then(
    result => console.log(result),
    error => console.log(error)

);