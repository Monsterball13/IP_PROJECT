/*function myFunction(){
    var table= document.getElementById("Patient_Records");
    var row= table.insertRow();
    var cell1= row.insertCell();
    var cell2= row.insertCell();
    var cell3= row.insertCell();
    var cell4= row.insertCell();
    var cell5= row.insertCell();
    var cell6= row.insertCell();

    cell1.innerHTML= document.getElementById("Serial Number").value;
    cell2.innerHTML= document.getElementById("Date").value;
    cell3.innerHTML= document.getElementById("Patient Name").value;
    cell4.innerHTML= document.getElementById("Age").value;
    cell5.innerHTML= document.getElementById("Gender").value;
    cell6.innerHTML= document.getElementById("Contact Number").value;

}*/

var arr = [];
window.onload = init;

function addData() {
    var data = {
            Number:document.getElementById("Serial_Number").value,
            Date:document.getElementById("Date").value,
            Name:document.getElementById("Patient_Name").value,
            Age:document.getElementById("Age").value,
            Gender:document.getElementById("Gender").value,
            Contact:document.getElementById("Contact_Number").value

        };

    if(data.Number !== "" && data.Date !== "" && data.Name !=="" && data.Age !== "" && data.Gender !== "") {
        arr = JSON.parse(localStorage.getItem("data")) || [];
        arr.push(data);
        localStorage.setItem("data", JSON.stringify(arr));
        arr = localStorage.getItem("data");
        arr = JSON.parse(arr);

        for(i=0; i < arr.length; i++) {
            var row = Patient_Records.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.innerHTML = arr[i].Number;
            cell2.innerHTML = arr[i].Date;
            cell3.innerHTML = arr[i].Name;
            cell4.innerHTML = arr[i].Age;
            cell5.innerHTML = arr[i].Gender;
            cell6.innerHTML = arr[i].Contact;

            }

        window.location.reload(true);
        }
}

function clearData() {
    localStorage.clear();
    window.location.reload(true);

}

function createData(data) {
    var table = document.getElementById("Patient_Records");
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");

    cell1.innerHTML = data.Number;
    cell2.innerHTML = data.Date;
    cell3.innerHTML = data.Name;
    cell4.innerHTML = data.Age;
    cell5.innerHTML = data.Gender;
    cell6.innerHTML = data.Contact;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    table.appendChild(row);

}

function getData() {
    return JSON.parse(localStorage.getItem("data"));

}

function init() {
    var arr = getData();

    for(i=0; i<arr.length; i++) {
        var data = arr[i];
        createData(data);

    }

}