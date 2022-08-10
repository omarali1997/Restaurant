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






function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem("allFood", stringObj)
}

function getData() {
    let retrieveData = localStorage.getItem('allFood')
    console.log(retrieveData);
    let arrayData = JSON.parse(retrieveData);
    console.log(arrayData);

    for(let i = 0 ; i < arrayData.length ; i++){
        new FontFaceSetLoadEvent(arrayData[i]);
    }

    for(let i = 0 ; i < arrayData.length ; i++) {
        arrayData[i].render();
    }
}
getData();