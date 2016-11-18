/**
 * Created by sun on 2016/11/16.
 */

import {Component, NgZone} from '@angular/core'

//noinspection TypeScriptCheckImport
import template from './myArticles.html'
import {NavController} from "ionic-angular";
import {Articles, BlogUsers} from "../../../../../both/imports/collection";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDetailComponent} from "../article-detail/article-detail";

@Component ({
    template
})
export class MyArticlesComponent extends MeteorComponent {
    articles: [any];
    constructor(public navCtrl: NavController, private zone: NgZone) {
        super();
        Meteor.subscribe('favoriteArticle');

        this.autorun(()=> {
            let articles = [];
            let blogUser = BlogUsers.findOne({_id: Session.get('blogUserId')}, {fields: {myArticle: 1}});
            console.log('blogUser.favoriteArticle:' + blogUser.favoriteArticle);
            for(let i of blogUser.myArticle) {
                console.log("i = " + i);
                articles.push(Articles.findOne({_id: i}));
            }
            this.zone.run(() => {
                this.articles = articles;
                console.log("favoriteArticles.size() = " + articles.length);
                console.log(articles[0]);
            })
        })
    }

    readArticle(article: any) {
        console.log(article.articleTitle);
        this.navCtrl.push(ArticleDetailComponent, {
            article: article,
            buttonFlag: true
        });
    }


}