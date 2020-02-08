import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { generateToggleFunctionality } from '../funtions/generateToggleFunctionality';

import { checkIsItemInList } from '../funtions/checkIsItemInList';

import { logBuildTime } from '../funtions/logBuildTime';

import { navigateToTopOfWebpage } from '../../index';
class accordion extends Component {

    constructor(props) {
        super(props);
        this.generateSingleLinkItem = this.generateSingleLinkItem.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeRecursive = this.closeRecursive.bind(this);
        this.toggleChilds = this.toggleChilds.bind(this);

        this.type = 'Accordion';
        this.defaultClass = `react-divcreator-accordion`;
        this.classMounted = 'react-divcreator-accordion-mounted mounted';
        this.requiredProps = {
            'data': 'object',
        };
        this.wasAnimated = [];
        this.state = {
            data: props.data ? generateToggleFunctionality(props.data) : [],
            animation: props.animation ? props.animation : false,
            dots: props.activateDots ? props.activateDots : false,
            activeCount: props.activeCount ? props.activeCount : false,
            activeCountHtml: props.activeCountHtml ? props.activeCountHtml : '. ',
            mounted: false,
            allToggledItems: [],
            border: props.border ? props.border : false,
            keepOpen: this.props.keepOpen ? this.props.keepOpen : false,
            animateKeepOpenBack: this.props.animateKeepOpenBack ? this.props.animateKeepOpenBack : false,
            animationType: this.props.animationType ? this.props.animationType : 'scale'
        };
        this.animationStyle = this.createAnimation(props);
        this.time = 300;
        this.debugging = false;
        this.buildTimeStart = Date.now();
        this.lastAnimatedElement = '';
        this.menuTogglerCount = null;
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
        document.addEventListener('mousedown', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
        document.removeEventListener('touchstart', this.handleClickOutside, false);
    }

    createAnimation(props) {
        const time = props.animationTime ? props.animationTime : false;

        if (time) {
            return (
                <style>
                    {
                        `
                        @keyframes show-single-accordion-item {
                            from {
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                transform: scaleY(0);
                                -webkit-transform: scaleY(0);
                                transform-origin: 0% 0;
                                -webkit-transform-origin: 0% 0;
                            }
                          
                            to {
                                transform: scaleY(1);
                                -webkit-transform: scaleY(1);
                            }
                        }
                        @keyframes hide-single-accordion-item {
                            from {
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                transform: scaleY(1);
                                -webkit-transform: scaleY(1);
                            }
                          
                            to {
                                transform-origin: 0% 0;
                                -webkit-transform-origin: 0% 0;
                                transform: scaleY(0);
                                -webkit-transform: scaleY(0);
                            }
                        }
                        .react-divcreator-accordion-mounted.animation-y {
                            animation: show-single-accordion-item ${time}ms ease-out forwards !important;
                            transition: ${time}ms;
                            transition-duration: ${time}ms;
                            transform: scaleY(0);
                            -webkit-transform: scaleY(0);
                            transform-origin: 0% 0;
                            -webkit-transform-origin: 0% 0;
                        }
                        .react-divcreator-accordion-mounted.animation-y-back {
                            animation: hide-single-accordion-item ${time}ms ease-out forwards !important;
                        }
                        `
                    }
                </style>
            );
        } else {
            return false;
        }
    }

    /**
     * Handle click outsite the node, to close all toggled menu elements
     * @param {any} event 
     */
    handleClickOutside(event) {
        try {
            const data = this.state.data;
            const domNode = this.node;

            if (!domNode.contains(event.target) && !this.state.keepOpen) {
                const allToggledItems = checkIsItemInList([], '', 'empty');
                this.wasAnimated = [];
                let timeOut = 0;
                
                for (let mrx = 0; mrx <= data.length - 1; mrx++) {
                    data[mrx]['toggled'] = false;

                    if (data[mrx].childs && data[mrx].childs.length) {
                        this.closeRecursive(data[mrx].childs);
                    }
                }

                try {
                    // if the class has animate then animate back all parents and it self
                    // randomly picked number: 20 of available nested elements
                    
                    if (this.state.animation && domNode ) {
                        timeOut = this.props.animationTime ? this.props.animationTime : this.time;

                        for(let i = 0; i <= 20; i++){
                            if (domNode.querySelector(`.parent-div-${i}`)
                                && undefined !== domNode.querySelector(`.parent-div-${i}`).parentElement
                                && null !== domNode.querySelector(`.parent-div-${i}`).parentElement
                                && domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-y')
                            ) {
                                domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-y').classList.add('animation-y-back');
                            }
                            if (domNode.querySelector(`.parent-div-${i}`) 
                                && domNode.querySelector(`.parent-div-${i}`).parentElement 
                                && domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-y-height')
                            ) {
                                domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-y-height').classList.add('animation-y-height-back');
                            }
                        }
                    }
                } catch (error) {
                    if (this.debugging) {
                        console.error(`Error in toggleChilds. Message ${error}`);
                    }
                }

                setTimeout( () => {
                    this.setState({
                        data,
                        allToggledItems
                    });
                }, timeOut);
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in handleClickOutside. Message: ${error}`);
            }
        }
    }

    /**
     * Generate single menu items links
     * @param {object} option 
     * @param {number} index 
     */
    generateSingleLinkItem(option, index, menuTogglerCount, isOpenedClass, idToToggle) {
        const attributes = option.attributes ? option.attributes : {};
        const singleClass = `${this.defaultClass}__single-accordion-element ${option.class ? option.class : ''}`;

        return (
            <div
                className={`child child-${index + 1} ${((option.childs && option.childs.length > 0) ? 'child-has-childs' : 'child-no-childs')} ${singleClass} ${'opened' == isOpenedClass ? 'animation-y-to' : ''}`}
                {...attributes}

            >
                {
                    this.state.activeCount &&
                    <div className={`${this.defaultClass}__line-number`}>
                        <span>
                            {
                                index + 1 + this.state.activeCountHtml
                            }
                        </span>
                    </div>
                }
                <div className={`${this.defaultClass}__single-content ${isOpenedClass}`}>
                    {
                        option.title &&
                        <div 
                            onClick={(e) => this.toggleChilds(e, option, menuTogglerCount, isOpenedClass, idToToggle)}
                            className={`${this.defaultClass}__single-title`}
                        >
                            <span>
                                {
                                    option.title
                                }
                            </span>
                        </div>
                    }
                    {
                        option.description &&
                        <div className={`${this.defaultClass}__single-description`}>
                            <span>
                                {
                                    option.description
                                }
                            </span>
                        </div>
                    }
                    {
                        option.customData &&
                        <div className={`${this.defaultClass}__custom-data`}>
                            <span>
                                {
                                    option.customData
                                }
                            </span>
                        </div>
                    }
                </div>
            </div>
        );
    }

    /**
     * Generate menu recursive
     */
    generateTypesMenu() {
        let menuTogglerCount = 0;

        const OptionsList = ({ options }) => {
            menuTogglerCount++;
            const classNameOfParent = `parent parent-div parent-div-${menuTogglerCount} ${this.state.border ? 'border' : ''}`;

            return options.map((option, index) => {
                const toggled = option['toggled'];
                const isOpenedClass = option.toggled ? 'opened' : 'closed';
                const clsDefault = `child-children child-children-${index + 1} ${this.state.dots ? 'dots' : ''}`;
                const animationClass = 'height' === this.state.animationType ? 'animation-y-height' : 'animation-y';
                let clsAnimate = `${(this.lastAnimatedElement == option.togglerChild) ? (this.state.animation ? animationClass : '') : 'parent-opened'}`;

                const idToToggle = `${customKey()}`;

                return (
                    <div key={customKey()} className={(option.childs && option.childs.length > 0) ? `parent-div-has-childs ${classNameOfParent}` : `parent-div-no-childs ${classNameOfParent}`}>
                        {
                            this.generateSingleLinkItem(option, index, menuTogglerCount, isOpenedClass, idToToggle)
                        }
                        {
                            // has childs                                  toogle only one item by its index  
                            (option.childs && option.childs.length > 0) && toggled &&
                            <span id={idToToggle} className={`${clsDefault} ${clsAnimate}`} >
                                <OptionsList options={option.childs} />
                            </span>
                        }
                    </div>
                )
            });
        }

        return <OptionsList options={this.state.data} childCount={0} menuTogglerCount={menuTogglerCount} />;
    }

    /**
     * Close all opened childrens menu elements
     * @param {array} childs 
     * @param {array} allToggledItems 
     */
    closeRecursive(childs, allToggledItems) {
        if(!this.state.keepOpen){
            if (childs && childs.length) {

                for (let x = 0; x <= childs.length - 1; x++) {
                    childs[x]['toggled'] = false;
                    allToggledItems = checkIsItemInList(allToggledItems, childs[x].togglerChild, 'remove');
    
                    if (childs[x].childs && childs[x].childs.length) {
                        this.closeRecursive(childs[x].childs, allToggledItems);
                    }
                }
            }
        }
        return allToggledItems;
    }

    toggleChilds(event, option, menuTogglerCount, isOpenedClass, idToToggle) {
        const domNode = this.node;
        let timeOut = 0;
        this.menuTogglerCount = menuTogglerCount;
        event.persist();
        let addedAnimationBack = false;

        try {
            // if the class has animate then animate back all parents and it self
            if (this.state.animation && domNode && domNode.querySelector(`.parent-div-${menuTogglerCount}`)) {
                if (domNode.querySelector(`.parent-div-${menuTogglerCount}`)) {
                    if(!this.state.keepOpen){
                        // animation for single currently animated element
                        if (undefined !== domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement
                            && null !== domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement
                        ) {
                            if(!this.state.keepOpen){

                                if(domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y')){
                                    domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y').classList.add('animation-y-back');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }

                                if(domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y-height')){
                                    domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y-height').classList.add('animation-y-height-back');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }

                                setTimeout( () => {
                                    if( undefined !== domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement
                                        && null !== domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement 
                                        && domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y')
                                    ){
                                        domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y').classList.remove('animation-y-back');
                                        domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-y-height').classList.remove('animation-y-height-back');
                                    }
                                }, timeOut);
                                addedAnimationBack = true;
                            }
                        }
                    } else {
                        if('opened' == isOpenedClass && !addedAnimationBack && this.state.animateKeepOpenBack){
                            try{
                                addedAnimationBack = true;

                                if(idToToggle && document.getElementById(idToToggle)){
                                    document.getElementById(idToToggle).classList.add('animation-y-back');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }
                            } catch(error){
                                if (this.debugging) {
                                    console.error(`Error in toggleChilds - close in mode: keeOpen={true}. Message ${error}`);
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in toggleChilds. Message ${error}`);
            }
        }

        if(this.props.clickNavigateToTop){
            navigateToTopOfWebpage();
        }

        setTimeout(() => {
            if(this.lastAnimatedElement !== option.togglerChild){
                this.lastAnimatedElement = option.togglerChild;
            }
    
            const allKeys = option.togglerChild.split(':');
            const allKeysToToggle = [];
            let allToggledItems = this.state.allToggledItems;
    
            if (allKeys && allKeys.length) {
                allKeys.map((number, i) => number !== '' ? allKeysToToggle.push(parseInt(number)) : null);
            }

            const menuItems = this.state.data;
            // Attach unique keys recursive for childs
            const attachDataToChildsRecursive = (childs, positionOpen) => {
                for (let x = 0; x <= childs.length - 1; x++) {
                    if (x == allKeysToToggle[positionOpen]) {
                        // if other child available then keep current
                        // toggled item open, else close it

                        if(undefined == allKeysToToggle[positionOpen+1]){
                            childs[x]['toggled'] = !childs[x]['toggled'];       

                            if(true == childs[x]['toggled']){
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'add');
                            } else {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'remove');
                            }
                        } else {
                            if(childs[x]['toggled']){
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'add');
                            } else {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'remove');
                            }
                        }

                        if (childs[x].childs && childs[x].childs.length) {
                            positionOpen += 1;

                            if(undefined !== allKeysToToggle[positionOpen]){
                                attachDataToChildsRecursive(childs[x].childs, positionOpen);
                            }
                        }
                    } else {
                        if(!this.state.keepOpen){
                            childs[x].toggled = false;
                        }
                        allToggledItems = this.closeRecursive(childs[x].childs, allToggledItems);
                    }
                }
            }

            // parent 
            let positionOpen = 0;

            for (let mrx = 0; mrx <= menuItems.length - 1; mrx++) {

                if (allKeysToToggle[0] == mrx) {
                    if (1 == allKeysToToggle.length) {
                        menuItems[allKeysToToggle[0]]['toggled'] = !menuItems[allKeysToToggle[0]]['toggled'];

                        if (false == menuItems[allKeysToToggle[0]]['toggled']) {
                            allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'remove');
                            this.closeRecursive(menuItems[mrx].childs, allToggledItems);
                            allToggledItems = [];
                        }

                        if (true == menuItems[allKeysToToggle[0]]['toggled']) {
                            allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'add');
                        }

                    } else {
                        menuItems[mrx]['toggled'] = true;
                    }

                    if (menuItems[mrx].childs && menuItems[mrx].childs.length) {
                        positionOpen += 1;
                        
                        if(undefined != allKeysToToggle[positionOpen]){
                            attachDataToChildsRecursive(menuItems[mrx].childs, positionOpen);
                        }
                    }

                } else {
                    if(!this.state.keepOpen){
                        menuItems[mrx]['toggled'] = false;

                        if (menuItems[mrx].childs && menuItems[mrx].childs.length) {
                            allToggledItems = this.closeRecursive(menuItems[mrx].childs, allToggledItems);
                        }
                    }
                }
            }

            if (option.function && 'function' == typeof option.function) {
                (option.function)(event, option, option.functionData);
            }

            this.setState({
                data: menuItems,
                allToggledItems
            })
        }, timeOut);
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            let rootId = this.props.id ? this.props.id : `${customKey()}`;
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass}`;

            return (
                <div 
                    id={rootId} 
                    className={this.state.mounted ? `${masterClass} ${this.classMounted}` : masterClass}
                    ref={ node => this.node = node} 
                >
                    {this.animationStyle && this.animationStyle}
                    {
                        this.generateTypesMenu()
                    }
                </div>
            );

        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default accordion;
