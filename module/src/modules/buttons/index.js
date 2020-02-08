import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import customKey from '../funtions/customKey';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import { logBuildTime } from '../funtions/logBuildTime';

class buttons extends Component {
    constructor(props) {
        super(props);
        this.type = 'Buttons';
        this.defaultClass = 'react-divcreator-buttons';
        this.defaultClassMounted = 'react-divcreator-buttons-mounted mounted';
        this.requiredProps = {
            data: 'object',
            link: 'boolean',
        }
        this.buildTimeStart = Date.now();
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    handleButtonClick(event, object) {
        if (object.status && 'disabled' == object.status) {
            event.preventDefault();
        }
        if (object.function && 'function' == typeof object.function) {
            (object.function)(event, object.functionData);
        }
    }

    checkButtonsStatus(object) {
        const status = object.status;

        if (status) {
            switch (status) {
                case 'success':
                case 'error':
                case 'warning':
                case 'disabled': {
                    return status;
                }
                default: {
                    return 'default';
                }
            }
        } else {
            return 'default';
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
            let masterId = this.props.id ? this.props.id : `${customKey()}`;
            /**
             * if router is settet to true
             * then return Link to use the
             * react router functionality
             */
            if (true == this.props.link) {
                return (
                    <div id={masterId} className={`${masterClass}`}>
                        {this.props.data.map(object => {
                            if (object.href) {
                                return (
                                    <Link
                                        to={object.href}
                                        key={customKey()}
                                        className={`${rootClass} ${this.defaultClass}__single-button ${this.checkButtonsStatus(object)}`}
                                        onClick={(e) => this.handleButtonClick(e, object)}
                                        {...object.attributes}
                                    >
                                        <span>
                                            {
                                                object.text
                                            }
                                        </span>
                                    </Link>
                                )
                            } else {
                                return (
                                    <span
                                        key={customKey()}
                                        className={`${rootClass} ${this.defaultClass}__single-button ${this.checkButtonsStatus(object)}`}
                                        onClick={(e) => this.handleButtonClick(e, object)}
                                        {...object.attributes}
                                    >
                                        <span>
                                            {
                                                object.text
                                            }
                                        </span>
                                    </span>
                                )
                            }
                        })}
                    </div>
                );
            }
            /**
             * if router is settet to false
             * then return a href
             */
            return (
                <div id={masterId} className={`${this.defaultClass}`}>
                    {this.props.data.map(object => {
                        if (object.href) {
                            return (
                                <a
                                    href={object.href}
                                    key={customKey()}
                                    className={`${rootClass} ${this.defaultClass}__single-button ${this.checkButtonsStatus(object)}`}
                                    onClick={(e) => this.handleButtonClick(e, object)}
                                    {...object.attributes}
                                >
                                    <span>
                                        {
                                            object.text
                                        }
                                    </span>
                                </a>
                            )
                        } else {
                            return (
                                <span
                                    key={customKey()}
                                    className={`${rootClass} ${this.defaultClass}__single-button ${this.checkButtonsStatus(object)}`}
                                    onClick={(e) => this.handleButtonClick(e, object)}
                                    {...object.attributes}
                                >
                                    <span>
                                        {
                                            object.text
                                        }
                                    </span>
                                </span>
                            );
                        }
                    })}
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default buttons;
