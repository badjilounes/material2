"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * The following are all the animations for the md-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the Material 1 md-select animation.
 */
/**
 * This animation shrinks the placeholder text to 75% of its normal size and translates
 * it to either the top left corner (ltr) or top right corner (rtl) of the trigger,
 * depending on the text direction of the application.
 */
exports.transformPlaceholder = core_1.trigger('transformPlaceholder', [
    core_1.state('floating-ltr', core_1.style({
        top: '-22px',
        left: '-2px',
        transform: "scale(0.75)"
    })),
    core_1.state('floating-rtl', core_1.style({
        top: '-22px',
        left: '2px',
        transform: "scale(0.75)"
    })),
    core_1.transition('* => *', core_1.animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))
]);
/**
 * This animation transforms the select's overlay panel on and off the page.
 *
 * When the panel is attached to the DOM, it expands its width 32px, scales it up to
 * 100% on the Y axis, fades in its border, and translates slightly up and to the
 * side to ensure the option text correctly overlaps the trigger text.
 *
 * When the panel is removed from the DOM, it simply fades out linearly.
 */
exports.transformPanel = core_1.trigger('transformPanel', [
    core_1.state('showing', core_1.style({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        transform: "translate3d(0,0,0) scaleY(1)"
    })),
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0,
            minWidth: '100%',
            transform: "translate3d(0, 0, 0) scaleY(0)"
        }),
        core_1.animate("150ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    core_1.transition('* => void', [
        core_1.animate('250ms 100ms linear', core_1.style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
exports.fadeInContent = core_1.trigger('fadeInContent', [
    core_1.state('showing', core_1.style({ opacity: 1 })),
    core_1.transition('void => showing', [
        core_1.style({ opacity: 0 }),
        core_1.animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/select/select-animations.js.map