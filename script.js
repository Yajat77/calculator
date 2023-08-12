document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('input[type="button"]');
    let screenValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.value;

            if (buttonText === 'C') {
                screenValue = "";
            } else if (buttonText === '=') {
                try {
                    screenValue = eval(screenValue).toString();
                } catch (error) {
                    screenValue = "Error";
                }
            } else {
                screenValue += buttonText;
            }

            screen.value = screenValue;
        });
    });
});
