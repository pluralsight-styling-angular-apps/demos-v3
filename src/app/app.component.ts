import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})

export class AppComponent {
    pills = [
        { 
            label: 'HTML'
        },
        { 
            label: 'CSS'
        },
        { 
            label: 'SASS'
        }
    ];
}
