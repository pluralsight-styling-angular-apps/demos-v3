import { Component, Directive } from '@angular/core';

@Directive({
    selector: 'saa-tooltip-message',
    standalone: false
})
export class TooltipMessageDirective {}

@Component({
    selector: 'saa-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    standalone: false
})

export class ToolTipComponent { }
