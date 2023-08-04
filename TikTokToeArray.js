const prompt = require("prompt-sync")({ sigint: true });
let r1 = ["C", "[ ]", "[ ]", "[ ]"]
let r2 = ["B", "[ ]", "[ ]", "[ ]"]
let r3 = ["A", "[ ]", "[ ]", "[ ]"]
let r4 = ["        1      2      3"];
let game = [r1, r2, r3, r4]
let turn = "[O]"
let player = "One"
let win = false
//______Function_________

function switchXO() {
    if (turn === "[X]") { turn = "[O]" }
    else { turn = "[X]" }
}
function check() {
    for (let i = 0; i < 4; i++) {
        if (game[i][1] === "[X]" && game[i][2] === "[X]" && game[i][3] === "[X]") { win = true };
        if (game[i][1] === "[O]" && game[i][2] === "[O]" && game[i][3] === "[O]") { win = true };
    }
    for (let i = 0; i < 4; i++) {
        if (game[0][i] === "[O]" && game[1][i] === "[O]" && game[2][i] === "[O]") { win = true };
        if (game[0][i] === "[X]" && game[1][i] === "[X]" && game[2][i] === "[X]") { win = true };
    }
    if (game[0][1] === "[O]" && game[1][2] === "[O]" && game[2][3] === "[O]") { win = true };
    if (game[0][1] === "[X]" && game[1][2] === "[X]" && game[2][3] === "[X]") { win = true };
    if (game[2][1] === "[O]" && game[1][2] === "[O]" && game[0][3] === "[O]") { win = true };
    if (game[2][1] === "[X]" && game[1][2] === "[X]" && game[0][3] === "[X]") { win = true };
}

function round() {
    console.log(game)
    console.log("Player", player, ", what is your move? Do it like this -A1-")
    let move = prompt("");
    if (move === "A1") { game[2][1] = turn, switchXO() }
    if (move === "A2") { game[2][2] = turn, switchXO() }
    if (move === "A3") { game[2][3] = turn, switchXO() }
    if (move === "B1") { game[1][1] = turn, switchXO() }
    if (move === "B2") { game[1][2] = turn, switchXO() }
    if (move === "B3") { game[1][3] = turn, switchXO() }
    if (move === "C1") { game[0][1] = turn, switchXO() }
    if (move === "C2") { game[0][2] = turn, switchXO() }
    if (move === "C3") { game[0][3] = turn, switchXO() }
}
//__________Game________________________
console.log("Game start")
while (win === false) {
    //_____Win check_________________
    check()
    // X oder O einstelen
    if (turn === "[X]") { player = "One" }
    if (turn === "[O]") { player = "Two" }
    //____________________________________________________________
    if (win === false) { round() }
}
if (win === true) {
    console.log(game)
    console.log("Player", player, "won.")
}

