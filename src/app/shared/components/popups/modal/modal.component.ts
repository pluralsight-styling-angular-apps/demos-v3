import { Component, Directive } from '@angular/core';

@Directive({
    selector: 'saa-modal-content',
    standalone: false
})
export class ModalContentDirective {}

@Component({
    selector: 'saa-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: false
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose(): void {
        this.isOpen = !this.isOpen;
    }
}
