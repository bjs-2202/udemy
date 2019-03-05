`use strict`;

let money = +prompt(`Ваш бюджет на месяц?`, ``);
let time = prompt(`Введите дату в формате YYYY-MM-DD`, ``);

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}

let questionOne = prompt(`Введите обязательную статью расходов в этом месяце`, ``);
let questionTwo = prompt(`Во сколько обойдется?`, ``);
let questionThree = prompt(`Введите обязательную статью расходов в этом месяце`, ``);
let questionFour = prompt(`Во сколько обойдется?`, ``);

appData.expenses.questionOne = questionThree;
appData.expenses.questionTwo = questionFour;

alert(`бюджет на 1 день: ${appData.budget/30}`);
console.log(appData);
