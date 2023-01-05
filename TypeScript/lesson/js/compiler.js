"use strict";
console.log('compile!');
let string = 'hello';
console.log(string.toUpperCase());
function echo(message) {
    return message;
}
let nullableMessage = echo('Hi!');
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
