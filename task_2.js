document.addEventListener('DOMContentLoaded', (event) => {

    const firstNum = parseInt(prompt('Введите первое число'), 10);

    let secondNum = null;

    if (!Number.isInteger(firstNum)) {
        console.log("Некорректный ввод!");
        return;
    } else {
        secondNum = parseInt(prompt('Введите второе число'), 10);
    }

    !Number.isInteger(secondNum) ? console.log("Некорректный ввод!") : console.log(`Ответ: ${firstNum + secondNum}, ${firstNum / secondNum}`);
});