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