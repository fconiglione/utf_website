window.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const button = document.querySelectorAll('.btn');

    if (currentMonth >= 2 && currentMonth <= 4) {
        button.forEach((element) => element.classList.add('spring'));
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        button.forEach((element) => element.classList.add('summer'));
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        button.forEach((element) => element.classList.add('autumn'));
    } else {
        button.forEach((element) => element.classList.add('winter'));
    }
});