/** 
 * modules
 */
import accordion from './modules/accordion';

import articles from './modules/articles';

import buttons from './modules/buttons';

import buttonsnavigation from './modules/buttonsNavigation';

import boxboxes from './modules/boxboxes';

import boxmenu from './modules/boxmenu';

import boxwindow from './modules/boxwindow';

import breadcrumbs from './modules/breadcrumbs';

import cards from './modules/cards';

import cube from './modules/cube';

import dashboard from './modules/dashboard';

import divtriangle from './modules/divtriangle';

import fullscreenloading from './modules/fullscreenloading';

import image from './modules/image';

import input from './modules/input';

import links from './modules/links';

import list from './modules/list';

import inputlist from './modules/inputlist';

import inputlistswitch from './modules/inputlistswitch';

import inputsuggestion from './modules/inputsuggestion';

import menuVerticalHover from './modules/menuVerticalHover';

import menuHorizontalClick from './modules/menuHorizontalClick';

import menuHorizontalHover from './modules/menuHorizontalHover';

import menuVerticalClick from './modules/menuVerticalClick';

import menuanimationhamburger from './modules/menuanimationhamburger';

import menuanimationdots from './modules/menuanimationdots';

import menuanimationsquare from './modules/menuanimationsquare';

import menuanimationcustom from './modules/menuanimationcustom';

import menufixedtop from './modules/menufixedtop';

import menufixedleft from './modules/menufixedleft';

import menufixedbottom from './modules/menufixedbottom';

import menufixedright from './modules/menufixedright';

import modal from './modules/modal';

import paging from './modules/paging';

import slider from './modules/slider';

import sourcecode from './modules/sourcecode'

import stars from './modules/stars';

import verticalbars from './modules/verticalbars';

import videobackground from './modules/videobackground';

import website404 from './modules/website404';

/** functions */

import animateFullscreenLoading from './modules/funtions/fullscreenLoading';

import fullscreenloadingAnimation from './modules/funtions/fullscreenLoadingAnimation';

import customKey from './modules/funtions/customKey';

/**
 * CSS FILE
 */
import './react-divcreator.global.scss';

const fn_fullscreenloading = (div = "", text = "", action = false, animationType = "display", timer = 10) => {
    if ("" != div) {
        let domElement = document.querySelector(div);

        if(domElement && null != domElement && 'undefined' != typeof domElement){
            animateFullscreenLoading(domElement, div, text, action, animationType, timer);
        }
    }
}

const fn_fullscreenloadingAnimation = (divSelector, html = '', text = '', destroy = false, initialAnimation = false, customAnimation = '') => {
    if ("" != divSelector) {
        fullscreenloadingAnimation(divSelector, html, text, destroy, initialAnimation, customAnimation);
    }
};

const navigateToTopOfWebpage = () => {
    try{
        window.scrollTo(0,0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } catch (error){}
};

/**
 * Export functions and modules
 */
export {
    fn_fullscreenloading,
    fn_fullscreenloadingAnimation,
    customKey,
    navigateToTopOfWebpage,
    accordion as Accordion,
    articles as Articles,
    buttons as Buttons,
    buttonsnavigation as ButtonsNavigation,
    boxboxes as BoxBoxes,
    boxmenu as BoxMenu,
    boxwindow as BoxWindow,
    breadcrumbs as Breadcrumbs,
    cards as Cards,
    cube as Cube,
    dashboard as Dashboard,
    divtriangle as Divtriangle,
    fullscreenloading as FullScreenLoading,
    image as Image,
    input as Input,
    inputlist as InputList,
    inputlistswitch as InputListSwitch,
    inputsuggestion as InputSuggestion,
    links as Links,
    list as List,
    menuHorizontalClick as MenuHorizontalClick,
    menuHorizontalHover as MenuHorizontalHover,
    menuVerticalHover as MenuVerticalHover,
    menuVerticalClick as MenuVerticalClick,
    menuanimationhamburger as MenuAnimationHamburger,
    menuanimationdots as MenuAnimationDots,
    menuanimationsquare as MenuAnimationSquare,
    menuanimationcustom as MenuAnimationCustom,
    menufixedtop as MenuFixedTop,
    menufixedleft as MenuFixedLeft,
    menufixedbottom as MenuFixedBottom,
    menufixedright as MenuFixedRight,
    modal as Modal,
    paging as Paging,
    slider as Slider,
    sourcecode as Sourcecode,
    stars as Stars,
    verticalbars as Verticalbars,
    videobackground as Videobackground,
    website404 as Website404
};
