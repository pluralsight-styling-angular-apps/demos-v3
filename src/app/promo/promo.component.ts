import { Component, ElementRef, inject } from '@angular/core';

@Component({
    selector: 'saa-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss'],
    standalone: false
})

export class PromoComponent {
    private hostRef = inject(ElementRef);
    protected isColor01 = this.hostRef.nativeElement.classList.contains('color--01');
}
