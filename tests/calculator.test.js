/**
 * Unit tests for calculator module
 * Tests add() and multiply() functions with various inputs
 */

// Import the calculator module (adjust path as needed for your test runner)
// const { add, multiply } = require('../src/calculator');

// Test suite for add function
describe('Calculator - add function', () => {
  // Positive number tests
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
    expect(add(100, 200)).toBe(300);
  });

  test('adds positive number and zero', () => {
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(5);
  });

  test('adds zero and zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  // Negative number tests - should return null
  test('returns null when first argument is negative', () => {
    expect(add(-5, 3)).toBe(null);
    expect(add(-1, 100)).toBe(null);
  });

  test('returns null when second argument is negative', () => {
    expect(add(5, -3)).toBe(null);
    expect(add(100, -1)).toBe(null);
  });

  test('returns null when both arguments are negative', () => {
    expect(add(-5, -3)).toBe(null);
    expect(add(-10, -20)).toBe(null);
  });
});

// Test suite for multiply function
describe('Calculator - multiply function', () => {
  // Positive number tests
  test('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(10, 20)).toBe(200);
    expect(multiply(5, 5)).toBe(25);
  });

  test('multiplies positive number and zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  test('multiplies zero and zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  // Negative number tests - should return null
  test('returns null when first argument is negative', () => {
    expect(multiply(-5, 3)).toBe(null);
    expect(multiply(-1, 100)).toBe(null);
  });

  test('returns null when second argument is negative', () => {
    expect(multiply(5, -3)).toBe(null);
    expect(multiply(100, -1)).toBe(null);
  });

  test('returns null when both arguments are negative', () => {
    expect(multiply(-5, -3)).toBe(null);
    expect(multiply(-10, -20)).toBe(null);
  });
});
