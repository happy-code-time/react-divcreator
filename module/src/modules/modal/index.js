import * as React from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class modal extends React.Component {
    constructor(props) {
        super(props);

        this.type = 'Modal';
        this.defaultClass = 'react-divcreator-modal';
        this.defaultClassMounted = 'react-divcreator-modal-mounted mounted';
        this.requiredProps = {};

        this.id = `react-divcreator-modal-${customKey()}`;
        this.state = {
            display: props.display ? true : false,
            customData: props.customData ? props.customData : ''
        };

        if (this.state.display) {
            sessionStorage.setItem(this.id, 'true');
        }

        if (typeof true === typeof this.props.closeButton && true === this.props.closeButton) {
            this.requiredProps.closeButtonData = 'object';
        }
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    /**
     * User callback fucntion to change the state from true
     * to false to hide the modal window
     * @param {any} event 
     */
    userCallback(event) {
        const id = this.id;

        if ("" != id && typeof '1' == typeof id && document.querySelector('#' + id) && null != document.querySelector('#' + id)) {
            sessionStorage.setItem(this.id, 'false');
            document.querySelector('#' + id).style.display = 'none';
        }

        if(this.props.callbackClose){
            (this.props.callbackClose)();
        }
    }

    /**
     * Callback function for users with older versions
     * @param {any} e 
     * @param {string} id 
     */
    catchModal(e, id) {
        // for older versions
        if (this.props.callbackShow) {
            (this.props.callbackShow)(id, e, this.state.customData);
        }
    }

    closeModalByKeyPress(event, id = this.id) {
        event.preventDefault();
        event.stopPropagation();

        if ("" != id && typeof event.keyCode != 'undefined') {
            if (27 == event.keyCode && null != document.querySelector('#' + id)) {
                sessionStorage.setItem(this.id, 'false');
                document.querySelector('#' + id).style.display = 'none';
                return this.userCallback(event);
            }
        }
    }

    closeModal(event, id) {
        event.preventDefault();
        event.stopPropagation();

        if ("" != id && event.target.id && event.target.id) {
            if (null != document.querySelector('#' + id)) {
                sessionStorage.setItem(this.id, 'false');
                document.querySelector('#' + id).style.display = 'none';
                return this.userCallback(event);
            }
        }
    }

    closeModalByClick(event, id) {
        event.preventDefault();
        event.stopPropagation();

        if ("" != id && typeof '1' == typeof id && document.querySelector('#' + id) && null != document.querySelector('#' + id)) {
            sessionStorage.setItem(this.id, 'false');
            document.querySelector('#' + id).style.display = 'none';
            return this.userCallback(event);
        }
    }

    calculateModalDisplayProperty() {
        const sessionProperty = sessionStorage.getItem(this.id);

        if (this.state.display && sessionProperty && JSON.parse(sessionProperty)) {
            
            return {
                display: 'block'
            };
        }

        return {
            display: 'none'
        };
    }

    render() {
        const modalStyle = this.calculateModalDisplayProperty();
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
            const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
            
            return (
                <div className='react-divcreator-modal-holder'>
                    <div
                        key={customKey()}
                        id={this.id}
                        className={masterClass}
                        onClick={(e) => this.closeModal(e, this.id)}
                        style={modalStyle}
                    >
                        <div className='react-divcreator-modal-child'>
                            <div 
                                tabIndex="0" 
                                className='react-divcreator-modal-child-content' 
                                onKeyDownCapture={(e) => this.closeModalByKeyPress(e, this.id)} 
                                onKeyUpCapture={(e) => this.closeModalByKeyPress(e, this.id)}
                                onKeyPress={(e) => this.closeModalByKeyPress(e, this.id)}
                            >
                                {
                                    this.props.data && this.props.data
                                }
                            </div>
                            {
                                this.props.closeButton && this.props.closeButtonData &&
                                <div className='react-divcreator-modal-holder-close' onClick={(e) => this.closeModalByClick(e, this.id)}>
                                    {
                                        this.props.closeButtonData
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <span className='react-divcreator-modal-holder-span' onClick={(e) => this.catchModal(e, this.id)}>
                        {this.props.showData && this.props.showData}
                    </span>
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default modal;
