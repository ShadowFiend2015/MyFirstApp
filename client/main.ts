'use strict';

// setup main bootstrap module
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule} from 'ionic-angular';

import Pipes from './imports/pipes/pipes';
import Widgets from './imports/widgets/widgets';
import Views from './imports/views/views';

import {EntryComponent} from './imports/entry';

import '/both/imports/method'

@NgModule({
    declarations: [
        ...Views,
        ...Widgets,
        ...Pipes,
        EntryComponent
    ],
    entryComponents: [...Views],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(EntryComponent, {
            backButtonText: '返回',
            tabsHideOnSubPages: 'true'
        })
    ],
    bootstrap: [IonicApp]
})
class AppModule {
}

// bootstrap
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {appReady} from './imports/extensions/utils'
appReady().then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
