/**
 * Created by sun on 2016/11/16.
 */

import {Component, NgZone} from '@angular/core'

//noinspection TypeScriptCheckImport
import template from './tab1-page.html'
import {NavController} from "ionic-angular";
import {Articles} from "../../../../../both/imports/collection";
import {MeteorComponent} from "angular2-meteor";
import {ArticleDetailComponent} from "../article-detail/article-detail";

@Component ({
    template
})
export class Tab1 extends MeteorComponent {
    articles: [any];
    constructor(public navCtrl: NavController, private zone: NgZone) {
        super();
        Meteor.subscribe('articles', 20);

        this.autorun(()=> {
            let tmp = Articles.find({}, {limit: 20}).fetch();

            console.log('tmp.size() = ' + tmp.length);
            this.zone.run(() => {
                this.articles = tmp;
            })
        })
    }

    readArticle(article: any) {
        console.log(article.articleTitle);
        this.navCtrl.push(ArticleDetailComponent, {
            article: article
        });
    }

}