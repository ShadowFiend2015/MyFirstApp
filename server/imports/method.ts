import {BlogUser} from "../../both/imports/blogUser";
import {BlogUsers} from "../../both/imports/collection";

Meteor.methods({

    'checkBlogUser': function (user: BlogUser) : any {
        let blogUser = BlogUsers.findOne({username: user.username});
        if(blogUser == null || blogUser.password != user.password)
            return false;
        else
            return blogUser._id;
    },

    'register': function (user: BlogUser) {
        if(BlogUsers.findOne({username: user.username}))
            throw new Meteor.Error('username-exist', '该用户名已存在');
        let blogUserId = BlogUsers.insert({
            username: user.username, password: user.password, myArticle: [], favoriteArticle: [], time: new Date()
        });
        return blogUserId;
    },

    'resetPassword': function (blogUserId: String, password: String, newPassword: String) : boolean {
        let user = BlogUsers.findOne({_id: blogUserId});
        if(user == null)
            throw new Meteor.Error('user-not-exist', '用户不存在');
        else if(user.password != password)
            return false;
        else {
            BlogUsers.update({
                _id: blogUserId
            }, {
                $set: {
                    password: newPassword
                }
            })
            return true;
        }
    }
});


