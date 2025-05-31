import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'saa-tabs-pane',
    templateUrl: './tabs-pane.component.html',
    styleUrls: ['./tabs-pane.component.scss'],
    standalone: false
})

export class TabsPaneComponent {
    readonly title = input<string>(undefined);
    readonly active = signal(false);
}
