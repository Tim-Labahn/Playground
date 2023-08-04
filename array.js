const prompt = require("prompt-sync")({ sigint: true });

let inventory = ["Corbse", "human", "cat", "car"]

function showList(arr) {
    console.log("inventory stors:", arr.length, "items"
    )
    for (let i = 0; i < arr.length; i++) {
        console.log(i + 1 + ".", arr[i])
    }
}



while (true) {
    inventory.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })

    console.log("Your options: A- add, D- delete, S- Show list, F- Filter, C- Capslock, I- Informations")
    const event = prompt("What is your choise?");
    if (event === "A") {
        let addItem = prompt("What do you wanna add?");
        inventory.push(addItem)
    }
    //  inventory.push('${ addItem }')
    if (event === "S") {
        showList(inventory)
    }
    if (event === "D") {
        console.log("inventory stors:", inventory.length, "items"
        )

        for (let k = 0; k < inventory.length; k++) {
            console.log(k + 1 + ".", inventory[k])
        }
        //__________________________________________________
        let deleteItem = prompt("Enter the name of what you want to delete?");
        inventory.splice(inventory.findIndex((a) => a === deleteItem), 1)
    }
    if (event === "F") {
        console.log("This will delete every string that is shorter then 5 letters or numbers.")
        const check = prompt("Do you wanna continue? Y/N")
        if (check === "Y") {
            inventory = inventory.filter((item) => item.length > 5)

            console.log("Filtert")
        } else {
            console.log("filtering stoped.")
        }

    }
    if (event === "C") {
        showList(inventory.map((i) => i.toUpperCase()))
    }
}
