import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';
class stars extends Component {

    constructor(props) {
        super(props);

        this.changeCssOfStars = this.changeCssOfStars.bind(this);
        this.type = 'Stars';
        this.defaultClass = 'react-divcreator-stars';
        this.defaultClassMounted = 'react-divcreator-stars-mounted mounted';

        this.requiredProps = {
            'data': 'object'
        }
        this.state = {
            data: this.props.data ? this.props.data : [],
            changedData: this.props.data ? this.props.data : [],
            shouldUpdate: false,
            mounted: false
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    generateArray(count) {
        let array = [];

        for (let x = 1; x <= count; x++) {
            array.push(x);
        }

        return array;
    }

    changeCssOfStars(e, counterAndArrayNumber) {
        const self = this;
        const splitted = counterAndArrayNumber.split(':');
        const thisEntry = parseInt(splitted[1]);
        const changedData = this.state.changedData;
        const readOnly = changedData[thisEntry].readOnly;

        this.props.function ? ( this.props.functionData ? (this.props.function)(e, splitted[0], readOnly, this.props.functionData) : (this.props.function)(e, splitted[0], readOnly) ) : null;

        if (changedData[thisEntry] && !readOnly) {

            if (changedData[thisEntry].clicked) {
                /**
                * new keys
                */
                changedData[thisEntry].changeArray = parseInt(splitted[1]);
                changedData[thisEntry].clicked = true;
                /**
                 * re render class
                 */
            }
            else {
                /**
                * new keys
                */
                changedData[thisEntry].filled = parseInt(splitted[0]);
                changedData[thisEntry].changeArray = parseInt(splitted[1]);
                changedData[thisEntry].clicked = true;
                /**
                 * re render class
                 */
            }
            /**
             * user function
             */
            self.setState({ changedData: changedData });
        }
    }

    generateSingleStars(array, index, filled, object) {
        let userHaveClickedStar = false;
        let readOnlyMode = this.props.data[index].readOnly ? true : false;
        /**
         * check if in changedData state are stars 
         * to change localy the datat before user function ill be executed
         * 
         * change data locally with state
         * 
         */
        if (this.state.changedData[index] &&
            index == this.state.changedData[index].changeArray
        ) {
            filled = this.state.changedData[index].filled;
            userHaveClickedStar = true;
        }
        let finalStars = [];
        let cls = "";
        let count = 1;
        let usersCustomData = {
            transform: 'rotateZ(180deg)'
        };
        let clsUserDataDiv = 'react-divcreator-stars-single-starscustom-data-div';
        let clsUserDataSpan = 'react-divcreator-stars-single-starscustom-data-span';
        let direction = this.props.direction ? this.props.direction : 'left';

        array.forEach(() => {
            cls = `react-divcreator-stars-single-stars-span react-divcreator-stars-single-stars-span-${count}`;

            if ('right' === direction) {

                if (count > filled) {

                    cls += ' react-divcreator-stars-single-stars-span-filled-to-right';

                    if (!readOnlyMode && !userHaveClickedStar) {
                        cls += ' read-only-mode-off-not-filled';
                    }

                }
                if (count <= filled) {

                    cls += ' react-divcreator-stars-single-stars-span-not-filled-to-right';

                    if (!readOnlyMode && !userHaveClickedStar) {
                        cls += ' read-only-mode-off-filled';
                    }
                }

                let counterAndArrayNumber = `${count}:${index}`;

                finalStars.unshift(
                    <span className={cls}
                        key={customKey()}
                        onClick={(e) => this.changeCssOfStars(e, counterAndArrayNumber)}
                    >
                        {
                            object.dataEachStar && object.dataEachStar[count - 1] &&
                            <div style={usersCustomData} className={clsUserDataDiv}>
                                <span   
                                    className={clsUserDataSpan}
                                    data={counterAndArrayNumber}
                                >
                                    {
                                        object.dataEachStar[count - 1]
                                    }
                                </span>
                            </div>
                        }
                    </span>
                );
            }
            else {
                if (count > filled) {

                    cls += ' react-divcreator-stars-single-stars-span-not-filled';

                    if (!readOnlyMode && !userHaveClickedStar) {
                        cls += ' read-only-mode-off-not-filled';
                    }

                }
                if (count <= filled) {

                    cls += ' react-divcreator-stars-single-stars-span-filled';

                    if (!readOnlyMode && !userHaveClickedStar) {
                        cls += ' read-only-mode-off-filled';
                    }
                }

                let counterAndArrayNumber = `${count}:${index}`;

                finalStars.unshift(
                    <span className={cls}
                        key={customKey()}
                        onClick={(e) => this.changeCssOfStars(e, counterAndArrayNumber)}

                    >
                        {
                            object.dataEachStar && object.dataEachStar[count - 1] &&
                            <div style={usersCustomData} className={clsUserDataDiv}>
                                <span className={clsUserDataSpan}
                                    data={counterAndArrayNumber}
                                >
                                    {
                                        object.dataEachStar[count - 1]
                                    }
                                </span>
                            </div>
                        }
                    </span>
                );
            }
            count++;
        });

        return finalStars;
    }
    generateStars() {
        let items = [];

        if (1 <= this.state.data.length) {
            let style = {};

            this.state.data.map((object, index) => {

                /**
                 * check if user passed all needed keys
                 */
                let checkProps = checkRequiredProps(object, {
                    'site': 'string',
                    'count': 'number',
                    'filled': 'number'
                });

                if (true == checkProps.keysAvailable && false == checkProps.type) {

                    let site = ((typeof 's' === typeof object.site && 'left' === object.site) || (typeof 's' === typeof object.site && 'right' === object.site)) ? object.site : 'left';
                    let count = (typeof 1 === typeof object.count && 1 <= object.count) ? object.count : 5;
                    let filled = (typeof 1 === typeof object.filled && 1 <= object.filled && count >= object.filled) ? object.filled : 0;
                    let array = this.generateArray(count);
                    let generateStarts = this.generateSingleStars(array, index, filled, object);

                    style.float = site;

                    let direction = this.props.direction ? this.props.direction : 'left';

                    if ('right' === direction) {
                        items.push(
                            <li className='react-divcreator-stars-ul-li' key={customKey()}>
                                <div className='react-divcreator-stars-ul-li-text'>
                                    {
                                        object.customHTML &&
                                        <span>
                                            {
                                                object.customHTML
                                            }
                                        </span>
                                    }
                                </div>
                                <div className='react-divcreator-stars-ul-li-stars-to-right' style={style}>
                                    {
                                        generateStarts &&
                                        generateStarts
                                    }
                                </div>
                                {
                                    object.data &&
                                    <div className='react-divcreator-stars-ul-li-custom' key={customKey()}>
                                        {
                                            object.data
                                        }
                                    </div>
                                }
                            </li>
                        );
                    }
                    else {
                        items.push(
                            <li className='react-divcreator-stars-ul-li' key={customKey()}>
                                <div className='react-divcreator-stars-ul-li-text'>
                                    {
                                        object.customHTML &&
                                        <span>
                                            {
                                                object.customHTML
                                            }
                                        </span>
                                    }
                                </div>
                                <div className='react-divcreator-stars-ul-li-stars' style={style}>
                                    {
                                        generateStarts &&
                                        generateStarts
                                    }
                                </div>
                                {
                                    object.data &&
                                    <div className='react-divcreator-stars-ul-li-custom' key={customKey()}>
                                        {
                                            object.data
                                        }
                                    </div>
                                }
                            </li>
                        );
                    }
                }
            });
        }

        return items;
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
            let masterId = this.props.id ? this.props.id : '';
            let starsData = this.generateStars();

            return (
                <div id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    <ul className='react-divcreator-stars-ul'>
                        {
                            starsData &&
                            starsData
                        }
                    </ul>
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default stars;
