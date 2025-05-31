import { AfterContentInit, Component, contentChildren } from '@angular/core';
import { TabsPaneComponent } from './tabs-pane/tabs-pane.component';

@Component({
    selector: 'saa-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    standalone: false
})

export class TabsComponent implements AfterContentInit {
    tabs = contentChildren(TabsPaneComponent);

    ngAfterContentInit(): void {
        const activeTabs = this.tabs().filter(tab => tab.active());
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs()[0]);
        }
    }

    private selectTab(tab: TabsPaneComponent): void {
        this.tabs().forEach(tab => tab.active.set(false));
        tab.active.set(true);
    }
}
