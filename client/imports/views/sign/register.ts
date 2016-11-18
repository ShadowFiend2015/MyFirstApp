'use strict';

import {Component, NgZone} from "@angular/core";
import {MeteorComponent} from "angular2-meteor";
import {NavController, AlertController} from "ionic-angular";

//noinspection TypeScriptCheckImport
import template from './register.html';
import {BlogUser} from "../../../../both/imports/blogUser";
import {HomePageComponent} from "../home/home";

@Component ({
    template
})
export class RegisterComponent extends MeteorComponent {

    user = new BlogUser();
    passwordConfirm: String;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private zone: NgZone) {
        super();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: '两次输入的密码不一致！',
            buttons:['确定']
        });
        alert.present();
    }

    showEmpty() {
        let alert = this.alertCtrl.create({
            title: '用户名或密码不能为空！',
            buttons: ['确定']
        });
        alert.present();
    }

    showSuccess() {
        let alert = this.alertCtrl.create({
            title: '注册成功！',
            buttons:['确定']
        });
        alert.present();
    }

    showExist() {
        let alert = this.alertCtrl.create({
            title: '该用户名已存在！',
            buttons:['确定']
        })
        alert.present();
    }

    goBackToSign() {
        this.navCtrl.pop();
    }

    passwordIsSame() : Boolean {
        return this.user.password == this.passwordConfirm;
    }

    userRegister() {
        if(this.passwordIsSame() == false) {
            this.showAlert();
        }
        else if(this.user.username == null || this.user.username == '' || this.user.password == null || this.user.password == '' || this.passwordConfirm == null || this.passwordConfirm == '') {
            this.showEmpty();
        }
        else {
            this.call('register', this.user, function(err, result) {
                if (err) {
                    this.showExist();
                } else
                    this.zone.run(() => {
                    this.showSuccess();
                    Session.set('blogUserId', result);
                    Session.set('blogUserName', this.user.username);
                    this.navCtrl.setRoot(HomePageComponent);
                });
            });
        }
    }
}