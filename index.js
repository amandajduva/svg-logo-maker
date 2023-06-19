// Import packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const { Triangle, Square, Circle } = require("./lib/shapes");
const SVG = require("./lib/svg");

const questions = [
    {
        type: "input",
        name: "text",
        message: "What text should be displayed? Enter up to three characters.",
        validate: (text) => {
            if (text.length <= 3) return true 
            else return "Text must be three or less characters."}
    },
    {
        type: "input",
        name: "textcolor",
        message: "What color would you like the text? Enter a color keyword (OR a hexadecimal number).",
    },
    {
        type: "list",
        name: "logoshape",
        message: "What chae would you like the logo to be?",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color would you like the shape? Enter a color keyword (OR a hexadecimal number).",
    },
];

// A function to generate SVG file
function generateFile() {
    inquirer.prompt(questions).then((answers) => {
        let shape;
        if (answers.logoshape === "circle") {
            shape = new Circle()
        } else if (answers.logoshape === "triangle") {
            shape = new Triangle()
        } else {
            shape = new Square()
        }
        shape.setColor(answers.shapecolor)
        const svg = new SVG()
        svg.setText(answers.text, answers.textcolor)
        svg.setShape(shape)
        console.log("Generated logo.svg");
        return fs.writeFileSync(path.join(process.cwd(), "logo.svg"), svg.render());
    });
}

generateFile();