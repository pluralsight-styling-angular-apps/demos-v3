import { Component, TemplateRef, ViewChild, input } from '@angular/core';

@Component({
    selector: 'saa-accordion-pane',
    templateUrl: './accordion-pane.component.html',
    styleUrls: ['./accordion-pane.component.scss'],
    standalone: false
})

export class AccordionPaneComponent {
    @ViewChild(TemplateRef, { static: true }) template: TemplateRef<unknown>;
    readonly title = input<string>(undefined);
}
