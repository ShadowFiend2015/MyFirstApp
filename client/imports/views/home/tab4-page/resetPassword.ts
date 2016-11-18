'use strict';

import {Component, NgZone} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {NavController, AlertController} from "ionic-angular";

//noinspection TypeScriptCheckImport
import template from './resetPassword.html';
import {BlogUser} from "../../../../../both/imports/blogUser";

@Component ({
    template
})
export class ResetPasswordComponent extends MeteorComponent {

    user = new BlogUser();
    newPassword: String;
    newPasswordConfirm: String;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private zone: NgZone) {
        super();
    }

    showAlert(alertContent: String) {
        let alert = this.alertCtrl.create({
            title: alertContent,
            buttons:['确定']
        });
        alert.present();
    }

    goBackToMine() {
        this.navCtrl.pop();
    }

    passwordIsSame() : Boolean {
        return this.newPassword == this.newPasswordConfirm;
    }

    resetPassword() {
        if(this.passwordIsSame() == false) {
            this.showAlert('两次输入的密码不一致！');
        }
        else if(this.user.password == null || this.user.password == '' || this.newPassword == null || this.newPassword == '' || this.newPasswordConfirm == null || this.newPasswordConfirm == '') {
            this.showAlert('密码不能为空！');
        }
        else {
            Meteor.call('resetPassword', Session.get('blogUserId'), this.user.password, this.newPassword, (err, result)=> {
                if (err) {
                    this.showAlert('服务器错误，请稍后重试！');
                } else if (result == false) {
                    this.showAlert('原密码错误，请重试！');
                } else {
                    this.showAlert('修改成功！');
                    this.navCtrl.pop();
                }
            });
        }
    }
}