#!/usr /bin /env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgGray("Welcome to Word Counter"));
let answers = await inquirer.prompt([
    {
    name:"Q1",
    Type:"input",
    message:"Enter yur Sentence",
    
}
]);
let words = answers.Q1.trim().split(" ");
console.log(words);
console.log(`${words.length}`);
