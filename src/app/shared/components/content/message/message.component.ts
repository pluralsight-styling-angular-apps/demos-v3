  
import { Component, ContentChild, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'saa-message-title',
    standalone: false
})
export class MessageTitleDirective {}

@Directive({
    selector: 'saa-message-content',
    standalone: false
})
export class MessageContentDirective {}

@Component({
    selector: 'saa-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    standalone: false
})

export class MessageComponent {
    @ContentChild(MessageContentDirective) messageContent: MessageContentDirective;
    isLayout01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit(): void {
        this.isLayout01 = this.hostRef.nativeElement.classList.contains('layout--01');
    }
}
