/**
 * Created by sun on 2016/11/16.
 */

import {Component} from '@angular/core'
import {NavController, AlertController} from "ionic-angular";

//noinspection TypeScriptCheckImport
import template from './tab3-page.html'
import {Article} from '../../../../../both/imports/article'

@Component ({
    template
})
export class Tab3 {
    article = new Article();
    blogUserId: String;

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
        this.blogUserId = Session.get('blogUserId');
    }

    showTitleEmpty() {
        let alert = this.alertCtrl.create({
            title: '标题不能为空！',
            buttons: ['确定']
        });
        alert.present();
    }

    showContentEmpty() {
        let alert = this.alertCtrl.create({
            title: '内容不能为空！',
            buttons: ['确定']
        });
        alert.present();
    }

    showError() {
        let alert = this.alertCtrl.create({
            title: '由于网络或未知错误，请稍后重试',
            buttons: ['确定']
        });
        alert.present();
    }

    showSuccess() {
        let alert = this.alertCtrl.create({
            title: '发表成功！',
            buttons: ['确定']
        });
        alert.present();
    }

    clearContent() {
        this.article.articleContent = '';
    }

    submitArticle() {
        if(this.article.articleTitle == null || this.article.articleTitle == '')
            this.showTitleEmpty();
        else if(this.article.articleContent == null || this.article.articleContent == '')
            this.showContentEmpty();
        else {
            this.article.author = Session.get('blogUserName');
            Meteor.call('submitArticle', this.article, this.blogUserId, (err, result)=> {
                if(err) {
                    this.showError();
                } else {
                    this.showSuccess();
                    console.log(this.blogUserId);
                    this.navCtrl.setRoot(Tab3);
                }
            })
        }
    }
}