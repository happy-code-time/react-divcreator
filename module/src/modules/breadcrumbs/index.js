import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

import UrlExtractor from '../funtions/urlExtractor';

import { navigateToTopOfWebpage } from '../../index';

class breadcrumbs extends Component {

    constructor(props) {
        super(props);
        this.handleCLick = this.handleCLick.bind(this);
        this.generateBreadcrumbs = this.generateBreadcrumbs.bind(this);
        this.generateLinks = this.generateLinks.bind(this);

        this.type = 'Breadcrumbs';
        this.defaultClass = 'react-divcreator-breadcrumbs';
        this.defaultClassMounted = 'react-divcreator-breadcrumbs-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            link: this.props.link ? this.props.link : false,
            separator: this.props.separator ? this.props.separator : '/',
            data: this.props.data ? this.props.data : [],
            isReactHashRouter: this.props.isReactHashRouter ? this.props.isReactHashRouter : false,
            showPort: this.props.showPort ? this.props.showPort : false,
            showProtocol: this.props.showProtocol ? this.props.showProtocol : false,
            overrideHostname: this.props.overrideHostname ? this.props.overrideHostname : false,
            clickNavigateToTop: this.props.clickNavigateToTop ? this.props.clickNavigateToTop : false,
            breadcrumbsLink: this.props.breadcrumbsLink ? this.props.breadcrumbsLink : false
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    handleCLick(event, object){
        if(object && object.function && 'function' === typeof object.function){
            (object.function)(event, object, object.functionData);
        }
    }

    generateBreadcrumbs(data){
        const breadcrumbs = [];

        data.map( (o ,i) => {
            const text = o.text ? o.text : '';
            const link = o.href ? o.href : '';
            const attributes = o.attributes ? o.attributes : {};

            breadcrumbs.push(
                <li
                    key={customKey()}
                    className={`${this.defaultClass}__breadcrumb ${this.defaultClass}__breadcrumb--li`}
                >
                    {
                        this.state.link && link &&
                        <Link 
                            to={link}
                            {...attributes}
                            onClick={ (e) => this.handleCLick(e, o) }
                        >
                            {
                                <span
                                    className={`${this.defaultClass}__breadcrumb--li-span`}
                                >
                                    {
                                        text
                                    }
                                </span>
                            }
                        </Link>
                    }
                    {
                        !this.state.link && link &&
                        <a 
                            href={link}
                            {...attributes}
                            onClick={ (e) => this.handleCLick(e, o) }
                        >
                            {
                                <span
                                    className={`${this.defaultClass}__breadcrumb--li-span`}
                                >
                                    {
                                        text
                                    }
                                </span>
                            }
                        </a>
                    }
                    {
                        !link &&
                        <div
                            {...attributes}
                            onClick={ (e) => this.handleCLick(e, o) }
                        >
                            {
                                <span
                                    className={`${this.defaultClass}__breadcrumb--li-span`}
                                >
                                    {
                                        text
                                    }
                                </span>
                            }
                        </div>
                    }
                </li>
            );

            if(i !== data.length-1){
                breadcrumbs.push(
                    <li
                        key={customKey()}
                        className={`${this.defaultClass}__breadcrumb--separator`}
                    >
                        {
                            this.state.separator
                        }
                    </li>
                );  
            }
        });

        return breadcrumbs;
    }

    generateLinks() {
        let breadcrumbs = [];

        if(this.state.data && this.state.data.length){
            breadcrumbs = this.generateBreadcrumbs(this.state.data);

        } else {
            const init = new UrlExtractor(window.location);
            init.extract();
            const extracted = init.getExtractedUrlAllEntrys();
            const newElements = [];
            const splitter = ['?', ':', '#', '/'];

            if(extracted.length){
                let chaining = '';

                for(let x = 0; x <= extracted.length-1; x++){
                    let urlString = extracted[x];
                    let splitted = [];
                    let current = '';
                    let original = extracted[x];

                    splitter.map( a => {

                        if(this.state.showPort && ':' == a && 0 == x){
                            current = urlString;

                            if(this.state.showProtocol){
                                urlString = `${window.location.protocol}//${current}`;
                                current = urlString;
                            } 
                        }

                        if(0 == x && this.state.overrideHostname && this.state.overrideHostname.length && typeof 'aaa' == typeof this.state.overrideHostname){
                            current = this.state.overrideHostname;
                        }

                        else {
                            splitted = urlString.split(a);
                            extracted[x] = splitted[0];
                            current = urlString;
                            urlString = extracted[x];
                        }
                    });
                    
                    chaining += original;

                    if(x !== extracted.length-1){
                        if(x === 0){
                            if(this.state.isReactHashRouter){
                                chaining = '/#/';
                            } else {
                                chaining = '/';
                            }
                        } else {
                            chaining += '/';
                        }
                    }

                    const object = {
                        text: current.charAt(0).toUpperCase() + current.slice(1).toLowerCase()
                    };

                    if(this.state.breadcrumbsLink){
                        object.href = chaining;
                    }

                    if(this.state.clickNavigateToTop){
                        object.function = navigateToTopOfWebpage;
                    }

                    newElements.push(object);
                }
            }

            if(newElements.length){
                breadcrumbs = this.generateBreadcrumbs(newElements);
            }
        }

        return (
            <ul
                key={customKey()}
                className={`${this.defaultClass}--breadcrumbs ${this.defaultClass}--breadcrumbs-ul`}
            >
                {
                    breadcrumbs
                }
            </ul>
        )
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const breadcrumbs = this.generateLinks();

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        breadcrumbs
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default breadcrumbs;