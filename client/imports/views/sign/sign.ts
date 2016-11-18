/**
 * Created by sun on 2016/11/14.
 */

import {MeteorComponent} from "angular2-meteor";
import {NavController, AlertController} from "ionic-angular";
import {Component, NgModule, NgZone} from "@angular/core";

//noinspection TypeScriptCheckImport
import template from './sign.html'
import {RegisterComponent} from "./register";
import {BlogUser} from "../../../../both/imports/blogUser";
import {HomePageComponent} from "../home/home";

@Component({
    template
})
export class SignComponent extends MeteorComponent {

    user = new BlogUser();

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private zone: NgZone) {
        super();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: '用户名或密码错误！',
            subTitle: '请重新输入',
            buttons: ['确定']
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

    checkBlogUser() {
        if(this.user.username == null || this.user.username == '' || this.user.password == null || this.user.password == '')
            this.showEmpty();
        else {
           Meteor.call('checkBlogUser', this.user, (err,result)=>{
                if (err){
                    console.log(err);
                } else {
                    let flag = result;
                    if (flag == false)
                        this.showAlert();
                    else
                        this.zone.run(() => {
                            Session.set('blogUserId', flag);
                            Session.set('blogUserName', this.user.username);
                            this.goToHomePage();
                        });
                }
            });

        }
    }

    goToHomePage() {
        this.navCtrl.setRoot(HomePageComponent);
    }

    goToRegister() {
        this.navCtrl.push(RegisterComponent);
        // this.navCtrl.setRoot(HomePageComponent);

    }
}