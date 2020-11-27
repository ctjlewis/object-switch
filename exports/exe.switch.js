/** @license MIT */

import { actions, asSwitchCase } from '../lib/utils.js';

for (const action of actions)
  console.log(asSwitchCase(action));
