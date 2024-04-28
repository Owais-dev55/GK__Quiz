import inquirer from "inquirer";
import chalk from "chalk";
//Intial Points of Player
let points = 0;
//In this second method , I am making this program comapct by using objects , loops and functions
//First and foremost, I will create an array object in which I will store my questions adn their answers along with the choices
//These words are nothing but the mimicry of Amitabh
let urduCounting = [
    "Pehla",
    "Dusra",
    "Teesra",
    "Chautha",
    "Panchwa",
    "Chhatha",
    "Sathwa",
    "Aathwa",
    "Nawwa",
    "Daswa",
];
let playerName = await inquirer.prompt({
    name: "player",
    type: "input",
    message: "Enter your name",
});
let capitalizedName = playerName.player.toUpperCase();
if (playerName.player === "") {
    console.log(chalk.italic.yellow(` PLAYER001, WELCOME TO THE QUIZ`));
}
else {
    console.log(chalk.green.italic(`${capitalizedName},WELCOME TO THE QUIZ `));
}
console.log("-------------------------------------------");
console.log(`Your Initial points are : ${points}`);
console.log("-------------------------------------------");
console.log(`Each quiz carries 05 marks`);
console.log("-------------------------------------------");
console.log("Starting your quiz");
console.log("-------------------------------------------");
let questions = [
    {
        question: "Who is the father of computers?",
        choices: ["A. Charles Babage", "B. Einstien", "C. Thomas", "D. Nelson"],
        answer: "A. Charles Babage",
    },
    {
        question: "Q#2 What is the capital of France?",
        choices: ["A. Rome", "B. Paris", "C. Madrid", "D. Berlin"],
        answer: "B. Paris",
    },
    {
        question: "Q#3 What is the chemical symbol of gold?",
        choices: ["A. Au", "B. Ag", "C. Fe", "D. Pb"],
        answer: "A. Au",
    },
    {
        question: "Q#4 Who is the founder of Amazon?",
        choices: ["A. Bill Gates", "B. Jeff Bezoz", "C. Tim Cook", "D. Steve Jobs"],
        answer: "B. Jeff Bezoz",
    },
    {
        question: "Q#5 Which mountain is the tallest mountain in the world?",
        choices: [
            "A. Mount Everest",
            "B. Mount kilimanjaro",
            "C. K2",
            "D. Himalaya",
        ],
        answer: "A. Mount Everest",
    },
    {
        question: "Q#6 Who painted Mona lisa?",
        choices: [
            "A. Vincent van Gogh",
            "B. leonardo da Vinci",
            "C. Pablo Picasso",
            "None of these",
        ],
        answer: "B. leonardo da Vinci",
    },
    {
        question: "Q#7 Which of the Seven Wonders of the World is from the following",
        choices: [
            "A. Colosseum",
            "B. Christ the Redeemer",
            "C. Machu Picchu",
            "D. All of these",
        ],
        answer: "D. All of these",
    },
    {
        question: "Q#8 Who was the first person to step on the moon?",
        choices: [
            "A. John Glenn",
            "B. Thomas Alva",
            "C. Neil Armstrong",
            "D. Buzz Aldrin",
        ],
        answer: "C. Neil Armstrong",
    },
    {
        question: "Q#9 Which country is famous for the Great Wall?",
        choices: ["A. U.S.A", "B. scotland", "C. China", "D. North korea"],
        answer: "C. China",
    },
    {
        question: "Q#10 What is the currency of Japan ?",
        choices: ["A. Dollar", "B. Yuan", "C. Pound", "D. Yen"],
        answer: "D. Yen",
    },
];
//Here's I will be iterating over the questions using my (for of)loop due to that I don't have to write if-else all the time .
//Neither I have to see is my answer is correct or not nor I have prompt message many times , In short , this code/syntax is far better to read and understand
for (let i = 0; i < questions.length; i++) {
    console.log(chalk.blue(`${capitalizedName}, ${urduCounting[i]} prashn apki screen par yeh raha`));
    let input = await inquirer.prompt({
        name: "userAnswer",
        type: "list",
        message: questions[i].question,
        choices: questions[i].choices,
    });
    if (input.userAnswer === questions[i].answer) {
        console.log("Correct answer");
        points += 5;
        console.log(`You have earned five points`);
    }
    else {
        console.log(chalk.red("Incorrect. The correct answer is: " + questions[i].answer));
    }
}
console.log(`\nYour total points are: ` + points);
//Here we will calculate the percentage for the user's performance
// Display message based on user's performance
if (points === 50) {
    console.log(chalk.green.bold("\nCongratulations! You got all questions correct. You're a quiz master!"));
}
else if (points >= 30) {
    console.log(chalk.yellow.bold("\nWell done! You did great in the quiz."));
}
else if (points >= 20) {
    console.log(chalk.yellow.bold("\nNot bad! You have a good score."));
}
else if (points >= 10) {
    console.log(chalk.red.bold("\nYou can do better next time. Keep practicing!"));
}
else {
    console.log(chalk.red.bold("\nOh no! Better luck next time."));
}
