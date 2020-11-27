/** @license MIT */

export const actions = [
  'create',
  'forgotPassword',
  'newPassword',
  'editPassword',
];

export const asSwitchCase = (action) => {
  /** `break` statements are redundant bc returning */
  switch (action) {
    case 'create':
      return 'Created!';

    case 'forgotPassword':
      return 'Password reset sent!';

    case 'newPassword':
      return 'Password created!';

    case 'editPassword':
      return 'Password saved!';
  }
};

/**
 * This function technically creates an object each time it's called.
 *
 * @param {string} action
 * @return {string}
 */
export const asMapHot = (action) => ({
  create: 'Created!',
  forgotPassword: 'Password reset sent!',
  newPassword: 'Password created!',
}[action]);

const constantMap = {
  create: 'Created!',
  forgotPassword: 'Password reset sent!',
  newPassword: 'Password created!',
  editPassword: 'Password saved!',
};

/**
 * This function looks up an index in a const map.
 *
 * @param {string} action
 * @return {string}
 */
export const asMapCold = (action) => constantMap[action];
