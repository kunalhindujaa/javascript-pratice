var myPromise = new Promise((resolve, reject) => {
  var data = false;
  if (data) {
    resolve("Data received");
  } else {
    reject("Data not received");
  }
});

myPromise.then((result) => {
  console.log(result);
});

myPromise.catch((result) => {
  console.log(result);
});

/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
often a server request. 
When you make a server request it takes some amount of time, 
and after it completes you usually want to do something with the response from the server. 
This can be achieved by using the 'then' method. The then method is executed immediately after your promise is fulfilled with resolve.

'catch' is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. 
*/
