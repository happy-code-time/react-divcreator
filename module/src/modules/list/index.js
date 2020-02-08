import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class list extends Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);

        this.type = 'List';
        this.defaultClass = 'react-divcreator-list';
        this.defaultClassMounted = 'react-divcreator-list-mounted mounted';
        this.requiredProps = {
            'data': 'object'
        }
        this.state = {
            mounted: false,
            defaultClassresponsive: '',
            responsiveX: this.props.responsiveX ? this.props.responsiveX : 1024,
            responsive: this.props.responsive ? this.props.responsive : false,
            title: this.props.title ? this.props.title : '',
            header: this.props.header ? this.props.header : [],
            data: this.props.data ? this.props.data : []
        }
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;

        if (this.state.responsive) {
            window.addEventListener('resize', this.resize);
            this.resize();
        }
    }

    componentWillUnmount() {
        if (this.state.responsive) {
            window.removeEventListener('resize', this.resize);
        }
    }

    resize() {
        if (this.state.responsiveX >= document.documentElement.getBoundingClientRect().width) {
            if (!this.state.defaultClassresponsive.length) {
                this.setState({
                    defaultClassresponsive: `${this.defaultClass}--responsive`
                })
            }
        } else {
            if (this.state.defaultClassresponsive.length) {
                this.setState({
                    defaultClassresponsive: ''
                })
            }
        }
    }

    generateTable() {
        const data = this.state.data;
        let generatedDataLi = [];
        const generatedDataUl = [];

        if (data && data.length) {
            data.map((object, index) => {
                let clsName = `${this.defaultClass}__data--ul-li ${this.defaultClass}__data--ul-li__even`;
                let clsNameP = `${this.defaultClass}__data--ul-li--p ${this.defaultClass}__data--ul-li__even--p`;
                let clsNameDiv = `${this.defaultClass}__data--ul-li--div`;

                if (index % 2 == 0) {
                    clsName = `${this.defaultClass}__data--ul-li ${this.defaultClass}__data--ul-li__odd`;
                    clsNameP = `${this.defaultClass}__data--ul-li--p ${this.defaultClass}__data--ul-li__odd--p`;
                }

                if (object.values && object.values.length) {
                    for (let x = 0; x <= object.values.length - 1; x++) {
                        const value = object.values[x].value ? object.values[x].value : '';
                        const attributes = object.values[x].attributes ? object.values[x].attributes : {};

                        generatedDataLi.push(
                            <li key={customKey()} className={clsName}>
                                {
                                    this.state.defaultClassresponsive && this.state.header && 0 !== this.state.header.length && this.state.header[x] &&
                                    <div className={`${clsNameDiv} ${clsNameDiv}--value`}>
                                        {
                                            this.state.header[x]
                                        }
                                    </div>
                                }
                                {
                                    this.state.defaultClassresponsive &&
                                    <div className={`${clsNameDiv} ${clsNameDiv}--key`}>
                                        {
                                            value
                                        }
                                    </div>
                                }
                                {
                                    0 == this.state.defaultClassresponsive.length &&
                                    <p
                                        className={clsNameP}
                                        {...attributes}
                                    >
                                        {
                                            value
                                        }
                                    </p>
                                }
                            </li>
                        );
                    }

                    if (generatedDataLi.length) {
                        let clsNameUl = `${this.defaultClass}__data--ul ${this.defaultClass}__data--ul__even`;

                        if (index % 2 == 0) {
                            clsNameUl = `${this.defaultClass}__data--ul ${this.defaultClass}__data--ul__odd`;
                        }

                        generatedDataUl.push(
                            <ul key={customKey()} className={clsNameUl}>
                                {
                                    generatedDataLi
                                }
                            </ul>
                        );
                        generatedDataLi = [];
                    }
                }
            })
        }
        return generatedDataUl;
    }

    generateHeaders() {
        const currentHeaders = this.state.header;
        const header = [];

        if (currentHeaders && currentHeaders.length) {
            currentHeaders.map((name, index) => {
                let clsName = `${this.defaultClass}__header--ul-li ${this.defaultClass}__header--ul-li__even`;
                let clsNameP = `${this.defaultClass}__header--ul-li--p ${this.defaultClass}__header--ul-li__even--p`;

                if (index % 2 == 0) {
                    clsName = `${this.defaultClass}__header--ul-li ${this.defaultClass}__header--ul-li__odd`;
                    clsNameP = `${this.defaultClass}__header--ul-li--p ${this.defaultClass}__header--ul-li__odd--p`;
                }

                header.push(
                    <li style={this.liStyle} key={customKey()} className={clsName}>
                        <p className={clsNameP}>
                            {
                                name
                            }
                        </p>
                    </li>
                )
            })
        }
        return (
            <div className={`${this.defaultClass}__header`} key={customKey()}>
                {
                    this.props.title && this.state.defaultClassresponsive &&
                    <div className={`${this.defaultClass}__header--title`}>
                        <span className={`${this.defaultClass}__header--title-span`}>
                            {
                                this.props.title
                            }
                        </span>
                    </div>
                }
                {
                    0 === this.state.defaultClassresponsive.length &&
                    <ul key={customKey()} className={`${this.defaultClass}__header--ul`}>
                        {
                            header
                        }
                    </ul>
                }
            </div>
        );
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
            let masterClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${this.defaultClass} ${this.state.defaultClassresponsive} ${rootClass}`;
            let masterId = this.props.id ? this.props.id : customKey();
            const titles = this.generateHeaders();
            const table = this.generateTable();

            return (
                <div id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        titles && titles
                    }
                    {
                        table && table
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default list;
