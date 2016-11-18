import { Mongo } from 'meteor/mongo';
import {BlogUser} from "./blogUser";

export let BlogUsers = new Mongo.Collection('blogusers');

export let Articles = new Mongo.Collection('articles');