var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, units, id) {
        if (id === void 0) { id = null; }
        this.name = name;
        this.quantity = quantity;
        this.units = units;
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.units = units;
        this.id = null;
    }
    return Grocery;
}());
var apple = new Grocery('apple', 2, 'bags');
var sugar = new Grocery('sugar', 10, 'bags');
var chicken = new Grocery('chicken', 10, 'lbs');
var bread = new Grocery('bread', 20, 'loafs');
var milk = new Grocery('milk', 15, 'gallons');
var arr = [apple, sugar, chicken, bread, milk];
arr.map(function (groceryItem, idx) {
    groceryItem.id = idx;
    var listItem = document.createElement("LI");
    var name = document.createTextNode(groceryItem.name);
    listItem.appendChild(name);
    var x = document.getElementById("0");
    x.appendChild(listItem);
});
