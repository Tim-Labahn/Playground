const prompt = require("prompt-sync")({ sigint: true });

const woodSword = {
    name: "Wodden sword",
    dmg: 1
}

const inventory = [woodSword]
console.log(inventory[0].dmg)
