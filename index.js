#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Intial Points of Player
let points = 0;
let playerName = await inquirer.prompt({
    name: "player",
    type: "input",
    message: "Enter your name",
});
let capatalizedName = playerName.player.toUpperCase();
if (playerName.player === "") {
    console.log(chalk.italic.yellow(` PLAYER001, WELCOME TO THE QUIZ`));
}
else {
    console.log(chalk.green.italic(`${capatalizedName},WELCOME TO THE QUIZ `));
}
console.log("-------------------------------------------");
console.log(`Your Initial points are : ${points}`);
console.log("-------------------------------------------");
console.log(`Each quiz carries 05 marks`);
console.log("-------------------------------------------");
console.log("Starting your quiz");
console.log("-------------------------------------------");
console.log(chalk.blue(`${capatalizedName},Pehla prashn apki screen par yeh raha`));
let Q1 = await inquirer.prompt({
    name: "ques1",
    type: "list",
    message: "Q#1 Who is the father of computers?",
    choices: ["A. Charles Babage", "B. Einstien", "C. Thomas", "D. Nelson"],
});
let answer1 = "A. Charles Babage";
if (Q1.ques1 === answer1) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is:" + answer1));
}
console.log(chalk.blue(`${capatalizedName},Dusra prashn apki screen par yeh raha`));
let Q2 = await inquirer.prompt({
    name: "ques2",
    type: "list",
    message: "Q#2 What is the capital of France?",
    choices: ["A. Rome", "B. Paris", "C. Madrid", "D. Berlin"],
});
let answer2 = "B. Paris";
if (Q2.ques2 === answer2) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is:" + answer2));
}
console.log(chalk.blue(`${capatalizedName},Teesra prashn apki screen par yeh raha`));
let Q3 = await inquirer.prompt({
    name: "ques3",
    type: "list",
    message: "Q#3 What is the chemical symbol of gold?",
    choices: ["A. Au", "B. Ag", "C. Fe", "D. Pb"],
});
let answer3 = "A. Au";
if (Q3.ques3 === answer3) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is:" + answer3));
}
console.log(chalk.blue(`${capatalizedName},Chautha prashn apki screen par yeh raha`));
let Q4 = await inquirer.prompt({
    name: "ques4",
    type: "list",
    message: "Q#4 Who is the founder of Amazon?",
    choices: ["A. Bill Gates", "B. Jeff Bezoz", "C. Tim Cook", "D. Steve Jobs"],
});
let answer4 = "B. Jeff Bezoz";
if (Q4.ques4 === answer4) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is:" + answer4));
}
console.log(chalk.blue(`${capatalizedName},Panchwa prashn apki screen par yeh raha`));
let Q5 = await inquirer.prompt({
    name: "ques5",
    type: "list",
    message: "Q#5 Which mountain is the tallest mountain in the world?",
    choices: ["A. Mount Everest", "B. Mount kilimanjaro", "C. K2", "D. Himalaya"],
});
let answer5 = "A. Mount Everest";
if (Q5.ques5 === answer5) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer5));
}
console.log(chalk.blue(`${capatalizedName},Chatha prashn apki screen par yeh raha`));
let Q6 = await inquirer.prompt({
    name: "ques6",
    type: "list",
    message: "Q#6 Who painted Mona lisa?",
    choices: [
        "A. Vincent van Gogh",
        "B. leonardo da Vinci",
        "C. Pablo Picasso",
        "None of these",
    ],
});
let answer6 = "B. leonardo da Vinci";
if (Q6.ques6 === answer6) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer6));
}
console.log(chalk.blue(`${capatalizedName},Sathwa prashn apki screen par yeh raha`));
let Q7 = await inquirer.prompt({
    name: "ques7",
    type: "list",
    message: "Q#7 Which of the Seven Wonders of the World is from the following",
    choices: [
        "A. Colosseum",
        "B. Christ the Redeemer",
        "C. Machu Picchu",
        "D. All of these",
    ],
});
let answer7 = "D. All of these";
if (Q7.ques7 === answer7) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer7));
}
console.log(chalk.blue(`${capatalizedName},Aathwa prashn apki screen par yeh raha`));
let Q8 = await inquirer.prompt({
    name: "ques8",
    type: "list",
    message: "Q#8 Who was the first person to step on the moon?",
    choices: [
        "A. John Glenn",
        "B. Thomas Alva",
        "C. Neil Armstrong",
        "D. Buzz Aldrin",
    ],
});
let answer8 = "C. Neil Armstrong";
if (Q8.ques8 === answer8) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer8));
}
console.log(chalk.blue(`${capatalizedName},Nawwa prashn apki screen par yeh raha`));
let Q9 = await inquirer.prompt({
    name: "ques9",
    type: "list",
    message: "Q#9 Which country is famous for the Great Wall?",
    choices: ["A. U.S.A", "B. scotland", "C. China", "D. North korea"],
});
let answer9 = "C. China";
if (Q9.ques9 === answer9) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer9));
}
console.log(chalk.blue(`${capatalizedName},Daswa prashn apki screen par yeh raha`));
let Q10 = await inquirer.prompt({
    name: "ques10",
    type: "list",
    message: "Q#10 What is the currency of Japan ?",
    choices: ["A. Dollar", "B. Yuan", "C. Pound", "D. Yen"],
});
let answer10 = "D. Yen";
if (Q10.ques10 === answer10) {
    console.log("Correct answer");
    points += 5;
    console.log(`You have earned five points`);
}
else {
    console.log(chalk.red("Incorrect. The correct answer is: " + answer10));
}
console.log(`\nYour total points are: ` + points);
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
