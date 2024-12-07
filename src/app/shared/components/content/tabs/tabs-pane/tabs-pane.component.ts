import { Component, Input } from '@angular/core';

@Component({
    selector: 'saa-tabs-pane',
    templateUrl: './tabs-pane.component.html',
    standalone: false
})

export class TabsPaneComponent {
    @Input() title: string;
    @Input() active = false;
}
