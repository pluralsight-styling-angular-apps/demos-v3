import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'saa-tabs-pane',
    templateUrl: './tabs-pane.component.html',
    standalone: false
})

export class TabsPaneComponent {
    readonly title = input<string | undefined>(undefined);
    readonly active = signal(false);
}
