import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import isElementVisible from '../funtions/isElementVisible';

class verticalbars extends Component {

    constructor(props) {
        super(props);
        this.type = 'Verticalbars';
        this.defaultClass = 'react-divcreator-verticalbars';
        this.requiredProps = {
            'data': 'object',
            'animationOn' : 'string'
        };
        this.state = {
            uniqueIdForAnimations: `react-divcreator-verticalbars-unique-${customKey()}`,
            animationDone: false,
            uniqueId : `react-divcreator-verticalbars-session-storage-${customKey()}`
        }
        window.sessionStorage.setItem(this.state.uniqueId+'-items-generated', 'true');
        window.sessionStorage.setItem(this.state.uniqueId, "");

        /**
         * check if the user wish to make an animation
         * on scroll event
         * then require the property 
         */
        if('scroll' === this.props.animationOn){
            this.requiredProps.animationScroll = 'number';
        };
    }

    generateBars() {
        let bars = [];
        let itemsToAnimate = [];
        let shouldGenerate =  window.sessionStorage.getItem(this.state.uniqueId+"-items-generated");

        if (1 <= this.props.data.length && 'true' === shouldGenerate) {
            let styleOfAnimatedBar = {
                posittion: 'absolute',
                top: '0',
                left: '0',
                width: '0%',
                height: '100%'
            };

            let uniqueIdOfEachItem = '', uuidCls = '';
            itemsToAnimate = [];

            this.props.data.map( (object, index) => {
                uniqueIdOfEachItem = `divcreator-unique-bar-${customKey()}-${index}`;
                uuidCls = `divcreator-animated-bar-item-${index} react-divcreator-verticalbars-animated-bar`;

                bars.push(
                    <div className='react-divcreator-verticalbars-entry' key={customKey()}>
                        <div className='react-divcreator-verticalbars-entry-title'>
                            <span className='react-divcreator-verticalbars-entry-title-span'>
                                {
                                    object.title && object.title
                                }
                            </span>
                        </div>
                        <div className='react-divcreator-verticalbars-entry-value-and-vector'>
                            <div className='react-divcreator-verticalbars-entry-value'>
                                <span className='react-divcreator-verticalbars-entry-value-span'>
                                    {
                                        object.value && object.value
                                    }
                                </span>
                            </div>
                            <div className='react-divcreator-verticalbars-entry-vector'>
                                <span className='react-divcreator-verticalbars-entry-vector-span'>
                                    {
                                        object.valueVector && object.valueVector
                                    }
                                </span>
                            </div>
                        </div>
                        {
                            object.data && 
                            <span>
                                {
                                    object.data
                                }
                            </span>
                        }
                        <div style={styleOfAnimatedBar}
                            id={uniqueIdOfEachItem}
                            className={uuidCls}
                        />
                    </div>
                );
                itemsToAnimate.push(
                    {
                        id: uniqueIdOfEachItem,
                        value: object.value
                    }
                );
            });
            window.sessionStorage.setItem(this.state.uniqueId+'-items-generated', 'false');
            window.sessionStorage.setItem(this.state.uniqueId, JSON.stringify(itemsToAnimate));
        }

        return bars;
    }

    shouldComponentUpdate(){
        return false;
    }

    animateBars() {
        let allItems = window.sessionStorage.getItem(this.state.uniqueId);
        allItems = JSON.parse(allItems);
        this.setState({
            animationDone: true
        });
        let domElement;

        allItems.map( element => {
            domElement = document.getElementById(element.id);

            if ('undefined' !== domElement && null !== domElement) {
                domElement.style.width = element.value + '%';
            }
        });
        this.componentWillUnmount();
    }

    animateBarsScroll(){
        let uuid = `.${this.state.uniqueIdForAnimations}`;
        let element = document.querySelector(uuid);

        let checkVisibility = setInterval( () => {

            if (isElementVisible(element, this.props.animationScroll)) {
                this.animateBars();
                clearInterval(checkVisibility);
            }
        }, 500);
    }

    componentWillUnmount() {
        const self = this;
        let uuid = `.${this.state.uniqueIdForAnimations}`;
        let element = document.querySelector(uuid);

        if ('undefined' !== element && null !== element) {
            switch(this.props.animationOn){
                case 'click' : {
                    element.removeEventListener('click', self.animateBars);
                    break;
                }
                case 'dbclick' : {
                    element.removeEventListener('dblclick', self.animateBars);
                    break;
                }
                case 'hover' :{
                    element.removeEventListener('mouseover', self.animateBars);
                    break;
                }
                case 'scroll' : {
                    window.removeEventListener('scroll', self.animateBarsScroll);
                    break;
                }
                default : {
                    window.removeEventListener('scroll', self.animateBarsScroll);
                    break;
                }
            }
        }
    }

    componentDidMount() {
        const self = this;
        let uuid = `.${this.state.uniqueIdForAnimations}`;
        let element = document.querySelector(uuid);

        if ('undefined' !== element && null !== element && !this.state.animationDone) {
            switch(this.props.animationOn){
                case 'click' : {
                    element.addEventListener('click', () => self.animateBars());
                    break;
                }
                case 'dbclick' : {
                    element.addEventListener('dblclick', () => self.animateBars());
                    break;
                }
                case 'hover' :{
                    element.addEventListener('mouseover', () => self.animateBars());
                    break;
                }
                case 'scroll' : {
                    window.addEventListener('scroll', self.animateBarsScroll());
                    break;
                }
                default : {
                    window.addEventListener('scroll', self.animateBarsScroll());
                    break;
                }
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
            let masterClass = `${this.defaultClass} ${rootClass} ${this.state.uniqueIdForAnimations}`;
            let masterId = `${this.props.id ? this.props.id : customKey()}`;

            let items = this.generateBars();

            return (
                <div id={masterId} className={masterClass} key={customKey()}>
                    {
                        1 <= items.length && items
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default verticalbars;
