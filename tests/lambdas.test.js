const { parse } = require("../src/parse");
const { evaluate } = require("../src/evaluate");

describe("Lambda expression tests", () => {
  it("Should correctly parse a lambda expression", () => {
    const tokens = [
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "lambda" },
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "x" },
      { type: "PAREN", value: ")" },
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "+" },
      { type: "IDENTIFIER", value: "x" },
      { type: "INTEGER", value: 1 },
      { type: "PAREN", value: ")" },
      { type: "PAREN", value: ")" },
    ];

    const ast = {
      type: "LambdaExpression",
      name: "lambda1",
      params: [{ type: "FunctionParameter", name: "x" }],
      body: {
        type: "CallExpression",
        name: "+",
        arguments: [
          { type: "Identifier", name: "x" },
          { type: "IntegerLiteral", value: 1 },
        ],
      },
    };

    expect(parse(tokens)).toEqual(ast);
  });

  it("Should correctly parse a call expression invoking a lambda", () => {
    const tokens = [
      { type: "PAREN", value: "(" },
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "lambda" },
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "x" },
      { type: "PAREN", value: ")" },
      { type: "PAREN", value: "(" },
      { type: "IDENTIFIER", value: "+" },
      { type: "IDENTIFIER", value: "x" },
      { type: "INTEGER", value: 1 },
      { type: "PAREN", value: ")" },
      { type: "PAREN", value: ")" },
      { type: "INTEGER", value: 10 },
      { type: "PAREN", value: ")" },
    ];

    const ast = {
      type: "CallExpression",
      lambda: {
        type: "LambdaExpression",
        name: "lambda2",
        params: [{ type: "FunctionParameter", name: "x" }],
        body: {
          type: "CallExpression",
          name: "+",
          arguments: [
            { type: "Identifier", name: "x" },
            { type: "IntegerLiteral", value: 1 },
          ],
        },
      },
      name: "lambda2",
      arguments: [{ type: "IntegerLiteral", value: 10 }],
    };

    expect(parse(tokens)).toEqual(ast);
  });

  it.skip("Should correctly evaluate a call expression invoking a lambda", () => {
    const ast = {
      type: "CallExpression",
      lambda: {
        type: "LambdaExpression",
        name: "lambda2",
        params: [{ type: "FunctionParameter", name: "x" }],
        body: {
          type: "CallExpression",
          name: "+",
          arguments: [
            { type: "Identifier", name: "x" },
            { type: "IntegerLiteral", value: 1 },
          ],
        },
      },
      name: "lambda2",
      arguments: [{ type: "IntegerLiteral", value: 10 }],
    };

    expect(evaluate(ast)).toEqual(11);
  });
});