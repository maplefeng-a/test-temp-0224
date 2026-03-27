/**
 * Calculator Module
 * Provides basic arithmetic operations with input validation
 */

/**
 * Adds two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number|null} The sum of a and b, or null if inputs are invalid
 */
function add(a, b) {
  if (a < 0 || b < 0) {
    return null;
  }
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number|null} The product of a and b, or null if inputs are invalid
 */
function multiply(a, b) {
  if (a < 0 || b < 0) {
    return null;
  }
  return a * b;
}

// Export functions as a module
module.exports = { add, multiply };
