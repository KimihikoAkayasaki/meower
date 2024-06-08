/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const MEOW_COMMAND = {
  name: 'meow',
  description: 'Meows.',
  options: [
    {
      name: 'meows',
      description: 'How many meows to meow',
      type: 4,
    },
  ],
};
