'use strict';

import {Component, OnInit} from "@angular/core";

import {SignComponent} from "./views/sign/sign";

@Component({
    template: '<ion-nav [root]="root"></ion-nav>'
})

export class EntryComponent implements OnInit {
    root = SignComponent;

    ngOnInit(): void {
    }
}