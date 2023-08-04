const prompt = require("prompt-sync")({ sigint: true });
const numbers = []
numbers.push()
let stop = false
let amplitude = undefined
const firstInput = prompt("what numbers do you want to find the amplitude from?");
let firstNumber = parseInt(firstInput);
let biggest = firstNumber
let smallest = firstNumber

while (stop === false) {
    const input = prompt("Press 'C' to stop, show the smalles/biggest number and the amplitude of the numbers.");
    if (input === "C") {
        stop = true
        console.log("biggest:", biggest)
        console.log("smallest", smallest)
        amplitude = biggest - smallest
        console.log("the ampitude of your iput/s is", amplitude)
    } else {
        let parsedNumber = parseInt(input);
        if (isNaN(parsedNumber)) {
            console.log("Input is not a Number")
        } else {
            //numbers.push(parsedNumber)
            if (parsedNumber < smallest) { smallest = parsedNumber }
            if (parsedNumber > biggest) { biggest = parsedNumber }
        }
    }
}
