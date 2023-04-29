let rowInput = document.querySelector("#rows");
let colInput = document.querySelector("#cols");
let btn = document.querySelector("button");

btn.addEventListener("click", createTable);

function createTable() {
    let table = document.createElement('table');
    for (let i = 0; i < rowInput.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < colInput.value; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode("Item"));
            tr.appendChild(td);
        }

        document.body.appendChild(table);
    }
}