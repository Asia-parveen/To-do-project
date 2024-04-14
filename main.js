#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "what would you like to add in your Todos?",
            type: "input",
        },
        {
            name: "secondQuestion",
            message: "Would you like to add more in your todos?",
            type: "confirm",
            default: "true",
        },
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
// showing all elements name of array one by one by using for loop.
for (let i = 0; i <= todos.length; i++) {
    console.log(todos[i]);
}
