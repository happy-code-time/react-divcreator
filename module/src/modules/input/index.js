import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class input extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
        this.setValueOfInputField = this.setValueOfInputField.bind(this);

        this.type = 'Input';
        this.defaultClass = 'react-divcreator-input';
        this.defaultClassMounted = 'react-divcreator-input-mounted mounted';
        this.requiredProps = {};

        this.state = {
            valueOfInputField: props.valueOfInputField,
            useCustomValue: props.useCustomValue,
            placeholder: props.placeholder ? props.placeholder : '',
            errorMessages: props.errorMessages ? props.errorMessages : [],
            successMessages: props.successMessages ? props.successMessages : [],
            warningMessages: props.warningMessages ? props.warningMessages : [],
            mounted: false
        }
        this.inputUuid = `react-divcreator-input-uuid-${customKey()}`;
        this.buildTimeStart = Date.now();
    }

    componentDidMount(){
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
        this.node.focus();
    }

    handleEsc(event, currentInputValue) {
        if (this.props.handleEsc && 'function' == typeof this.props.handleEsc) {
            (this.props.handleEsc)(
                event, currentInputValue, 'Esc',
                this.props.currentMode,
                this.props.currentModeTitle,
                this.props.isChecked,
                this.props.placeholder,
                this.props.customData
            );
        }
        if (this.props.emptyOnEsc) {
            this.setState({ valueOfInputField: "" });
        }
    }

    handleEnter(event, currentInputValue) {
        if (this.props.handleEnter && 'function' == typeof this.props.handleEnter) {
            (this.props.handleEnter)(
                event, currentInputValue, 'Enter',
                this.props.currentMode,
                this.props.currentModeTitle,
                this.props.isChecked,
                this.props.placeholder,
                this.props.customData
            );
        }
        if (this.props.emptyOnEnter) {
            this.setState({ 
                valueOfInputField: "",
            });
        }
    }

    handleKeyPress(event, currentInputValue) {
        if(this.props.handleKeyPress){
            return (this.props.handleKeyPress)(
                event, currentInputValue, 'keyPress',
                this.props.currentMode,
                this.props.currentModeTitle,
                this.props.isChecked,
                this.props.placeholder,
                this.props.customData
            );
        }
    }

    handleClick(event, currentInputValue) {

        if (this.props.emptyOnClick) {
            this.setState({
                valueOfInputField: ""
            })
        }

        if (this.props.switchersFunction && 'search' == this.props.currentMode) {
            return (this.props.switchersFunction)(
                event, currentInputValue, 'Click',
                this.props.currentMode,
                this.props.currentModeTitle,
                this.props.isChecked,
                this.props.placeholder,
                this.props.customData
            );
        }

        if (this.props.handleClick && 'function' == typeof this.props.handleClick) {
            (this.props.handleClick)(
                event, currentInputValue, 'Click',
                this.props.currentMode,
                this.props.currentModeTitle,
                this.props.isChecked,
                this.props.placeholder,
                this.props.customData
            );
        }
    }

    keyPressHandler(e) {
        const currentInputValue = e.target.value;
        const event = (event) ? event : ((window.event) ? window.event : "");

        if(this.state.errorMessages.length || this.state.warningMessages.length || this.state.successMessages.length){
            this.setState({
                errorMessages: [],
                successMessages: [],
                warningMessages: [],
            });
        }

        // Enter
        if (event.keyCode == 13 || event.which == 13 || event.key == 'Enter') {

            if (this.props.switchersFunction && 'search' == this.props.currentMode) {
                return (this.props.switchersFunction)(
                    event, currentInputValue, 'Enter',
                    this.props.currentMode,
                    this.props.currentModeTitle,
                    this.props.isChecked,
                    this.props.placeholder,
                    this.props.customData
                );
            }

            return this.handleEnter(e, currentInputValue);
        }
        // ESC
        if (event.keyCode == 27 || event.which == 13 || event.key == 'Escape' || event.key == 'Esc') {

            if (this.props.switchersFunction && 'search' == this.props.currentMode) {
                return (this.props.switchersFunction)(
                    event, currentInputValue, 'Esc',
                    this.props.currentMode,
                    this.props.currentModeTitle,
                    this.props.isChecked,
                    this.props.placeholder,
                    this.props.customData
                );
            }

            return this.handleEsc(e, currentInputValue);
        }

        this.handleKeyPress(e, currentInputValue);
    }

    clickHandler(e) {
        if (document.getElementById(this.inputUuid)) {
            const currentInputValue = document.getElementById(this.inputUuid).value;
            this.handleClick(e, currentInputValue);
        }
    }

    closeMessages(event, type) {
        event.target.style.display = 'none';
        event.target.parentNode.remove();

        if('success' == type){
            this.setState({
                successMessages: []
            })
        }
        if('error' == type){
            this.setState({
                errorMessages: []
            })
        }
        if('warning' == type){
            this.setState({
                warningMessages: []
            })
        }
    }

    setValueOfInputField(e){
        e.persist();

        this.setState({ 
            valueOfInputField: e.target.value 
        }, ()=> {
            if(document.getElementById(this.inputUuid)){
                document.getElementById(this.inputUuid).focus();
            }
            this.node.focus();
        });
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
            let masterId = this.props.id ? this.props.id : customKey();

            return (
                <div id={masterId} className={masterClass} key={customKey()}>
                    <div className={this.defaultClass + '-child'}>
                        <input
                            id={this.inputUuid}
                            placeholder={this.state.placeholder}
                            onKeyUp={(e) => this.keyPressHandler(e)}
                            onChange={(e) => this.setValueOfInputField(e) }
                            value={this.state.valueOfInputField}
                            onMouseEnter={(e) => e.target.focus()}
                            onClick={(e) => e.target.focus()}
                            className="react-divcreator-input-input"
                            autoFocus={true}
                            ref={ node => this.node = node }
                        />
                        {
                            this.props.icon &&
                            <div className="react-divcreator-input-icon">
                                {
                                    <span onClick={(e) => this.clickHandler(e)}>
                                        {
                                            this.props.icon
                                        }
                                    </span>
                                }
                            </div>
                        }
                    </div>
                    {
                        this.state.successMessages && 0 !== this.state.successMessages.length &&
                        <div className="react-divcreator-input-success-messages">
                            <p className="react-divcreator-input-success-messages__single-success__close" onClick={(e) => this.closeMessages(e, 'success')}>
                                x
                                </p>
                            {
                                this.state.successMessages.map(message => {
                                    return (
                                        <div key={customKey()} className="react-divcreator-input-success-messages_single-success">
                                            <p className="react-divcreator-input-success-messages__single-success__p">
                                                {
                                                    message
                                                }
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        this.state.warningMessages && 0 !== this.state.warningMessages.length &&
                        <div className="react-divcreator-input-warning-messages">
                            <p className="react-divcreator-input-warning-messages__single-warning__close" onClick={(e) => this.closeMessages(e, 'warning')}>
                                x
                                </p>
                            {
                                this.state.warningMessages.map(message => {
                                    return (
                                        <div key={customKey()} className="react-divcreator-input-warning-messages_single-warning">
                                            <p className="react-divcreator-input-warning-messages__single-warning__p">
                                                {
                                                    message
                                                }
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        this.state.errorMessages && 0 !== this.state.errorMessages.length &&
                        <div className="react-divcreator-input-error-messages">
                            <p className="react-divcreator-input-error-messages__single-error__close" onClick={(e) => this.closeMessages(e, 'error')}>
                                x
                                </p>
                            {
                                this.state.errorMessages.map(message => {
                                    return (
                                        <div key={customKey()} className="react-divcreator-input-error-messages_single-error">
                                            <p className="react-divcreator-input-error-messages__single-error__p">
                                                {
                                                    message
                                                }
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default input;
