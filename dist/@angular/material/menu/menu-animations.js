"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Below are all the animations for the md-menu component.
 * Animation duration and timing values are based on Material 1.
 */
/**
 * This animation controls the menu panel's entry and exit from the page.
 *
 * When the menu panel is added to the DOM, it scales in and fades in its border.
 *
 * When the menu panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 *
 * TODO(kara): switch to :enter and :leave once Mobile Safari is sorted out.
 */
exports.transformMenu = core_1.trigger('transformMenu', [
    core_1.state('showing', core_1.style({
        opacity: 1,
        transform: "scale(1)"
    })),
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0,
            transform: "scale(0)"
        }),
        core_1.animate("200ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    core_1.transition('* => void', [
        core_1.animate('50ms 100ms linear', core_1.style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and content of the menu panel
 * after its containing element is scaled in.
 */
exports.fadeInItems = core_1.trigger('fadeInItems', [
    core_1.state('showing', core_1.style({ opacity: 1 })),
    core_1.transition('void => *', [
        core_1.style({ opacity: 0 }),
        core_1.animate("200ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/menu/menu-animations.js.map