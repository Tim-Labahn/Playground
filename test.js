const prompt = require("prompt-sync")({ sigint: true });
//---------------------------------
const vocabularyList = [];
//------------------------------
function showList(arr) {
    console.log("Inventory stores:", arr.length, "items");
    for (let i = 0; i < arr.length; i++) {
        console.log(i + 1 + ".", arr[i].word, "-", arr[i].definition);
    }
}

function addWord(word, definition) {
    vocabularyList.push({ word, definition });
}
function findWordIndex(name) {
    return vocabularyList.findIndex((item) => item.word === name);
}
let saveWordName = null
//---------------------------------------------------
while (true) {
    console.log("Your options: A- add, D- delete, S- Show list, C- Change definition")
    const event = prompt("What is your choice?");
    if (event === "A") {
        let name = prompt("What do you wanna add?");
        let definition = prompt("What is the definition?");
        addWord(name, definition);
    }
    if (event === "S") {
        showList(vocabularyList);
    }
    if (event === "D") {
        showList(vocabularyList)
        let deleteItem = prompt("Enter the name of what you want to delete?");
        vocabularyList.splice(vocabularyList.findIndex((a) => a === deleteItem), 1)
    }
    if (event === "C") {
        showList(vocabularyList)
        let deleteItem = prompt("Enter the name of what you want to Change?");
        vocabularyList.splice(vocabularyList.findIndex((a) => a === deleteItem), 1)
        let name = prompt("What do you wanna Name it?");
        let definition = prompt("What is the definition?");
        addWord(name, definition);
    }
}
