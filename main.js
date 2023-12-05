console.log ('Hello, World!');

//footer//
var footer = document.getElementById("FOOTER");
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

//alert button//
function myFunction() {
document.getElementById("alerting").innerHTML = "Hello World";
}

//hover button//
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

//incrementing button - if-else//
let count = 1;
const txtCounter = document.getElementById('txt-counter');

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;

    if (count % 2 === 0) {
        txtCounter.innerHTML = 'Number: ${count}';
        txtCounter.style.color = 'red';
        txtCounter.classlist.remove('odd');
        txtCounter.classlist.add('even');
    } else {
        txtCounter.innerHTML = 'Number: ${count}';
        txtCounter.style.color = 'white';
        txtCounter.classList.remove('even');
        txtCounter.classList.add('odd');
    }
};

//loop//
 const numbersList = document.getElementById('numbers');

 for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd' ;
    numbersList.appendChild(listItem);

    console.log('List Item', i, ':', listItem.text.Content);
 }
 

