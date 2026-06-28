import { Component, input } from '@angular/core';

export interface Pill {
  label: string;
};

@Component({
    selector: 'saa-pills',
    templateUrl: './pills.component.html',
    styleUrls: ['./pills.component.scss'],
    standalone: false
})

export class PillsComponent {
    readonly pills = input<Pill[]>([]);
    selectedPill: string | null = null;

    togglePill(pill: string): void {
        this.selectedPill = pill;
    }
}
