import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class menufixedtop extends Component {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.userCallback = this.userCallback.bind(this);
        
        this.type = 'MenuFixedTop';
        this.defaultClass = 'react-divcreator-menu-fixed-top';
        this.defaultClassMounted = 'react-divcreator-menu-fixed-top-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            dimmed: this.props.dimmed ? this.props.dimmed : false,
            isOpen: this.props.isOpen ? this.props.isOpen : false,
            animation: this.props.animation ? this.props.animation : false,
            dimmedFixed: props.dimmedFixed ? props.dimmedFixed : false,
            animationType: this.props.animationType ? this.props.animationType : 'scale'
        };
        this.buildTimeStart = Date.now();
        this.contentUuid = `content-uuid-${customKey()}`;
        this.debugging = false;
        this.isOpen = this.state.isOpen;
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

    userCallback(e){
        const contentNode = document.getElementById(this.contentUuid);
        let animationTimeout;

        this.setState({
            isOpen: !this.state.isOpen
        });

        if(this.state.animation && contentNode){
            clearTimeout(animationTimeout);
            const animationClass = 'scale' == this.state.animationType ? `${this.defaultClass}__content--animation-back` : `${this.defaultClass}__content--animation--height-back`;
            contentNode.classList.add(animationClass);

            animationTimeout = setTimeout(() => {
                contentNode.classList.remove(animationClass);

                if (this.props.function && 'function' == typeof this.props.function) {
                    (this.props.function)(e, this.state, this.props.functionData);
                }
                this.isOpen = !this.state.isOpen;

                this.setState({
                    isOpen: this.isOpen
                });
            }, 300);
        } else {
            if (this.props.function && 'function' == typeof this.props.function) {
                (this.props.function)(e, this.state, this.props.functionData);
            }
            this.isOpen = !this.state.isOpen;

            this.setState({
                isOpen: this.isOpen
            });
        }
    }

    /**
     * Handle click outsite the node, to close all toggled menu elements
     * @param {any} event 
     */
    handleClickOutside(event) {
        try {                      
            if (this.node && !this.node.contains(event.target)) {
                const contentNode = document.getElementById(this.contentUuid);
                let animationTimeout;

                if(this.state.animation && contentNode){
                    clearTimeout(animationTimeout);
                    const animationClass = 'scale' == this.state.animationType ? `${this.defaultClass}__content--animation-back` : `${this.defaultClass}__content--animation--height-back`;
                    contentNode.classList.add(animationClass);

                    animationTimeout = setTimeout(() => {
                        contentNode.classList.remove(animationClass);
        
                        this.setState({
                            isOpen: false,
                        });
                    }, 300);
                } else {
                    this.setState({
                        isOpen: false,
                    });
                }
            }
        } catch (error) {
            if (this.debugging) {
                console.error(`Error in handleClickOutside. Message: ${error}`);
            }
        }
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const animationClass = 'scale' == this.state.animationType ? `${this.defaultClass}__content--animation` : `${this.defaultClass}__content--animation--height`;

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <span
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        this.props.open &&
                        <span onClick={(e) => this.userCallback(e)}>
                            {
                                this.props.open
                            }
                        </span>
                    }
                    {
                        !this.state.dimmed && this.state.isOpen &&
                        <div
                            id={this.contentUuid}
                            className={`${this.defaultClass}__content ${this.state.animation ? animationClass : ''}`}
                            ref={node => this.node = node}
                        >
                            {
                                this.props.contentData &&
                                <span>
                                    {
                                        this.props.contentData
                                    }
                                </span>
                            }
                        </div>
                    }
                    {
                        this.state.dimmed && this.state.isOpen && this.state.dimmedFixed &&
                        <span
                            className={`${this.defaultClass}__content--dimmed`}
                        >
                            <div
                                id={this.contentUuid}
                                className={`${this.defaultClass}__content ${this.state.animation ? animationClass : ''}`}
                            >
                                {
                                    this.props.contentData &&
                                    this.props.contentData
                                }
                            </div>
                        </span>
                    }
                    {
                        this.state.dimmed && this.state.isOpen && !this.state.dimmedFixed &&
                        <div
                            className={`${this.defaultClass}__content--dimmed`}
                        >
                            <div
                                id={this.contentUuid}
                                className={`${this.defaultClass}__content ${this.state.animation ? animationClass : ''}`}
                                ref={node => this.node = node}
                            >
                                {
                                    this.props.contentData &&
                                    this.props.contentData
                                }
                            </div>
                        </div>
                    }
                </span>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default menufixedtop;
