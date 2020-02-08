import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import addStyleToHeaderTag from '../funtions/addStyleToHeaderTag';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';
class divtriangle extends Component {

    constructor(props) {
        super(props);
        this.type = 'Divtriangle';
        this.defaultClass = `react-divcreator-divtriangle`;
        this.defaultClassMounted = `react-divcreator-divtriangle-mounted mounted`;
        this.directionLeft = 'react-divcreator-divtriangle-direction-left';
        this.directionRight = 'react-divcreator-divtriangle-direction-right';
        this.directionUp = 'react-divcreator-divtriangle-direction-up';
        this.directionDown = 'react-divcreator-divtriangle-direction-down';
        this.requiredProps = {
            'direction': 'string'
        };
        this.state = {
            mounted: false,
            border: this.props.border ? this.props.border : false
        };
        /**
         * check if user wish to add custom data
         * as old divtriangle revolution
         */
        if (this.props.custom && typeof true === typeof this.props.custom && true === this.props.custom) {
            this.requiredProps.customLeft = 'number';
            this.requiredProps.customTopBottom = 'number';
            this.requiredProps.customDifference = 'number';
            this.requiredProps.customColor = 'string';
            this.requiredProps.customColorBorder = 'string';
            this.requiredProps.customWidthHeight = 'number';
            this.requiredProps.customDir = 'string';
        }
        this.buildTimeStart = Date.now();
    }

    componentDidMount(){
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootId = this.props.id ? this.props.id : `${customKey()}`;
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let directionClass = `react-divcreator-divtriangle-direction-${this.props.direction}`;
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.state.border ? 'border' : ''} ${this.defaultClass} ${rootClass}`;

            if(this.props.custom){
                let directionClass = `react-divcreator-divtriangle-r-direction-${this.props.direction}`;
                let directionClass2 = `react-divcreator-divtriangle-r-direction-${this.props.direction}-2`;

                if('up' === this.props.direction){
                    // insert the after item
                    let fromLeft = this.props.customLeft;
                    let fromRight = this.props.customRight;
                    let before = "";
                    let after = "";

                    if('left' === this.props.customDir){
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        left: `+fromLeft+`px;right: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        top: -` + this.props.customWidthHeight + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        left: `+ fromLeft +`px;right: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        top: -` + ( this.props.customWidthHeight - this.props.customDifference) + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;}</style>`;
                    }
                    if('right' === this.props.customDir){
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        right: `+fromRight+`px;left: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        top: -` + this.props.customWidthHeight + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        right: `+ fromRight +`px;left: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        top: -` + ( this.props.customWidthHeight - this.props.customDifference) + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;}</style>`;
                    }
                    addStyleToHeaderTag(before);
                    addStyleToHeaderTag(after);
                }
                if('down' === this.props.direction){
                    let fromLeft = this.props.customLeft;
                    let fromRight = this.props.customRight;
                    let before = "";
                    let after = "";

                    if('left' === this.props.customDir){
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        left: `+fromLeft+`px;right: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        bottom: -` + this.props.customWidthHeight + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(180deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        left: `+ fromLeft +`px;right: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        bottom: -` + ( this.props.customWidthHeight - this.props.customDifference) + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(180deg);}</style>`;
                    }
                    if('right' === this.props.customDir){
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        right: `+fromRight+`px;left: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        bottom: -` + this.props.customWidthHeight + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(180deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        right: `+ fromRight +`px;left: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        bottom: -` + ( this.props.customWidthHeight - this.props.customDifference) + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(180deg);}</style>`;
                    }
                    addStyleToHeaderTag(before);
                    addStyleToHeaderTag(after);
                }
                if('left' === this.props.direction){
                    let before = "";
                    let after = "";

                    if('up' === this.props.customDir){
                        let calcLeft = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2));
                        let calcLeft2 = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2)) - this.props.customDifference;
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        left: `+ ( - calcLeft ) +`px;top: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        top: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(270deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        left: `+ (- calcLeft2 )  +`px;top: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        top: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(270deg);}</style>`;
                    }
                    if('down' === this.props.customDir){
                        let calcLeft = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2));
                        let calcLeft2 = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2)) - this.props.customDifference;
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        left: `+ ( - calcLeft ) +`px;top: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        bottom: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(270deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        left: `+ (- calcLeft2 )  +`px;top: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        bottom: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(270deg);}</style>`;
                    }
                    addStyleToHeaderTag(before);
                    addStyleToHeaderTag(after);
                }
                if('right' === this.props.direction){
                    let before = "";
                    let after = "";

                    if('up' === this.props.customDir){
                        let calcLeft = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2));
                        let calcLeft2 = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2)) - this.props.customDifference;
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        right: `+ ( - calcLeft ) +`px;top: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        top: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(90deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        right: `+ (- calcLeft2 )  +`px;top: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        top: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(90deg);}</style>`;
                    }
                    if('down' === this.props.customDir){
                        let calcLeft = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2));
                        let calcLeft2 = (parseInt(this.props.customWidthHeight) + parseInt(this.props.customWidthHeight / 2)) - this.props.customDifference;
                        // inset the before item
                        before = '.' + directionClass + `::before{content : "";
                        right: `+ ( - calcLeft ) +`px;top: auto;border-color: transparent transparent `+ this.props.customColor +`;
                        bottom: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(90deg);}</style>`;

                        after = '.' + directionClass + `::after{content : "";
                        right: `+ (- calcLeft2 )  +`px;top: auto;border-color: transparent transparent `+ this.props.customColorBorder +`;
                        bottom: ` + this.props.customTopBottom + `px;
                        border-style: solid;border-width: 0 `+ this.props.customWidthHeight +`px `+ this.props.customWidthHeight +`px;height: 0;position: absolute;width: 0;box-sizing: border-box;transform: rotateZ(90deg);}</style>`;
                    }
                    addStyleToHeaderTag(before);
                    addStyleToHeaderTag(after);
                }
                return (
                    <div id={rootId} className={masterClass} key={customKey()}>
                        <div className={directionClass}/>
                        <div className={directionClass2}/>
                        <span className='react-divcreator-divtriangle-html'> {this.props.html} </span>
                    </div>
                );
            }
            else{
                switch(this.props.direction){
                    case 'upDown' : {
                        return (
                            <div id={rootId} className={masterClass} key={customKey()}>
                                <div className={this.directionUp} />
                                <div className={this.directionDown} />
                                <span className='react-divcreator-divtriangle-html'> {this.props.html} </span>
                            </div>
                        );
                    }
                    case 'rightLeft' : {
                        return (
                            <div id={rootId} className={masterClass} key={customKey()}>
                                <div className={this.directionRight} />
                                <div className={this.directionLeft} />
                                <span className='react-divcreator-divtriangle-html'> {this.props.html} </span>
                            </div>
                        );
                    }
                    case 'all' : {
                        return (
                            <div id={rootId} className={masterClass} key={customKey()}>
                                <div className={this.directionUp} />
                                <div className={this.directionDown} />
                                <div className={this.directionLeft} />
                                <div className={this.directionRight} />
                                <span className='react-divcreator-divtriangle-html'> {this.props.html} </span>
                            </div>
                        );
                    }
                    default : {
                        return (
                            <div id={rootId} className={masterClass} key={customKey()}>
                                <div className={directionClass}  key={customKey()}/>
                                <span className='react-divcreator-divtriangle-html'> {this.props.html} </span>
                            </div>
                        );
                    }
                }
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default divtriangle;
