import {BlogUsers} from "./collection";
import {Article} from "./article";
import {Articles} from "./collection";

Meteor.methods({
    'submitArticle': function(article: Article, blogUserId: String) {
        let articleId = Articles.insert({
            articleTitle: article.articleTitle, articleContent: article.articleContent, author: article.author, authorId: blogUserId,
            likes: 0, favorites: 0, time: new Date
        });
        BlogUsers.update({
            _id: blogUserId,
        },{
            $addToSet: {
                myArticle: articleId
            }
        })
    },

    'likeArticle' : function(articleId: String) {
        Articles.update({
            _id: articleId,
        },{
            $inc: {
                likes: 1
            }
        })
    },

    'favoriteArticle': function(articleId: String, blogUserId: String) {
        Articles.update({
            _id: articleId,
        },{
            $inc: {
                favorites: 1
            }
        });
        BlogUsers.update({
            _id: blogUserId,
        },{
            $addToSet: {
                favoriteArticle: articleId
            }
        })
    }
});


