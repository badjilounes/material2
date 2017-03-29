"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
/**
 * Content of a card, needed as it's used as a selector in the API.
 */
var MdCardContent = (function () {
    function MdCardContent() {
    }
    return MdCardContent;
}());
MdCardContent = __decorate([
    core_1.Directive({
        selector: 'md-card-content, mat-card-content'
    })
], MdCardContent);
exports.MdCardContent = MdCardContent;
/**
 * Title of a card, needed as it's used as a selector in the API.
 */
var MdCardTitle = (function () {
    function MdCardTitle() {
    }
    return MdCardTitle;
}());
MdCardTitle = __decorate([
    core_1.Directive({
        selector: 'md-card-title, mat-card-title'
    })
], MdCardTitle);
exports.MdCardTitle = MdCardTitle;
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 */
var MdCardSubtitle = (function () {
    function MdCardSubtitle() {
    }
    return MdCardSubtitle;
}());
MdCardSubtitle = __decorate([
    core_1.Directive({
        selector: 'md-card-subtitle, mat-card-subtitle'
    })
], MdCardSubtitle);
exports.MdCardSubtitle = MdCardSubtitle;
/**
 * Action section of a card, needed as it's used as a selector in the API.
 */
var MdCardActions = (function () {
    function MdCardActions() {
    }
    return MdCardActions;
}());
MdCardActions = __decorate([
    core_1.Directive({
        selector: 'md-card-actions, mat-card-actions'
    })
], MdCardActions);
exports.MdCardActions = MdCardActions;
/**
 * Footer of a card, needed as it's used as a selector in the API.
 */
var MdCardFooter = (function () {
    function MdCardFooter() {
    }
    return MdCardFooter;
}());
MdCardFooter = __decorate([
    core_1.Directive({
        selector: 'md-card-footer, mat-card-footer'
    })
], MdCardFooter);
exports.MdCardFooter = MdCardFooter;
/*

<md-card> is a basic content container component that adds the styles of a material design card.

While you can use this component alone,
it also provides a number of preset styles for common card sections, including:
 - md-card-title
 - md-card-subtitle
 - md-card-content
 - md-card-actions
 - md-card-footer

 You can see some examples of cards here:
 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

 TODO(kara): update link to demo site when it exists

*/
var MdCard = (function () {
    function MdCard() {
    }
    return MdCard;
}());
MdCard = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-card, mat-card',
        templateUrl: 'card.html',
        styleUrls: ['card.css'],
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], MdCard);
exports.MdCard = MdCard;
/*  The following components don't have any behavior.
 They simply use content projection to wrap user content
 for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API).


<md-card-header> is a component intended to be used within the <md-card> component.
It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

You can see an example of a card with a header here:
http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

TODO(kara): update link to demo site when it exists
*/
var MdCardHeader = (function () {
    function MdCardHeader() {
    }
    return MdCardHeader;
}());
MdCardHeader = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-card-header, mat-card-header',
        templateUrl: 'card-header.html',
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], MdCardHeader);
exports.MdCardHeader = MdCardHeader;
/*

<md-card-title-group> is a component intended to be used within the <md-card> component.
It adds styles for a preset layout that groups an image with a title section.

You can see an example of a card with a title-group section here:
http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

TODO(kara): update link to demo site when it exists
*/
var MdCardTitleGroup = (function () {
    function MdCardTitleGroup() {
    }
    return MdCardTitleGroup;
}());
MdCardTitleGroup = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-card-title-group, mat-card-title-group',
        templateUrl: 'card-title-group.html',
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], MdCardTitleGroup);
exports.MdCardTitleGroup = MdCardTitleGroup;
var MdCardModule = MdCardModule_1 = (function () {
    function MdCardModule() {
    }
    MdCardModule.forRoot = function () {
        return {
            ngModule: MdCardModule_1,
            providers: []
        };
    };
    return MdCardModule;
}());
MdCardModule = MdCardModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.DefaultStyleCompatibilityModeModule],
        exports: [
            MdCard,
            MdCardHeader,
            MdCardTitleGroup,
            MdCardContent,
            MdCardTitle,
            MdCardSubtitle,
            MdCardActions,
            MdCardFooter,
            core_2.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [
            MdCard, MdCardHeader, MdCardTitleGroup, MdCardContent, MdCardTitle, MdCardSubtitle,
            MdCardActions, MdCardFooter
        ],
    })
], MdCardModule);
exports.MdCardModule = MdCardModule;
var MdCardModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/card/card.js.map