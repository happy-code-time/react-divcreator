import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Accordion, navigateToTopOfWebpage } from '../../index';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class menuanimationhamburger extends Component {
    
    constructor(props) {
        super(props);
        this.animateMenu = this.animateMenu.bind(this);
        this.cssClassAdder = this.cssClassAdder.bind(this);
        this.callback = this.callback.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.type = 'MenuAnimationHamburger';
        this.defaultClass = `react-divcreator-menuanimation-hamburger`;
        this.defaultClassMounted = 'react-divcreator-menuanimation-hamburger-mounted mounted';
        this.requiredProps = {
            useLink: 'boolean'
        };
        this.state = {
            defaultclassP: 'react-divcreator-menuanimation-icons--hamburger-p',
            animateClassP1: 'react-divcreator-menuanimation-icons--hamburger-p react-divcreator-menuanimation-icons--hamburger-p-animation-1',
            animateClassP2: 'react-divcreator-menuanimation-icons--hamburger-p react-divcreator-menuanimation-icons--hamburger-p-animation-2',
            animateClassP3: 'react-divcreator-menuanimation-icons--hamburger-p react-divcreator-menuanimation-icons--hamburger-p-animation-3',
            animatedHamburgerMenu: 'react-divcreator-menuanimation-hamburger_items react-divcreator-menuanimation-hamburger_items-animated',
            defaultHamburgerMenu: 'react-divcreator-menuanimation-hamburger_items',
            accordionDefault: 'react-divcreator-menuanimation-holder',
            accordionAnimation: 'react-divcreator-menuanimation-holder header-menu-animation',
            linkDefault: 'link',
            linkAnimation: 'link link-animation',
            animationDone: false,
            allRoutes: this.props.routes ? this.props.routes : [],
            classP1: 'react-divcreator-menuanimation-icons--hamburger-p',
            classP2: 'react-divcreator-menuanimation-icons--hamburger-p',
            classP3: 'react-divcreator-menuanimation-icons--hamburger-p',
            classAccordion: 'react-divcreator-menuanimation-holder',
            classLink: 'link',
            classHamburger: 'react-divcreator-menuanimation-hamburger_items',
            isAnimated: false,
            type: 'hamburger',
            border: this.props.border ? this.props.border : false,
            includeContent: this.props.includeContent ? this.props.includeContent : false,
            left: this.props.left ? this.props.left : false,
            debugging: true,
            mounted: false
        };
        this.buildTimeStart = Date.now();
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

    handleClickOutside(event) {
        try {
            if (!this.node.contains(event.target)) {
                this.setState({
                    classP1: 'react-divcreator-menuanimation-icons--hamburger-p',
                    classP2: 'react-divcreator-menuanimation-icons--hamburger-p',
                    classP3: 'react-divcreator-menuanimation-icons--hamburger-p',
                    classAccordion:  'react-divcreator-menuanimation-holder',
                    classLink: 'link',
                    classHamburger: 'react-divcreator-menuanimation-hamburger_items',
                    isAnimated: false,
                    border: this.props.border ? this.props.border : false,
                    animationDone: false
                });
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in handleClickOutside. Message ${error}`);
            }
        }
    }

    cssClassAdder(type) {
        return this.state.animatedMenu + type;
    }
    /**
     * Add an remove css classes to 
     * animate the menu
     */
    animateMenu(event, type) {
        let animationDone = this.state.animationDone;
        let classP1, classP2, classP3, classAccordion, classLink, classHamburger;

        if (animationDone) {
            classP1 = this.state.defaultclassP;
            classP2 = this.state.defaultclassP;
            classP3 = this.state.defaultclassP;
            classAccordion = this.state.accordionDefault;
            classLink = this.state.linkDefault;
            classHamburger = this.state.defaultHamburgerMenu;
        }
        else {
            classP1 = this.state.animateClassP1;
            classP2 = this.state.animateClassP2;
            classP3 = this.state.animateClassP3;
            classAccordion = this.state.accordionAnimation;
            classLink = this.state.linkAnimation;
            classHamburger = this.state.animatedHamburgerMenu;
        }
        animationDone = !animationDone;

        if (this.props.clickNavigateToTop) {
            navigateToTopOfWebpage();
        }

        this.setState({
            classP1,
            classP2,
            classP3,
            classAccordion,
            animationDone,
            classLink,
            classHamburger,
            isAnimated: !this.state.isAnimated
        });
    }

    callback(event, object) {
        if (object.function && 'function' === typeof object.function) {
            (object.function)(event, object, object.functionData);
        }
    }

    generateAllAccordionData() {
        const mappedRoutes = [];

        this.state.allRoutes.map((object) => {

            let targetLink = object.href ? object.href : '#';
            let classNames = object.class ? object.class : 'accordions-link';
            let hrefsId = object.id ? object.id : customKey();
            let text = object.text ? object.text : '';
            let attributes = object.attributes ? object.attributes : {};

            if (this.props.link) {
                if (object.isLink) {
                    mappedRoutes.push(
                        <Accordion
                            key={customKey()}
                            animation={true}
                            clickNavigateToTop={this.props.clickNavigateToTop}
                            data={[
                                {
                                    title: (
                                        <div className="react-divcreator-menu-animation__link">
                                            <Link
                                                id={hrefsId}
                                                className={classNames}
                                                key={customKey()}
                                                to={targetLink}
                                                onClick={(e) => this.callback(e, object)}
                                                {...attributes}
                                            >
                                                {text}
                                            </Link>
                                            {
                                                object.customData && object.customData
                                            }
                                        </div>
                                    )
                                }
                            ]}
                        />
                    )
                } else {
                    mappedRoutes.push(
                        <Accordion
                            key={customKey()}
                            animation={true}
                            clickNavigateToTop={this.props.clickNavigateToTop}
                            data={[
                                {
                                    title: (
                                        <div className="react-divcreator-menu-animation__link">
                                            <div
                                                id={hrefsId}
                                                className={classNames}
                                                key={customKey()}
                                                onClick={(e) => this.callback(e, object)}
                                                {...attributes}
                                            >
                                                {text}
                                            </div>
                                            {
                                                object.customData && object.customData
                                            }
                                        </div>
                                    )
                                }
                            ]}
                        />
                    );
                }
            } else {
                if (object.isLink) {
                    mappedRoutes.push(
                        <Accordion
                            key={customKey()}
                            animation={true}
                            clickNavigateToTop={this.props.clickNavigateToTop}
                            data={[
                                {
                                    title: (
                                        <div className="react-divcreator-menu-animation__link">
                                            <a
                                                id={hrefsId}
                                                className={classNames}
                                                key={customKey()}
                                                href={targetLink}
                                                onClick={(e) => this.callback(e, object)}
                                                {...attributes}
                                            >
                                                {text}
                                            </a>
                                            {
                                                object.customData && object.customData
                                            }
                                        </div>
                                    )
                                }
                            ]}
                        />
                    )
                } else {
                    mappedRoutes.push(
                        <Accordion
                            key={customKey()}
                            animation={true}
                            clickNavigateToTop={this.props.clickNavigateToTop}
                            data={[
                                {
                                    title: (
                                        <div className="react-divcreator-menu-animation__link">
                                            <div
                                                id={hrefsId}
                                                className={classNames}
                                                key={customKey()}
                                                onClick={(e) => this.callback(e, object)}
                                                {...attributes}
                                            >
                                                {text}
                                            </div>
                                            {
                                                object.customData && object.customData
                                            }
                                        </div>
                                    )
                                }
                            ]}
                        />
                    );
                }
            }
        });

        return mappedRoutes;
    }

    render() {
        const accordionData = this.generateAllAccordionData();
        let rootClass = this.props.class ? this.props.class : '';
        let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass}`;
        let masterId = this.props.id ? this.props.id : customKey();
        let holderStyle = {
            position: 'absolute'
        };

        if(this.state.left){
            holderStyle.left = (this.state.includeContent ? 'auto' : 'auto');
            holderStyle.right = (this.state.includeContent ? '0' : '0');
        } else {
            holderStyle.left = (this.state.includeContent ? 'auto' : '0');
            holderStyle.right = (this.state.includeContent ? 'auto' : 'auto');
        }

        let holderParentStyle = {
            position: 'absolute',
            top: 0, 
            left: 0, 
            display: 'block'
        };

        if(this.state.left && this.state.includeContent){
            holderParentStyle = {
                position: 'absolute',
                top: 0, 
                left: 'auto', 
                display: 'block',
                right: 0
            };
        }

        return (
            <div 
                className={masterClass} 
                id={masterId}
                ref={ node => this.node = node} 
            >
                {
                    'hamburger' == this.state.type &&
                    <div 
                        className={`react-divcreator-menuanimation-icons--hamburger ${this.state.border ? 'border' : ''} ${this.state.left ? 'rotate' : ''}`} 
                        onClick={(e) => this.animateMenu(e, 'hamburger')}
                    >
                        <p className={this.state.classP1}></p>
                        <p className={this.state.classP2}></p>
                        <p className={this.state.classP3}></p>
                    </div>
                }
                {
                    this.state.isAnimated && this.state.includeContent &&
                    <span style={holderParentStyle}>
                        <div className={`${this.state.classAccordion}`} style={holderStyle}>
                            <div className='react-divcreator-menuanimation-holder-accordion'>
                                {
                                    accordionData && accordionData
                                }
                            </div>
                        </div>
                    </span>
                }
                {
                    this.state.isAnimated && !this.state.includeContent &&
                    <div style={{ position: 'relative', top: 0, left: 0 }}>
                        <div className={`${this.state.classAccordion}`} style={holderStyle}>
                            <div className='react-divcreator-menuanimation-holder-accordion'>
                                {
                                    accordionData && accordionData
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}
export default menuanimationhamburger;
