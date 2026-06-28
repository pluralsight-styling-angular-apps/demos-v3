import { Component, TemplateRef, input, viewChild } from '@angular/core';

@Component({
    selector: 'saa-accordion-pane',
    templateUrl: './accordion-pane.component.html',
    styleUrls: ['./accordion-pane.component.scss'],
    standalone: false
})

export class AccordionPaneComponent {
    readonly template = viewChild(TemplateRef);
    readonly title = input<string | undefined>(undefined);
}
