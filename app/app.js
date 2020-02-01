/**
 * package.js
 */

import $ from 'jquery'

import SocialButtons from './modules/social-share/social-share'
import NavHeader from './modules/nav/nav-header'

$(document).ready(function () {
    new SocialButtons();
    new NavHeader();

    // -- your modules
});
