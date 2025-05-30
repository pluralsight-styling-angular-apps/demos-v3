import { Component, TemplateRef, input, viewChild } from '@angular/core';

@Component({
    selector: 'saa-accordion-pane',
    templateUrl: './accordion-pane.component.html',
    standalone: false
})

export class AccordionPaneComponent {
    readonly template = viewChild(TemplateRef);
    readonly title = input<string>(undefined);
}
