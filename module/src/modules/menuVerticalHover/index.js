import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';
class menuVerticalHover extends Component {

    constructor(props) {
        super(props);
        this.type = 'MenuVerticalHover';
        this.defaultClass = `react-divcreator-menu`;
        this.defaultClassMounted = `react-divcreator-menu-mounted`;
        this.requiredProps = {
            'data': 'object',
            'link': 'boolean',
            'mark': 'boolean'
        };
        if (typeof true == typeof this.props.mark && true === this.props.mark) {
            this.requiredProps.markClass = 'string';
        };
        this.state = {
            mounted: false
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    markAsClicked(cls) {
        if (this.props.mark) {
            cls = `.${cls}`;

            /**
             * first reset other items
             */
            let items = document.querySelectorAll('.react-divcreator-menu li');
            if (items && items.length) {

                items.forEach((liElement) => {
                    let liElementClasses = liElement.classList;

                    if (liElementClasses && liElementClasses.length) {
                        liElementClasses.forEach((classN) => {
                            if (classN == this.props.markClass) {
                                liElement.classList.remove(this.props.markClass);
                            }
                        })
                    }
                })
            }
            /**
             * then add class to change css properties
             * if use clicked on menu item
             */
            if (null !== document.querySelector(cls) && 'undefined' !== document.querySelector(cls)) {
                document.querySelector(cls).classList.add(this.props.markClass);
                window.sessionStorage.setItem('selected_items_as_marked_in_menu', cls);
            }
        }
    }
    checkMarkItem() {
        if (window.sessionStorage.getItem('selected_items_as_marked_in_menu') && null != window.sessionStorage.getItem('selected_items_as_marked_in_menu')) {
            let setted = false;

            let setClass = setInterval(() => {
                if (document.querySelector(window.sessionStorage.getItem('selected_items_as_marked_in_menu')) && 'undefined' != typeof document.querySelector(window.sessionStorage.getItem('selected_items_as_marked_in_menu'))) {
                    document.querySelector(window.sessionStorage.getItem('selected_items_as_marked_in_menu')).classList.add(this.props.markClass);
                    setted = true;
                }
                if (setted) {
                    clearInterval(setClass);
                }
            }, 100);
        }
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);
        this.checkMarkItem();

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootId = this.props.id ? this.props.id : '';
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.defaultClass} ${rootClass} react-divcreator-menu-1-vertical ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;

            let menu_data = this.props.data;

            if (menu_data.length) {
                /**
                 * etage 1
                 */
                let etageMenu1 = new Array();
                let etageMenu2 = new Array();
                let etageMenu3 = new Array();
                let etageMenu4 = new Array();
                let etageMenu5 = new Array();
                let etageMenu6 = new Array();

                let etage1 = this.props.data;

                for (let a = 0; a <= etage1.length - 1; a++) {
                    let child2 = etage1[a];
                    let customClassForRootMarked = `react-divcreator-menu-1-li-vertical-${a}`;

                    etageMenu2 = [];
                    /**
                     * item has childs
                     */
                    if (child2.data && child2.data.length) {
                        /**
                         * item has not child dependensies
                         */
                        for (let b = 0; b <= child2.data.length - 1; b++) {
                            let child3 = child2.data[b];
                            etageMenu3 = [];
                            /**
                             * item has childs
                             */
                            if (child3.data && child3.data.length) {

                                for (let c = 0; c <= child3.data.length - 1; c++) {
                                    let child4 = child3.data[c];
                                    etageMenu4 = [];
                                    /**
                                      * item has not child dependensies
                                      */
                                    if (child4.data && child4.data.length) {

                                        for (let d = 0; d <= child4.data.length - 1; d++) {
                                            let child5 = child4.data[d];
                                            etageMenu5 = [];

                                            if (child5.data && child5.data.length) {

                                                for (let e = 0; e <= child5.data.length - 1; e++) {
                                                    let child6 = child5.data[e];
                                                    etageMenu6 = [];

                                                    if (child6.data && child6.data.length) {
                                                        for (let e = 0; e <= child6.data.length - 1; e++) {
                                                            let lastchild = child6.data[e];
                                                            etageMenu6 = [];
                                                            /**
                                                             * check if item should be an react router LINK
                                                             */
                                                            if (this.props.link) {

                                                                etageMenu6.push(
                                                                    <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-6-li-vertical`}>
                                                                        <span className='react-divcreator-menu-6-li-span react-divcreator-menu-span'>
                                                                            <Link
                                                                                to={lastchild.link}
                                                                                title={lastchild.title ? child6.title : null}
                                                                                onClick={
                                                                                    lastchild.function ? (lastchild.functionData ? e => (lastchild.function)(e, lastchild.functionData) : e => (lastchild.function)(e)) : null
                                                                                }
                                                                                className='react-divcreator-menu-6-li-a react-divcreator-menu-a'
                                                                            >
                                                                                {
                                                                                    lastchild.text
                                                                                }
                                                                            </Link>
                                                                        </span>
                                                                    </li>
                                                                );
                                                            }
                                                            else {
                                                                etageMenu6.push(
                                                                    <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-6-li-vertical`}>
                                                                        <span className='react-divcreator-menu-6-li-span react-divcreator-menu-span'>
                                                                            <a
                                                                                href={lastchild.link}
                                                                                title={lastchild.title ? child6.title : null}
                                                                                onClick={
                                                                                    lastchild.function ? (lastchild.functionData ? e => (lastchild.function)(e, lastchild.functionData) : e => (lastchild.function)(e)) : null
                                                                                }
                                                                                className='react-divcreator-menu-6-li-a react-divcreator-menu-a'
                                                                            >
                                                                                {
                                                                                    lastchild.text
                                                                                }
                                                                            </a>
                                                                        </span>
                                                                    </li>
                                                                );
                                                            }
                                                        }
                                                        /**
                                                         * check if item should be an react router LINK
                                                         */
                                                        if (this.props.link) {
                                                            etageMenu5.push(
                                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-5-li-vertical`}>
                                                                    <span className='react-divcreator-menu-5-li-span react-divcreator-menu-span'>
                                                                        <Link
                                                                            to={child6.link}
                                                                            title={child6.title ? child6.title : null}
                                                                            onClick={
                                                                                child6.function ? (child6.functionData ? e => (child6.function)(e, child6.functionData) : e => (child6.function)(e)) : null
                                                                            }
                                                                            className='react-divcreator-menu-5-li-a react-divcreator-menu-a'
                                                                        >
                                                                            {
                                                                                child6.text
                                                                            }
                                                                        </Link>
                                                                    </span>

                                                                    {
                                                                        etageMenu6 &&
                                                                        <ol className={`react-divcreator-menu-6-vertical`}>
                                                                            {etageMenu6}
                                                                        </ol>
                                                                    }
                                                                </li>
                                                            );
                                                        }
                                                        else {
                                                            etageMenu5.push(
                                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-5-li-vertical`}>
                                                                    <span className='react-divcreator-menu-5-li-span react-divcreator-menu-span'>
                                                                        <a
                                                                            href={child6.link}
                                                                            title={child6.title ? child6.title : null}
                                                                            onClick={
                                                                                child6.function ? (child6.functionData ? e => (child6.function)(e, child6.functionData) : e => (child6.function)(e)) : null
                                                                            }
                                                                            className='react-divcreator-menu-5-li-a react-divcreator-menu-a'
                                                                        >
                                                                            {
                                                                                child6.text
                                                                            }
                                                                        </a>
                                                                    </span>
                                                                    {
                                                                        etageMenu6 &&
                                                                        <ol className={`react-divcreator-menu-6-vertical`}>
                                                                            {etageMenu6}
                                                                        </ol>
                                                                    }
                                                                </li>
                                                            );
                                                        }
                                                    }
                                                    else {
                                                        /**
                                                         * check if item should be an react router LINK
                                                         */
                                                        if (this.props.link) {
                                                            etageMenu5.push(
                                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-5-li-vertical`}>
                                                                    <span className='react-divcreator-menu-5-li-span react-divcreator-menu-span'>
                                                                        <Link
                                                                            to={child6.link}
                                                                            title={child6.title ? child6.title : null}
                                                                            onClick={
                                                                                child6.function ? (child6.functionData ? e => (child6.function)(e, child6.functionData) : e => (child6.function)(e)) : null
                                                                            }
                                                                            className='react-divcreator-menu-5-li-a react-divcreator-menu-a'
                                                                        >
                                                                            {
                                                                                child6.text
                                                                            }
                                                                        </Link>
                                                                    </span>
                                                                </li>
                                                            );
                                                        }
                                                        else {
                                                            etageMenu5.push(
                                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-5-li-vertical`}>
                                                                    <span className='react-divcreator-menu-5-li-span react-divcreator-menu-span'>
                                                                        <a
                                                                            href={child6.link}
                                                                            title={child6.title ? child6.title : null}
                                                                            onClick={
                                                                                child6.function ? (child6.functionData ? e => (child6.function)(e, child6.functionData) : e => (child6.function)(e)) : null
                                                                            }
                                                                            className='react-divcreator-menu-5-li-a react-divcreator-menu-a'
                                                                        >
                                                                            {
                                                                                child6.text
                                                                            }
                                                                        </a>
                                                                    </span>
                                                                </li>
                                                            );
                                                        }
                                                    }
                                                }
                                                // after for loop add etage Menu 3 to the etage menu 2 
                                                /**
                                                 * check if item should be an react router LINK
                                                 */
                                                if (this.props.link) {
                                                    etageMenu4.push(
                                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-4-li-vertical`}>
                                                            <span className='react-divcreator-menu-4-li-span react-divcreator-menu-span'>
                                                                <Link
                                                                    to={child5.link}
                                                                    title={child5.title ? child5.title : null}
                                                                    onClick={
                                                                        child5.function ? (child5.functionData ? e => (child5.function)(e, child5.functionData) : e => (child5.function)(e)) : null
                                                                    }
                                                                    className='react-divcreator-menu-4-li-a react-divcreator-menu-a'
                                                                >
                                                                    {
                                                                        child5.text
                                                                    }
                                                                </Link>
                                                            </span>
                                                            {
                                                                etageMenu5 &&
                                                                <ul className={`react-divcreator-menu-5-vertical`}>
                                                                    {etageMenu5}
                                                                </ul>
                                                            }
                                                        </li>
                                                    );
                                                }
                                                else {
                                                    etageMenu4.push(
                                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-4-li-vertical`}>
                                                            <span className='react-divcreator-menu-4-li-span react-divcreator-menu-span'>
                                                                <a
                                                                    href={child5.link}
                                                                    title={child5.title ? child5.title : null}
                                                                    onClick={
                                                                        child5.function ? (child5.functionData ? e => (child5.function)(e, child5.functionData) : e => (child5.function)(e)) : null
                                                                    }
                                                                    className='react-divcreator-menu-4-li-a react-divcreator-menu-a'
                                                                >
                                                                    {
                                                                        child5.text
                                                                    }
                                                                </a>
                                                            </span>
                                                            {
                                                                etageMenu5 &&
                                                                <ul className={`react-divcreator-menu-5-vertical`}>
                                                                    {etageMenu5}
                                                                </ul>
                                                            }
                                                        </li>
                                                    );
                                                }
                                            }
                                            else {
                                                /**
                                                 * check if item should be an react router LINK
                                                 */
                                                if (this.props.link) {
                                                    etageMenu4.push(
                                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-4-li-vertical`}>
                                                            <span className='react-divcreator-menu-4-li-span react-divcreator-menu-span'>
                                                                <Link
                                                                    to={child5.link}
                                                                    title={child5.title ? child5.title : null}
                                                                    onClick={
                                                                        child5.function ? (child5.functionData ? e => (child5.function)(e, child5.functionData) : e => (child5.function)(e)) : null
                                                                    }
                                                                    className='react-divcreator-menu-4-li-a react-divcreator-menu-a'
                                                                >
                                                                    {
                                                                        child5.text
                                                                    }
                                                                </Link>
                                                            </span>
                                                        </li>
                                                    );
                                                }
                                                else {
                                                    etageMenu4.push(
                                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-4-li-vertical`}>
                                                            <span className='react-divcreator-menu-4-li-span react-divcreator-menu-span'>
                                                                <a
                                                                    href={child5.link}
                                                                    title={child5.title ? child5.title : null}
                                                                    onClick={
                                                                        child5.function ? (child5.functionData ? e => (child5.function)(e, child5.functionData) : e => (child5.function)(e)) : null
                                                                    }
                                                                    className='react-divcreator-menu-4-li-a react-divcreator-menu-a'
                                                                >
                                                                    {
                                                                        child5.text
                                                                    }
                                                                </a>
                                                            </span>
                                                        </li>
                                                    );
                                                }
                                            }
                                        }
                                        // after for loop add etage Menu 3 to the etage menu 2 
                                        /**
                                         * check if item should be an react router LINK
                                         */
                                        if (this.props.link) {
                                            etageMenu3.push(
                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-3-li-vertical`}>
                                                    <span className='react-divcreator-menu-3-li-span react-divcreator-menu-span'>
                                                        <Link
                                                            to={child4.link}
                                                            title={child4.title ? child4.title : null}
                                                            onClick={
                                                                child4.function ? (child4.functionData ? e => (child4.function)(e, child4.functionData) : e => (child4.function)(e)) : null
                                                            }
                                                            className='react-divcreator-menu-3-li-a react-divcreator-menu-a'
                                                        >
                                                            {
                                                                child4.text
                                                            }
                                                        </Link>
                                                    </span>
                                                    {
                                                        etageMenu4 &&
                                                        <ol className={`react-divcreator-menu-4-vertical`}>
                                                            {etageMenu4}
                                                        </ol>
                                                    }
                                                </li>
                                            );
                                        }
                                        else {
                                            etageMenu3.push(
                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-3-li-vertical`}>
                                                    <span className='react-divcreator-menu-3-li-span react-divcreator-menu-span'>
                                                        <a
                                                            href={child4.link}
                                                            title={child4.title ? child4.title : null}
                                                            onClick={
                                                                child4.function ? (child4.functionData ? e => (child4.function)(e, child4.functionData) : e => (child4.function)(e)) : null
                                                            }
                                                            className='react-divcreator-menu-3-li-a react-divcreator-menu-a'
                                                        >
                                                            {
                                                                child4.text
                                                            }
                                                        </a>
                                                    </span>
                                                    {
                                                        etageMenu4 &&
                                                        <ol className={`react-divcreator-menu-4-vertical`}>
                                                            {etageMenu4}
                                                        </ol>
                                                    }
                                                </li>
                                            );
                                        }
                                    }
                                    /**
                                     * item is an single entry
                                     */
                                    else {
                                        /**
                                         * check if item should be an react router LINK
                                         */
                                        if (this.props.link) {
                                            etageMenu3.push(
                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-3-li-vertical`}>
                                                    <span className='react-divcreator-menu-3-li-span react-divcreator-menu-span'>
                                                        <Link
                                                            to={child4.link}
                                                            title={child4.title ? child4.title : null}
                                                            onClick={
                                                                child4.function ? (child4.functionData ? e => (child4.function)(e, child4.functionData) : e => (child4.function)(e)) : null
                                                            }
                                                            className='react-divcreator-menu-3-li-a react-divcreator-menu-a'
                                                        >
                                                            {
                                                                child4.text
                                                            }
                                                        </Link>
                                                    </span>
                                                </li>
                                            );
                                        }
                                        else {
                                            etageMenu3.push(
                                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-3-li-vertical`}>
                                                    <span className='react-divcreator-menu-3-span react-divcreator-menu-span'>
                                                        <a
                                                            href={child4.link}
                                                            title={child4.title ? child4.title : null}
                                                            onClick={
                                                                child4.function ? (child4.functionData ? e => (child4.function)(e, child4.functionData) : e => (child4.function)(e)) : null
                                                            }
                                                            className='react-divcreator-menu-3-li-a react-divcreator-menu-a'
                                                        >
                                                            {
                                                                child4.text
                                                            }
                                                        </a>
                                                    </span>
                                                </li>
                                            );
                                        }
                                    }
                                }
                                // after for loop add etage Menu 3 to the etage menu 2 
                                /**
                                 * check if item should be an react router LINK
                                 */
                                if (this.props.link) {
                                    etageMenu2.push(
                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-2-li-vertical`}>
                                            <span className='react-divcreator-menu-2-li-span react-divcreator-menu-span'>
                                                <Link
                                                    to={child3.link}
                                                    title={child3.title ? child3.title : null}
                                                    onClick={
                                                        child3.function ? (child3.functionData ? e => (child3.function)(e, child3.functionData) : e => (child3.function)(e)) : null
                                                    }
                                                    className='react-divcreator-menu-2-li-a react-divcreator-menu-a'
                                                >
                                                    {
                                                        child3.text
                                                    }
                                                </Link>
                                            </span>
                                            {
                                                etageMenu3 &&
                                                <ul className={`react-divcreator-menu-3-vertical`}>
                                                    {etageMenu3}
                                                </ul>
                                            }
                                        </li>
                                    );
                                }
                                else {
                                    etageMenu2.push(
                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-2-li-vertical`}>
                                            <span className='react-divcreator-menu-2-li-span react-divcreator-menu-span'>
                                                <a
                                                    href={child3.link}
                                                    title={child3.title ? child3.title : null}
                                                    onClick={
                                                        child3.function ? (child3.functionData ? e => (child3.function)(e, child3.functionData) : e => (child3.function)(e)) : null
                                                    }
                                                    className='react-divcreator-menu-2-li-a react-divcreator-menu-a'
                                                >
                                                    {
                                                        child3.text
                                                    }
                                                </a>
                                            </span>
                                            {
                                                etageMenu3 &&
                                                <ul className={`react-divcreator-menu-3-vertical`}>
                                                    {etageMenu3}
                                                </ul>
                                            }
                                        </li>
                                    );
                                }
                            }
                            /**
                             * item is an single entry
                             */
                            else {
                                /**
                                 * check if item should be an react router LINK
                                 */
                                if (this.props.link) {
                                    etageMenu2.push(
                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-2-li-vertical`}>
                                            <span className='react-divcreator-menu-2-li-span react-divcreator-menu-span'>
                                                <Link
                                                    to={child3.link}
                                                    title={child3.title ? child3.title : null}
                                                    onClick={
                                                        child3.function ? (child3.functionData ? e => (child3.function)(e, child3.functionData) : e => (child3.function)(e)) : null
                                                    }
                                                    className='react-divcreator-menu-2-li-a react-divcreator-menu-a'
                                                >
                                                    {
                                                        child3.text
                                                    }
                                                </Link>
                                            </span>
                                        </li>
                                    );
                                }
                                else {
                                    etageMenu2.push(
                                        <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-2-li-vertical`}>
                                            <span className='react-divcreator-menu-2-li-span react-divcreator-menu-span'>
                                                <a
                                                    href={child3.link}
                                                    title={child3.title ? child3.title : null}
                                                    onClick={
                                                        child3.function ? (child3.functionData ? e => (child3.function)(e, child3.functionData) : e => (child3.function)(e)) : null
                                                    }
                                                    className='react-divcreator-menu-2-li-a react-divcreator-menu-a'
                                                >
                                                    {
                                                        child3.text
                                                    }
                                                </a>
                                            </span>
                                        </li>
                                    );
                                }
                            }
                        }
                        // after for loop add etage Menu 2 to the etage menu 2 
                        /**
                         * check if item should be an react router LINK
                         */
                        if (this.props.link) {
                            etageMenu1.push(
                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-1-li-vertical ${customClassForRootMarked}`}>
                                    <span className='react-divcreator-menu-1-li-span react-divcreator-menu-span'>
                                        <Link
                                            to={child2.link}
                                            title={child2.title ? child2.title : null}
                                            onClick={
                                                child2.function ? (child2.functionData ? e => (child2.function)(e, child2.functionData) : e => (child2.function)(e)) : null
                                            }
                                            className='react-divcreator-menu-1-li-a react-divcreator-menu-a'
                                        >
                                            {
                                                child2.text
                                            }
                                        </Link>
                                    </span>
                                    {
                                        etageMenu2 &&
                                        <ol className={`react-divcreator-menu-2-vertical`}>
                                            {etageMenu2}
                                        </ol>
                                    }
                                </li>
                            );
                        }
                        else {
                            etageMenu1.push(
                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-1-li-vertical ${customClassForRootMarked}`}>
                                    <span className='react-divcreator-menu-1-li-span react-divcreator-menu-span'>
                                        <a
                                            href={child2.link}
                                            title={child2.title ? child2.title : null}
                                            onClick={
                                                child2.function ? (child2.functionData ? e => (child2.function)(e, child2.functionData) : e => (child2.function)(e)) : null
                                            }
                                            className='react-divcreator-menu-1-li-a react-divcreator-menu-a'
                                        >
                                            {
                                                child2.text
                                            }
                                        </a>
                                    </span>
                                    {
                                        etageMenu2 &&
                                        <ol className={`react-divcreator-menu-2-vertical`}>
                                            {etageMenu2}
                                        </ol>
                                    }
                                </li>
                            );
                        }
                    }
                    /**
                     * item is an single entry
                     */
                    else {
                        /**
                         * check if item should be an react router LINK
                         */
                        if (this.props.link) {
                            etageMenu1.push(
                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-1-li-vertical ${customClassForRootMarked}`}>
                                    <span className='react-divcreator-menu-1-li-span react-divcreator-menu-span'>
                                        <Link
                                            to={child2.link}
                                            title={child2.title ? child2.title : null}
                                            onClick={
                                                child2.function ? (child2.functionData ? e => (child2.function)(e, child2.functionData) : e => (child2.function)(e)) : null
                                            }
                                            className='react-divcreator-menu-1-li-a react-divcreator-menu-a'
                                        >
                                            {
                                                child2.text
                                            }
                                        </Link>
                                    </span>

                                </li>
                            );
                        }
                        else {
                            etageMenu1.push(
                                <li key={customKey()} onClick={event => this.markAsClicked(customClassForRootMarked)} className={`react-divcreator-menu-1-li-vertical ${customClassForRootMarked}`}>
                                    <span className='react-divcreator-menu-1-li-span react-divcreator-menu-span'>
                                        <a
                                            href={child2.link}
                                            title={child2.title ? child2.title : null}
                                            onClick={
                                                child2.function ? (child2.functionData ? e => (child2.function)(e, child2.functionData) : e => (child2.function)(e)) : null
                                            }
                                            className='react-divcreator-menu-1-li-a react-divcreator-menu-a'
                                        >
                                            {
                                                child2.text
                                            }
                                        </a>
                                    </span>
                                </li>
                            );
                        }
                    }
                }

                return (
                    <ul id={rootId} className={masterClass}>
                        {
                            etageMenu1 && etageMenu1
                        }
                    </ul>
                );
            }
            else {
                return <p>No enought data passed to the type: {this.type}</p>;
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default menuVerticalHover;
