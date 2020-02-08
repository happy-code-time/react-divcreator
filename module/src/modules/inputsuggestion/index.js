import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';

class inputsuggestion extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addRemoveSuggestion = this.addRemoveSuggestion.bind(this);
        this.setValueOfInputField = this.setValueOfInputField.bind(this);
        this.handleKeyPressDown = this.handleKeyPressDown.bind(this);
        this.handleKeyPressUp = this.handleKeyPressUp.bind(this);
        this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
        this.handleKeyPressEscape = this.handleKeyPressEscape.bind(this);
        this.removeChoosed = this.removeChoosed.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.removeSuggestion = this.removeSuggestion.bind(this);
        this.choosePredefined = this.choosePredefined.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.type = 'InputSuggestion';
        this.defaultClass = 'react-divcreator-inputsuggestion';
        this.defaultClassMounted = 'react-divcreator-inputsuggestion-mounted mounted';
        this.requiredProps = {};
        this.state = {
            mounted: false,
            choosenSuggestions: [],
            suggestions: [],
            suggestionsTemp: [],
            suggestionsTempStrings: [],
            placeholder: this.props.placeholder ? this.props.placeholder : '',
            data: this.props.data ? this.props.data : [],
            valueOfInputField: '',
            clearInputOnChange: this.props.clearInputOnChange ? this.props.clearInputOnChange : false,
            currentSelected: 0,
            choosenSuggestionsObjects: [],
            userHasMovedUpOrDown: false,
            doubleChoosedRemove: this.props.doubleChoosedRemove ? this.props.doubleChoosedRemove : false,
            multiChoice: this.props.multiChoice ? this.props.multiChoice : false,
            keySensitive: this.props.keySensitive ? this.props.keySensitive : false,
            maxHeight: this.props.maxHeight ? this.props.maxHeight : 200,
            checkHeight: 0,
            currentSteps: 0,
            autoFocus: true,
            sortDesc: this.props.sortDesc ? this.props.sortDesc : false,
            sortAsc: this.props.sortAsc ? this.props.sortAsc : false,
            showAllSuggestionsOnFocus: this.props.showAllSuggestionsOnFocus ? this.props.showAllSuggestionsOnFocus : false,
            mouseOverSelection: this.props.mouseOverSelection ? this.props.mouseOverSelection : false
        };
        this.buildTimeStart = Date.now();
        this.uuid = `${customKey()}`;
        this.uuidUl = `${customKey()}`;
        this.uuidUlHolder = `${customKey()}`;
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
        document.addEventListener('mousedown', this.handleClickOutside, false);
        document.addEventListener('touchstart', this.handleClickOutside, false);
        this.choosePredefined();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
        document.removeEventListener('touchstart', this.handleClickOutside, false);
    }

    componentDidUpdate() {
        const ulHolder = document.getElementById(this.uuidUlHolder);

        if (ulHolder) {
            ulHolder.scrollTop = this.state.checkHeight;
        }
    }

    choosePredefined(){
        const data = this.state.data;
        let choosenSuggestions = this.state.choosenSuggestions;
        let choosenSuggestionsObjects = this.state.choosenSuggestionsObjects;

        for (let x = 0; x <= data.length - 1; x++) {
            let { textSearch, textDropDown, choosedText, isChoosed } = data[x];

            if (undefined == textSearch || null == textSearch || typeof '22' !== typeof textSearch) {
                textSearch = '';
            }

            if (undefined == choosedText || null == choosedText || typeof '22' !== typeof choosedText) {
                choosedText = textSearch;
            }

            if (undefined == textDropDown || null == textDropDown || typeof '22' !== typeof textDropDown) {
                textDropDown = textSearch;
            }

            if (isChoosed) {
                if (!choosenSuggestions.includes(choosedText)) {
                    choosenSuggestions.push(choosedText);
                    choosenSuggestionsObjects.push(data[x]);
                }
            }
        }

        if(this.state.sortDesc){
            choosenSuggestions = this.sortDesc(choosenSuggestions);
            choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
        }

        if(this.state.sortAsc){
            choosenSuggestions = this.sortAsc(choosenSuggestions);
            choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
        }

        this.setState({
            choosenSuggestions,
            choosenSuggestionsObjects
        });
    }

    handleClickOutside(e) {
        const currentTop = document.documentElement.scrollTop;

        if(this.ul){
            const ul = this.ul;

            if (!ul.contains(e.target)) {
                this.setState({
                    suggestions: [],
                    userHasMovedUpOrDown: false,
                    currentSelected: 0,
                    valueOfInputField: ''
                });
            }
        }

        document.documentElement.scrollTop = currentTop;
    }

    handleKeyPress(e) {
        e.persist();

        if (38 === e.which && 'ArrowUp' === e.key || 38 == e.keyCode && 'ArrowUp' === e.key) {
            return this.handleKeyPressUp(e);
        }

        if (40 === e.which && 'ArrowDown' === e.key || 40 === e.keyCode && 'ArrowDown' === e.key) {
            return this.handleKeyPressDown(e);
        }

        if (13 === e.which && 'Enter' === e.key || 13 === e.keyCode && 'Enter' === e.key) {
            return this.handleKeyPressEnter(e);
        }

        if (27 === e.which && 'Escape' === e.key || 27 === e.keyCode && 'Escape' === e.key) {
            return this.handleKeyPressEscape(e);
        }

        const inputsValue = e.target.value;
        const data = this.state.data;
        let suggestions = this.state.suggestions;
        let suggestionsTemp = this.state.suggestionsTemp;
        let suggestionsTempStrings = this.state.suggestionsTempStrings;

        for (let x = 0; x <= data.length - 1; x++) {
            let { textSearch, textDropDown, choosedText } = data[x];

            if (undefined == textSearch || null == textSearch || typeof '22' !== typeof textSearch) {
                textSearch = '';
            }

            if (undefined == choosedText || null == choosedText || typeof '22' !== typeof choosedText) {
                choosedText = textSearch;
            }

            if (undefined == textDropDown || null == textDropDown || typeof '22' !== typeof textDropDown) {
                textDropDown = textSearch;
            }

            if (this.state.keySensitive) {
                if (-1 !== textSearch.indexOf(inputsValue)) {
                    if (!suggestionsTempStrings.includes(textSearch)) {
                        suggestionsTempStrings.push(textSearch);
                        suggestions.push({ textSearch, choosedText, textDropDown });
                        suggestionsTemp.push({ textSearch, choosedText, textDropDown });
                    }
                }
                else {
                    suggestionsTempStrings = suggestionsTempStrings.filter(i => i != textSearch);
                    suggestions = suggestions.filter(i => i.textDropDown != textDropDown);
                    suggestionsTemp = suggestionsTemp.filter(i => i.textDropDown != textDropDown);
                }
            }
            if (!this.state.keySensitive) {
                if (-1 !== textSearch.toLowerCase().indexOf(inputsValue.toLowerCase())) {
                    if (!suggestionsTempStrings.includes(textSearch)) {
                        suggestionsTempStrings.push(textSearch);
                        suggestions.push({ textSearch, choosedText, textDropDown });
                        suggestionsTemp.push({ textSearch, choosedText, textDropDown });
                    }
                }
                else {
                    suggestionsTempStrings = suggestionsTempStrings.filter(i => i != textSearch);
                    suggestions = suggestions.filter(i => i.textDropDown != textSearch);
                    suggestionsTemp = suggestionsTemp.filter(i => i.textDropDown != textSearch);
                }
            }
        }

        let userHasMovedUpOrDown = this.state.userHasMovedUpOrDown;
        let currentSelected = this.state.currentSelected;

        if (0 == inputsValue.length) {
            currentSelected = 0;
            userHasMovedUpOrDown = false;
            suggestions = [];
            suggestionsTemp = [];
            suggestionsTempStrings = [];
        }

        if(this.state.sortDesc){
            suggestions = this.sortDesc(suggestions);
        }

        if(this.state.sortAsc){
            suggestions = this.sortAsc(suggestions);
        }

        this.setState({
            suggestions,
            suggestionsTemp,
            suggestionsTempStrings,
            userHasMovedUpOrDown,
            currentSelected
        }, () => {
            if(this.state.autoFocus && this.node){
                this.node.focus();
            }
        });
    }

    sortDesc(array){
        let sorted = array.sort( (prev, next) => {
            if(typeof [] === typeof prev){
                if(next.textSearch < prev.textSearch){
                    return -1;
                }
                if(next.textSearch > prev.textSearch){
                    return 1;
                }
                return 0;
            } else {
                if(next < prev){
                    return -1;
                }
                if(next > prev){
                    return 1;
                }
                return 0;
            }
        })
        return sorted;
    }

    sortAsc(array){
        let sorted = array.sort( (prev, next) => {
            if(typeof [] === typeof prev){
                if(prev.textSearch < next.textSearch){
                    return -1;
                }
                if(prev.textSearch > next.textSearch){
                    return 1;
                }
                return 0;
            } else {
                if(prev < next){
                    return -1;
                }
                if(prev > next){
                    return 1;
                }
                return 0;
            }
        })
        return sorted;
    }

    addRemoveSuggestion(e, object, remove = false, classIncludes = '', keyType = '') {
        const { choosedText, textSearch } = object;
        let choosenSuggestions = this.state.choosenSuggestions;
        let choosenSuggestionsObjects = this.state.choosenSuggestionsObjects;
        let suggestions = this.state.suggestions;
        let suggestionsTemp = this.state.suggestionsTemp;
        let suggestionsTempStrings = this.state.suggestionsTempStrings;

        let  checkHeight = this.state.checkHeight;
        if(0 === this.state.currentSelected){
            checkHeight = 0;
        }

        e.persist();
        // remove 
        if( 'is-choosed' == classIncludes 
            && 'click' == keyType 
            && choosenSuggestions.includes(textSearch)
            && this.state.doubleChoosedRemove
        ){
            choosenSuggestions = choosenSuggestions.filter(string => string != textSearch);
            choosenSuggestionsObjects = choosenSuggestionsObjects.filter(o => o.textSearch != textSearch);

            if(this.state.sortDesc){
                suggestions = this.sortDesc(suggestions);
                suggestionsTemp = this.sortDesc(suggestionsTemp);
                choosenSuggestions = this.sortDesc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
            }
    
            if(this.state.sortAsc){
                suggestions = this.sortAsc(suggestions);
                suggestionsTemp = this.sortAsc(suggestionsTemp);
                choosenSuggestions = this.sortAsc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
            }

            return this.setState({
                choosenSuggestions,
                choosenSuggestionsObjects,
                suggestionsTempStrings,
                suggestions,
                suggestionsTemp,
                checkHeight
            }, () => {

                if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                    (this.props.onChangeCallback)(choosenSuggestionsObjects);
                }

                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }

        if (!this.state.multiChoice) {

            if(this.state.sortDesc){
                suggestions = this.sortDesc(suggestions);
                suggestionsTemp = this.sortDesc(suggestionsTemp);
                choosenSuggestions = this.sortDesc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
            }
    
            if(this.state.sortAsc){
                suggestions = this.sortAsc(suggestions);
                suggestionsTemp = this.sortAsc(suggestionsTemp);
                choosenSuggestions = this.sortAsc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
            }

            this.setState({
                valueOfInputField: choosedText,
                suggestions: [],
                suggestionsTemp: [],
                choosenSuggestions: [textSearch],
                choosenSuggestionsObjects: [object],
                userHasMovedUpOrDown: false,
                currentSelected: 0,
                suggestionsTempStrings: [choosedText],
                checkHeight
            }, () => {

                if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                    (this.props.onChangeCallback)(choosedText);
                }

                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }

            });
        } else {
            if (this.state.doubleChoosedRemove) {
                if (remove || 'is-choosed' == classIncludes ) {
                    // remove
                    if (choosenSuggestions.includes(textSearch)) {
                        choosenSuggestions = choosenSuggestions.filter(string => string != textSearch);
                        choosenSuggestionsObjects = choosenSuggestionsObjects.filter(o => o.textSearch != textSearch);

                        if(this.state.sortDesc){
                            suggestions = this.sortDesc(suggestions);
                            suggestionsTemp = this.sortDesc(suggestionsTemp);
                            choosenSuggestions = this.sortDesc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
                        }
                
                        if(this.state.sortAsc){
                            suggestions = this.sortAsc(suggestions);
                            suggestionsTemp = this.sortAsc(suggestionsTemp);
                            choosenSuggestions = this.sortAsc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
                        }

                        this.setState({
                            choosenSuggestions,
                            choosenSuggestionsObjects,
                            suggestionsTempStrings,
                            suggestions,
                            suggestionsTemp,
                            checkHeight
                        }, () => {

                            if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                                (this.props.onChangeCallback)(choosenSuggestionsObjects);
                            }

                            if(this.state.autoFocus && this.node){
                                this.node.focus();
                            }
                        });
                    }
                } else {
                    // add
                    if (!choosenSuggestions.includes(textSearch)) {
                        choosenSuggestions.push(textSearch);
                        choosenSuggestionsObjects.push(object);

                        if(this.state.sortDesc){
                            suggestions = this.sortDesc(suggestions);
                            suggestionsTemp = this.sortDesc(suggestionsTemp);
                            choosenSuggestions = this.sortDesc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
                        }
                
                        if(this.state.sortAsc){
                            suggestions = this.sortAsc(suggestions);
                            suggestionsTemp = this.sortAsc(suggestionsTemp);
                            choosenSuggestions = this.sortAsc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
                        }

                        this.setState({
                            choosenSuggestions,
                            choosenSuggestionsObjects,
                            checkHeight
                        }, () => {

                            if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                                (this.props.onChangeCallback)(choosenSuggestionsObjects);
                            }

                            if(this.state.autoFocus && this.node){
                                this.node.focus();
                            }
                        });
                    }
                }
            } else {
                // add
                if (!choosenSuggestions.includes(textSearch)) {
                    choosenSuggestions.push(textSearch);
                    choosenSuggestionsObjects.push(object);

                    if(this.state.sortDesc){
                        suggestions = this.sortDesc(suggestions);
                        suggestionsTemp = this.sortDesc(suggestionsTemp);
                        choosenSuggestions = this.sortDesc(choosenSuggestions);
                        choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
                    }
            
                    if(this.state.sortAsc){
                        suggestions = this.sortAsc(suggestions);
                        suggestionsTemp = this.sortAsc(suggestionsTemp);
                        choosenSuggestions = this.sortAsc(choosenSuggestions);
                        choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
                    }

                    this.setState({
                        choosenSuggestions,
                        choosenSuggestionsObjects,
                        suggestionsTempStrings,
                        suggestions,
                        suggestionsTemp,
                        checkHeight
                    }, () => {

                        if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                            (this.props.onChangeCallback)(choosenSuggestionsObjects);
                        }

                        if(this.state.autoFocus && this.node){
                            this.node.focus();
                        }

                    });
                }

                if (!this.state.doubleChoosedRemove && remove || 'is-choosed' == classIncludes) {

                    if('click' == keyType && 'is-choosed' == classIncludes && !this.state.doubleChoosedRemove) {
                        return false;
                    }
                    // remove
                    if (choosenSuggestions.includes(textSearch)) {
                        choosenSuggestions = choosenSuggestions.filter(string => string != textSearch);
                        choosenSuggestionsObjects = choosenSuggestionsObjects.filter(o => o.textSearch != textSearch);

                        if(this.state.sortDesc){
                            suggestions = this.sortDesc(suggestions);
                            suggestionsTemp = this.sortDesc(suggestionsTemp);
                            choosenSuggestions = this.sortDesc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
                        }
                
                        if(this.state.sortAsc){
                            suggestions = this.sortAsc(suggestions);
                            suggestionsTemp = this.sortAsc(suggestionsTemp);
                            choosenSuggestions = this.sortAsc(choosenSuggestions);
                            choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
                        }
                        this.setState({
                            choosenSuggestions,
                            choosenSuggestionsObjects,
                            suggestionsTempStrings,
                            suggestions,
                            suggestionsTemp,
                            checkHeight
                        }, () => {

                            if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                                (this.props.onChangeCallback)(choosenSuggestionsObjects);
                            }

                            if(this.state.autoFocus && this.node){
                                this.node.focus();
                            }    

                        });
                    }
                }
            }

            if (this.state.clearInputOnChange) {
                this.setState({
                    valueOfInputField: ''
                }, () => {
                    if(this.state.autoFocus && this.node){
                        this.node.focus();
                    }
                });
            }
        }
    }

    setValueOfInputField(e) {
        e.persist();

        this.setState({
            valueOfInputField: e.target.value
        }, () => {
            if(this.state.autoFocus && this.node){
                this.node.focus();
            }
        });
    }

    handleKeyPressDown(e) {
        const suggestions = this.state.suggestions;
        let checkHeight = this.state.checkHeight;
        let currentSteps = this.state.currentSteps;

        if (40 === e.which && 'ArrowDown' === e.key || 40 === e.keyCode && 'ArrowDown' === e.key) {
            let currentSelected = this.state.currentSelected;

            if (this.state.userHasMovedUpOrDown) {
                currentSelected++;
            }

            if (currentSelected > suggestions.length - 1) {
                currentSelected = suggestions.length - 1;
            }

            const ul = document.getElementById(this.uuidUl);

            if (ul && ul.childNodes && ul.childNodes[this.state.currentSelected]) {
                let checker = 0;

                for (let x = 0; x <= this.state.currentSelected; x++) {
                    if (ul.childNodes[x]) {
                        checker += ul.childNodes[x].getBoundingClientRect().height;
                    }
                }

                if (checker > this.state.maxHeight - ul.childNodes[this.state.currentSelected].getBoundingClientRect().height) {
                    checkHeight += ul.childNodes[this.state.currentSelected].getBoundingClientRect().height;
                    currentSteps++;
                }
            }

            if(0 === this.state.currentSelected){
                checkHeight = 0;
            }

            this.setState({
                currentSelected,
                userHasMovedUpOrDown: true,
                checkHeight,
                currentSteps
            }, () => {
                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }
    }

    handleKeyPressUp(e) {
        let checkHeight = this.state.checkHeight;
        let currentSteps = this.state.currentSteps;

        if (38 === e.which && 'ArrowUp' === e.key || 38 == e.keyCode && 'ArrowUp' === e.key) {
            let currentSelected = this.state.currentSelected;
            currentSelected--;

            if (currentSelected < 0) {
                currentSelected = 0;
            }

            const ul = document.getElementById(this.uuidUl);

            if (ul && ul.childNodes && ul.childNodes[this.state.currentSelected]) {
                if (currentSteps > 0) {
                    checkHeight -= ul.childNodes[this.state.currentSelected].getBoundingClientRect().height;
                    currentSteps--;
                }
            }

            this.setState({
                currentSelected,
                userHasMovedUpOrDown: true,
                checkHeight,
                currentSteps
            }, () => {
                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }
    }

    handleKeyPressEnter(e) {
        const suggestions = this.state.suggestions;
        const suggestionsTemp = this.state.suggestionsTemp;
        let choosenSuggestions = this.state.choosenSuggestions;

        e.persist();

        if (13 === e.which && 'Enter' === e.key || 13 === e.keyCode && 'Enter' === e.key) {

            if (suggestionsTemp.length && suggestions[this.state.currentSelected]) {
                // add
                if (!choosenSuggestions.includes(suggestions[this.state.currentSelected].textSearch)) {
                    this.addRemoveSuggestion(e, suggestions[this.state.currentSelected], false);
                }
                else {
                    if(this.state.doubleChoosedRemove){
                        this.addRemoveSuggestion(e, suggestions[this.state.currentSelected], true);
                    }
                }
            } else {
                this.setState({
                    suggestions: [],
                    userHasMovedUpOrDown: false
                }, () => {
                    if(this.state.autoFocus && this.node){
                        this.node.focus();
                    }
                });
            }
        }
    }

    handleKeyPressEscape(e) {
        if (27 === e.which && 'Escape' === e.key || 27 === e.keyCode && 'Escape' === e.key) {
            let valueOfInputField = this.state.valueOfInputField;

            if(this.state.clearInputOnChange){
                valueOfInputField = '';
            }

            this.setState({
                currentSelected: 0,
                userHasMovedUpOrDown: false,
                suggestions: [],
                suggestionsTemp: [],
                suggestionsTempStrings: [],
                valueOfInputField
            }, () => {
                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }
    }

    removeChoosed(e, suggestion) {
        this.addRemoveSuggestion(e, suggestion, true);
    }

    removeSuggestion(e, suggestion) {
        this.setState({
            valueOfInputField: '',
            suggestions: [],
            suggestionsTemp: [],
            choosenSuggestions: [],
            choosenSuggestionsObjects: [],
            userHasMovedUpOrDown: false,
            currentSelected: 0,
            suggestionsTempStrings: []
        }, () => {

            if (this.props.onChangeCallback && 'function' === typeof this.props.onChangeCallback) {
                (this.props.onChangeCallback)(this.state.choosenSuggestionsObjects);
            }

            if(this.state.autoFocus && this.node){
                this.node.focus();
            }

        });
    }

    handleClick(e){
        e.target.focus();

        if(this.state.showAllSuggestionsOnFocus){
            const data = this.state.data;
            let suggestions = this.state.suggestions;
            let suggestionsTemp = this.state.suggestionsTemp;
            let suggestionsTempStrings = this.state.suggestionsTempStrings;
            let choosenSuggestions = this.state.choosenSuggestions;
            let choosenSuggestionsObjects = this.state.choosenSuggestionsObjects;

            for (let x = 0; x <= data.length - 1; x++) {
                let { textSearch, textDropDown, choosedText } = data[x];
    
                if (undefined == textSearch || null == textSearch || typeof '22' !== typeof textSearch) {
                    textSearch = '';
                }
    
                if (undefined == choosedText || null == choosedText || typeof '22' !== typeof choosedText) {
                    choosedText = textSearch;
                }
    
                if (undefined == textDropDown || null == textDropDown || typeof '22' !== typeof textDropDown) {
                    textDropDown = textSearch;
                }
    
                if (!suggestionsTempStrings.includes(textSearch)) {
                    suggestionsTempStrings.push(textSearch);
                    suggestions.push({ textSearch, choosedText, textDropDown });
                    suggestionsTemp.push({ textSearch, choosedText, textDropDown });
                }
                else {
                    suggestionsTempStrings = suggestionsTempStrings.filter(i => i != textSearch);
                    suggestions = suggestions.filter(i => i.textDropDown != textDropDown);
                    suggestionsTemp = suggestionsTemp.filter(i => i.textDropDown != textDropDown);
                }
            }

            if(this.state.sortDesc){
                suggestions = this.sortDesc(suggestions);
                suggestionsTemp = this.sortDesc(suggestionsTemp);
                choosenSuggestions = this.sortDesc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortDesc(choosenSuggestionsObjects);
            }
    
            if(this.state.sortAsc){
                suggestions = this.sortAsc(suggestions);
                suggestionsTemp = this.sortAsc(suggestionsTemp);
                choosenSuggestions = this.sortAsc(choosenSuggestions);
                choosenSuggestionsObjects = this.sortAsc(choosenSuggestionsObjects);
            }
     
            if(this.state.sortDesc){
                suggestions = this.sortDesc(suggestions);
            }
    
            if(this.state.sortAsc){
                suggestions = this.sortAsc(suggestions);
            }

            this.setState({
                suggestions,
                suggestionsTemp,
                suggestionsTempStrings
            }, () => {
                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }
    }

    /**
     * ChangeSelectedChild - if the user is mouse over the 5 child and press
     * the arrow button, then start counting from the 5 child
     * and not from 0 !
     */
    changeChildSelection(e, currentSteps){
        if(this.state.mouseOverSelection && this.state.currentSelected !== currentSteps){
            let checkHeight = document.getElementById(this.uuidUlHolder).scrollTop;
            let currentSelected = currentSteps;

            if (currentSelected < 0) {
                currentSelected = 0;
            }
    
            this.setState({
                currentSelected,
                userHasMovedUpOrDown: true,
                currentSteps,
                checkHeight
            }, () => {
                if(this.state.autoFocus && this.node){
                    this.node.focus();
                }
            });
        }
    }

    render() {
        const checkProps = checkRequiredProps(this.props, this.requiredProps);
        const rootClass = this.props.class ? this.props.class : '';
        const masterClass = `${this.defaultClass} ${rootClass} ${this.state.mounted ? this.defaultClassMounted : 'before-mount'}`;
        const masterId = `${this.props.id ? this.props.id : customKey()}`;
        const inputStyle = {
            width: (0 !== this.state.choosenSuggestions.length) ? undefined : '100%',
            minWidth: (0 !== this.state.choosenSuggestions.length) ? '200px' : '100%',
            maxWidth: (0 !== this.state.choosenSuggestions.length) ? '300px' : '100%',
        };

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            return (
                <div
                    id={masterId}
                    className={masterClass}
                    key={customKey()}
                >
                    {
                        this.state.multiChoice &&
                        <div
                            className={`${this.defaultClass}__holder`}
                        >
                            {
                                0 !== this.state.choosenSuggestionsObjects.length &&
                                this.state.choosenSuggestionsObjects.map((suggestion, i) => {
                                    return (
                                        <div
                                            key={customKey()}
                                            className={`${this.defaultClass}__choosed`}
                                        >
                                            <span
                                                className={`${this.defaultClass}__choosed--span`}
                                            >
                                                <span
                                                    className={`${this.defaultClass}__choosed--text`}
                                                >
                                                    {
                                                        suggestion.choosedText
                                                    }
                                                </span>
                                                <span
                                                    onClick={(e) => this.removeChoosed(e, suggestion)}
                                                    className={`${this.defaultClass}__remove`}
                                                />
                                            </span>
                                        </div>
                                    );
                                })
                            }
                            <input
                                type="text"
                                id={this.uuid}
                                autoFocus={this.state.autoFocus}
                                ref={node => this.node = node}
                                placeholder={this.state.placeholder}
                                value={this.state.valueOfInputField}
                                className={`${this.defaultClass}__input`}
                                onKeyUp={(e) => this.handleKeyPress(e)}
                                onChange={(e) => this.setValueOfInputField(e)}
                                style={inputStyle}
                                onClick={(e) => this.handleClick(e)}
                                // onMouseEnter={(e) => e.target.focus()}
                                // tabIndex="0"
                            />
                        </div>
                    }
                    {
                        !this.state.multiChoice &&
                        <div
                            className={`${this.defaultClass}__holder__single`}
                        >
                            {
                                0 !== this.state.choosenSuggestions.length && !this.state.multiChoice &&
                                this.state.choosenSuggestions.map(suggestion => {
                                    return (
                                        <div
                                            key={customKey()}
                                            className={`${this.defaultClass}__choosed__single`}
                                        >
                                            <span
                                                className={`${this.defaultClass}__choosed--span`}
                                            >
                                                <span
                                                    onClick={(e) => this.removeSuggestion(e, suggestion)}
                                                    className={`${this.defaultClass}__remove`}
                                                />
                                            </span>
                                        </div>
                                    );
                                })
                            }
                            <input
                                type="text"
                                id={this.uuid}
                                autoFocus={this.state.autoFocus}
                                ref={node => this.node = node}
                                placeholder={this.state.placeholder}
                                value={this.state.valueOfInputField}
                                className={`${this.defaultClass}__input`}
                                onKeyUp={(e) => this.handleKeyPress(e)}
                                onChange={(e) => this.setValueOfInputField(e)}
                                style={inputStyle}
                                onClick={(e) => this.handleClick(e)}
                                // onMouseEnter={(e) => e.target.focus()}
                                // onClick={(e) => e.target.focus()}
                                // tabIndex="0"
                            />
                        </div>
                    }
                    {
                        (0 !== this.state.valueOfInputField.length || true == this.state.showAllSuggestionsOnFocus) && 0 !== this.state.suggestions.length &&
                        <div
                            id={this.uuidUlHolder}
                            className={`${this.defaultClass}__suggestions`}
                            style={
                                {
                                    maxHeight: this.state.maxHeight + 'px',
                                    overflowY: 'auto'
                                }
                            }
                        >
                            {
                                <ul
                                    id={this.uuidUl}
                                    ref={node => this.ul = node}
                                    className={`${this.defaultClass}__suggestions--holder`}
                                >
                                    {
                                        this.state.suggestions.map((suggestion, index) => {
                                            let classIncludes = '';

                                            if (this.state.choosenSuggestionsObjects.length) {
                                                this.state.choosenSuggestionsObjects.map(o => {
                                                    if (suggestion.textSearch && o.textSearch == suggestion.textSearch) {
                                                        classIncludes = 'is-choosed';
                                                    }
                                                });
                                            }

                                            if (this.state.multiChoice) {
                                                return (
                                                    <li
                                                        key={customKey()}
                                                        onClick={(e) => this.addRemoveSuggestion(e, suggestion, false, classIncludes, 'click')}
                                                        onMouseOver={(e) => this.changeChildSelection(e, index)}
                                                        className={`${classIncludes} ${this.defaultClass}__suggestions--single-suggestion ${(this.state.currentSelected === index && this.state.userHasMovedUpOrDown) ? 'selected' : ''}`}
                                                    >
                                                        {
                                                            suggestion.textDropDown
                                                        }
                                                    </li>
                                                );
                                            } else {
                                                return (
                                                    <li
                                                        key={customKey()}
                                                        onClick={(e) => this.addRemoveSuggestion(e, suggestion, false, classIncludes, 'click')}
                                                        onMouseOver={(e) => this.changeChildSelection(e, index)}
                                                        className={`${classIncludes} ${this.defaultClass}__suggestions--single-suggestion ${(this.state.currentSelected === index && this.state.userHasMovedUpOrDown) ? 'selected' : ''}`}
                                                    >
                                                        {
                                                            suggestion.textDropDown
                                                        }
                                                    </li>
                                                );
                                            }
                                        })
                                    }
                                </ul>
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
export default inputsuggestion;