let valueDisplays = document.querySelectorAll('.num');
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = valueDisplay.innerHTML;
    let counter = setInterval(function () {
        startValue += 1;
        let fotmatNumber = startValue.toLocaleString();
        valueDisplay.textContent = fotmatNumber;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, 30)

})
