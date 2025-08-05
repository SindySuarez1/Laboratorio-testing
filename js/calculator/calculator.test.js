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
const { divide, multiply} = require('./calculator')

//prueba funcion divide
test('divide 15 / 5 igual 3', () => {
  expect(divide(15, 5)).toBe(3);
});

test('divide 191 / 5 igual 38.2', () => {
  expect(divide(191, 5)).toBe(38.2);
});

//prueba funcion multiply
test('multiplicar 5 * 4 to igual 20', () => {
  expect(multiply(5, 4)).toBe(20);
});

test('multiplicar 35 * 14 igual 490', () => {
  expect(multiply(35, 14)).toBe(490);
});

//! TAREA 3
//prueba manejo caso division por 0
test('verificar division 0', () => {
  expect(divide(30, 0)).toBe("no se puede dividir por 0");
});
