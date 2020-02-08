import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class sourcecode extends Component {

    constructor(props) {
        super(props);
        this.splitByNewLine = this.splitByNewLine.bind(this);
        this.extractByNewLines = this.extractByNewLines.bind(this);
        this.generateLinesData = this.generateLinesData.bind(this);
        this.sortMatches = this.sortMatches.bind(this);
        this.recursiveMatcher = this.recursiveMatcher.bind(this);

        this.type = 'Sourcecode';
        this.defaultClass = 'react-divcreator-sourcecode';
        this.defaultClassMounted = 'react-divcreator-sourcecode-mounted mounted'
        this.requiredProps = {
            'data': 'string'
        };
        this.state = {
            showLines: this.props.showLines ? true : false,
            mounted: false,
            generatedCode: [],
            matcher: [],
            data: this.props.data ? this.props.data : [],
            userMatches: (this.props.match && this.props.match.length && typeof [] === typeof this.props.match) ? this.props.match : [],
            lineCharacter: this.props.lineCharacter ? this.props.lineCharacter : false,
            removeLines: (this.props.removeLines && this.props.removeLines.length && typeof [] === typeof this.props.removeLines) ? this.props.removeLines : [],
            removeLinesChar: this.props.removeLinesChar ? this.props.removeLinesChar : '',
            ignoreLines: (this.props.ignoreLines && this.props.ignoreLines.length && typeof [] === typeof this.props.ignoreLines) ? this.props.ignoreLines : [],
        };
        this.buildTimeStart = Date.now();
        this.sourceCode = [];
        this.count = 0;
        this.lines = [];
        this.marker = '__#__';
        this.regExp = /__#__/gi;
        this.storedMatches = [];
        this.debugging = false;
        this.foundMatchesMutations = [];
        this.developerAllMatches = [];
        this.allreadyMatchChecked = [];
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    splitByNewLine() {
        const data = this.state.data && this.state.data.length ? this.state.data : null;
        this.sourceCode = [];

        if (data) {
            let splitted = data.split('\n');

            if (splitted.length) {
                for (let x = 0; x <= splitted.length - 1; x++) {
                    if (!this.state.removeLines.includes(x)) {
                        this.sourceCode.push({
                            data: splitted[x]
                        });
                    } else {
                        if (false !== this.state.removeLinesChar
                            && null !== this.state.removeLinesChar
                            && undefined !== this.state.removeLinesChar
                        ) {
                            this.sourceCode.push({
                                data: '',
                                dataToReplace: true
                            });
                        }
                    }
                }
            }
            else {
                this.sourceCode.push({
                    data
                });
            }
        }
        return [];
    }

    extractByNewLines() {
        const self = this;

        if (this.sourceCode && this.sourceCode.length) {
            const code = this.sourceCode;
            this.sourceCode = [];
            let generatedObjects = [];

            for (let x = 0; x <= code.length - 1; x++) {
                generatedObjects = [];
                let singleLine = self.generateLinesData(code[x].data, x);
                this.foundMatchesMutations = [];

                if (singleLine.length) {

                    for (let mrx = 0; mrx <= singleLine.length - 1; mrx++) {
                        const className = singleLine[mrx].className ? singleLine[mrx].className : '';
                        const color = singleLine[mrx].color ? singleLine[mrx].color : '';
                        const hoverData = singleLine[mrx].hoverData ? singleLine[mrx].hoverData : '';

                        // general adder
                        generatedObjects.push(
                            <span
                                className={`${this.defaultClass}__span ${className} ${hoverData ? 'react-divcreator-sourcecode__custom--data-holder' : ''}`}
                                style={{ color }}
                                key={customKey()}
                            >
                                {
                                    singleLine[mrx].data && singleLine[mrx].data
                                }
                                {
                                    code[x].dataToReplace && 
                                    <span>
                                        {
                                            this.state.removeLinesChar
                                        }
                                    </span>
                                }
                                {
                                    hoverData &&
                                    <span
                                        className={`${this.defaultClass}__custom--data ${className}`}
                                    >
                                        {
                                            hoverData
                                        }
                                    </span>
                                }
                            </span>
                        );

                    }
                }

                if (!generatedObjects.length) {
                    generatedObjects = [
                        <p
                            className={`${this.defaultClass}__empty-line`}
                            key={customKey()}
                        >

                        </p>
                    ];
                }

                this.sourceCode.push(
                    <div
                        className={`${this.defaultClass}__single-line`}
                        key={customKey()}
                    >
                        {
                            this.state.showLines &&
                            <div
                                className='react-divcreator-sourcecode__line-number'
                                key={customKey()}
                            >
                                {
                                    this.state.lineCharacter &&
                                    this.state.lineCharacter
                                }
                                {
                                    !this.state.lineCharacter &&
                                    x + 1
                                }
                            </div>
                        }
                        {
                            generatedObjects &&
                            <div
                                className='react-divcreator-sourcecode__line-data'
                                key={customKey()}
                            >
                                {
                                    generatedObjects
                                }
                            </div>
                        }
                    </div>
                );
            }
        }

        if (this.props.allMatchesCallback && 'function' === typeof this.props.allMatchesCallback) {
            (this.props.allMatchesCallback)(this.developerAllMatches);
        }

        return this.sourceCode
    }

    /**
     * Sort DESC
     * @param {array} array 
     */
    sortMatches(array) {
        array.sort((prev, next) => {
            return next.length - prev.length;
        });
        return array;
    }

    recursiveMatcher(string, match) {
        let markedMatch = this.marker + match + this.marker;

        if (string == match) {
            this.allreadyMatchChecked.push(markedMatch);
            return markedMatch;
        }

        if ('' == string) {
            return '';
        }

        let tempString = string;

        try {
            let match_start, match_stringLength, match_end, match_beforeString, match_string, match_afterString;

            for (let x = 0; x <= this.allreadyMatchChecked.length - 1; x++) {
                tempString = tempString.replace(this.allreadyMatchChecked[x], '');
            }

            if (-1 !== string.indexOf(match) && -1 !== tempString.indexOf(match)) {
                this.allreadyMatchChecked.push(markedMatch);

                match_start = string.indexOf(match);
                match_stringLength = match.length;
                match_end = match_start + match_stringLength;

                match_beforeString = string.substring(0, match_start);
                match_string = string.substring(match_start, match_end);
                match_afterString = string.substring(match_end, string.length);

                if (this.marker !== match_beforeString.substring(0, this.marker.length)
                    || this.marker !== match_afterString.substring(match_afterString.length - this.marker.length, match_afterString.length)
                ) {
                    return match_beforeString + markedMatch + match_afterString;
                }
            }

            return string;
        } catch (error) {
            if (this.debugging) {
                console.info(`Error in recursiveMatcher: ${error}`);
            }
        }
    }

    recursion(string) {
        const matches = [...this.state.matcher, ...this.state.userMatches];
        let foundMatch = false;
        let strToReturn = '';

        try {
            let matcherLine = string.split(" ");

            // start matching in single line
            for (let mrx = 0; mrx <= matcherLine.length - 1; mrx++) {
                this.allreadyMatchChecked = [];

                for (let x = 0; x <= matches.length - 1; x++) {
                    // sort single matches array by length
                    const allMatches = this.sortMatches(matches[x].match);

                    for (let y = 0; y <= allMatches.length - 1; y++) {
                        if (-1 !== matcherLine[mrx].indexOf(allMatches[y])) {
                            foundMatch = true;
                            matcherLine[mrx] = this.recursiveMatcher(matcherLine[mrx], allMatches[y]);
                        }
                    }
                }
            }

            if (foundMatch && matcherLine.length) {
                for (let x = 0; x <= matcherLine.length - 1; x++) {
                    strToReturn += matcherLine[x] + ' ';
                }
                return strToReturn;
            } else {
                return string;
            }

        } catch (error) {
            if (this.debugging) {
                console.info(`Error in recursion: ${error}`);
            }
        }
    }

    generateLinesData(singleLine, lineNumber) {
        let match_start, match_stringLength, match_end, match_beforeString, match_string, match_afterString;
        const matches = [...this.state.matcher, ...this.state.userMatches];

        try {
            const matches = [...this.state.matcher, ...this.state.userMatches];
            const code = [];
            let singleWordToPush = '';
            singleLine = this.recursion(singleLine);
            const splittedLine = singleLine.split('');

            // start check
            for (let x = 0; x <= splittedLine.length - 1; x++) {
                const singleCharacter = splittedLine[x];

                singleWordToPush += singleCharacter;

                for (let y = 0; y <= matches.length - 1; y++) {
                    const { match, color, className, hoverData } = matches[y];

                    if (match && typeof [] == typeof match) {
                        for (let i = 0; i <= match.length - 1; i++) {
                            let markedStr = this.marker + match[i] + this.marker;

                            let devData = '';
                            // equal search
                            if (singleWordToPush.trim() == match[i]) {
                                code.push({
                                    data: singleWordToPush.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    hoverData
                                });

                                devData = {
                                    data: singleWordToPush.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    hoverData
                                };

                                singleWordToPush = '';
                            }

                            // equal search
                            if (singleWordToPush == markedStr) {
                                code.push({
                                    data: singleWordToPush.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    hoverData
                                });

                                devData = {
                                    data: singleWordToPush.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    lineData: singleLine.replace(this.regExp, ''),
                                    hoverData
                                };

                                singleWordToPush = '';
                            }

                            // indexof search
                            if (-1 !== singleWordToPush.indexOf(markedStr)) {
                                // reassign elements

                                match_start = singleWordToPush.indexOf(markedStr);
                                match_stringLength = markedStr.length;
                                match_end = match_start + match_stringLength;

                                match_beforeString = singleWordToPush.substring(0, match_start);
                                match_string = singleWordToPush.substring(match_start, match_end);
                                match_afterString = singleWordToPush.substring(match_end, singleWordToPush.length);

                                // string before match
                                code.push({
                                    data: match_beforeString.replace(this.regExp, ''),
                                    color: null,
                                    className: null,
                                    match
                                });

                                // found exact match
                                code.push({
                                    data: match_string.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    lineData: singleLine.replace(this.regExp, ''),
                                    hoverData
                                });

                                devData = {
                                    data: match_string.replace(this.regExp, ''),
                                    color,
                                    className,
                                    match: match[i],
                                    lineNumber,
                                    lineData: singleLine.replace(this.regExp, ''),
                                    hoverData
                                };

                                // string after match
                                singleWordToPush = match_afterString.replace(this.regExp, '');
                            }

                            if (devData.data) {
                                this.developerAllMatches.push(devData);
                            }
                        }
                    }
                }
            }

            if (singleWordToPush.length) {
                code.push({
                    data: singleWordToPush.replace(this.regExp, ''),
                    color: null,
                    className: null
                });
                singleWordToPush = '';
            } else {
                code.push({
                    data: `${' '}`,
                    color: null,
                    className: null
                });
            }

            return code;
        } catch (error) {
            if (this.debugging) {
                console.info(`Error on function generateLinesData. Stack: ${error}`);
            }
        }
    }

    getCode() {
        this.splitByNewLine();
        const code = this.extractByNewLines();

        return code;
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

            return (
                <div id={masterId} className={masterClass} key={customKey()}>
                    {
                        0 !== code.length &&
                        <div className='react-divcreator-sourcecode__lines-and-data'>
                            {
                                code &&
                                <div className='react-divcreator-sourcecode__data'>
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
export default sourcecode;
