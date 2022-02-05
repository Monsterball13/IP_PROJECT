var array = [];
window.onload = init1;

function addChart() {
    var chart = {
            Serial:document.getElementById("S_Number").value,
            Ailment:document.getElementById("Ailment").value,
            Treatment:document.getElementById("Treatment").value,
            Income:document.getElementById("Income").value

        };

    if(chart.Serial !== "" && chart.Ailment !== "" && chart.Treatment !=="" && chart.Income !== "") {
        array = JSON.parse(localStorage.getItem("chart")) || [];
        array.push(chart);
        localStorage.setItem("chart", JSON.stringify(array));
        array = localStorage.getItem("chart");
        array = JSON.parse(array);

        for(x=0; x < array.length; x++) {

            var row1 = Treatment_Chart.insertRow(1);

            var cella = row1.insertCell(0);

            var cellb = row1.insertCell(1);

            var cellc = row1.insertCell(2);

            var celld = row1.insertCell(3);

            cella.innerHTML = array[x].Serial;

            cellb.innerHTML = array[x].Ailment;

            cellc.innerHTML = array[x].Treatment;

            celld.innerHTML = array[x].Income;

            }

        window.location.reload(true);
        }
}

function clearChart() {
    localStorage.clear();
    window.location.reload(true);

}

function createChart(chart) {
    var table1 = document.getElementById("Treatment_Chart");

    var row1 = document.createElement("tr");

    var cella = document.createElement("td");

    var cellb = document.createElement("td");

    var cellc = document.createElement("td");

    var celld = document.createElement("td");

    cella.innerHTML = chart.Serial;

    cellb.innerHTML = chart.Ailment;

    cellc.innerHTML = chart.Treatment;

    celld.innerHTML = chart.Income;

    row1.appendChild(cella);

    row1.appendChild(cellb);

    row1.appendChild(cellc);

    row1.appendChild(celld);

    table1.appendChild(row1);

}

function getChart() {
    return JSON.parse(localStorage.getItem("chart"));

}

function init1() {
    var array = getChart();

    for(x=0; x < array.length; x++) {
        var chart = array[x];
        createChart(chart);

    }

}