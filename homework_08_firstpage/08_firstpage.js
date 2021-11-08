
let d = document;
let name;
let numbers;
function addRow()
{

    name = d.getElementById('name').value;
    numbers = d.getElementById('numbers').value;


    let tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    let row = d.createElement("TR");
    tbody.appendChild(row);


    let td1 = d.createElement("TD");
    let td2 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    td1.innerHTML = name;
    td2.innerHTML = numbers;

}
function oneFunction(){
    document.body.style.background = "red";
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('body').style.color='green';
})
}
function twoFunction(){
    document.body.style.background = "blue";
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('body').style.color='yellow';
})
}
function threeFunction(){
    document.body.style.background = "black";
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('body').style.color='white';
})
}