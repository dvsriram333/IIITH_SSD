function addrow() {
    var table = document.getElementById("stu_table")
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "";
    cell2.innerHTML = "";
}

function deleterow() {
    document.getElementById("stu_table").deleteRow(0);
  }