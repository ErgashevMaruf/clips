import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})

export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList;

  ngAfterContentInit(): void {
    const actieTabs = this.tabs.filter(tab => tab.active);
    if (!actieTabs || actieTabs.length == 0) {
      this.selectTab(this.tabs?.first);
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}
