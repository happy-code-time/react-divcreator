import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class fullscreenloading extends Component {
    constructor(props) {
        super(props);
        this.executeShowHideLoading = this.executeShowHideLoading.bind(this);
        this.executeUserFuntion = this.executeUserFuntion.bind(this);
        this.closeLoadingIcon = this.closeLoadingIcon.bind(this);
        
        this.type = 'FullScreenLoading';
        this.defaultClass = 'react-divcreator-fullscreenloading';
        this.defaultClassMounted = 'react-divcreator-fullscreenloading-mounted';
        this.requiredProps = {
            'showLoading': 'boolean'
        };

        this.state = {
            showLoading: this.props.showLoading ? this.props.showLoading : false,
            animation: this.props.animation ? this.props.animation : false,
            isAnimated: this.props.isAnimated ? this.props.isAnimated: false
        };

        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    executeUserFuntion(e) {
        if (this.props.function && 'function' == this.props.function) {
            (this.props.function)(e, this.props.functionData);
        }
    }

    executeShowHideLoading() {
        if (this.props.showLoadingCallback && 'function' == typeof this.props.showLoadingCallback) {
            (this.props.showLoadingCallback)(this.state);
        }
    }

    closeLoadingIcon(){
        this.setState({ 
            showLoading: false,
            isAnimated: false,
            animation: false
        });

        if(this.props.closeButtonCallback && 'function' == typeof this.props.closeButtonCallback){
            (this.props.closeButtonCallback)();
        }
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            let rootClass = this.props.class ? this.props.class : '';
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${rootClass} ${(this.state.animation && !this.state.isAnimated) ? 'animate' : ''}`;
            let masterId = this.props.id ? this.props.id : `${customKey()}`;

            let attributesHolder = this.props.attributesLoadingHolder ? this.props.attributesLoadingHolder : {
                style: {
                    zIndex: '99999'
                }
            };

            let attributesMain = this.props.attributesLoadingMain ? this.props.attributesLoadingMain : {
                style: {
                    background: 'rgb(255,255,255)',
                    zIndex: '99999999'
                }
            };

            let closeButtonAttributes = this.props.closeButtonAttributes ? this.props.closeButtonAttributes : {};

            return (
                <div className='react-divcreator-fullscreenloadingstate__holder'>
                    {
                        this.state.showLoading &&
                        <div 
                            className='react-divcreator-fullscreenloadingstate__child'
                            {...attributesHolder}
                        >
                            {
                                this.props.closeButton &&
                                <span 
                                    className='react-divcreator-fullscreenloadingstate__close'
                                    {...closeButtonAttributes}
                                    onClick={this.closeLoadingIcon}
                                >
                                    {
                                        this.props.closeButton
                                    }
                                </span>
                            }
                            <div 
                                id={masterId} 
                                className={masterClass}
                                {...attributesMain}
                            >
                                {
                                    this.props.path && <img src={this.props.path} alt={this.props.alt ? this.props.alt : ''} />
                                }
                                {
                                    this.props.customData &&
                                    <span
                                        className='react-divcreator-fullscreenloading-child__custom-user-data'
                                        onClick={(e) => this.executeUserFunction(e)}
                                    >
                                        {
                                            this.props.customData
                                        }
                                    </span>
                                }
                            </div>
                        </div>
                    }
                    {
                        !this.state.showLoading && this.props.showLoadingData &&
                        <span
                            className='react-divcreator-fullscreenloading-child__text'
                            onClick={this.executeShowHideLoading}
                        >
                            {
                                this.props.showLoadingData
                            }
                        </span>
                    }
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default fullscreenloading;
