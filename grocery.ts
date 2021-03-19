interface groceryInterface{
    name: string;
    quantity: number;
    units: string;
    id : any;
}

class Grocery implements groceryInterface{
    constructor(public name, public quantity, public units, public id = null){
        this.name = name
        this.quantity = quantity
        this.units = units
        this.id = null
    }
}

const apple = new Grocery('apple', 2, 'bags')
const sugar = new Grocery('sugar', 10, 'bags')
const chicken = new Grocery('chicken', 10, 'lbs')
const bread = new Grocery('bread', 20, 'loafs')
const milk = new Grocery('milk', 15, 'gallons')

const arr = [apple,sugar,chicken,bread,milk]

arr.map((groceryItem,idx)=>{
    groceryItem.id = idx
    let listItem = document.createElement("LI")
    let name = document.createTextNode(groceryItem.name)

    listItem.appendChild(name)

    let x = document.getElementById("0")

    x.appendChild(listItem)
})


