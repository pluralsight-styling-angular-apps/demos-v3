import { Component, TemplateRef, input, viewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'saa-accordion-pane',
    templateUrl: './accordion-pane.component.html',
    styleUrls: ['./accordion-pane.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class AccordionPaneComponent {
    readonly template = viewChild(TemplateRef);
    readonly title = input<string | undefined>(undefined);
}
