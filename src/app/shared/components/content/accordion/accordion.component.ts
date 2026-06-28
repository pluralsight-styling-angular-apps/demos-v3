import { Component, AfterContentInit, contentChildren } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane/accordion-pane.component';

@Component({
    selector: 'saa-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    standalone: false
})

export class AccordionComponent {
    readonly items = contentChildren(AccordionPaneComponent);
    activeIndex: number | null = null;

    selectItem(index: number): void {
        this.activeIndex = this.activeIndex != index ?  index : null; 
    }
}
