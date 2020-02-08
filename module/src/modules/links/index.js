import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class links extends Component {

    constructor(props) {
        super(props);
        this.type = 'Links'
        this.defaultClass = 'react-divcreator-links';
        this.defaultClassMounted = 'react-divcreator-links-mounted';
        this.requiredProps = {
            'data': 'object'
        };
        this.state = {
            data: props.data,
            mounted: false
        };
        this.generateLinksHtml = this.generateLinksHtml.bind(this);
        this.buildTimeStart = Date.now();
    }

    componentDidMount(){
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    callback(event, item, callbackdata) {
        if (item.callback) {
            (item.callback)(event, item, callbackdata);
        }
    }

    generateLinksHtml() {
        if (this.state.data) {
            this.state.data.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            let finalLinks = [];
            this.state.data.map((item) => {
                let name = "react-divcreator-links-single-link";
                let finalBackground = item.image;
                let thisBackground = {
                    backgroundImage: `url(${finalBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                };

                const itemAsObject = {
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    isLink: item.isLink,
                    href: item.href,
                    callback: item.callback
                }

                if (this.props.link) {

                    if (item.isLink) {
                        finalLinks.push(
                            <div className="react-divcreator-links-holder" key={customKey()} id={item.id ? item.id : customKey() }>
                                <Link key={customKey()} to={item.href} onClick={(e) => { this.callback(e, itemAsObject, item.callbackCustomData) }}>
                                    <div key={customKey()} className="row">
                                        <div key={customKey()} className={name}>
                                            <div key={customKey()} className="react-divcreator-links-single-link-image">
                                                <div key={customKey()} className="react-divcreator-links-single-link-background-for-animation">
                                                    <div key={customKey()} className="react-divcreator-links-single-link-animation" style={thisBackground}></div>
                                                </div>
                                                <div className="react-divcreator-links-single-link-data">
                                                    {
                                                        item.customImageData && item.customImageData
                                                    }
                                                </div>
                                            </div>
                                            <div className="react-divcreator-links-content">
                                                <div key={customKey()} className="react-divcreator-links-single-link-title">
                                                    <p key={customKey()} >{item.title}</p>
                                                </div>
                                                <div key={customKey()} className="react-divcreator-links-single-link-description">
                                                    {
                                                        item.customDescData && item.customDescData
                                                    }
                                                </div>
                                                <div className="react-divcreator-links-single-link-footer">
                                                    {
                                                        item.customFooterData && item.customFooterData
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                    else {
                        finalLinks.push(
                            <div className="react-divcreator-links-holder" id={item.id ? item.id : customKey() } key={customKey()} onClick={(e) => { this.callback(e, itemAsObject, item.callbackCustomData) }}>
                                <div key={customKey()} className="row">
                                    <div key={customKey()} className={name}>
                                        <div key={customKey()} className="react-divcreator-links-single-link-image">
                                            <div key={customKey()} className="react-divcreator-links-single-link-background-for-animation">
                                                <div key={customKey()} className="react-divcreator-links-single-link-animation" style={thisBackground}></div>
                                            </div>
                                            <div className="react-divcreator-links-single-link-data">
                                                {
                                                    item.customImageData && item.customImageData
                                                }
                                            </div>
                                        </div>
                                        <div className="react-divcreator-links-content">
                                            <div key={customKey()} className="react-divcreator-links-single-link-title">
                                                <p key={customKey()} >{item.title}</p>
                                            </div>
                                            <div key={customKey()} className="react-divcreator-links-single-link-description">
                                                {
                                                    item.customDescData && item.customDescData
                                                }
                                            </div>
                                            <div className="react-divcreator-links-single-link-footer">
                                                    {
                                                        item.customFooterData && item.customFooterData
                                                    }
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
                else {
                    if (item.isLink) {
                        finalLinks.push(
                            <div className="react-divcreator-links-holder" id={item.id ? item.id : customKey() } key={customKey()}>
                                <a key={customKey()} href={item.href} onClick={(e) => { this.callback(e, itemAsObject, item.callbackCustomData) }}>
                                    <div key={customKey()} className="row">
                                        <div key={customKey()} className={name}>
                                            <div key={customKey()} className="react-divcreator-links-single-link-image">
                                                <div key={customKey()} className="react-divcreator-links-single-link-background-for-animation">
                                                    <div key={customKey()} className="react-divcreator-links-single-link-animation" style={thisBackground}></div>
                                                </div>
                                                <div className="react-divcreator-links-single-link-data">
                                                    {
                                                        item.customImageData && item.customImageData
                                                    }
                                                </div>
                                            </div>
                                            <div className="react-divcreator-links-content">
                                                <div key={customKey()} className="react-divcreator-links-single-link-title">
                                                    <p key={customKey()} >{item.title}</p>
                                                </div>
                                                <div key={customKey()} className="react-divcreator-links-single-link-description">
                                                    {
                                                        item.customDescData && item.customDescData
                                                    }
                                                </div>
                                                <div className="react-divcreator-links-single-link-footer">
                                                    {
                                                        item.customFooterData && item.customFooterData
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    }
                    else {
                        finalLinks.push(
                            <div className="react-divcreator-links-holder" id={item.id ? item.id : customKey() } key={customKey()} onClick={(e) => { this.callback(e, itemAsObject, item.callbackCustomData) }}>
                                <div key={customKey()} className="row">
                                    <div key={customKey()} className={name}>
                                        <div key={customKey()} className="react-divcreator-links-single-link-image">
                                            <div key={customKey()} className="react-divcreator-links-single-link-background-for-animation">
                                                <div key={customKey()} className="react-divcreator-links-single-link-animation" style={thisBackground}></div>
                                            </div>
                                            <div className="react-divcreator-links-single-link-data">
                                                {
                                                    item.customImageData && item.customImageData
                                                }
                                            </div>
                                        </div>
                                        <div className="react-divcreator-links-content">
                                            <div key={customKey()} className="react-divcreator-links-single-link-title">
                                                <p key={customKey()} >{item.title}</p>
                                            </div>
                                            <div key={customKey()} className="react-divcreator-links-single-link-description">
                                                {
                                                    item.customDescData && item.customDescData
                                                }
                                            </div>
                                            <div className="react-divcreator-links-single-link-footer">
                                                    {
                                                        item.customFooterData && item.customFooterData
                                                    }
                                                </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    }
                }
            });
            return finalLinks;
        }
        else {
            return null;
        }
    }
    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            let rootClass = this.props.class ? this.props.class : '';
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass}`;
            let masterId = this.props.id ? this.props.id : `${customKey()}`;

            return (
                <div className={masterClass} id={masterId}>
                    {
                        this.generateLinksHtml()
                    }
                </div>
            );

        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default links;
