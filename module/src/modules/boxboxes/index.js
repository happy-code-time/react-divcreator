import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class boxboxes extends Component {

    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.animateBoxesScroll = this.animateBoxesScroll.bind(this);
        this.animateBoxes = this.animateBoxes.bind(this);
        this.animationGenerator = this.animationGenerator.bind(this);

        this.type = 'BoxBoxes';
        this.defaultClass = 'react-divcreator-box-boxes';
        this.defaultClassMounted = 'react-divcreator-box-boxes-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            leftData: this.props.leftData ? this.props.leftData : [],
            rightData: this.props.rightData ? this.props.rightData : [],
            leftBreak: this.props.leftBreak ? this.props.leftBreak : 1,
            rightBreak: this.props.rightBreak ? this.props.rightBreak : 1,
            border: this.props.border ? this.props.border : false,
            animation: this.props.animation ? this.props.animation : false,
            animationTime: this.props.animationTime ? this.props.animationTime : 300,
            animationTimeAdder: this.props.animationTimeAdder ? this.props.animationTimeAdder : 0,
            rightWidth: this.props.rightWidth ? this.props.rightWidth : 0,
            widthVector: this.props.widthVector ? this.props.widthVector : 'px',
            animationStart: false,
            uniqueIdForAnimations: `react-divcreator-box-boxes-animation-uuid-${customKey()}`,
            responsive: this.props.responsive ? this.props.responsive : false,
            responsiveClass: '',
            responsiveX: this.props.responsiveX ? this.props.responsiveX : 1024,
            animationDone: false,
            hideUntilAnimationScroll: this.props.hideUntilAnimationScroll ? this.props.hideUntilAnimationScroll : false,
            animationScroll: this.props.animationScroll ? this.props.animationScroll : 0
        };
        this.buildTimeStart = Date.now();
        this.isResponsive = false;
        this.isRegular = false;
    }

    componentDidMount() {
        let animationStart = this.props.animationOn && 'mount' == this.props.animationOn ? true : false;

        const element = document.getElementById(this.state.uniqueIdForAnimations);
        const adder = this.props.animationScroll;
        const scrollTop = document.documentElement.scrollTop;
        const deviceHeight = document.documentElement.clientHeight/2;

        if (element) {
            let rect = element.getBoundingClientRect();

            if(rect && scrollTop && rect.top+deviceHeight+adder < scrollTop){
                animationStart = true;
            } else {
                if('scroll' == this.props.animationOn){
                    window.addEventListener('scroll', this.animateBoxesScroll, false);
                    this.animateBoxesScroll();
                }
            }
        }
        window.requestAnimationFrame(() => this.setState({
            mounted: true,
            animationStart
        }));

        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;

        if(this.state.responsive){
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    componentWillUnmount() {
        if(this.state.responsive){
            window.removeEventListener('resize', this.resize);
        }
    }

    resize() {
        if (this.state.responsive) {
            if (this.state.responsiveX <= document.documentElement.getBoundingClientRect().width) {
                if (!this.isRegular) {
                    this.isRegular = true;
                    this.isResponsive = false;

                    this.setState({
                        responsiveClass: ''
                    });
                }

            } else {
                if (!this.isResponsive) {
                    this.isResponsive = true;
                    this.isRegular = false;

                    this.setState({
                        responsiveClass: 'react-divcreator-box-boxes--responsive'
                    });
                }
            }
        }
    }

    animateBoxesScroll() {
        const element = document.getElementById(this.state.uniqueIdForAnimations);
        const adder = this.props.animationScroll;
        const scrollTop = document.documentElement.scrollTop;
        const deviceHeight = document.documentElement.clientHeight/2;

        if (element) {
            let rect = element.getBoundingClientRect();

            if(rect && scrollTop && rect.top+deviceHeight+adder < scrollTop){
                this.animateBoxes();
            }
        }
    }

    animateBoxes() {
        this.setState({
            animationStart: true
        }, () => {
            if(this.props.animationOn && 'scroll' == this.props.animationOn){
                window.removeEventListener('scroll', this.animateBoxesScroll, false);
            }
        });
    }

    animationGenerator(site) {
        const animation = this.state.animation;
        const leftData = this.state.leftData;
        const rightData = this.state.rightData;

        if (animation) {
            let leftAnimationsStyle = ``,
                rightAnimationsStyle = ``,
                time,
                toAdd = (typeof 1 === typeof this.state.animationTimeAdder ? this.state.animationTimeAdder : 0)
                ;

            if ('left' == site) {
                for (let x = 0; x <= leftData.length - 1; x++) {
                    time = this.state.animationTime + (x * toAdd);

                    leftAnimationsStyle += `
                        @keyframes show-single-boxes__left--animation-item-${x} {
                            from {
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                margin-top:50px;
                                opacity:0;
                            }
                            to {
                                margin-top:0px;
                                opacity:1;
                            }
                        }
                        .animation-left-${x}{
                            animation: show-single-boxes__left--animation-item-${x} ${time}ms ease-out forwards;
                            transition: ${time}ms;
                            transition-duration: ${time}ms;
                        }
                    `;
                }
                return leftAnimationsStyle;
            }

            if ('right' == site) {
                for (let x = 0; x <= rightData.length - 1; x++) {
                    time = this.state.animationTime + (x * toAdd);

                    rightAnimationsStyle += `
                        @keyframes show-single-boxes__right--animation-item-${x} {
                            from {
                                transition: ${time}ms;
                                transition-duration: ${time}ms;
                                margin-top:50px;
                                opacity:0;
                            }
                            to {
                                margin-top:0px;
                                opacity:1;
                            }
                        }
                        .animation-right-${x}{
                            animation: show-single-boxes__right--animation-item-${x} ${time}ms ease-out forwards;
                            transition: ${time}ms;
                            transition-duration: ${time}ms;
                        }
                    `;
                }
                return rightAnimationsStyle;
            }
        }
    }

    generateCardsGeneral() {
        const leftData = this.state.leftData;
        const rightData = this.state.rightData;
        const leftAll = [];
        const rightAll = [];
        let leftSingle = [];
        let rightSingle = [];
        let counter = 1;

        for (let x = 0; x <= leftData.length - 1; x++) {
            const title = leftData[x].top && leftData[x].top.title ? leftData[x].top.title : '';
            const titleCustom = leftData[x].top && leftData[x].top.custom ? leftData[x].top.custom : '';
            const content = leftData[x].content ? leftData[x].content : '';
            const widthOfsingleBox = this.isResponsive ? 100 : 100 / this.state.leftBreak;

            leftSingle.push(
                <div
                    key={customKey()}
                    className={`${this.defaultClass}__data--left__single-box ${this.state.border ? 'border' : ''} ${this.state.animation ? `animation-left-${x}` : ''}`}
                    style={{
                        width: widthOfsingleBox + '%'
                    }}
                >
                    {
                        ('' !== title || '' !== titleCustom) &&
                        <div className={`${this.defaultClass}__data--left__single-box--title`}>
                            {
                                title && title
                            }
                            {
                                titleCustom && titleCustom
                            }
                        </div>
                    }
                    {
                        ('' !== content) &&
                        <div className={`${this.defaultClass}__data--left__single-box--content`}>
                            {
                                content
                            }
                        </div>
                    }
                </div>
            );

            if (counter == this.state.leftBreak || x == leftData.length - 1) {
                leftAll.push(
                    <div
                        key={customKey()}
                        className={`${this.defaultClass}__data--left-site__boxes`}
                    >
                        {
                            leftSingle
                        }
                    </div>
                );
                leftSingle = [];
                counter = 0;
            }
            counter++;
        }

        counter = 1;
        for (let x = 0; x <= rightData.length - 1; x++) {
            const title = rightData[x].top && rightData[x].top.title ? rightData[x].top.title : '';
            const titleCustom = rightData[x].top && rightData[x].top.custom ? rightData[x].top.custom : '';
            const content = rightData[x].content ? rightData[x].content : '';
            const widthOfsingleBox = this.isResponsive ? 100 : (100 / this.state.rightBreak);

            rightSingle.push(
                <div
                    key={customKey()}
                    className={`${this.defaultClass}__data--right__single-box ${this.state.border ? 'border' : ''} ${this.state.animation ? `animation-right-${x}` : ''}`}
                    style={{
                        width: widthOfsingleBox + '%'
                    }}
                >
                    {
                        ('' !== title || '' !== titleCustom) &&
                        <div className={`${this.defaultClass}__data--right__single-box--title`}>
                            {
                                title && title
                            }
                            {
                                titleCustom && titleCustom
                            }
                        </div>
                    }
                    {
                        ('' !== content) &&
                        <div className={`${this.defaultClass}__data--right__single-box--content`}>
                            {
                                content
                            }
                        </div>
                    }
                </div>
            );

            if (counter == this.state.rightBreak || x == rightData.length - 1) {
                rightAll.push(
                    <div
                        key={customKey()}
                        className={`${this.defaultClass}__data--right-site__boxes`}
                    >
                        {
                            rightSingle
                        }
                    </div>
                );
                rightSingle = [];
                counter = 0;
            }
            counter++;
        }

        const leftCalc = this.isResponsive ? '0px' : this.state.rightWidth + this.state.widthVector
        const leftWidth = {
            width: 'calc(100% - '+ leftCalc +')'
        };

        const rightCalc = this.isResponsive ? '100%' : this.state.rightWidth + this.state.widthVector; 
        const rightWidth = {
            width: rightCalc
        };

        return (
            <div className={`${this.defaultClass}__data`}>
                {
                    0 !== leftAll.length &&
                    <div
                        className={`${this.defaultClass}__data--left-site`}
                        style={leftWidth}
                    >
                        {
                            leftAll
                        }
                    </div>
                }
                {
                    0 !== rightAll.length &&
                    <div
                        className={`${this.defaultClass}__data--right-site`}
                        style={rightWidth}
                    >
                        {
                            rightAll
                        }
                    </div>
                }
            </div>
        );
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.state.responsiveClass}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const cardsGeneral = this.generateCardsGeneral();
        const leftAnimationsStyle = this.animationGenerator('left');
        const rightAnimationsStyle = this.animationGenerator('right');

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        this.state.animationStart && leftAnimationsStyle &&
                        <style>
                            {
                                leftAnimationsStyle
                            }
                        </style>
                    }
                    {
                        this.state.animationStart && rightAnimationsStyle &&
                        <style>
                            {
                                rightAnimationsStyle
                            }
                        </style>
                    }
                    {
                        cardsGeneral &&
                        <span
                            className="react-divcreator-box-boxes-main-holder"
                            key={customKey()}
                            id={this.state.uniqueIdForAnimations}
                        >
                            {
                                this.state.hideUntilAnimationScroll &&
                                cardsGeneral && 
                                this.state.animationStart &&
                                cardsGeneral
                            }
                            {
                                !this.state.hideUntilAnimationScroll &&
                                cardsGeneral &&
                                cardsGeneral
                            }
                        </span>
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default boxboxes;
