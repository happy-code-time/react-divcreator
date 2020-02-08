import * as React from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { Input } from '../../index';

import { logBuildTime } from '../funtions/logBuildTime';

class inputlistswitch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.generateSwitchers = this.generateSwitchers.bind(this);
        this.switchModes = this.switchModes.bind(this);

        this.handleInternalClickEnter = this.handleInternalClickEnter.bind(this);
        this.handleInternalEsc = this.handleInternalEsc.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.type = 'InputListSwitch';
        this.defaultClass = 'react-divcreator-inputlistswitch';
        this.defaultClassMounted = 'react-divcreator-inputlistswitch-mounted mounted';
        this.requiredProps = {
            'data': 'object',
            'actions': 'object'
        }

        this.state = {
            data: this.props.data ? this.props.data : [],
            cachedDataSearch: this.props.data ? this.props.data : [],
            actions: props.actions,
            header: props.header,
            currentMode: props.currentMode ? props.currentMode : 'add',
            currentModeTitle: this.calcModeTitle(props),
            modeTitleAdd: props.modeTitleAdd ? props.modeTitleAdd : 'Mode: add',
            modeTitleSearch: props.modeTitleSearch ? props.modeTitleSearch : 'Mode: search',
            placeholderSearch: props.placeholderSearch ? props.placeholderSearch : '',
            placeholder: 'add' == props.currentMode ? (props.placeholder ? props.placeholder : '') : props.placeholderSearch ? props.placeholderSearch : '',
            placeholderAdd: props.placeholder ? props.placeholder : '',
            isChecked: props.isChecked ? props.isChecked : false,
            errorMessages: (props.errorMessages ? props.errorMessages : []),
            successMessages: (props.successMessages ? props.successMessages : []),
            warningMessages: (props.warningMessages ? props.warningMessages : []),
            // no rerendering, handle internal
            handleInternal: true,
            cachedData: props.data ? props.data : [],
            currentInputValue: '',
            mounted: false,
            messageAdded: this.props.messageAdded ? this.props.messageAdded : 'Element has been added to the current list.',
            responsive: this.props.responsive ? this.props.responsive : false,
            responsiveTitle: this.props.responsiveTitle ? this.props.responsiveTitle: false
        };
        this.liStyle = {
            width: (100 / this.state.header.length) + '%'
        };
        this.buildTimeStart = Date.now();
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    calcModeTitle(props) {
        const titleAdd = props.modeTitleAdd ? props.modeTitleAdd : 'Mode: add';
        const titleSearch = props.modeTitleSearch ? props.modeTitleSearch : 'Mode: search';

        if ('add' == props.currentMode || undefined == props.currentMode) {
            return titleAdd;
        }

        return titleSearch;
    }

    handleClick(e, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder) {
        const placeholderChecked = 'add' == currentMode ? this.state.placeholderAdd : this.state.placeholderSearch;
        const currentModeChecked = 'add' == currentMode ? 'add' : 'search';
        const currentModeTitleChecked = 'add' == currentMode ? this.state.modeTitleAdd : this.state.modeTitleSearch;
        const isCheckedChecked = 'add' == currentMode ? false : true;

        if (action && action.actionFunction) {
            (action.actionFunction)(
                e, 
                entry, 
                index, 
                action, 
                keyPressed, 
                currentModeChecked, 
                currentModeTitleChecked, 
                isCheckedChecked, 
                placeholderChecked, 
                this.props.customData
            );
        }
    }

    switchModes() {
        const data = this.state.cachedData;
        let currentModeTitle, placeholder, currentMode, isChecked;
        const cachedMode = this.state.currentMode;

        if ('add' == cachedMode) {
            // Everything for search mode
            currentMode = 'search';
            isChecked = true;
            currentModeTitle = this.state.modeTitleSearch;
            placeholder = this.state.placeholderSearch;
        }

        if ('search' == cachedMode) {
            // Everything for add mode
            currentMode = 'add';
            isChecked = false;
            currentModeTitle = this.state.modeTitleAdd;
            placeholder = this.state.placeholderAdd;
        }

        this.setState({
            currentMode,
            currentModeTitle,
            placeholder,
            isChecked,
            currentInputValue: '',
            errorMessages: [],
            successMessages: [],
            warningMessages: [],
            data
        });
    }

    handleInternalClickEnter(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder) {
        event.preventDefault();
        event.persist();

        if(currentInputValue && currentInputValue.length){
            const data = this.state.data;
            data.push(currentInputValue);
    
            if('add' == currentMode) {
                const successMessages = [];
                successMessages.push(this.state.messageAdded);
                this.setState({
                    data,
                    currentInputValue: '',
                    currentMode: 'add',
                    isChecked: this.state.isChecked,
                    currentModeTitle: this.state.modeTitleAdd,
                    placeholder: this.state.placeholderAdd,
                    successMessages,
                    errorMessages: [],
                    warningMessages: []
                });
            }
        }
    }

    handleInternalEsc() {
        this.setState({
            data: this.state.cachedData,
            currentInputValue: '',
            currentMode: 'add' == this.state.currentMode ? 'add' : 'search',
            isChecked: 'add' == this.state.currentMode ? false : true,
            currentModeTitle: 'add' == this.state.currentMode ? this.state.modeTitleAdd : this.state.modeTitleSearch,
            placeholder: 'add' == this.state.currentMode ? this.state.placeholderAdd : this.state.placeholderSearch
        });
    }

    handleKeyPress(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder) {
        if(this.state.errorMessages.length || this.state.successMessages.length || this.state.warningMessages.length){
            this.setState({
                errorMessages: [],
                successMessages: [],
                warningMessages: []
            });
        }

        if('search' == this.state.currentMode) {
            const cachedData = this.state.cachedDataSearch;
            let data = [];
    
            if(cachedData && cachedData.length){
                if('' == currentInputValue){
                    data = cachedData;
                } else {
                    if(this.props.searchKeySensitive){
                        for(let x = 0; x <= cachedData.length-1; x++){
                            if(-1 !== cachedData[x].indexOf(currentInputValue)){
                                data.push(cachedData[x]);
                            }
                        }
                    } else {
                        for(let x = 0; x <= cachedData.length-1; x++){
                            if(-1 !== cachedData[x].toLowerCase().indexOf(currentInputValue.toLowerCase())){
                                data.push(cachedData[x]);
                            }
                        }
                    }
                }
    
                this.setState({
                    data,
                    currentInputValue: event.target.value,
                    currentMode: 'search',
                    isChecked: this.state.isChecked,
                    currentModeTitle: this.state.modeTitleSearch,
                    placeholder: this.state.placeholderSearch
                })
            }
        }
    }

    generateAddInputField() {
        return (
            <Input
                class="react-divcreator-input"
                placeholder={this.state.placeholder}
                icon={this.props.icon ? this.props.icon : ''}

                handleClick={this.handleInternalClickEnter}
                handleEnter={this.handleInternalClickEnter}
                handleEsc={this.handleInternalEsc}
                handleKeyPress={this.handleKeyPress}

                emptyOnEnter={this.props.emptyOnEnter ? this.props.emptyOnEnter : ''}
                emptyOnClick={this.props.emptyOnClick ? this.props.emptyOnClick : ''}
                emptyOnEsc={this.props.emptyOnEsc ? this.props.emptyOnEsc : ''}
                valueOfInputField={this.state.currentInputValue ? this.state.currentInputValue : ''}
                errorMessages={this.state.errorMessages}
                successMessages={this.state.successMessages}
                warningMessages={this.state.warningMessages}

                currentMode={this.state.currentMode}
                currentModeTitle={this.state.currentModeTitle}
                isChecked={this.state.isChecked}
                placeholder={this.state.placeholder}
                customData={this.props.customData}
            />
        );
    }

    generateList() {
        let allEntrys = this.state.data;
        const allActions = this.state.actions;
        const uls = [];
        let lis = [];
        let customCount = 0;

        if (allEntrys && allEntrys.length && allActions && allActions.length) {

            allEntrys.map((entry, index) => {
                customCount = 0;
                lis = [];
                let liOddOrEvent = `${this.state.responsive ? 'responsive-li' : ''} ${this.defaultClass}-ul-li ${this.defaultClass}-ul-li__even ${this.defaultClass}-ul-li__entry-${index + 1}`;
                let ulOddOrEvent = `${this.state.responsive ? 'responsive-ul' : ''} ${this.defaultClass}-ul ${this.defaultClass}-ul__even ${this.defaultClass}-ul__entry-${index + 1}`;

                if (index % 2 == 0) {
                    liOddOrEvent = `${this.state.responsive ? 'responsive-li' : ''} ${this.defaultClass}-ul-li ${this.defaultClass}-ul-li__odd ${this.defaultClass}-ul-li__entry-${index + 1}`;
                    ulOddOrEvent = `${this.state.responsive ? 'responsive-ul' : ''} ${this.defaultClass}-ul ${this.defaultClass}-ul__odd ${this.defaultClass}-ul__entry-${index + 1}`;
                }

                // If the user wish to show the line numbers
                if (this.props.showLineNumber) {
                    lis.push(
                        <li style={this.liStyle} key={customKey()} className={`${liOddOrEvent} ${this.defaultClass}__line-numbers`} >
                            {
                                this.state.responsive &&
                                <span className={`responsive-span`}>
                                    {
                                        this.state.header[customCount] ? this.state.header[customCount] : ''
                                    }
                                </span>
                            }
                            <p className={`${this.defaultClass}-ul-li__p`}>
                                {index + 1}
                            </p>
                        </li>
                    );
                }

                // Main list entry 
                customCount += 1;
                lis.push(
                    <li style={this.liStyle} key={customKey()} className={`${liOddOrEvent} ${this.defaultClass}-ul-li-main_data`}>
                        {
                            this.state.responsive &&
                            <span className={`responsive-span`}>
                                {
                                    this.state.header[customCount] ? this.state.header[customCount] : ''
                                }
                            </span>
                        }
                        <p className={`${this.defaultClass}-ul-li__p`}>
                            {
                                entry
                            }
                        </p>
                    </li>
                );

                customCount += 1;
                allActions.map(action => {
                    // If the user has custom jsx 
                    if (action.actionData) {
                        lis.push(
                            <li style={this.liStyle} key={customKey()} className={`${liOddOrEvent} ${this.defaultClass}-ul-li__action`}>
                                {
                                    this.state.responsive &&
                                    <span className={`responsive-span`}>
                                        {
                                            this.state.header[customCount] ? this.state.header[customCount] : ''
                                        }
                                    </span>
                                }
                                <span className={`${liOddOrEvent} ${this.defaultClass}-ul-li__span`} onClick={(e) => this.handleClick(e, entry, index, action, 'Click', this.state.currentMode, this.state.currentModeTitle, this.state.isChecked, this.state.placeholder)} title={action.actionTitle ? action.actionTitle : ''}>
                                    {
                                        action.actionData && action.actionData
                                    }
                                </span>
                            </li>
                        );
                    } else {
                        // If the user has not custom jsx
                        // then attach the click event to the li 
                        lis.push(
                            <li style={this.liStyle} key={customKey()} className={`${liOddOrEvent} ${this.defaultClass}-ul-li__action`} onClick={(e) => this.handleClick(e, entry, index, action, 'Click', this.state.currentMode, this.state.currentModeTitle, this.state.isChecked, this.state.placeholder)} title={action.actionTitle ? action.actionTitle : ''}>
                                {
                                    this.state.responsive &&
                                    <span className={`responsive-span`}>
                                        {
                                            this.state.header[customCount] ? this.state.header[customCount] : ''
                                        }
                                    </span>
                                }
                                <p className={`${this.defaultClass}-ul-li__p`}>
                                    {
                                        action.actionName && action.actionName
                                    }
                                </p>
                            </li>
                        );
                    }
                });
                uls.push(
                    <ul key={customKey()} className={`${ulOddOrEvent}`}>
                        {
                            lis
                        }
                    </ul>
                )
            });
            return uls;
        }
        if (this.props.noEntrysMsg) {
            return (
                <span className="no-entrys-found">
                    {
                        this.props.noEntrysMsg
                    }
                </span>
            );
        } else {
            return (
                <p className="no-entrys-found">
                    No entrys found in the current list.
                </p>
            )
        }
    }

    generateHeaders() {
        const currentHeaders = this.state.header;
        const header = [];

        if (currentHeaders && currentHeaders.length) {
            currentHeaders.map((name, index) => {
                let clsName = `${this.defaultClass}-header-ul-li ${this.defaultClass}-header-ul-li__odd`;

                if (index % 2 == 0) {
                    clsName = `${this.defaultClass}-header-ul-li ${this.defaultClass}-header-ul-li__even`;
                }

                header.push(
                    <li style={this.liStyle} key={customKey()} className={clsName}>
                        <p>
                            {
                                name
                            }
                        </p>
                    </li>
                )
            })
        }
        return (
            <ul key={customKey()} className={`${this.defaultClass}-header-ul`}>
                {
                    this.state.responsive && this.state.responsiveTitle &&
                    <li className="responsive-li-title">
                        {
                            this.state.responsiveTitle &&
                            <span>
                                {
                                    this.state.responsiveTitle
                                }
                            </span>
                        }
                    </li>
                }
                {
                    header
                }
            </ul>
        );
    }

    generateSwitchers() {
        return (
            <ul className="react-divcreator-inputlistswitch-switchers">
                <li>
                    <label className="react-divcreator-inputlistswitch-switch">
                        <input type="checkbox" checked={this.state.isChecked} onChange={(e) => this.switchModes()} />
                        <span className="react-divcreator-inputlistswitch-switch-slider round"></span>
                    </label>
                    <span className="react-divcreator-inputlistswitch-switch-description">
                        {
                            this.state.currentModeTitle
                        }
                    </span>
                </li>
            </ul>
        );
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);
        const currentHeaders = this.generateHeaders();
        const currentList = this.generateList();
        const addInput = this.generateAddInputField();
        const switchers = this.generateSwitchers();

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
                <div key={customKey()} id={masterId} className={masterClass} key={customKey()}>
                    <div key={customKey()} className={this.defaultClass + '-child'}>
                        {
                            this.props.switchers &&
                            switchers
                        }
                        {
                            this.props.addInput &&
                            addInput
                        }
                        {
                            this.state.header && 0 !== this.state.header.length &&
                            currentHeaders
                        }
                        {
                            currentList &&
                            <div className="react-divcreator-input__list">
                                {
                                    currentList
                                }
                            </div>
                        }
                    </div>
                </div>
            )
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default inputlistswitch;
