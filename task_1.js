document.addEventListener('DOMContentLoaded', (event) => {
    const firstNum = parseInt(prompt('Введите первое число'), 10), secondNum = parseInt(prompt('Введите второе число'), 10);

    Number.isInteger(firstNum) && Number.isInteger(secondNum)
        ? console.log(firstNum.toString(secondNum))
        : console.log("Некорректный ввод!");
})