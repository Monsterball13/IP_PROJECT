var arr= new Array();

function addData() {
    getData();
    arr.push({
        Serial_Number:document.getElementById("Serial_Number").value,
        Date:document.getElementById("Date").value,
        Patient_Name:document.getElementById("Patient_Name").value,
        Age:document.getElementById("Age").value,
        Gender:document.getElementById("Gender").value,
        Contact_Number:document.getElementById("Contact_Number").value

    });
    localStorage.setItem("localData", JSON.stringify(arr));
    showData();

}

function getData() {
    var str= localStorage.getItem("localData");
    if (str != null) {
        arr= JSON.parse(str);
    }
}

function deleteData() {
    localStorage.clear()

}

function showData() {
    getData();

    var table= document.getElementById("Patient_Records");

    var x= table.rows.length;
    while (--x){
        table.deleteRow(x);

    }

    for (i=0; i<arr.length; i++){
        var row= table.insertRow();
        var cell1= row.insertCell();
        var cell2= row.insertCell();
        var cell3= row.insertCell();
        var cell4= row.insertCell();
        var cell5= row.insertCell();
        var cell6= row.insertCell();

        cell1.innerHTML= arr[i].Serial_Number;
        cell2.innerHTML= arr[i].Date;
        cell3.innerHTML= arr[i].Patient_Name;
        cell4.innerHTML= arr[i].Age;
        cell5.innerHTML= arr[i].Gender;
        cell6.innerHTML= arr[i].Contact_Number;


    }

    var row= table.insertRow();
    var cell1= row.insertCell();
    var cell2= row.insertCell();
    var cell3= row.insertCell();
    var cell4= row.insertCell();
    var cell5= row.insertCell();
    var cell6= row.insertCell();

    cell1.innerHTML= document.getElementById("Serial_Number").value;
    cell2.innerHTML= document.getElementById("Date").value;
    cell3.innerHTML= document.getElementById("Patient_Name").value;
    cell4.innerHTML= document.getElementById("Age").value;
    cell5.innerHTML= document.getElementById("Gender").value;
    cell6.innerHTML= document.getElementById("Contact_Number").value;

}

