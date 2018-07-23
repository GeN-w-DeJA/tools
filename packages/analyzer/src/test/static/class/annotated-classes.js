/**
 * @polymer
 * @mixinFunction
 */
function someMixin() {
}

/** @constructor */
const hasConstructorAnnotation = HTMLElement;

/**
 * @constructor
 * @extends {HTMLElement}
 * @appliesMixin someMixin
 */
const hasConstructorExtendsMixinAnnotations = someMixin(HTMLElement);

/**
 * @private
 * @constructor
 * @extends {HTMLElement}
 * @appliesMixin someMixin
 */
const ephemeralSuperclass = someMixin(HTMLElement);

class hasEphemeralSuperclass extends ephemeralSuperclass {}
