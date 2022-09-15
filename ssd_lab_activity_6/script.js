function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction2() {
    alert("Name:  Email:  Username:  Team Lead:   Team Members:   ");
  }

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }