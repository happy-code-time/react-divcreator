import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { generateToggleFunctionality } from '../funtions/generateToggleFunctionality';

import { checkIsItemInList } from '../funtions/checkIsItemInList';

import { logBuildTime } from '../funtions/logBuildTime';

import { navigateToTopOfWebpage } from '../../index';

class menuHorizontalClick extends Component {

    constructor(props) {
        super(props);
        this.generateSingleLinkItem = this.generateSingleLinkItem.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeRecursive = this.closeRecursive.bind(this);
        this.toggleChilds = this.toggleChilds.bind(this);

        this.type = 'MenuHorizontalClick';
        this.defaultClass = `react-divcreator-menu--horizontal-click`;
        this.defaultClassMounted = 'react-divcreator-menu--horizontal-click-mounted';
        this.requiredProps = {
            'data': 'object',
            'link': 'boolean'
        };
        this.wasAnimated = [];
        this.state = {
            data: props.data ? generateToggleFunctionality(props.data) : [],
            site: props.site ? `site-${props.site}` : 'site-left',
            animation: props.animation ? props.animation : false,
            dots: props.activateDots ? props.activateDots : false,
            activeCount: props.activeCount ? props.activeCount : false,
            activeCountHtml: props.activeCountHtml ? props.activeCountHtml : '. ',
            mounted: false,
            allToggledItems: [],
            border: props.border ? props.border : false,
            keepOpen: this.props.keepOpen ? this.props.keepOpen : false
        }
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

    /**
     * Handle click outsite the node, to close all toggled menu elements
     * @param {any} event 
     */
    handleClickOutside(event) {
        try {
            const data = this.state.data;
            const domNode = this.node;

            if (!domNode.contains(event.target)
                && !this.state.keepOpen
                && event.target.className
                && -1 === event.target.className.indexOf('react-divcreator-menu--horizontal-click__single-event')
                && -1 === event.target.className.indexOf('react-divcreator-menu--horizontal-click__single-link')
                && -1 === event.target.className.indexOf('react-divcreator-menu--horizontal-click__single-text')
            ) {
                const allToggledItems = checkIsItemInList([], '', 'empty');
                this.wasAnimated = [];
                let timeOut = 0;

                // Close all menu items recursive
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
                            ) {
                                if (domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x')) {
                                    domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x').classList.add('animation-x-back');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }
                                if (domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x-own-left')) {
                                    domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x-own-left').classList.add('animation-x-own-back-left');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }
                                if (domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x-own-right')) {
                                    domNode.querySelector(`.parent-div-${i}`).parentElement.querySelector('.animation-x-own-right').classList.add('animation-x-own-back-right');
                                    timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                                }
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

    createAnimation(props) {
        const time = props.animationTime ? props.animationTime : false;

        if (time) {
            if ('left' == this.props.site) {
                return (
                    <style>
                        {
                            `
                            @keyframes show-single-menu-item-horizontal__click_own-left {
                                from {
                                    transition: ${time}ms;
                                    transition-duration: ${time}ms;
                                    transform: scaleX(0);
                                    -webkit-transform: scaleX(0);
                                    transform-origin: 0% 0;
                                    -webkit-transform-origin: 0% 0;
                                }
                              
                                to {
                                    transform: scaleX(1);
                                    -webkit-transform: scaleX(1);
                                }
                            }
                            @keyframes hide-single-menu-item-horizontal__click_own-left {
                                from {
                                    transition: ${time}ms;
                                    transition-duration: ${time}ms;
                                    transform: scaleX(1);
                                    -webkit-transform: scaleX(1);
                                }
                                to {
                                    transform-origin: 0% 0;
                                    -webkit-transform-origin: 0% 0;
                                    transform: scaleX(0);
                                    -webkit-transform: scaleX(0);
                                }
                            }
                            .animation-x-own-left {
                                animation: show-single-menu-item-horizontal__click_own-left ${time}ms ease-out forwards;
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                transform: scaleX(0);
                                -webkit-transform: scaleX(0);
                                transform-origin: 0% 0;
                                -webkit-transform-origin: 0% 0;
                            }
                            .animation-x-own-back-left {
                                animation: hide-single-menu-item-horizontal__click_own-left ${time}ms ease-out forwards;
                            }
                            `
                        }
                    </style>
                );
            } else {
                return (
                    <style>
                        {
                            `
                            @keyframes show-single-menu-item-horizontal__click_own-right {
                                from {
                                    transition: ${time}ms;
                                    transition-duration: ${time}ms;
                                    transform: scaleX(0);
                                    -webkit-transform: scaleX(0);
                                    transform-origin: 100% 50%;
                                    -webkit-transform-origin: 100% 50%;
                                }
                              
                                to {
                                    transform: scaleX(1);
                                    -webkit-transform: scaleX(1);
                                }
                            }
                            @keyframes hide-single-menu-item-horizontal__click_own-right {
                                from {
                                    transition: ${time}ms;
                                    transition-duration: ${time}ms;
                                    transform: scaleX(1);
                                    -webkit-transform: scaleX(1);
                                }
                                to {
                                    transform-origin: 100% 50%;
                                    -webkit-transform-origin: 100% 50%;
                                    transform: scaleX(0);
                                    -webkit-transform: scaleX(0);
                                }
                            }
                            .animation-x-own-right {
                                animation: show-single-menu-item-horizontal__click_own-right ${time}ms ease-out forwards;
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                transform: scaleX(0);
                                -webkit-transform: scaleX(0);
                                transform-origin: 100% 50%;
                                -webkit-transform-origin: 100% 50%;
                            }
                            .animation-x-own-back-right {
                                animation: hide-single-menu-item-horizontal__click_own-right ${time}ms ease-out forwards;
                            }
                            `
                        }
                    </style>
                );
            }
        } else {
            return false;
        }
    }

    /**
     * Generate single menu items links
     * @param {object} option 
     * @param {number} index 
     */
    generateSingleLinkItem(option, index, menuTogglerCount, isOpenedClass) {
        const attributes = option.attributes ? option.attributes : {};
        const singleClass = `${this.defaultClass}__single-link ${option.class ? option.class : ''}`;

        if (this.props.link) {
            if (option.isLink) {
                return (
                    <span className={`${this.defaultClass}__single-event ${isOpenedClass}`} onClick={(e) => this.toggleChilds(e, option, menuTogglerCount, isOpenedClass)}>
                        <Link
                            {...attributes}
                            to={option.link}
                            className={`child child-${index + 1} ${((option.childs && option.childs.length > 0) ? 'child-has-childs' : 'child-no-childs')} ${singleClass}`}
                        >
                            {
                                this.state.activeCount &&
                                <span className={`${this.defaultClass}__line-number`}>
                                    {
                                        index + 1 + this.state.activeCountHtml
                                    }
                                </span>
                            }
                            {
                                option.text &&
                                <span className={`${this.defaultClass}__single-text ${isOpenedClass}`}>
                                    {
                                        option.text
                                    }
                                </span>
                            }
                            {
                                option.customData &&
                                <span className={`${this.defaultClass}__custom-data ${isOpenedClass}`}>
                                    {
                                        option.customData
                                    }
                                </span>
                            }
                        </Link>
                    </span>
                );
            }
            else {
                return (
                    <span className={`${this.defaultClass}__single-event ${isOpenedClass}`} onClick={(e) => this.toggleChilds(e, option, menuTogglerCount, isOpenedClass)}>
                        <span
                            className={`child child-${index + 1} ${((option.childs && option.childs.length > 0) ? 'child-has-childs' : 'child-no-childs')} ${singleClass}`}
                            {...attributes}
                        >
                            {
                                this.state.activeCount &&
                                <span className={`${this.defaultClass}__line-number`}>
                                    {
                                        index + 1 + this.state.activeCountHtml
                                    }
                                </span>
                            }

                            <span className={`${this.defaultClass}__single-text ${isOpenedClass}`}>
                                {
                                    option.text
                                }
                            </span>
                            {
                                option.customData &&
                                <span className={`${this.defaultClass}__custom-data ${isOpenedClass}`}>
                                    {
                                        option.customData
                                    }
                                </span>
                            }
                        </span>
                    </span>
                );
            }
        }
        if (!this.props.link) {
            if (option.isLink) {
                return (
                    <span className={`${this.defaultClass}__single-event ${isOpenedClass}`} onClick={(e) => this.toggleChilds(e, option, menuTogglerCount, isOpenedClass)}>
                        <a
                            {...attributes}
                            href={option.link}
                            className={`child child-${index + 1} ${((option.childs && option.childs.length > 0) ? 'child-has-childs' : 'child-no-childs')} ${singleClass}`}
                        >
                            {
                                this.state.activeCount &&
                                <span className={`${this.defaultClass}__line-number`}>
                                    {
                                        index + 1 + this.state.activeCountHtml
                                    }
                                </span>
                            }
                            <span className={`${this.defaultClass}__single-text ${isOpenedClass}`}>
                                {
                                    option.text
                                }
                            </span>
                            {
                                option.customData &&
                                <span className={`${this.defaultClass}__custom-data ${isOpenedClass}`}>
                                    {
                                        option.customData
                                    }
                                </span>
                            }
                        </a>
                    </span>
                );
            }
            else {
                return (
                    <span className={`${this.defaultClass}__single-event ${isOpenedClass}`} onClick={(e) => this.toggleChilds(e, option, menuTogglerCount, isOpenedClass)}>
                        <span
                            className={`child child-${index + 1} ${((option.childs && option.childs.length > 0) ? 'child-has-childs' : 'child-no-childs')} ${singleClass}`}
                            {...attributes}
                        >
                            {
                                this.state.activeCount &&
                                <span className={`${this.defaultClass}__line-number`}>
                                    {
                                        index + 1 + this.state.activeCountHtml
                                    }
                                </span>
                            }

                            <span className={`${this.defaultClass}__single-text ${isOpenedClass}`}>
                                {
                                    option.text
                                }
                            </span>
                            {
                                option.customData &&
                                <span className={`${this.defaultClass}__custom-data ${isOpenedClass}`}>
                                    {
                                        option.customData
                                    }
                                </span>
                            }
                        </span>
                    </span>
                );
            }
        }
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
                const clsDefault = `child-children child-children-${index + 1} ${this.state.site}`;
                let clsAnimate = `${(this.lastAnimatedElement == option.togglerChild) ? (this.state.animation ? (this.animationStyle ? (this.props.site == 'left' ? 'animation-x-own-left' : 'animation-x-own-right') : 'animation-x') : '') : ''}`;

                return (
                    <div key={customKey()} className={(option.childs && option.childs.length > 0) ? `parent-div-has-childs ${classNameOfParent}` : `parent-div-no-childs ${classNameOfParent}`}>
                        {
                            this.generateSingleLinkItem(option, index, menuTogglerCount, isOpenedClass)
                        }
                        {
                            // has childs                                  toogle only one item by its index  
                            (option.childs && option.childs.length > 0) && toggled &&
                            <span className={`${clsDefault} ${clsAnimate}`} >
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

    toggleChilds(event, option, menuTogglerCount, isOpenedClass) {
        const domNode = this.node;
        let timeOut = 0;
        this.menuTogglerCount = menuTogglerCount;
        event.persist();
        let addedAnimationBack = false;

        try {
            // if the class has animate then animate back all parents and it self
            if (this.state.animation && domNode && domNode.querySelector(`.parent-div-${menuTogglerCount}`)) {
                if (domNode.querySelector(`.parent-div-${menuTogglerCount}`) 
                    && undefined !==  domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement
                    && null !==  domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement
                    ) {
                    if(!this.state.keepOpen){
                        let found = false;
                        // animation for single currently animated element
                        if (domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x')) {
                            domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x').classList.add('animation-x-back');
                            found = true;
                        }
                        if (domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x-own-left')) {
                            domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x-own-left').classList.add('animation-x-own-back-left');
                            found = true;
                        }
                        if (domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x-own-right')) {
                            domNode.querySelector(`.parent-div-${menuTogglerCount}`).parentElement.querySelector('.animation-x-own-right').classList.add('animation-x-own-back-right');
                            found = true;
                        }

                        if(found){
                            timeOut = this.props.animationTime ? this.props.animationTime : this.time;
                        }
                    }
                }
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in toggleChilds. Message ${error}`);
            }
        }

        if(!option.childs || !option.childs.length){
            if (option.function && 'function' == typeof option.function) {
                (option.function)(event, option, option.functionData);
            }
    
            if (option.clickNavigateToTop && typeof true == typeof option.clickNavigateToTop && true == option.clickNavigateToTop) {
                navigateToTopOfWebpage();
            }

            return false;
        }
        
        if (option.clickNavigateToTop && typeof true == typeof option.clickNavigateToTop && true == option.clickNavigateToTop) {
            navigateToTopOfWebpage();
        }

        setTimeout(() => {
            const allKeys = option.togglerChild.split(':');
            const allKeysToToggle = [];
            let allToggledItems = this.state.allToggledItems;

            if (this.lastAnimatedElement !== option.togglerChild) {
                this.lastAnimatedElement = option.togglerChild;
            }

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

                        if (undefined == allKeysToToggle[positionOpen + 1]) {
                            childs[x]['toggled'] = !childs[x]['toggled'];

                            if (true == childs[x]['toggled']) {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'add');
                            } else {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'remove');
                            }
                        } else {
                            if (childs[x]['toggled']) {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'add');
                            } else {
                                allToggledItems = checkIsItemInList(allToggledItems, option.togglerChild, 'remove');
                            }
                        }

                        if (childs[x].childs && childs[x].childs.length) {
                            positionOpen += 1;

                            if (undefined !== allKeysToToggle[positionOpen]) {
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

                        if (undefined != allKeysToToggle[positionOpen]) {
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
            });
        }, timeOut);
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            let rootId = this.props.id ? this.props.id : '';
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;

            return (
                <div
                    ref={node => this.node = node}
                    id={rootId}
                    className={masterClass}
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
export default menuHorizontalClick;
