import inputValidation from './decorator';
import { allStrings, join } from './utils';

/**
 * An example function just to show the build and ci pipeline works.
 *
 * @returns {string} Hello world.
 */
export default (...args) =>
  inputValidation({
    validator: allStrings,
  })(join)(...args);
