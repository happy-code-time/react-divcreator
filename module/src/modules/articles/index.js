import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class articles extends Component {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClickOutsideAll = this.handleClickOutsideAll.bind(this);
        this.type = 'Articles';
        this.defaultClass = 'react-divcreator-articles';
        this.defaultClassMounted = 'react-divcreator-articles-mounted mounted';
        this.requiredProps = {
            'data': 'object',
            'articleType': 'number',
            'borderActive': 'boolean',
            'link': 'boolean'
        }
        this.buildTimeStart = Date.now();
        /**
         * if the user choosed an border then add more required types
         */
        if (typeof true === typeof this.props.borderActive && true === this.props.borderActive) {
            this.requiredProps.borderColor = 'string';
            this.requiredProps.borderSite = 'string';
            this.requiredProps.borderWidth = 'number';
        }
        this.state = {
            data: this.buildDataToggler(this.props),
            animation: this.props.animation ? this.props.animation : false,
            mounted: false,
            keepOpen: this.props.keepOpen ? this.props.keepOpen : false,
            animateKeepOpenBack: this.props.animateKeepOpenBack ? this.props.animateKeepOpenBack : false
        };
        this.lastAnimatedItem = '';
        this.time =  this.props.animation ? 300 : 0;
        this.debugging = false;
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        document.addEventListener('mousedown', this.handleClickOutsideAll, false);
        document.addEventListener('touchstart', this.handleClickOutsideAll, false);
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideAll, false);
        document.removeEventListener('touchstart', this.handleClickOutsideAll, false);
    }

    handleClickOutside() {
        const classNameToClose = '.react-divcreator-articles-toggle';

        try {
            const domNode = this.node;

            if (this.state.animation && domNode.querySelectorAll(classNameToClose) && domNode.querySelectorAll(classNameToClose).length && !this.state.keepOpen) {

                for(let x = 0; x <= domNode.querySelectorAll(classNameToClose).length-1; x++){
                    domNode.querySelectorAll(classNameToClose)[x].classList.add('animation-y-back');

                    setTimeout( () => {
                        domNode.querySelectorAll(classNameToClose)[x].classList.remove('animation-y-back');
                    }, this.time);
                }                   
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in handleClickOutside. Message ${error}`);
            }
        }
    }

    handleClickOutsideAll(event){
        try{
            if (!this.node.contains(event.target) && !this.state.keepOpen) {
                this.handleClickOutside();
                const data = this.state.data;
        
                data.map( item => {
                    item['toggled'] = false;
                });
        
                setTimeout( () => {
                    this.setState({ 
                        data 
                    });
                }, this.time);
            }
        } catch (error){
            if (this.debugging) {
                console.error(`Error in handleClickOutsideAll. Message ${error}`);
            }   
        }
    }

    buildDataToggler(props) {
        if (props && props.data && props.data.length) {
            const values = props.data;

            values.map((item, index) => {
                item['toggled'] = item['toggled'] ? item['toggled'] : false;
                item['index'] = index;
            });

            return values;
        }
        else {
            return [];
        }
    }

    returnArticlesHtml(object, type) {
        const x = object['index'];
        const uuid = `${customKey()}`;

        if ('image' === type) {
            let styleImgBox = "";
            let styleContentBox = "";
            /**
             * check if the user wish to add only image as background
             * or user want to specify css background properties
             */
            if (true === object.onlyImage) {
                styleImgBox = {
                    backgroundImage: `url(${object.src})`
                }
            }
            if (false === object.onlyImage) {
                styleImgBox = {
                    background: `url(${object.src}) ${object.srcOptions ? object.srcOptions : null}`
                }
            }
            styleContentBox = {};
            /**
             * check if user turned on the border activity
             */
            if (typeof true === typeof this.props.borderActive && true === this.props.borderActive) {
                let item = this.firstLetterToUpper();
                let borderDirection = 'border' + item;
                let borderWidth = parseInt(this.props.borderWidth);
                styleContentBox[borderDirection] = `${this.props.borderColor} solid ${borderWidth}px`;
            }
            return (
                <div 
                    key={customKey()} 
                    className='react-divcreator-articles-image'
                    onClick={(e) => this.toggleContent(object, uuid)}
                >
                    <div className='react-divcreator-articles-image--img' style={styleImgBox}>
                        {
                            object.dataImage && object.dataImage
                        }
                    </div>
                    <div className='react-divcreator-articles-image--content' style={styleContentBox}>
                        <div className='react-divcreator-articles-image--content-title'>
                            <h1>{object.title}</h1>
                        </div>
                        <div className='react-divcreator-articles-image--content-description'>
                            <p>{object.description}</p>
                        </div>
                        <span id={uuid}>
                            {
                                object['toggled'] && object.dataContent && object.dataContent
                            }
                        </span>
                    </div>
                </div>
            );
        }
        if ('click' === type) {
            /**
             * check if user turned on the border activity
             */
            let styleContentBox = new Object();

            if (typeof true === typeof this.props.borderActive && true === this.props.borderActive) {
                let item = this.firstLetterToUpper();
                let borderDirection = 'border' + item;
                let borderWidth = parseInt(this.props.borderWidth);
                styleContentBox[borderDirection] = `${this.props.borderColor} solid ${borderWidth}px`;
            }
            let customKeyToggle = `react-divcreator-articles-click--content-to-toggle-random-${customKey()}`;
            let classN = `react-divcreator-articles-click--content-to-toggle ${customKeyToggle}`;

            if (object['toggled']) {
                if (x == this.lastAnimatedItem) {
                    classN = `${classN} react-divcreator-articles-toggle ${this.state.animation ? 'animate-y' : ''}`;
                    this.lastAnimatedItem = '';
                }
            } else {
                classN = `${classN} react-divcreator-articles-toggle ${this.state.animation ? 'animate-y-back' : ''}`;
            }

            return (
                <div key={customKey()}
                    className='react-divcreator-articles-click'
                    onClick={(e) => this.toggleContent(object, uuid)}
                    style={styleContentBox}
                >
                    <div className='react-divcreator-articles-click--content'>
                        <div className='react-divcreator-articles-click--content-title'>
                            <h1>{object.title}</h1>
                        </div>
                        <div className='react-divcreator-articles-click--content-description'>
                            <p>{object.description}</p>
                        </div>
                    </div>
                    <div id={uuid} className={classN}>
                        {
                            object['toggled'] && object.dataContent && object.dataContent
                        }
                    </div>
                </div>
            );
        }
        if ('text' === type) {
            /**
             * check if user turned on the border activity
             */
            let styleContentBox = new Object();

            if (typeof true === typeof this.props.borderActive && true === this.props.borderActive) {
                let item = this.firstLetterToUpper();
                let borderDirection = 'border' + item;
                let borderWidth = parseInt(this.props.borderWidth);
                styleContentBox[borderDirection] = `${this.props.borderColor} solid ${borderWidth}px`;
            }

            return (
                <div 
                    key={customKey()} 
                    className='react-divcreator-articles-text' 
                    style={styleContentBox}
                    onClick={(e) => this.toggleContent(object, uuid)}
                >
                    <div className='react-divcreator-articles-text--content'>
                        <div className='react-divcreator-articles-text--content-title'>
                            <h1>{object.title}</h1>
                        </div>
                        <div className='react-divcreator-articles-text-content-description'>
                            <p>{object.description}</p>
                        </div>
                    </div>
                    <div id={uuid} className='react-divcreator-articles-text--content-custom'>
                        {
                            object['toggled'] && object.dataContent && object.dataContent
                        }
                    </div>
                </div>
            );
        }

        if ('clickImage' === type) {
            let styleImgBox = "";
            let styleContentBox = "";
            /**
             * check if the user wish to add only image as background
             * or user want to specify css background properties
             */
            if (true === object.onlyImage) {
                styleImgBox = {
                    backgroundImage: `url(${object.src})`
                }
            }
            if (false === object.onlyImage) {
                styleImgBox = {
                    background: `url(${object.src}) ${object.srcOptions ? object.srcOptions : null}`
                }
            }
            styleContentBox = {};
            /**
             * check if user turned on the border activity
             */
            if (typeof true === typeof this.props.borderActive && true === this.props.borderActive) {
                let item = this.firstLetterToUpper();
                let borderDirection = 'border' + item;
                let borderWidth = parseInt(this.props.borderWidth);
                styleContentBox[borderDirection] = `${this.props.borderColor} solid ${borderWidth}px`;
            }
            let customKeyToggle = `react-divcreator-articles-click--content-to-toggle-random-${customKey()}`;
            let classN = `react-divcreator-articles-click--content-to-toggle ${customKeyToggle}`;

            if (object['toggled']) {
                if (x == this.lastAnimatedItem) {
                    classN = `${classN} react-divcreator-articles-toggle ${this.state.animation ? 'animate-y' : ''}`;
                    this.lastAnimatedItem = '';
                }
            } else {
                classN = `${classN} react-divcreator-articles-toggle ${this.state.animation ? 'animate-y-back' : ''}`;
            }

            return (
                <div key={customKey()} className='react-divcreator-articles-imageclick' onClick={(e) => this.toggleContent(object, uuid)}>
                    <div className='react-divcreator-articles-imageclick--img' style={styleImgBox}>
                        {
                            object.dataImage && object.dataImage
                        }
                    </div>
                    <div className='react-divcreator-articles-imageclick--content' style={styleContentBox}>
                        <div className='react-divcreator-articles-imageclick--content-title'>
                            <h1>{object.title}</h1>
                        </div>
                        <div className='react-divcreator-articles-imageclick--content-description'>
                            <p>{object.description}</p>
                        </div>
                        <div  id={uuid} className={classN}>
                            {
                                object['toggled'] && object.dataContent && object.dataContent
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }

    toggleContent(object, uuid) {
        this.handleClickOutside();
        const data = this.state.data;
        let timeOut = 0;

        if (object) {
            const x = object['index'];
            this.lastAnimatedItem = x;

            data.map((item, i) => {
                if (i == x) {
                    item['toggled'] = !item['toggled'];

                    if(!item['toggled'] && !this.state.keepOpen){
                        timeOut = this.time;
                    }

                    if(!item['toggled'] 
                        && this.state.keepOpen 
                        && this.state.animateKeepOpenBack 
                        && uuid 
                        && document.getElementById(uuid)
                    ){
                        document.getElementById(uuid).classList.add('animation-y-back');
                        timeOut = this.time;
                    }
                } else {
                    if(!this.state.keepOpen){
                        item['toggled'] = false;
                    } else {
                        item['toggled'] = item['toggled'];
                    }
                }
            })
        }

        setTimeout( () => {
            this.setState({
                data
            });
        }, timeOut);
    }

    firstLetterToUpper() {
        if (this.props.borderSite.length) {
            let item = this.props.borderSite.toLowerCase();
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
    }

    returnHTML(data, requiredProps, type) {
        let checkProps = "";

        return data.map((singleArticle) => {
            checkProps = checkRequiredProps(singleArticle, requiredProps);

            if (true == checkProps.keysAvailable && false == checkProps.type) {
                switch (type) {
                    case 'image': {
                        if (singleArticle.href) {
                            if (this.props.link) {
                                return (
                                    <Link
                                        key={customKey()}
                                        to={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'image')}
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <a
                                        key={customKey()}
                                        href={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'image')}
                                    </a>
                                );
                            }
                        }

                        return (
                            <div key={customKey()} onClick={
                                singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                            }>
                                {this.returnArticlesHtml(singleArticle, 'image')}
                            </div>
                        );
                    }
                    case 'click': {
                        if (singleArticle.href) {
                            if (this.props.link) {
                                return (
                                    <Link
                                        key={customKey()}
                                        to={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'click')}
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <a
                                        key={customKey()}
                                        href={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'click')}
                                    </a>
                                );
                            }
                        }

                        return (
                            <div key={customKey()} onClick={
                                singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                            }>
                                {this.returnArticlesHtml(singleArticle, 'click')}
                            </div>
                        );
                    }
                    case 'text': {
                        if (singleArticle.href) {
                            if (this.props.link) {
                                return (
                                    <Link
                                        key={customKey()}
                                        to={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'text')}
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <a
                                        key={customKey()}
                                        href={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'text')}
                                    </a>
                                );
                            }
                        }

                        return (
                            <div key={customKey()} onClick={
                                singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                            }>
                                {this.returnArticlesHtml(singleArticle, 'text')}
                            </div>
                        );
                    }
                    case 'clickImage': {
                        if (singleArticle.href) {
                            if (this.props.link) {
                                return (
                                    <Link
                                        key={customKey()}
                                        to={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'clickImage')}
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <a
                                        key={customKey()}
                                        href={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'clickImage')}
                                    </a>
                                );
                            }
                        }

                        return (
                            <div key={customKey()} onClick={
                                singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                            }>
                                {this.returnArticlesHtml(singleArticle, 'clickImage')}
                            </div>
                        );
                    }
                    default: {
                        if (singleArticle.href) {
                            if (this.props.link) {
                                return (
                                    <Link
                                        key={customKey()}
                                        to={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'text')}
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <a
                                        key={customKey()}
                                        href={singleArticle.href ? singleArticle.href : null}
                                        title={singleArticle.title ? singleArticle.title : null}
                                        onClick={
                                            singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                                        }
                                    >
                                        {this.returnArticlesHtml(singleArticle, 'text')}
                                    </a>
                                );
                            }
                        }

                        return (
                            <div key={customKey()} onClick={
                                singleArticle.function ? (singleArticle.functionData ? e => (singleArticle.function)(e, singleArticle.functionData) : e => (singleArticle.function)(e)) : null
                            }>
                                {this.returnArticlesHtml(singleArticle, 'text')}
                            </div>
                        );
                    }
                }
            }
            else {
                return missingKeyOrInvalidType(checkProps, this.type + ' (in child object)');
            }
        })
    }
    buildData(data) {
        if (1 <= data.length) {
            let requiredProps = {
                'title': 'string',
                'description': 'string'
            };
            /**
             * now we check for more keys depends 
             * on what type was subbmitted by the user
             */
            switch (this.props.articleType) {
                /**
                 * type image
                 */
                case 1: {
                    requiredProps.src = 'string';
                    requiredProps.onlyImage = 'boolean';
                    requiredProps.srcOptions = 'string';

                    return this.returnHTML(data, requiredProps, 'image');
                }
                /**
                 * type with click function to how article or custom data
                 */
                case 2: {
                    return this.returnHTML(data, requiredProps, 'click');
                }
                /**
                 * just title and little text
                 */
                case 3: {
                    return this.returnHTML(data, requiredProps, 'text');
                }
                /**
                 * type image click
                 */
                case 4: {
                    requiredProps.src = 'string';
                    requiredProps.onlyImage = 'boolean';
                    requiredProps.srcOptions = 'string';

                    return this.returnHTML(data, requiredProps, 'clickImage');
                }
                default: {
                    return this.returnHTML(data, requiredProps, 'text');
                }
            }
        }
        else {
            return <p>Cannot generate articles without data</p>
        }
    }
    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass}`;
            let masterId = this.props.id ? this.props.id : `${customKey()}`;

            return (
                <div 
                    id={masterId} 
                    className={masterClass} 
                    key={customKey()}
                    ref={ node => this.node = node} 
                >
                    {
                        this.buildData(this.state.data)
                    }
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default articles;
