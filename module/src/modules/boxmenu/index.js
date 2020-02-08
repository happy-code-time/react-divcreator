import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class boxmenu extends Component {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleOpenClose = this.handleOpenClose.bind(this);

        this.type = 'BoxMenu';
        this.defaultClass = 'react-divcreator-box-menu';
        this.defaultClassMounted = 'react-divcreator-box-menu-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            width: this.props.width ? this.props.width : 40,
            height: this.props.height ? this.props.height : 40,
            borderWidth: this.props.borderWidth ? this.props.borderWidth : 1,
            backgroundColorRoot: this.props.backgroundColorRoot ? this.props.backgroundColorRoot : false,
            borderColorRoot: this.props.borderColorRoot ? this.props.borderColorRoot : false,
            backgroundColorChilds: this.props.backgroundColorChilds ? this.props.backgroundColorChilds : false,
            borderColorChilds: this.props.borderColorChilds ? this.props.borderColorChilds : false,
            openData: this.props.openData ? this.props.openData : '...',
            openCallback: this.props.openCallback ? this.props.openCallback : false,
            closeData: this.props.closeData ? this.props.closeData : 'x',
            closeCallback: this.props.closeCallback ? this.props.closeCallback : false,
            data: (this.props.data && this.props.data.length && typeof [] === typeof this.props.data) ? this.props.data : [],
            isOpen: this.props.isOpen ? this.props.isOpen : false,
            closeOnClickChild: this.props.closeOnClickChild ? this.props.closeOnClickChild : false,
            openOn: this.props.openOn ? this.props.openOn : 'click',
            directionX: this.props.directionX ? this.props.directionX : false,
            directionY: this.props.directionY ? this.props.directionY : false,
            alignBoxes: this.props.alignBoxes ? this.props.alignBoxes : 'x'
        };
        this.buildTimeStart = Date.now();
        this.uuid = `${customKey()}-${customKey()}`;
        this.timeout = 300;
        this.debugging = false;
        this.animation = '';
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

    /**
     * Handle click outsite the node, to close all toggled menu elements
     * @param {any} event
     */
    handleClickOutside(event) {
        const classnameToAnimateBack = `${this.defaultClass}--animation-back-${this.animation}`;

        try {
            const domNode = this.node;

            if (!domNode.contains(event.target) && !this.state.keepOpen) {
                if (document.getElementById(this.uuid)) {
                    document.getElementById(this.uuid).classList.add(classnameToAnimateBack);

                    if (this.state.closeCallback && 'function' === typeof this.state.closeCallback) {
                        (this.state.closeCallback)();
                    }
                }

                setTimeout(() => {
                    this.setState({
                        isOpen: false
                    });
                }, this.timeout);
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in handleClickOutside. Message: ${error}`);
            }
        }
    }


    handleOpenClose(e, type) {
        const classnameToAnimate = `${this.defaultClass}--animation-${this.animation}`;
        const classnameToAnimateBack = `${this.defaultClass}--animation-back-${this.animation}`;


        if ('click' === type || ('li' === type && this.state.closeOnClickChild)) {
            if (this.state.isOpen) {

                if (document.getElementById(this.uuid)) {
                    document.getElementById(this.uuid).classList.add(classnameToAnimateBack);
                }

                if (this.state.closeCallback && 'function' === typeof this.state.closeCallback) {
                    (this.state.closeCallback)();
                }

                setTimeout(() => {
                    this.setState({
                        isOpen: false
                    });
                }, this.timeout);

            } else {
                this.setState({
                    isOpen: true
                }, () => {
                    if (document.getElementById(this.uuid)) {
                        document.getElementById(this.uuid).classList.add(classnameToAnimate);
                    }
                    if (this.state.openCallback && 'function' === typeof this.state.openCallback) {
                        (this.state.openCallback)();
                    }
                });
            }
        }

        if ('hoverIn' === type && !this.state.isOpen) {

            if (this.state.isOpen) {
                return;
            }

            this.setState({
                isOpen: true
            }, () => {
                if (document.getElementById(this.uuid)) {
                    document.getElementById(this.uuid).classList.add(classnameToAnimate);
                }
                if (this.state.openCallback && 'function' === typeof this.state.openCallback) {
                    (this.state.openCallback)();
                }
            });
        }

        if ('hoverOut' === type && this.state.isOpen) {

            if (document.getElementById(this.uuid)) {
                document.getElementById(this.uuid).classList.add(classnameToAnimateBack);

                if (this.state.closeCallback && 'function' === typeof this.state.closeCallback) {
                    (this.state.closeCallback)();
                }
            }

            setTimeout(() => {
                this.setState({
                    isOpen: false
                });
            }, this.timeout);
        }
    }

    generateBoxes() {
        const boxes = [];

        const rootBoxStyle = {
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            lineHeight: `${this.state.height}px`
        };

        if (this.state.backgroundColorRoot) {
            rootBoxStyle.backgroundColor = `${this.state.backgroundColorRoot}`;
        }

        if (this.state.borderColorRoot) {
            rootBoxStyle.border = `${this.state.borderWidth}px solid ${this.state.borderColorRoot}`;
        }

        const boxStyle = {
            minWidth: `${this.state.width}px`,
            height: `${this.state.height}px`,
            border: `${this.state.borderWidth}px solid ${this.state.borderColorRoot}`
        };

        if (this.state.backgroundColorChilds) {
            boxStyle.backgroundColor = `${this.state.backgroundColorChilds}`;
        }

        if (this.state.borderColorChilds) {
            boxStyle.border = `${this.state.borderWidth}px solid ${this.state.borderColorChilds}`;
        }

        if (this.state.data.length) {
            this.state.data.map((element, i) => {
                let { boxData, boxContent, attributes } = element;

                if (!attributes) {
                    attributes = {};
                }

                boxes.push(
                    <li
                        key={customKey()}
                        className={`${this.defaultClass}__open__close--box ${this.defaultClass}__open__close--box-li`}
                        style={boxStyle}
                        {...attributes}
                        onClick={ (e) => this.handleOpenClose(e, 'li') }
                    >
                        {
                            boxData &&
                            <span
                                className={`${this.defaultClass}__open__close--box-preview`}
                            >
                                {
                                    boxData
                                }
                                {
                                    boxContent &&
                                    <span
                                        className={`${this.defaultClass}__open__close--box-content`}
                                    >
                                        {
                                            boxContent
                                        }
                                    </span>
                                }
                            </span>
                        }
                    </li>
                );
            });
        }

        const holderStyle = {
            position: 'absolute'
        };

        let top = 0;

        if ('y' == this.state.alignBoxes && 'top' == this.state.directionY) {
            top = `-${this.state.height * this.state.data.length}px`;
            this.animation = 'top';
            holderStyle.bottom = `${this.state.height}px`;
        }
        if ('y' == this.state.alignBoxes && 'bottom' == this.state.directionY) {
            top = `-${this.state.height * this.state.data.length}px`;
            this.animation = 'bottom';
            holderStyle.top = `${this.state.height}px`;
        }
        
        if(!this.state.directionY && 'x' == this.state.alignBoxes){
            holderStyle.top = 0;
        }

        if(!false == this.state.directionY){
            holderStyle.top = undefined;
        }

        if ('left' == this.state.directionX && 'y' != this.state.alignBoxes) {
            this.animation = 'left';
        }
        if ('right' == this.state.directionX && 'y' != this.state.alignBoxes) {
            this.animation = 'right';
        }

        if ('top' == this.state.directionY && 'y' == this.state.alignBoxes) {
            top = `-${this.state.height}px`;
        }
        if ('bottom' == this.state.directionY && 'y' == this.state.alignBoxes) {
            top = `${this.state.height}px`;
        }

        let alignBoxes = 'x' == this.state.alignBoxes ? 'row' : 'column';

        let right = 0;

        if('left' != this.state.directionX && !this.state.directionY && 'x' != this.state.alignBoxes){
            right = `${this.state.width}px`;
        }

        const ulStyle = {
            right: 'right' === this.state.directionX ? 'auto' : (0 === top) ? right : 0,
            left: 'left' === this.state.directionX ? 'auto' : (0 === top) ? `${this.state.width}px` : 0,
            top,
            flexDirection: alignBoxes
        };

        /**
         * Overrider
         */
        if ('x' == this.state.alignBoxes && 'right' == this.state.directionX && 'top' == this.state.directionY) {
            holderStyle.top = `-${this.state.height}px`;
            ulStyle.top = 0;
        }
        if ('x' == this.state.alignBoxes && 'left' == this.state.directionX && 'top' == this.state.directionY) {
            holderStyle.top = `-${this.state.height}px`;
            ulStyle.top = 0;
            ulStyle.right = `-${this.state.height}px`;
        }

        if ('x' == this.state.alignBoxes && 'right' == this.state.directionX && 'bottom' == this.state.directionY) {
            holderStyle.top = `${this.state.height}px`;
            ulStyle.top = 0;
            holderStyle.left = 0;
        }
        if ('x' == this.state.alignBoxes && 'left' == this.state.directionX && 'bottom' == this.state.directionY) {
            holderStyle.top = `${this.state.height}px`;
            ulStyle.top = 0;
            holderStyle.left = `${this.state.width}px`;
        }

        if ('y' == this.state.alignBoxes) {
            if ('right' === this.state.directionX) {
                ulStyle.left = `${this.props.width}px`;
                ulStyle.top = `-${this.props.height}px`;
            }
            if ('left' === this.state.directionX) {
                ulStyle.left = `-${this.props.width}px`;
                ulStyle.top = `-${this.props.height}px`;
            }
            if (false === this.state.directionX && 'bottom' == this.state.directionY) {
                ulStyle.left = 'auto';
                ulStyle.top = 0;
                ulStyle.right = `-${this.props.width}px`;
            }
            if (false === this.state.directionX && 'top' == this.state.directionY) {
                ulStyle.left = 0;
                ulStyle.top = 'auto';
            }
        }

        return (
            <div
                className={`${this.defaultClass}__open__close`}
                style={rootBoxStyle}
                onMouseOver={(e) => {
                    'hover' === this.state.openOn ? this.handleOpenClose(e, 'hoverIn') : null;
                }}
                onMouseLeave={(e) => {
                    'hover' === this.state.openOn ? this.handleOpenClose(e, 'hoverOut') : null;
                }}
            >
                {
                    this.state.isOpen &&
                    <div
                        className={`${this.defaultClass}__open`}
                    >
                        <span
                            className={`${this.defaultClass}__open--button`}
                            onClick={(e) => {
                                'click' === this.state.openOn ? this.handleOpenClose(e, 'click') : null;
                            }}
                        >
                            {
                                this.state.closeData
                            }
                        </span>
                        {
                            0 !== boxes.length &&
                            <div
                                style={holderStyle}
                            >
                                <ul
                                    id={this.uuid}
                                    style={ulStyle}
                                    className={`${this.defaultClass}__open__close--box-ul`}
                                >
                                    {
                                        boxes
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                }
                {
                    !this.state.isOpen &&
                    <div
                        className={`${this.defaultClass}__close`}
                    >
                        <span
                            className={`${this.defaultClass}__close--button`}
                            onClick={(e) => {
                                'click' === this.state.openOn ? this.handleOpenClose(e, 'click') : null;
                            }}
                        >
                            {
                                this.state.openData
                            }
                        </span>
                    </div>
                }
            </div>
        );
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const boxes = this.generateBoxes();

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                    ref={node => this.node = node}
                >
                    {
                        boxes && boxes
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default boxmenu;