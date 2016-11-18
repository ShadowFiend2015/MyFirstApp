/**
 * Created by sun on 2016/11/15.
 */
import { BlogUsers } from '/both/imports/collection'
import {Articles} from "../../both/imports/collection";

Meteor.publish('register', function () {
    return BlogUsers.find({}, {});
});

Meteor.publish('articles', function(maxCount: number) {
    return Articles.find({}, {limit: maxCount});
});

Meteor.publishComposite('favoriteArticles', function(blogUserId: String) {
    return {
        find: function() {
            return BlogUsers.find({_id: blogUserId}, {limit: 1});
        },
        children: [
            {
                find: function(blogUser) {
                    let favorites: [any];
                    for(let i of blogUser.favoriteArticle) {
                        favorites += Articles.find({_id: i});
                    }
                    return favorites;
                }
            }
        ]
    }
});

Meteor.publishComposite('myArticles', function(blogUserId: String) {
    return {
        find: function() {
            return BlogUsers.find({_id: blogUserId}, {limit: 1});
        },
        children: [
            {
                find: function(blogUser) {
                    let my: [any];
                    for(let i of blogUser.favoriteArticle) {
                        my += Articles.find({_id: i});
                    }
                    return my;
                }
            }
        ]
    }
});