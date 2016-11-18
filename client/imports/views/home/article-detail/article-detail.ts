/**
 * Created by sun on 2016/11/17.
 */

import {Component, NgZone} from '@angular/core'

//noinspection TypeScriptCheckImport
import template from './article-detail.html'
import {NavController, NavParams, AlertController} from "ionic-angular";

@Component ({
    template
})
export class ArticleDetailComponent{
    article: any;
    buttonFlag: boolean;
    abc:boolean;
    constructor(public navCtrl: NavController, private navParams: NavParams, private zone: NgZone, private alertCtrl: AlertController) {
        // super();
        this.article = this.navParams.get('article');
        this.abc = !this.navParams.get('buttonFlag');
        console.log(this.abc);

        // console.log('deleteArticle button: ' + this.buttonFlag);
        // if(this.buttonFlag == true) {
        //     let deleteArticle = document.getElementById('deleteArticle');
        //     console.log(deleteArticle);
        //     // deleteArticle.removeAttribute('hidden');
        // }
    }

    goBackToHomePage() {
        this.navCtrl.pop();
    }

    showAlert(warning: String) {
        let alert = this.alertCtrl.create({
            title: warning,
            buttons: ['确定']
        });
        alert.present();
    }

    likeThisArticle() {
        console.log('likethisarticle!');
        Meteor.call('likeArticle', this.article._id, (err, result)=>{
            if(err) {
                this.showAlert('网络延迟错误，请稍后重试！');
            } else {
                this.showAlert('已赞！');
            }
        })
    }

    favoriteThisArticle() {
        let blogUserId = Session.get('blogUserId');
        console.log(blogUserId);
        Meteor.call('favoriteArticle', this.article._id, blogUserId, (err, result)=>{
            if(err) {
                this.showAlert('网络延迟错误，请稍后重试！');
                console.log(err);
            } else {
                this.showAlert('已收藏！');
            }
        })
    }

}