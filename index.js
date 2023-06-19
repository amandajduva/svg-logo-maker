// Import packages
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "text",
        message: "What text should be displayed? Enter up to three characters.",
    },
    {
        type: "input",
        name: "text-color",
        message: "What color would you like the text? Enter a color keyword (OR a hexadecimal number).",
    },
    {
        type: "list",
        name: "logo-shape",
        message: "What chae would you like the logo to be?",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "What color would you like the shape? Enter a color keyword (OR a hexadecimal number).",
    },
];