/**
 * Ember responsive initializer
 *
 * Supports auto injecting media service app-wide.
 * Generated by the ember-responsive addon.
 */
export function initialize(application) {
  application.registerOptionsForType('breakpoints', { instantiate: false });
}

export default {
  name: 'responsive',
  initialize
};
