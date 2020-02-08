import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class buttonsnavigation extends Component {

    constructor(props) {
        super(props);
        this.type = 'ButtonsNavigation'
        this.defaultClass = 'react-divcreator-buttons-navigation';
        this.defaultClassMounted = 'react-divcreator-buttons-navigation-mounted mounted';
        this.requiredProps = {
            'navigationTo' : 'string',
            'navigationTime' : 'number'
        };
        this.buildTimeStart = Date.now();
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    navigateWindowToElement(event, masterId){
        const self = this;
        const navigationToItem = this.props.navigationTo;
        const navigationTime = this.props.navigationTime;

        if(this.props.function){
            (this.props.function)(event, this.props.functionData);
        }

        if('#' == navigationToItem.charAt(0)){
            const str = navigationToItem.replace('#', '');
            const domElement = document.getElementById(str);
            self.scrollToElement(event, navigationTime, domElement, masterId);
        }
        if('.' == navigationToItem.charAt(0)){
            const domElement = document.querySelector(navigationToItem);
            self.scrollToElement(event,navigationTime, domElement, masterId);
        }
        if('#' != navigationToItem.charAt(0) && '.' != navigationToItem.charAt(0)){
            switch(navigationToItem){
                case 'top' : {
                    self.navigationToTopOfWebpage(navigationTime);
                    break;
                }
                case 'bottom' : {
                    self.navigationToBottomOfWebpage(navigationTime);
                    break;
                }
                default : {
                    self.navigationToTopOfWebpage(navigationTime);
                    break;
                }
            }
        }
    }

    navigationToTopOfWebpage(time){
        let userOnXPosition = document.documentElement.scrollTop;
        let timer = parseInt(time, 10);
        let pxToAdd = userOnXPosition / timer*4;
        //
        let xTop = setInterval( () => {
            document.documentElement.scrollTop = userOnXPosition;
            userOnXPosition -= (pxToAdd);

            if(-10 >= userOnXPosition){
                clearInterval(xTop);
            }
        }, 1 );
    }

    navigationToBottomOfWebpage(time){
        let userOnXPosition = document.documentElement.getBoundingClientRect().top;
        let elementsOffsetTop = document.documentElement.scrollHeight;
        elementsOffsetTop = parseInt(elementsOffsetTop) - 50;

        const haveToScrollXpixels = elementsOffsetTop - userOnXPosition;

        let timer = parseInt(time, 10);
        let pxToAdd = haveToScrollXpixels / timer*4;

        userOnXPosition = parseInt(-(userOnXPosition));
        //

        let xavier = userOnXPosition;
        let xBottom = setInterval( () => {
            xavier += pxToAdd;
            document.documentElement.scrollTop = xavier;

            if(xavier >= haveToScrollXpixels){
                clearInterval(xBottom);
            }
        }, 1 );
    }

    scrollToElement(event, time, domElement, masterId){
        const target = document.getElementById(masterId);

        if(null !== domElement){
            let currentXPosition = event.target.getBoundingClientRect().top;
            let targetsXPosition = domElement.getBoundingClientRect().top;
            let navigationCalculation = currentXPosition;

            // navigate to bottom, becouse found +
            if(0 < (targetsXPosition-currentXPosition)){
                targetsXPosition +=  document.documentElement.scrollTop;
                let targetToScroll = (targetsXPosition-currentXPosition);
                let pixelToAdd = (targetToScroll/time)*5;

                let scroller = setInterval( () => {
                    navigationCalculation += (pixelToAdd);
                    document.documentElement.scrollTop = navigationCalculation;

                    if(navigationCalculation >= targetsXPosition-50){ clearInterval(scroller) }

                },(time/100) );
                return;
            }

            // navigate to top, becouse found -
            if(0 > (targetsXPosition-currentXPosition) && null !== target){
                const currentTop = document.documentElement.scrollTop;
                let pxToSlideUp = (currentTop-Math.abs(targetsXPosition));
                let adder = 0;
                let pixelToAdd = (currentTop/time);
                let scroller = setInterval( () => {
                    adder += pixelToAdd;
                    document.documentElement.scrollTop -= adder;

                    if(document.documentElement.scrollTop <= pxToSlideUp){ clearInterval(scroller) }

                }, (time/100) );
                return;
            }
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
            let masterId = `${this.props.id ? this.props.id : customKey()}`;

            if (this.props.navigationTo) {
                return (
                    <div key={customKey()}
                    className={masterClass}
                    id={masterId}
                    onClick={(e) => this.navigateWindowToElement(e, masterId)}
                >
                        {
                            !this.props.html && 'top' === this.props.navigationTo && 
                            <div 
                                className='react-divcreator-buttons-navigation__to-top'
                                {...this.props.attributes}
                            >
                                <p className='react-divcreator-buttons-navigation__to-top-arrow'> &#8593; </p>
                            </div>
                        }
                        {
                            !this.props.html && 'bottom' === this.props.navigationTo && 
                            <div 
                                className='react-divcreator-buttons-navigation__to-bottom'
                                {...this.props.attributes}
                            >
                                <p className='react-divcreator-buttons-navigation__to-bottom-arrow'> &#8595; </p>
                            </div>
                        }
                        {

                            this.props.html &&
                            <span 
                                className='react-divcreator-buttons-navigation__span'
                                {...this.props.attributes}
                            >
                                {
                                    this.props.html
                                }
                            </span>
                        }
                </div>
                )
            }
            else {
                return <p>No enought data passed to the type: {this.type}</p>;
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default buttonsnavigation;
