console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var user = os.userInfo();
console.log(user);

//if I run this code nod will warn me with 'deprecated' warning
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`); //AltGr + 7 for ES6 aposthrophe `!!!!


// option one - function call with callback, after node v4 fs.appendFile without callback is deprecated
/* fs.appendFile('greetings.txt', 'Hello World!', function(err){
    if(err){
        console.log("Unable to write to file");
    }
}); */

//option two - blocking code
/* fs.appendFileSync('greetings.txt', 'Hello World !');

fs.appendFile('greetings.txt', 'Hello ' + user.username + "!", function(err){
    if(err){
        console.log("Unable to write to file");
    }
});
 */
//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

/* fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
    if(err){
        console.log("Unable to write to file");
    }
}); */

//var res = notes.addNote();
//console.log(res);

console.log('Result: ', notes.add(1,2));


// console.log(_.isString(true));
// console.log(_.isString('Segg'));

var fileteredArray = _.uniq(['Pepe', 1,'Pepe',1,2,3,6,7,8,9,10]);
console.log(fileteredArray);