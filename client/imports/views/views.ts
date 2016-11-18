'use strict';

import {SignComponent} from "./sign/sign";
import {RegisterComponent} from "./sign/register";
import {HomePageComponent} from "./home/home";
import {Tab1} from "./home/tab1-page/tab1-page";
import {Tab2} from "./home/tab2-page/tab2-page";
import {Tab3} from "./home/tab3-page/tab3-page";
import {Tab4} from "./home/tab4-page/tab4-page";
import {ArticleDetailComponent} from "./home/article-detail/article-detail";
import {ResetPasswordComponent} from "./home/tab4-page/resetPassword";
import {MyArticlesComponent} from "./home/tab4-page/myArticles";


const Views = [SignComponent, RegisterComponent, HomePageComponent, Tab1, Tab2, Tab3, Tab4, ArticleDetailComponent, ResetPasswordComponent, MyArticlesComponent];

export default Views;
