const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const value = button.value;

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