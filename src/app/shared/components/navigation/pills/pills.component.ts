import { Component, input } from '@angular/core';

export interface Pill {
  label: string;
};

@Component({
    selector: 'saa-pills',
    templateUrl: './pills.component.html',
    standalone: false
})

export class PillsComponent {
    readonly pills = input<Pill[]>([]);
    selectedPill: Pill;

    togglePill(pill: Pill): void {
        this.selectedPill = pill;
    }
}
