var id = 999;

function uniqeId() {
    ++id;
    return id;
}



const body = document.getElementsByTagName('body');
// constructor 
const allFood = [];
function Food(Id, name, type, price) {
    this.Id = Id;
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

const f1 = new Food(uniqeId(), "Pizza", "Fat", 8.35);
const f2 = new Food(uniqeId(), "Burger", "Fat", 4.25);
const f3 = new Food(uniqeId(), "Apple", "Fruit", 0.63);


f1.render();
f2.render();
f3.render();

console.log(allFood);



let form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let Id = uniqeId();

    let name = event.target.name.value;

    let type = event.target.typeOf.value;

    let price = event.target.price.value;

    console.log(Id, name, type, price);

    const newFood = new Food(Id, name, type, price);

    newFood.render();

}