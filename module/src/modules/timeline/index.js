import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class timeline extends Component {

    constructor(props) {
        super(props);
        this.splitByNewLine = this.splitByNewLine.bind(this);
        this.extractByNewLines = this.extractByNewLines.bind(this);

        this.type = 'Timeline';
        this.defaultClass = 'react-divcreator-timeline';
        this.defaultClassMounted = 'react-divcreator-timeline-mounted mounted'
        this.requiredProps = {
            'data': 'string'
        };
        this.state = {
            data: this.props.data ? this.props.data : [],
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
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
            let rootClass = this.props.class ? this.props.class : '';
            /**
             * Return modules html
             */
            let masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
            let masterId = `${this.props.id ? this.props.id : customKey()}`;
            const code = this.getCode();
            const lines = this.lines;

            return (
                <div id={masterId} className={masterClass} key={customKey()}>
                    {
                        0 !== code.length &&
                        <div className='react-divcreator-sourcecode--lines-and-data'>
                            {
                                this.state.showLines && 0 !== lines.length &&
                                <div className='react-divcreator-sourcecode--lines'>
                                    {
                                        lines
                                    }
                                </div>
                            }
                            {
                                code &&
                                <div className='react-divcreator-sourcecode--data'>
                                    {
                                        code
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default timeline;
