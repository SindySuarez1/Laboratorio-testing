const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// ! TAREA 1
const { divide, multiply} = require("./funciones.js")

test('divide 15 / 5 to equal 3', () => {
  expect(divide(15, 5)).toBe(3);
});

test('divide 191 / 5 to equal 3', () => {
  expect(divide(191, 5)).toBe(38.2);
});

test('multiply 5 * 4 to equal 1', () => {
  expect(multiplyt(5, 4)).toBe(20);
});

test('multiply 35 * 14 to equal 1', () => {
  expect(multiply(35, 14)).toBe(490);
});