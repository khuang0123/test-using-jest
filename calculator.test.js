const {calculator} = require("./calculator.js");

test("testing add function", ()=> {
    expect(calculator(1,"+",2)).toBe(3);
});

test("testing minus function", () => {
    expect(calculator(1,"-",2)).toBe(-1);
});

test("testing multiply function", () => {
    expect(calculator(1,"*",2)).toBe(2);
});

test("testing divide function", () => {
    expect(calculator(1,"/",2)).toBe(0.5);
});
