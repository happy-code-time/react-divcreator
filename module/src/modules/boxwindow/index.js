import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class boxwindow extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.buttonMinimize = this.buttonMinimize.bind(this);
        this.buttonMaximize = this.buttonMaximize.bind(this);
        this.buttonClose = this.buttonClose.bind(this);
        this.generateStyleForTriangle = this.generateStyleForTriangle.bind(this);

        this.type = 'Box';
        this.defaultClass = 'react-divcreator-box-window';
        this.defaultClassMounted = 'react-divcreator-box-window-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            dark: this.props.dark ? this.props.dark : false,
            triangle: this.props.triangle ? this.props.triangle : false,
            buttonsDirection: this.props.buttonsDirection ? this.props.buttonsDirection : 'left',
            headerWidth: this.props.headerWidth ? this.props.headerWidth : 100,
            boxTitle: this.props.boxTitle ? this.props.boxTitle : '',
            boxContent: this.props.boxContent ? this.props.boxContent : '',
            displayContent: this.props.displayContent ? this.props.displayContent : false,
            displayTitle: true,
            animation: this.props.animation ? this.props.animation : false,
            headerBorderRadiuses: 'b-t-l b-t-r',
            triangleWH: this.props.triangleWH ? this.props.triangleWH : 40,
            triangleBackgroundColor: this.props.triangleBackgroundColor ? this.props.triangleBackgroundColor : 'rgb(255,255,255)',
            headerBackgroundColor: this.props.headerBackgroundColor ? this.props.headerBackgroundColor : this.props.dark ? '#3D3D3F' : 'rgba(99, 99, 99,.9)',
            contentBackgroundColor: this.props.contentBackgroundColor ? this.props.contentBackgroundColor : this.props.dark ? '#212529' : 'rgba(169,169,169,.3)',
            closed: false
        };
        this.buildTimeStart = Date.now();
        this.contentUuid = `content-uuid-${customKey()}`
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }
    
    generateStyleForTriangle(){
        let style = '';

        if(this.state.triangle){

            if('right' == this.state.buttonsDirection){
                style = `.triangle-right:after{
                    border-bottom: ${this.state.triangleWH}px solid ${this.state.triangleBackgroundColor};
                    border-left: ${this.state.triangleWH}px solid ${this.state.headerBackgroundColor};
                }`;
            } else {
                style =  `.triangle-left:after{
                    border-bottom: ${this.state.triangleWH}px solid ${this.state.headerBackgroundColor};
                    border-right: ${this.state.triangleWH}px solid ${this.state.triangleBackgroundColor};
                }`;
            }
            if(this.state.dark){
                style += `
                .react-divcreator-box-window.dark .react-divcreator-box-window__header--buttons{
                    background-color:${this.state.headerBackgroundColor};
                }
                .react-divcreator-box-window__header--buttons{
                    background-color:${this.state.headerBackgroundColor};
                }
                .react-divcreator-box-window.dark .react-divcreator__content{
                    background:${this.state.contentBackgroundColor};
                }`;
            }  else {
                style += `
                .react-divcreator-box-window.light .react-divcreator-box-window__header--buttons{
                    background-color:${this.state.headerBackgroundColor};
                }
                .react-divcreator-box-window__header--buttons{
                    background-color:${this.state.headerBackgroundColor};
                }
                .react-divcreator-box-window.light .react-divcreator__content{
                    background:${this.state.contentBackgroundColor};
                }`;
            }
        }
        return style;
    }

    buttonMinimize() {
        const contentNode = document.getElementById(this.contentUuid);
        let animationTimeout;

        if (this.state.animation && null !== contentNode) {
            clearTimeout(animationTimeout);
            contentNode.classList.add('react-divcreator__content--content--animaton-back');

            animationTimeout = setTimeout(() => {
                contentNode.classList.remove('react-divcreator__content--content--animaton-back');

                this.setState({
                    displayContent: false == this.state.displayTitle ? this.state.displayContent: false,
                    displayTitle: !this.state.displayTitle,
                    headerBorderRadiuses: true == this.state.displayTitle ? 'b-t-l b-t-r b-b-l b-b-r' : 'b-t-l b-t-r',
                    closed: false
                });
            }, 300);
        } else {
            this.setState({
                displayContent: false == this.state.displayTitle ? this.state.displayContent: false,
                displayTitle: !this.state.displayTitle,
                headerBorderRadiuses: true == this.state.displayTitle ? 'b-t-l b-t-r b-b-l b-b-r' : 'b-t-l b-t-r',
                closed: false
            });
        }
    }

    buttonMaximize() {
        const contentNode = document.getElementById(this.contentUuid);
        let animationTimeout;
        let display = false;

        if(this.state.closed){
            display = true;
        }
        
        if (this.state.animation && null !== contentNode) {
            clearTimeout(animationTimeout);
            contentNode.classList.add('react-divcreator__content--content--animaton-back');

            animationTimeout = setTimeout(() => {
                contentNode.classList.remove('react-divcreator__content--content--animaton-back');

                return this.setState({
                    displayContent: display ? !this.state.displayContent : !this.state.displayContent,
                    displayTitle: true,
                    headerBorderRadiuses: 'b-t-l b-t-r',
                    closed: false
                });
            }, 300);
        } else {
            this.setState({
                displayContent: display ? !this.state.displayContent : !this.state.displayContent,
                displayTitle: true,
                headerBorderRadiuses: 'b-t-l b-t-r',
                closed: false
            });
        }
    }

    buttonClose() {
        const contentNode = document.getElementById(this.contentUuid);
        let animationTimeout;

        if(this.state.displayContent || this.state.displayTitle){
            if (this.state.animation && null !== contentNode) {
                clearTimeout(animationTimeout);
                contentNode.classList.add('react-divcreator__content--content--animaton-back');
    
                animationTimeout = setTimeout(() => {
                    contentNode.classList.remove('react-divcreator__content--content--animaton-back');
    
                    this.setState({
                        displayContent: false,
                        displayTitle: false,
                        headerBorderRadiuses: 'b-t-l b-t-r b-b-l b-b-r',
                        closed: true
                    });
                }, 300);
            }
            else {
                this.setState({
                    displayContent: false,
                    displayTitle: false,
                    headerBorderRadiuses: 'b-t-l b-t-r b-b-l b-b-r',
                    closed: true
                });
            }
        }
    }

    handleButtonClick(e, type) {
        switch (type) {
            case 'minimize': {
                if (this.props.minimizeCallback && 'function' == typeof this.props.minimizeCallback) {
                    (this.props.minimizeCallback)(e, type, this.props.minimizeCallbackData);
                }
                this.buttonMinimize();
                break;
            }
            case 'maximize': {
                if (this.props.maximizeCallback && 'function' == typeof this.props.maximizeCallback) {
                    (this.props.maximizeCallback)(e, type, this.props.maximizeCallbackData);
                }
                this.buttonMaximize();
                break;
            }
            case 'close': {
                if (this.props.closeCallback && 'function' == typeof this.props.closeCallback) {
                    (this.props.closeCallback)(e, type, this.props.closeCallbackData);
                }
                this.buttonClose();
                break;
            }
            default: {

            }
        }
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.state.dark ? 'dark' : 'light'}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const directionTriangle = 'left' == this.state.buttonsDirection ? 'right' : 'left';
        const directionButtons = 'left' == this.state.buttonsDirection ? 'left' : 'right';
        const customClasses = `${this.state.triangle ? `triangle-${directionTriangle}` : 'no-triangle'} buttons-${directionButtons} ${this.state.headerBorderRadiuses}`;
        const hWidth = this.state.headerWidth == 100 ? '100%' : this.state.headerWidth + 'px';
        const hLeft = this.state.headerWidth == 100 ? '0' : ('left' == this.state.buttonsDirection ? '0' : 'calc(100% - ' + this.state.headerWidth + 'px)');
        const borderRadiuses = this.state.headerWidth == 100 ? 'b-b-l b-b-r' : ('left' == this.state.buttonsDirection ? 'b-b-l b-b-r b-t-r' : 'b-b-l b-b-r b-t-l');
        const headerStyle = {
            position: 'relative',
            top: 0,
            left: hLeft,
            width: hWidth,
        };
        const attrMin = this.props.minimizeButtonAttr ? this.props.minimizeButtonAttr : {};
        const attrMax = this.props.maximizeButtonAttr ? this.props.maximizeButtonAttr : {};
        const attrClo = this.props.closeButtonAttr ? this.props.closeButtonAttr : {};

        const styleBoxWindow = this.generateStyleForTriangle();

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                {
                    0 !== styleBoxWindow.length &&
                    <style>
                        {
                            styleBoxWindow
                        }
                    </style>
                }
                    <div className="react-divcreator-box-window">
                        <div
                            className={`react-divcreator-box-window__header ${this.state.buttonsDirection}`}
                            style={headerStyle}
                        >
                            <div className={`react-divcreator-box-window__header--buttons p-r-l ${customClasses}`}>
                                <span
                                    className="react-divcreator-box-window__header--buttons-minimize"
                                    {...attrMin}
                                    onClick={(e) => this.handleButtonClick(e, 'minimize')}
                                >
                                    {
                                        this.props.minimizeButtonData &&
                                        <span className="react-divcreator-box-window__header--buttons-minimze__span">
                                            {
                                                this.props.minimizeButtonData
                                            }
                                        </span>
                                    }
                                </span>
                                <span
                                    className="react-divcreator-box-window__header--buttons-maximize"
                                    {...attrMax}
                                    onClick={(e) => this.handleButtonClick(e, 'maximize')}
                                >
                                    {
                                        this.props.maximizeButtonData &&
                                        <span className="react-divcreator-box-window__header--buttons-maximize__span">
                                            {
                                                this.props.maximizeButtonData
                                            }
                                        </span>
                                    }
                                </span>
                                <span
                                    className="react-divcreator-box-window__header--buttons-close"
                                    {...attrClo}
                                    onClick={(e) => this.handleButtonClick(e, 'close')}
                                >
                                    {
                                        this.props.closeButtonData &&
                                        <span className="react-divcreator-box-window__header--buttons-close__span">
                                            {
                                                this.props.closeButtonData
                                            }
                                        </span>
                                    }
                                </span>
                            </div>
                        </div>
                        {
                            (true == this.state.displayTitle || true == this.state.displayContent) &&
                            <div className={`react-divcreator__content ${borderRadiuses}`}>
                                {
                                    this.state.boxTitle && this.state.displayTitle &&
                                    <div className="react-divcreator__content--title">
                                        {
                                            this.state.boxTitle
                                        }
                                    </div>
                                }
                                {
                                    this.state.boxTitle && this.state.displayTitle &&
                                    this.state.boxContent && this.state.displayContent &&
                                    <div
                                        id={this.contentUuid}
                                        className={`react-divcreator__content--content ${this.state.animation ? 'react-divcreator__content--content--animaton' : ''}`}
                                    >
                                        {
                                            this.state.boxContent
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default boxwindow;
