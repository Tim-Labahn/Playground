const prompt = require("prompt-sync")({ sigint: true });
const numbers = []
numbers.push()
let stop = false
let amplitude = undefined
const firstInput = prompt("what numbers do you want to find the amplitude from?");
let firstNumber = parseInt(firstInput);
let biggest = firstNumber
let smallest = firstNumber
//TODO: version eins so überarbeiten das ich mehr array nutze
while (stop === false) { }
const input = prompt("Press 'C' to stop, show the smalles/biggest number and the amplitude of the numbers.");
if (input === "C") {
    stop = true
    console.log("biggest:", biggest)
    console.log("smallest", smallest)
    amplitude = biggest - smallest
    console.log("the ampitude of your iput/s is", amplitude)
}
