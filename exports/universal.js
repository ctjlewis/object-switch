/**
 * @license MIT
 */
/**
 * @fileoverview
 * Specify the exports for this project's CLI.
 */

/**
 * Expose data from `lib/`.
 */
export * from '../lib/globals.js';

/**
 * This is a side effect that won't get removed due to dead code elimination.
 */
const a = 10;
console.log(`a is ${a}`);

export const TEST_STRING = 'test';