var id = 999;
const allFood = [];
let tEl = document.getElementById("tableID");

function Food(name, type, price) {
    this.Id = ++id;
    this.name = name;
    this.type = type;
    this.price = price;

    allFood.push(this);

}


Food.prototype.render = function () {
    let tr = document.createElement("tr");
    tEl.appendChild(tr);

    let tdId = document.createElement("td");
    tdId.textContent = this.Id;
    tr.appendChild(tdId);

    let tdName = document.createElement("td");
    tdName.textContent = this.name;
    tr.appendChild(tdName);

    let tdType = document.createElement("td");
    tdType.textContent = this.type;
    tr.appendChild(tdType);

    let tdPrice = document.createElement("td");
    tdPrice.textContent = this.price;
    tr.appendChild(tdPrice);


}

let f1 = new Food("Pizza", "Fat", 8.35);
let f2 = new Food("Burger", "Fat", 4.25);
let f3 = new Food("Apple", "Fruit", 0.63);

function renderAll() {
    for (let i = 0; i < allFood.length; i++) {
        allFood[i].render();
    }
}

// f1.render();
// f2.render();
// f3.render();


let arrayData = [];

// ----------------------------------------------------------------------------------------------

function getData() {
    let retrievedData = localStorage.getItem('Food');
    console.log(retrievedData);
    arrayData = JSON.parse(retrievedData);
    console.log(arrayData);
}

// ----------------------------------------------------------------------------------------------

if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
        if (allFood[i]?.name !== arrayData[i].name) {
            new Food(
                arrayData[i].name,
                arrayData[i].type,
                arrayData[i].price,
            )
        }
    }
    renderAll();
}

getData();