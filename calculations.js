const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const clearButton = document.querySelector('input[value="Clear"]');
const Calculate = document.querySelector('.calc');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Prevent default action for button clicks
        const value = button.value;
        // Get the value of the clicked button

        if (value === "Calculate") {
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }

        console.log(`Button clicked: ${value}`);
    });
});

clearButton.addEventListener('click', () => {
    display.value = '';
    console.log('Display cleared');
});

// Add event listener for Calculate button


Calculate.addEventListener('click', (a) => {
    a.preventDefault();
    
    const calculation = display.value;

    console.log('Calculate button clicked');


})  // Prevent default action for Calculate button