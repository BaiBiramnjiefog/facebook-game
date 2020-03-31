// backend database
var database = [{
    username: "bai biram",
    password: "banjul2015",
}, ];
// timeline
var newsfeed = [{
    name: "benny",
    timeline: "its nice to be nice",
}, {
    name: "charlie",
    timeline: "learning is good",

}];

var username = prompt("whats your usernasme");
var password = prompt("whats your password");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("sorry this username is not acceptable");
    }
}

signIn(username, password);