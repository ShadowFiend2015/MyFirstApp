/**
 * Created by sun on 2016/11/16.
 */

import {Component} from '@angular/core'

//noinspection TypeScriptCheckImport
import template from './tab4-page.html'
import {NavController} from "ionic-angular";
import {ResetPasswordComponent} from "./resetPassword";
import {MyArticlesComponent} from "./myArticles";

@Component ({
    template
})
export class Tab4 {
    constructor(public navCtrl: NavController) {
        console.log('4');
    }

    goToResetPassword() {
        this.navCtrl.push(ResetPasswordComponent);
    }

    showMyBloglist() {
        this.navCtrl.push(MyArticlesComponent);
    }
}