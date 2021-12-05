// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

/*
In index.js, build a function named writeCards() that accepts two arguments: 
an array of string names, and an event name. 
Create a for loop with a counter that starts at 0 and increments 
at the end of each loop.
 The for loop should stop once it has iterated over the length of the array.

As with our previous wrapGifts() function, 
create a custom message for each name inside the loop. 
collect custom messages in a new array and return this array at the end of the function. 
*/

let customMessages=[];

function writeCards(names,eventName){

    for (let i=0;i<names.length;i++){
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        customMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
return customMessages;
}

/*
while loop, your task is to write a function, countDown, 
that takes in any positive integer and,
 starting from that number, counts down to zero using console.log()
*/
function countDown(positiveInt){
    while(positiveInt>=0){
            console.log(positiveInt--);
    }
}