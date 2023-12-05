console.log ('Hello, World!');

var footer = document.getElementById("FOOTER");
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

function myFunction() {
document.getElementById("alerting").innerHTML = "Hello World";
}

function changeText(text) {
    var display = document.getElementById('text-display');
      display.innerHTML = "Hello";
      display.innerHTML = text;
}
    function changeback(text){
        var display = document.getElementById('text-display');
          display.innerHTML = "Hola";
          display.innerHTML = text;
    }

    let increment = document.getElementById("increment")
    let counter = document.getElementById("counter")
    let count = 0

    function adding() {
        counter.textContent = ++count
    }


    var array = [1,2,3, "mm", "b", "c", "mm", "y", "mm"];
    var list = document.getElementById("list");

    function addText(array) {
        array.map(function(element) {
            if(element === 'm') {
                var listItem = document.createElement('LI');
                listItem.textContent = element;
                list.appendChild(listItem);
            }
        });
    }
    addText(array);