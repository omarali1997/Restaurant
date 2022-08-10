var id = 999;
const allFood = [];

function Food(name, type, price) {
    this.Id = ++id;
    this.name = name;
    this.type = type;
    this.price = price;

    allFood.push(this);

}

var tEl = document.getElementById("table");

Food.prototype.render = function () {
    let trEl = document.createElement('tr');
    tEl.appendChild(trEl);

    let tdId = document.createElement('td');
    tdId.textContent = this.Id;
    trEl.appendChild(tdId);

    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    trEl.appendChild(tdName);

    let tdType = document.createElement('td');
    tdType.textContent = this.type;
    trEl.appendChild(tdType);

    let tdPrice = document.createElement('td');
    tdPrice.textContent = this.price;
    trEl.appendChild(tdPrice);


}

let f1 = new Food("Pizza", "Fat", 8.35);
let f2 = new Food("Burger", "Fat", 4.25);
let f3 = new Food("Apple", "Fruit", 0.63);

for (let i = 0; i < allFood.length; i++) {
    allFood[i].render();
}

// f1.render();
// f2.render();
// f3.render();


let arrayData = [];

// ----------------------------------------------------------------------------------------------

function getData() {
    let retrieveData = localStorage.getItem('Food');
    console.log(retrieveData);
    arrayData = JSON.parse(retrieveData);
    console.log(arrayData);
}

// ----------------------------------------------------------------------------------------------

for (let i = 0; i < arrayData.length; i++) {
    new Food(
        arrayData[i].name,
        arrayData[i].type,
        arrayData[i].price,
    );


}




getData();



console.log(allFood);

