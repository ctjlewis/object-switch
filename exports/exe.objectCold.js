/** @license MIT */

import { actions, asMapCold } from '../lib/utils.js';

for (const action of actions)
  console.log(asMapCold(action));
