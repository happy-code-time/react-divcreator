import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Accordion, navigateToTopOfWebpage } from '../../index';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class menuanimationsquare extends Component {
    constructor(props) {
        super(props);
        this.animateMenu = this.animateMenu.bind(this);
        this.cssClassAdder = this.cssClassAdder.bind(this);
        this.callback = this.callback.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.animateMenuSquare = this.animateMenuSquare.bind(this);

        this.type = 'MenuAnimationSquare';
        this.defaultClass = `react-divcreator-menuanimation-square`;
        this.defaultClassMounted = 'react-divcreator-menuanimation-square-mounted mounted';
        this.requiredProps = {
            useLink: 'boolean'
        };
        this.state = {
            accordionDefault: 'react-divcreator-menuanimation-holder',
            accordionAnimation: 'react-divcreator-menuanimation-holder header-menu-animation',
            linkDefault: 'link',
            linkAnimation: 'link link-animation',
            animationDone: false,
            allRoutes: this.props.routes ? this.props.routes : [],
            classAccordion: 'react-divcreator-menuanimation-holder',
            classLink: 'link',
            isAnimated: false,
            type: 'square',
            dotsAnimated: '',
            squareAnimated: '',
            customAnimated: '',
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
                    classAccordion:  'react-divcreator-menuanimation-holder',
                    classLink: 'link',
                    isAnimated: false,
                    dotsAnimated: '',
                    squareAnimated: '',
                    customAnimated: '',
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
        let classAccordion, classLink;

        if (animationDone) {
            classAccordion = this.state.accordionDefault;
            classLink = this.state.linkDefault;
        }
        else {
            classAccordion = this.state.accordionAnimation;
            classLink = this.state.linkAnimation;
        }
        animationDone = !animationDone;

        if (this.props.clickNavigateToTop) {
            navigateToTopOfWebpage();
        }

        this.setState({
            classAccordion,
            animationDone,
            classLink,
            isAnimated: !this.state.isAnimated
        }, () => {
            if ('square' == type) {
                this.animateMenuSquare();
            }
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

    animateMenuSquare() {
        if (this.state.isAnimated) {
            this.setState({
                squareAnimated: 'react-divcreator-menuanimation-icons--square__animated'
            })
        } else {
            this.setState({
                squareAnimated: ''
            })
        }
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
                    'square' == this.state.type &&
                    <div 
                        className={`react-divcreator-menuanimation-icons--square ${this.state.squareAnimated} ${this.state.border ? 'border' : ''}`} 
                        onClick={(e) => this.animateMenu(e, 'square')}
                    >
                        <span className='react-divcreator-menuanimation-icons--square__span react-divcreator-menuanimation-icons--square__span-1'>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-1'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-2'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-3'></div>
                        </span>
                        <span className='react-divcreator-menuanimation-icons--square__span react-divcreator-menuanimation-icons--square__span-2'>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-4'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-5'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-6'></div>
                        </span>
                        <span className='react-divcreator-menuanimation-icons--square__span react-divcreator-menuanimation-icons--square__span-3'>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-7'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-8'></div>
                            <div className='react-divcreator-menuanimation-icons--square__div react-divcreator-menuanimation-icons--square__div-9'></div>
                        </span>
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
export default menuanimationsquare;
