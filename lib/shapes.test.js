const { Triangle, Square, Circle } = require("./shapes");

describe("triangle", () => {
    test("test for a red triangle", () => {
        const shape = new Triangle();
        shape.setColor("red");
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;
        expect(shape.render()).toEqual(expected);
    });
});

describe("square", () => {
    test("test for a blue square", () => {
        const shape = new Square();
        shape.setColor("blue");
        const expected = `<rect x="90" y="40" width="120" height="120" fill="blue" />`;
        expect(shape.render()).toEqual(expected);
    });
});

describe("circle", () => {
    test("test for a green circle", () => {
        const shape = new Circle();
        shape.setColor("green");
        const expected = `<circle cx="150" cy="100" r="80" fill="green" />`;
        expect(shape.render()).toEqual(expected);
    });
});