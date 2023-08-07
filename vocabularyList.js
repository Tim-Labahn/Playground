const prompt = require("prompt-sync")({ sigint: true });
//----------------------------------------------
const vocabularyList = []

function showList(arr) {
    console.log("inventory stors:", arr.length, "items"
    )
    for (let i = 0; i < arr.length; i++) {
        console.log(i + 1 + ".", arr[i].definition)
    }
}

function addWord(word, definition) {
    vocabularyList.push({ word, definition });
}

while (true) {
    // vocabularyList.sort(function (a, b) {
    //     return a.toLowerCase().localeCompare(b.toLowerCase());
    // })

    console.log("Your options: A- add, D- delete, S- Show list, C- Change definition")
    const event = prompt("What is your choise?");
    if (event === "A") {
        let word = prompt("What do you wanna add?");
        let definition = prompt("what is the definiton?")
        addWord(word, definition)

    }
    //  inventory.push('${ addItem }')
    if (event === "S") {
        showList(vocabularyList)
    }
    if (event === "D") {
        showList(vocabularyList)
        let deleteItem = prompt("Enter the name of what you want to delete?");
        vocabularyList.splice(vocabularyList.findIndex((a) => a === deleteItem), 1)
    }

    if (event === "C") {
        showList(vocabularyList)
        let word = prompt("Enter the name of the vocabular that you wana change.");
        let definition = prompt("what do you want the new definition to be?")
        vocabularyList.splice(vocabularyList.findIndex((a) => a === word), 1)
        addWord(word, definition)
    }
}
