let time = new Date();






//1



// let electricity = true;

// let action = (time, work) => {
//   return new Promise((res, rej) => {
//     if (electricity) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log("no electricity"));
//     }
//   });
// };

// action(2000, () => {
//   console.log("plug in computer to electricity");
// })
//   .then(() => {
//     return action(2000, () => console.log("press power button"));
//   })

//   .then(() => {
//     return action(2000, () => console.log("begin using"));
//   });






//2




// let teacher = true;

// let lesson = (time, work) => {
//   return new Promise((res, rej) => {
//     if (teacher) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" lesson will be cancelled"));
//     }
//   });
// };

// lesson (1000, () => {
//   console.log(" greeting");
// })
//   .then(() => {
//     return lesson(1000, () => console.log("lesson starts"));
//   })

//   .then(() => {
//     return lesson(1000, () => console.log("teacher ask some questions about previous lesson"));
//   })

//   .then(() => {
//     return lesson(1000, () => console.log("teacher introduces new topic"));
//   })


//   .then(() => {
//     return lesson(1000, () => console.log("new topic will be discussed"));
//   })




//   .then(() => {
//     return lesson(1000, () => console.log("lesson ends"));
//   });






//3


// let internet = true;

// let signUpInstagram = (time, work) => {
//   return new Promise((res, rej) => {
//     if (internet) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log("no internet connection"));
//     }
//   });
// };

// signUpInstagram(2000, () => {
//   console.log("download from play market");
// })
//   .then(() => {
//     return signUpInstagram(2000, () => console.log("install"));
//   })
// .then(() => {
//     return signUpInstagram(2000, () => console.log("enter phone number"));
//   })


// .then(() => {
//     return signUpInstagram(2000, () => console.log("get code and enter it"));
//   })


// .then(() => {
//     return signUpInstagram(2000, () => console.log("create a username and set a password"));
//   })



//   .then(() => {
//     return signUpInstagram(2000, () => console.log("begin using instagram"));
//   });










//4







// let workday = true;

// let goUniver = (time, work) => {
//   return new Promise((res, rej) => {
//     if (workday) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" today is day off "));
//     }
//   });
// };

// goUniver (1000, () => {
//   console.log(" go out from home");
// })
//   .then(() => {
//     return goUniver(1000, () => console.log("go metro"));
//   })

//   .then(() => {
//     return goUniver(1000, () => console.log("enter metro"));
//   })

//   .then(() => {
//     return goUniver(1000, () => console.log("go out of metro in one station"));
//   })


//   .then(() => {
//     return goUniver(1000, () => console.log("go and enter inside of univer"));
//   })




//   .then(() => {
//     return goUniver(1000, () => console.log("enter lesson and lesson will begin"));
//   });













//5






// let internet = true;

// let taxiOrder = (time, work) => {
//   return new Promise((res, rej) => {
//     if (internet) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" no internet connection "));
//     }
//   });
// };

// taxiOrder (1000, () => {
//   console.log(" open app");
// })
//   .then(() => {
//     return taxiOrder(1000, () => console.log("choose the place you want to go"));
//   })

//   .then(() => {
//     return taxiOrder(1000, () => console.log("select it from map"));
//   })

//   .then(() => {
//     return taxiOrder(1000, () => console.log("choose the type of taxi you wanted to order"));
//   })


//   .then(() => {
//     return taxiOrder(1000, () => console.log("wait until taxi comes"));
//   })




//   .then(() => {
//     return taxiOrder(1000, () => console.log("taxi came and you can go "));
//   });











//6







// let ingredients = true;

// let makeSalad = (time, work) => {
//   return new Promise((res, rej) => {
//     if (ingredients) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" you have not enough ingradients for this salad"));
//     }
//   });
// };

// makeSalad (1000, () => {
//   console.log(" choose needed igredients");
// })
//   .then(() => {
//     return makeSalad(1000, () => console.log("wash them with water"));
//   })

//   .then(() => {
//     return makeSalad(1000, () => console.log("cut them into pieces"));
//   })

//   .then(() => {
//     return makeSalad(1000, () => console.log("put all of them into a bowl"));
//   })


//   .then(() => {
//     return makeSalad(1000, () => console.log("mix them "));
//   })




//   .then(() => {
//     return makeSalad(1000, () => console.log("salad is ready to consume "));
//   });









//7





// let fuel = true;

// let drive = (time, work) => {
//   return new Promise((res, rej) => {
//     if (fuel) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" no fuel"));
//     }
//   });
// };

// drive (1000, () => {
//   console.log(" open car and sit");
// })
//   .then(() => {
//     return drive(1000, () => console.log("put key and start"));
//   })

//   .then(() => {
//     return drive(1000, () => console.log("check the gear"));
//   })

//   .then(() => {
//     return drive(1000, () => console.log("put on safety belts"));
//   })


//   .then(() => {
//     return drive(1000, () => console.log("wait untill car engine works"));
//   })




//   .then(() => {
//     return drive(1000, () => console.log(" everything is ok u can go"));
//   });











//8






// let picture = true;

// let sendPicture= (time, work) => {
//   return new Promise((res, rej) => {
//     if (picture) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log(" you have no picture"));
//     }
//   });
// };

// sendPicture (1000, () => {
//   console.log(" open app you want to use");
// })
//   .then(() => {
//     return sendPicture(1000, () => console.log("select a chat "));
//   })

//   .then(() => {
//     return sendPicture(1000, () => console.log("select a reciever"));
//   })

//   .then(() => {
//     return sendPicture(1000, () => console.log("select a photo"));
//   })


//   .then(() => {
//     return sendPicture(1000, () => console.log("edit photo if you want"));
//   })




//   .then(() => {
//     return sendPicture(1000, () => console.log(" you have sent a photo"));
//   });



















