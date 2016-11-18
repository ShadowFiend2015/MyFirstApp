'use strict';

import {Component, NgZone} from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './hello.html';
import {NavController} from "ionic-angular";
import {MeteorComponent} from "angular2-meteor";
import {Laoshi} from '../../../../both/imports/define'
import {Laoshi} from '/both/imports/define'

@Component({
    template
})

export class HelloComponent extends MeteorComponent {

    teacher = new Laoshi();
    constructor(public navCtrl: NavController) {

    }

}