const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', function () {
    display.value += this.value;  // this.value is "7", "8", "+" etc
    });
});
console.log(`Button clicked: ${this.value}`);