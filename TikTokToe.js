const prompt = require("prompt-sync")({ sigint: true });
let A1 = "[ ]"
let A2 = "[ ]"
let A3 = "[ ]"
let B1 = "[ ]"
let B2 = "[ ]"
let B3 = "[ ]"
let C1 = "[ ]"
let C2 = "[ ]"
let C3 = "[ ]"

function game() {
    console.log("3", A1, "|", A2, "|", A3)
    console.log("2", B1, "|", B2, "|", B3)
    console.log("1", C1, "|", C2, "|", C3)
    console.log("   A      B     C");
}
while (true) {
    console.log(game())
    let moveX = prompt("Player One, what is your move?");


    //const moveO 
}