/**
 * Append style tag to the website
 */
const styleId = 'react-divcreator-fullscreenloading-animation';
const classNameAnimationFromMixed = 'divcreator-fullscreenloading-animation-mixed';
const classNameAnimationFromMixedCenter = 'divcreator-fullscreenloading-animation-center-mixed';
const classNameAnimationFromMixedCenterCorner = 'divcreator-fullscreenloading-animation-center-corner-mixed';
const destroyClassName = 'divcreator-fullscreenloading-animation-destroy';

const appendStyle = (style) => {
    var cssDeveloper = document.createElement('style');
    cssDeveloper.type = 'text/css';
    cssDeveloper.id = styleId;
    const cssElementDeveloper = document.getElementById(styleId);

    if (cssDeveloper.styleSheet) {
        cssDeveloper.styleSheet.cssText = style;
    }
    else {
        cssDeveloper.appendChild(document.createTextNode(style));
    }
    
    // append css only if is null
    // don`t append twice
    if (null === cssElementDeveloper) {
        document.head.appendChild(cssDeveloper);
    }
};

const removeStyleFromDom = () => {
    const element = document.getElementById(styleId);

    if(element){
        element.parentNode.removeChild(element);
    }
}
/**
 * onclick make animation
 */
const fullscreenLoadingAnimation = (divSelector, html, text, destroy, initialAnimation, customAnimation) => {

    let domElement = document.querySelector(divSelector);

    if (html && document.querySelector(divSelector + ' span')) {
        document.querySelector(divSelector + ' span').innerHTML = html;
    }
    if (text && document.querySelector(divSelector + ' span')) {
        document.querySelector(divSelector + ' span').innerText = text;
    }

    if (null != domElement && 'undefined' != typeof domElement) {
        const animationFrom = domElement.getAttribute('animationfrom');
        const animationFromCorner = domElement.getAttribute('animationfromcorner');
        const animationTime = domElement.getAttribute('animationtime');
        const animationRemoveTime = domElement.getAttribute('animationremovetime');

        if (animationFrom && animationFromCorner && animationTime) {
            if (initialAnimation) {
                let cssRuleToApplyOnTheWebsite = '';

                if (null === document.getElementById(styleId)) {
                    cssRuleToApplyOnTheWebsite = `
                        .${classNameAnimationFromMixed} {
                            -webkit-animation: divcreator_fullscreentloading_animation ${animationTime}ms forwards;
                            -moz-animation: divcreator_fullscreentloading_animation ${animationTime}ms forwards;
                            -ms-animation: divcreator_fullscreentloading_animation ${animationTime}ms forwards;
                            -o-animation: divcreator_fullscreentloading_animation ${animationTime}ms forwards;
                            animation: divcreator_fullscreentloading_animation ${animationTime}ms forwards;
                        }
                        .${classNameAnimationFromMixedCenter} {
                            -webkit-animation: divcreator_fullscreentloading_animation_center ${animationTime}ms forwards;
                            -moz-animation: divcreator_fullscreentloading_animation_center ${animationTime}ms forwards;
                            -ms-animation: divcreator_fullscreentloading_animation_center ${animationTime}ms forwards;
                            -o-animation: divcreator_fullscreentloading_animation_center ${animationTime}ms forwards;
                            animation: divcreator_fullscreentloading_animation_center ${animationTime}ms forwards;
                        }
                        .${classNameAnimationFromMixedCenterCorner} {
                            -webkit-animation: divcreator_fullscreentloading_animation_corner_center ${animationTime}ms forwards;
                            -moz-animation: divcreator_fullscreentloading_animation_corner_center ${animationTime}ms forwards;
                            -ms-animation: divcreator_fullscreentloading_animation_corner_center ${animationTime}ms forwards;
                            -o-animation: divcreator_fullscreentloading_animation_corner_center ${animationTime}ms forwards;
                            animation: divcreator_fullscreentloading_animation_corner_center ${animationTime}ms forwards;
                        }
                    `;
                    if('center' == animationFrom) {
                        domElement.classList.add(classNameAnimationFromMixedCenter);
                    }
                    if('center' == animationFromCorner) {
                        domElement.classList.add(classNameAnimationFromMixedCenterCorner);
                    }                
                    if('center' == animationFrom || 'center' == animationFromCorner){
    
                        cssRuleToApplyOnTheWebsite += `.${destroyClassName} {
                            -webkit-animation: divcreator_fullscreentloading_animation_destroy_center ${animationTime}ms forwards;
                            -moz-animation: divcreator_fullscreentloading_animation_destroy_center ${animationTime}ms forwards;
                            -ms-animation: divcreator_fullscreentloading_animation_destroy_center ${animationTime}ms forwards;
                            -o-animation: divcreator_fullscreentloading_animation_destroy_center ${animationTime}ms forwards;
                            animation: divcreator_fullscreentloading_animation_destroy_center ${animationTime}ms forwards;
                        }`;
    
                        setTimeout( () => {
                            domElement.classList.add(classNameAnimationFromMixed);
                        }, animationTime);
    
                    } else {
                        
                        cssRuleToApplyOnTheWebsite += `.${destroyClassName} {
                            -webkit-animation: divcreator_fullscreentloading_animation_destroy ${animationTime}ms forwards;
                            -moz-animation: divcreator_fullscreentloading_animation_destroy ${animationTime}ms forwards;
                            -ms-animation: divcreator_fullscreentloading_animation_destroy ${animationTime}ms forwards;
                            -o-animation: divcreator_fullscreentloading_animation_destroy ${animationTime}ms forwards;
                            animation: divcreator_fullscreentloading_animation_destroy ${animationTime}ms forwards;
                        }`;
    
                        domElement.classList.add(classNameAnimationFromMixed);
                    }
                    appendStyle(cssRuleToApplyOnTheWebsite);
                }
            }

            if (destroy) {
                domElement.classList.add(destroyClassName);

                setTimeout( () => {
                    domElement.classList.remove(classNameAnimationFromMixed);
                    domElement.classList.remove(classNameAnimationFromMixedCenter);
                    domElement.classList.remove(classNameAnimationFromMixedCenterCorner);
                    domElement.classList.remove(destroyClassName);
                    removeStyleFromDom();
                }, animationRemoveTime);
            }
        }
    }
}
export default fullscreenLoadingAnimation;