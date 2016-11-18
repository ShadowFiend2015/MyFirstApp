/**
 * Created by sun on 2016/11/15.
 */

import { Component } from '@angular/core';
import {Tab1} from "./tab1-page/tab1-page";
import {Tab2} from "./tab2-page/tab2-page";
import {Tab3} from "./tab3-page/tab3-page";
import {Tab4} from "./tab4-page/tab4-page";

@Component({
    template: `
    <ion-tabs>
      <ion-tab tabIcon="book" tabTitle="首页" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="heart" tabTitle="收藏" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="add-circle" tabTitle="发表" [root]="tab3"></ion-tab>
      <ion-tab tabIcon="person" tabTitle="个人" [root]="tab4"></ion-tab>
    </ion-tabs>`
})
export class HomePageComponent {

    tab1: any;
    tab2: any;
    tab3: any;
    tab4: any;
    constructor() {
        console.log("register");
        Meteor.subscribe('register');
        this.tab1 = Tab1;
        this.tab2 = Tab2;
        this.tab3 = Tab3;
        this.tab4 = Tab4;
    }
}