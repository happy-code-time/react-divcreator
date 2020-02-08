import React, { Component } from 'react';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import customKey from '../funtions/customKey';

import { logBuildTime } from '../funtions/logBuildTime';
class paging extends Component {

    constructor(props) {
        super(props);
        this.saveNewTableContent = this.saveNewTableContent.bind(this);
        this.type = 'paging'
        this.defaultClass = 'react-divcreator-paging';
        this.defaultClassMounted = 'react-divcreator-paging-mounted mounted';
        this.requiredProps = {
            content: 'object',
            mapContent: 'object'
        }
        this.state = {
            lengthOfData: 0,
            pagingUuid: `paging-system-${customKey()}-${customKey()}`,
            currentDirection: 1,
            previousDirection: 0,
            contentId: `paging-content-id-${customKey()}-${customKey()}`,
            footerId: `paging-footer-id-${customKey()}-${customKey()}`,
            contentData: props.content,
            contentDataUuid: `content-data-for-change-id-${customKey()}-${customKey()}`,
            contentDataUuidForCallback: `content-data-for-change-id-callback-${customKey()}-${customKey()}`,
            originalContentDataFromUser: `original-content-data-from-user-id-${customKey()}-${customKey()}`,
            tablePagingAll: `table-paging-all-id-${customKey()}-${customKey()}`,
            mounted: false
        };
        this.buildTimeStart = Date.now();

        window.sessionStorage.setItem(this.state.contentDataUuid, '[]');
        window.sessionStorage.setItem(this.state.contentDataUuidForCallback, '[]');
        window.sessionStorage.setItem(this.state.originalContentDataFromUser, JSON.stringify(this.state.contentData));
        window.sessionStorage.setItem(this.state.tablePagingAll, JSON.stringify(this.state.contentData));
        /**
         * Unique identifier for this pagigng
         * to stroe current page etc..
         */
        window.sessionStorage.setItem(this.state.pagingUuid, '1');
        /**
         * If user wish to use the pager
         */
        if (!this.props.displayAll) {
            if (!this.props.displayAll) {
                this.requiredProps.title = 'object';
                this.requiredProps.content = 'object';
                this.requiredProps.mapContent = 'object';
                this.requiredProps.recordsPerSite = 'number';
                this.requiredProps.displayActualPage = 'boolean';
                this.requiredProps.displayActualPageOf = 'boolean';
                this.requiredProps.displayPrevNext = 'boolean';
                this.requiredProps.displayAvailablePages = 'boolean';
                this.requiredProps.showLineNumber = 'boolean';
                this.requiredProps.displayAlwaysLastPage = 'boolean';
                this.requiredProps.displayPagesCount = 'number';
                this.requiredProps.displayTitle = 'boolean';
                this.requiredProps.displayClickablePages = 'boolean';
            }
        }
        /**
         * check if user wish to add custom html to page of like 1 / 5
         */
        if (typeof true === typeof this.props.displayActualPageOf && true === this.props.displayActualPageOf) {
            this.requiredProps.actualPageOfHtml = 'string';
        }
        /**
         * check if user wish to add prev and next button
         */
        if (typeof true === typeof this.props.displayPrevNext && true === this.props.displayPrevNext) {
            this.requiredProps.nextHTML = 'string';
            this.requiredProps.prevHTML = 'string';
        }
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    generateTopics() {
        const direction = (this.props.tableDirection && 'horizontal' == this.props.tableDirection) ? 'horizontal' : 'vertical';

        if (this.props.displayTitle) {

            if ('vertical' == direction) {
                let topicContent = [];

                if (this.props.title && typeof [] === typeof this.props.title && this.props.title.length) {
                    this.props.title.map((title) => {
                        topicContent.push(
                            <li key={customKey()}>
                                {
                                    title &&
                                    <span>
                                        {title}
                                    </span>
                                }
                            </li>
                        );
                    });
                    return (
                        <ul className='react-divcreator-paging-topic-ul'>
                            {topicContent}
                        </ul>
                    );
                }
                else {
                    return (<p>Bad array of titles</p>);
                }
            }
            if ('horizontal' == direction) {
                let topicContent = [];

                if (this.props.title && typeof [] === typeof this.props.title && this.props.title.length) {
                    this.props.title.map((title) => {
                        topicContent.push(
                            <li key={customKey()}>
                                {
                                    title &&
                                    <span>
                                        {title}
                                    </span>
                                }
                            </li>
                        );
                    });
                    return (
                        <ul className='react-divcreator-paging-topic-ul-horizontal'>
                            {topicContent}
                        </ul>
                    );
                }
                else {
                    return (<p>Bad array of titles</p>);
                }
            }
        }
    }

    getCacheWithoutSavingState() {
        if (this.props.tableSaveCallback || this.props.tableCallback) {
            const originalState = window.sessionStorage.getItem(this.state.originalContentDataFromUser) ? JSON.parse(window.sessionStorage.getItem(this.state.originalContentDataFromUser)) : [];
            const newState = this.state.contentData;
            const allChangesByUser = window.sessionStorage.getItem(this.state.contentDataUuidForCallback) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuidForCallback)) : [];

            return {
                originalState,
                newState,
                allChangesByUser
            };
        }
    }

    getCache() {
        const newStateWithOptions = [];
        const buttonSaveClickedOnPage = window.sessionStorage.getItem(this.state.pagingUuid);
        // set all elements for the current page, (some values can be changed and the user clicked the button save
        let contentDataUuidForCallback = window.sessionStorage.getItem(this.state.contentDataUuidForCallback) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuidForCallback)) : [];

        if (contentDataUuidForCallback && contentDataUuidForCallback.length) {
            const oldContent = this.state.contentData ? this.state.contentData : [];

            contentDataUuidForCallback.map(object => {
                if (object.page == buttonSaveClickedOnPage) {
                    const objectKeyToChange = object.objectKeyToChange;
                    const value = object.newValue;
                    const index = object.index;
                    oldContent[index][objectKeyToChange] = value;
                }
            });

            this.setState(() => {
                return {
                    contentData: oldContent
                }
            }, () => {
                window.sessionStorage.setItem(this.state.contentDataUuid, '[]');
            });
        }

        if (this.props.tableSaveCallback || this.props.tableCallback) {
            const originalState = window.sessionStorage.getItem(this.state.originalContentDataFromUser) ? JSON.parse(window.sessionStorage.getItem(this.state.originalContentDataFromUser)) : [];
            const allChangesByUser = window.sessionStorage.getItem(this.state.contentDataUuidForCallback) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuidForCallback)) : [];
            let newState = this.state.contentData;

            // if there are option fields available then make an callback only with the default values
            // default values only choosen if the user has not changed the select field option
            // otherwise the choosen user value used for the cvallback function
            if(this.props.tableSaveCallback){
                for(let x = 0; x <= newState.length - 1; x++){
                    let object = newState[x];

                    if (object && null !== object) {
                        let objectKeys = Object.keys(object);
    
                        if(objectKeys.length){
                            objectKeys.map( keyName => {
                                if(null !== newState[x][keyName] && typeof [] === typeof newState[x][keyName]){
                                    if(newState[x][keyName].default){
                                        newState[x][keyName] = newState[x][keyName].default;
                                    }
                                }
                            })
                        }
                        newStateWithOptions.push(newState[x]);
                    }
                }
            }

            window.sessionStorage.setItem(this.state.contentDataUuid, '[]');
            window.sessionStorage.setItem(this.state.contentDataUuidForCallback, '[]');

            return {
                originalState,
                newState,
                allChangesByUser,
                buttonSaveClickedOnPage,
                newStateWithOptions
            };
        }
    }

    saveNewTableContent() {
        const cache = this.getCache();

        if (cache && this.props.tableSaveCallback) {
            (this.props.tableSaveCallback)(cache.originalState, cache.newState, cache.allChangesByUser, cache.buttonSaveClickedOnPage, cache.newStateWithOptions);
        }
    }

    saveCachedItems() {
        let cachedContent = window.sessionStorage.getItem(this.state.contentDataUuid) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuid)) : [];

        if (cachedContent && cachedContent.length) {
            const oldContent = this.state.contentData ? this.state.contentData : [];

            cachedContent.map(object => {
                const objectKeyToChange = object.objectKeyToChange;
                const value = object.newValue;
                const index = object.index;
                oldContent[index][objectKeyToChange] = value;
            });
            this.setState(() => {
                return {
                    contentData: oldContent
                }
            }, () => {
                window.sessionStorage.setItem(this.state.contentDataUuid, '[]');
            });
        }
    }

    changeContentItemsValue(objectKeyToChange, index, target) {
        const buttonSaveClickedOnPage = window.sessionStorage.getItem(this.state.pagingUuid);
        let oldStateToSave = window.sessionStorage.getItem(this.state.contentDataUuid) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuid)) : [];
        let contentDataUuidForCallback = window.sessionStorage.getItem(this.state.contentDataUuidForCallback) ? JSON.parse(window.sessionStorage.getItem(this.state.contentDataUuidForCallback)) : [];
        const newValue = target.value ? target.value : ' ';

        let elementToSave = {
            newValue,
            index,
            objectKeyToChange,
            page: buttonSaveClickedOnPage
        };
        oldStateToSave.push(elementToSave);
        contentDataUuidForCallback.push(elementToSave);
        window.sessionStorage.setItem(this.state.contentDataUuid, JSON.stringify(oldStateToSave));
        window.sessionStorage.setItem(this.state.contentDataUuidForCallback, JSON.stringify(contentDataUuidForCallback));

        const cache = this.getCacheWithoutSavingState();

        if (cache) {
            let currentChangedTables = window.sessionStorage.getItem(this.state.tablePagingAll) ? JSON.parse(window.sessionStorage.getItem(this.state.tablePagingAll)) : [];

            if (cache.allChangesByUser.length) {
                cache.allChangesByUser.map(object => {

                    if (currentChangedTables[object.index] && null !== currentChangedTables[object.index]) {
                        const objectKeys = Object.keys(currentChangedTables[object.index]);

                        if (currentChangedTables[object.index] && objectKeys.length && objectKeys.includes(object.objectKeyToChange)) {
                            currentChangedTables[object.index][object.objectKeyToChange] = object.newValue;
                        }
                    }
                });
                window.sessionStorage.setItem(this.state.tablePagingAll, JSON.stringify(currentChangedTables));
            }

            if (this.props.tableCallback) {
                (this.props.tableCallback)(cache.originalState, currentChangedTables, cache.allChangesByUser);
            }
        }
    }

    generateContent() {
        const direction = (this.props.tableDirection && 'horizontal' == this.props.tableDirection) ? 'horizontal' : 'vertical';
        let count = 1;
        let maxRecordsPerSite = this.props.recordsPerSite;
        let countRecordsPerSite = 0;
        let objectKeys = [];
        let contentItems = [];
        let finalContent = [];
        let singleObject;
        let showLines = (typeof true === typeof this.props.showLineNumber && true === this.props.showLineNumber) ? true : false;
        let lineNumbers = [];
        let numberPushed = false;
        let hasErrors = false;
        let errorMessage = '';
        let spanWithErrorMessage = false;

        if ('horizontal' == direction) {
            maxRecordsPerSite = 1;
            showLines = false;
        }

        if (this.state.contentData && typeof [] === typeof this.state.contentData && this.state.contentData.length) {
            /**
             * single content object
             */

            let a = (null !== window.sessionStorage.getItem(this.state.pagingUuid)) ? window.sessionStorage.getItem(this.state.pagingUuid) : '0';
            a = JSON.parse(a);

            if (this.props.displayAll) {

                for (let i = 0; i < this.state.contentData.length; i++) {
                    let masterErrorsHere = false;
                    spanWithErrorMessage = false;
                    hasErrors = false;
                    errorMessage = '';
                    singleObject = this.state.contentData[i];
                    numberPushed = false;
                    lineNumbers = [];

                    if (showLines && !numberPushed) {
                        lineNumbers.push(
                            <li key={customKey()}>
                                {
                                    <span>
                                        {i + 1}
                                    </span>
                                }
                            </li>
                        );
                        numberPushed = true;
                    }
                    /**
                     * display only available objects
                     * becouse maybe the user have just 1 object on the last page
                     * but he want to display 5 on one page and the 2,3,4,5 not available
                     */
                    if (singleObject && null != singleObject) {
                        objectKeys = Object.keys(singleObject);
                        contentItems = [];
                        let cls = "";
                        /**
                         * check for each key is allowe or not
                         */
                        this.props.mapContent.map(allowedKey => {
                            spanWithErrorMessage = false;
                            hasErrors = false;

                            if (objectKeys.includes('hasErrors') && singleObject.errorMessages && singleObject.errorMessages[allowedKey]) {
                                hasErrors = true;
                                errorMessage = singleObject.errorMessages[allowedKey] ? singleObject.errorMessages[allowedKey] : '';
                                masterErrorsHere = true;

                                spanWithErrorMessage = (
                                    <span className='has-errors-ul-li-span'>
                                        {
                                            errorMessage
                                        }
                                    </span>
                                );

                            }

                            /**
                             * if key is allowed and the count is equal title length
                             */
                            objectKeys.map(singleKey => {
                                if (0 === i % 2) {
                                    if ('horizontal' == direction) {
                                        cls = 'react-divcreator-paging-content-ul-li-horizontal react-divcreator-paging-content-ul-li-odd';
                                    } else {
                                        cls = 'react-divcreator-paging-content-ul-li react-divcreator-paging-content-ul-li-odd';
                                    }
                                }
                                else {
                                    if ('horizontal' == direction) {
                                        cls = 'react-divcreator-paging-content-ul-li-horizontal react-divcreator-paging-content-ul-li-even';
                                    } else {
                                        cls = 'react-divcreator-paging-content-ul-li react-divcreator-paging-content-ul-li-even';
                                    }
                                }
                                if (allowedKey == singleKey) {

                                    if (singleObject[singleKey] && typeof {} === typeof singleObject[singleKey] && null !== singleObject[singleKey] && Object.keys(singleObject[singleKey]).length) {
                                        const optionsHtml = [];
                                        const objectKeys = Object.keys(singleObject[singleKey]);

                                        if (objectKeys.length) {
                                            for (let mrx = 0; mrx <= objectKeys.length - 1; mrx++) {
                                                let singleKeyObject = objectKeys[mrx];
                                                let singleValue = singleObject[singleKey][singleKeyObject] ? singleObject[singleKey][singleKeyObject] : '';

                                                if (singleValue && singleKeyObject !== 'default') {
                                                    let optionCls = `react-divcreator-paging-content-ul-li-select-option react-divcreator-paging-content-ul-li-select-option-entry-${mrx + 1}`;
                                                    optionsHtml.push(
                                                        <option
                                                            key={customKey()}
                                                            className={optionCls}
                                                            datakey={singleKeyObject}
                                                            datavalue={singleValue}
                                                        >
                                                            {
                                                                singleValue
                                                            }
                                                        </option>
                                                    );
                                                }
                                            }
                                            if (optionsHtml.length) {
                                                contentItems.push(
                                                    <li key={customKey()} className={masterErrorsHere && hasErrors ? cls + ' has-errors-ul-li' : cls}>
                                                        {
                                                            <select
                                                                className='react-divcreator-paging-content-ul-li-select'
                                                                onChange={(e) => { this.changeContentItemsValue(singleKey, i, e.target) }}
                                                            >
                                                                {
                                                                    optionsHtml
                                                                }
                                                            </select>
                                                        }
                                                        {
                                                            spanWithErrorMessage && spanWithErrorMessage
                                                        }
                                                    </li>
                                                );
                                            }
                                        }
                                    }
                                    else {
                                        if (this.props.tableEditable) {
                                            contentItems.push(
                                                <li key={customKey()} className={masterErrorsHere && hasErrors ? cls + ' has-errors-ul-li' : cls}>
                                                    {
                                                        singleObject[singleKey] &&
                                                        <input
                                                            type="text"
                                                            defaultValue={singleObject[singleKey]}
                                                            onChange={(e) => { this.changeContentItemsValue(singleKey, i, e.target) }}
                                                        />
                                                    }
                                                    {
                                                        spanWithErrorMessage && spanWithErrorMessage
                                                    }
                                                </li>
                                            );
                                        } else {
                                            contentItems.push(
                                                <li key={customKey()} className={masterErrorsHere && hasErrors ? cls + ' has-errors-ul-li' : cls}>
                                                    {
                                                        singleObject[singleKey] &&
                                                        <span>
                                                            {singleObject[singleKey]}
                                                        </span>
                                                    }
                                                    {
                                                        spanWithErrorMessage && spanWithErrorMessage
                                                    }
                                                </li>
                                            );
                                        }
                                    }
                                }
                            });
                        });
                    }
                    if (showLines) {

                        finalContent.push(
                            <div key={customKey()}>
                                <ul key={customKey()} className={masterErrorsHere ? 'react-divcreator-paging-content-numbers-ul has-errors-ul-number' : 'react-divcreator-paging-content-numbers-ul'}>
                                    {
                                        lineNumbers
                                    }
                                </ul>
                                <ul key={customKey()} className={masterErrorsHere ? 'react-divcreator-paging-content-ul has-errors-ul' : 'react-divcreator-paging-content-ul'}>
                                    {
                                        contentItems
                                    }
                                </ul>
                            </div>
                        )
                    }
                    else {
                        finalContent.push(
                            <ul key={customKey()} className={'horizontal' == direction ? (masterErrorsHere ? 'react-divcreator-paging-content-ul-horizontal has-errors-ul' : 'react-divcreator-paging-content-ul-horizontal') : (masterErrorsHere ? 'react-divcreator-paging-content-ul has-errors-ul' : 'react-divcreator-paging-content-ul')}>
                                {
                                    contentItems
                                }
                            </ul>
                        )
                    }
                }
            } else {

                for (let i = ((a - 1) * maxRecordsPerSite); i < (a * this.props.recordsPerSite); i++) {
                    let masterErrorsHere = false;
                    spanWithErrorMessage = false;
                    singleObject = this.state.contentData[i];
                    numberPushed = false;
                    errorMessage = '';
                    lineNumbers = [];

                    if (showLines && !numberPushed) {
                        lineNumbers.push(
                            <li key={customKey()}>
                                {
                                    <span>
                                        {i + 1}
                                    </span>
                                }
                            </li>
                        );
                        numberPushed = true;
                    }
                    /**
                     * display only available objects
                     * becouse maybe the user have just 1 object on the last page
                     * but he want to display 5 on one page and the 2,3,4,5 not available
                     */
                    if (singleObject && null !== singleObject) {
                        count = 1;
                        objectKeys = Object.keys(singleObject);
                        contentItems = [];
                        let cls = "";
                        /**
                         * check for each key is allowe or not
                         */
                        this.props.mapContent.map((allowedKey, index) => {
                            /**
                             * if key is allowed and the count is equal title length
                             */
                            objectKeys.map(singleKey => {
                                spanWithErrorMessage = false;
                                hasErrors = false;

                                if (objectKeys.includes('hasErrors') && singleObject.errorMessages && singleObject.errorMessages[allowedKey]) {
                                    hasErrors = true;
                                    errorMessage = singleObject.errorMessages[allowedKey] ? singleObject.errorMessages[allowedKey] : '';
                                    masterErrorsHere = true;

                                    spanWithErrorMessage = (
                                        <span className='has-errors-ul-li-span'>
                                            {
                                                errorMessage
                                            }
                                        </span>
                                    );
                                }

                                if (0 === i % 2) {
                                    if ('horizontal' == direction) {
                                        cls = 'react-divcreator-paging-content-ul-li-horizontal react-divcreator-paging-content-ul-li-odd';
                                    } else {
                                        cls = 'react-divcreator-paging-content-ul-li react-divcreator-paging-content-ul-li-odd';
                                    }
                                }
                                else {
                                    if ('horizontal' == direction) {
                                        cls = 'react-divcreator-paging-content-ul-li-horizontal react-divcreator-paging-content-ul-li-even';
                                    } else {
                                        cls = 'react-divcreator-paging-content-ul-li react-divcreator-paging-content-ul-li-even';
                                    }
                                }
                                if (allowedKey == singleKey) {
                                    if (this.props.tableEditable) {
                                        contentItems.push(
                                            <li key={customKey()} className={masterErrorsHere && hasErrors ? cls + ' has-errors-ul-li' : cls}>
                                                {
                                                    singleObject[singleKey] &&
                                                    <input
                                                        type="text"
                                                        defaultValue={singleObject[singleKey]}
                                                        onChange={(e) => { this.changeContentItemsValue(singleKey, i, e.target) }}
                                                    />
                                                }
                                                {
                                                    spanWithErrorMessage && spanWithErrorMessage
                                                }
                                            </li>
                                        );
                                    } else {
                                        contentItems.push(
                                            <li key={customKey()} className={masterErrorsHere && hasErrors ? cls + ' has-errors-ul-li' : cls}>
                                                {
                                                    singleObject[singleKey] &&
                                                    <span>
                                                        {singleObject[singleKey]}
                                                    </span>
                                                }
                                                {
                                                    spanWithErrorMessage && spanWithErrorMessage
                                                }
                                            </li>
                                        );
                                    }
                                }
                            });
                            count++;
                        });
                        /**
                         * how many items should be displayed on single page
                         */
                        if (countRecordsPerSite <= maxRecordsPerSite) {
                            if (showLines) {
                                finalContent.push(
                                    <div key={customKey()}>
                                        <ul key={customKey()} className={masterErrorsHere ? 'react-divcreator-paging-content-numbers-ul has-errors-ul-numbers' : 'react-divcreator-paging-content-numbers-ul'}>
                                            {
                                                lineNumbers
                                            }
                                        </ul>
                                        <ul key={customKey()} className={masterErrorsHere ? 'react-divcreator-paging-content-ul has-errors-ul' : 'react-divcreator-paging-content-ul'}>
                                            {
                                                contentItems
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            else {
                                finalContent.push(
                                    <ul key={customKey()} className={'horizontal' == direction ? (masterErrorsHere ? 'react-divcreator-paging-content-ul-horizontal has-errors-ul' : 'react-divcreator-paging-content-ul-horizontal') : (masterErrorsHere ? 'react-divcreator-paging-content-ul' : 'react-divcreator-paging-content-ul')}>
                                        {
                                            contentItems
                                        }
                                    </ul>
                                )
                            }
                        }
                        countRecordsPerSite++;
                    }
                }
            }
            return finalContent;
        }
        else {
            let emptyMessage = (typeof 'a' === typeof this.props.emptyMessage && '' !== this.props.emptyMessage) ? this.props.emptyMessage : 'No data found with the actual searching criteria';

            return (
                <div className='react-divcreator-paging-no-data-div'>
                    <span>
                        {
                            emptyMessage && emptyMessage
                        }
                    </span>
                </div>);
        }
    }

    addLastPage(x) {
        /**
         * if the user has more then 3 pages then display dots
         * and make the dots clickable 
         */
        return [
            (
                <li key={customKey()} onClick={(e) => this.changePage(x, e)}>
                    <span>
                        {x}
                    </span>
                </li>
            )
        ];
    }

    addDots(sitesThatNotDisplayed, x) {
        /**
         * if user wish to display dots
         */
        if (1 <= sitesThatNotDisplayed.length && x <= this.calculateLastPage()) {

            return [
                (
                    <li key={customKey()}
                        className='react-divcreator-paging-footer-page'
                    >
                        <span className='react-divcreator-paging-footer-dots'>
                            {"..."}

                            {
                                <div className='react-divcreator-paging-footer-dots-child-div'>
                                    <ul className='react-divcreator-paging-footer-dots-child-ul'>
                                        {
                                            sitesThatNotDisplayed.map((number, index) => {
                                                return (
                                                    <li key={customKey()}
                                                        onClick={(e) => this.changePage(number, e)}
                                                        className='react-divcreator-paging-footer-dots-child-ul-li'
                                                    >
                                                        <span>
                                                            {number}
                                                        </span>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </span>
                    </li>
                )
            ];
        }

        return [];
    }

    generateFooter() {
        if (!this.props.displayAvailablePages) {
            return null;
        }
        let displayMaxPagesOnList = (typeof 1 === typeof this.props.displayPagesCount) ? (this.props.displayPagesCount >= 2 ? this.props.displayPagesCount : 2) : 2;
        let shouldDisplayLastPage = (typeof true === typeof this.props.displayAlwaysLastPage && true === this.props.displayAlwaysLastPage) ? this.props.displayAlwaysLastPage : false;
        let displayDots = (typeof true === typeof this.props.displayDots && true === this.props.displayDots) ? true : false;
        let userIsNowOnPage = this.state.currentDirection;
        let sites = [];
        let items = [];
        let counter = 0;

        const isCounterValide = () => {
            if (counter < displayMaxPagesOnList) {
                return true;
            }

            return false;
        };
        const calculatePagesThatNotDisplayed = (items) => {
            const sitesThatNotDisplayed = [];

            if (items.length) {

                for (let x = 1; x <= this.calculateLastPage(); x++) {
                    if (-1 === items.indexOf(x)) {
                        if (shouldDisplayLastPage && this.calculateLastPage() === x) {
                            /** 
                             * do not add the last page to the list, 
                             * becouse the user want to display the
                             * last page as clickable page
                             */
                        }
                        else {
                            sitesThatNotDisplayed.push(x);
                        }
                    }
                }
            }
            return sitesThatNotDisplayed;
        };
        /**
         * for site more then 2 sites to display
         * 
         * the difference between > 2 and > 1 is
         * that in this section the user have to had, the ability to jump to the next site by clicking
         * the second site after the actual visited site
         */
        if (displayMaxPagesOnList >= 3 && typeof true == typeof this.props.displayAvailablePages && true === this.props.displayAvailablePages) {

            if (1 === userIsNowOnPage) {
                for (let x = 1; x <= displayMaxPagesOnList; x++) {
                    if (shouldDisplayLastPage) {
                        if (x < this.calculateLastPage() && x > 0 && isCounterValide()) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                    }
                    else {
                        if (x <= this.calculateLastPage() && x > 0 && isCounterValide()) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                    }
                }
                if (displayDots) {
                    sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                }
                if (userIsNowOnPage !== this.calculateLastPage() && userIsNowOnPage !== this.calculateLastPage() - 1) {
                    shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
                }
                return sites;
            }
            if (this.calculateLastPage() === userIsNowOnPage) {

                for (let x = userIsNowOnPage - (displayMaxPagesOnList - 1); x <= userIsNowOnPage; x++) {
                    if (shouldDisplayLastPage) {
                        if (x < this.calculateLastPage() && x > 0 && isCounterValide()) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                        /**
                         * if the user is on the lastSite
                         */
                        if (x == this.calculateLastPage() - 1 && x > 0 && isCounterValide()) {
                            sites.unshift(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(this.calculateLastPage() - (displayMaxPagesOnList), e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {this.calculateLastPage() - (displayMaxPagesOnList)}
                                    </span>
                                </li>
                            );
                            items.push(this.calculateLastPage() - (displayMaxPagesOnList));
                            counter++;
                        }
                    }
                    else {
                        if (x > 0 && isCounterValide()) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                    }
                }
                if (displayDots) {
                    sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                }
                if (shouldDisplayLastPage) {
                    shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
                }
                return sites;
            }
            else {
                /**
                 * regular
                 */

                for (let x = userIsNowOnPage - 1; x <= userIsNowOnPage + displayMaxPagesOnList; x++) {
                    if (shouldDisplayLastPage) {

                        if (x < this.calculateLastPage() && x > 0 && isCounterValide()) {

                            /**
                             * calc if user wish to display more sites then now available, then 
                             * go backwards
                             */
                            if ((userIsNowOnPage + displayMaxPagesOnList) > this.calculateLastPage()) {
                                sites = [];

                                for (let y = this.calculateLastPage(); y >= this.calculateLastPage() - displayMaxPagesOnList; y--) {
                                    if (y === this.calculateLastPage() && shouldDisplayLastPage) {
                                        /**
                                         * dont display the last page if the user 
                                         * wish always to display the last page
                                         */
                                    }
                                    else {
                                        sites.unshift(
                                            <li key={customKey()}
                                                onClick={(e) => this.changePage(y, e)}
                                                className='react-divcreator-paging-footer-page'
                                            >
                                                <span>
                                                    {y}
                                                </span>
                                            </li>
                                        );
                                        items.push(y);
                                    }
                                }
                            }
                            else {
                                if (0 !== x) {
                                    sites.push(
                                        <li key={customKey()}
                                            onClick={(e) => this.changePage(x, e)}
                                            className='react-divcreator-paging-footer-page'
                                        >
                                            <span>
                                                {x}
                                            </span>
                                        </li>
                                    );
                                    items.push(x);
                                    counter++;
                                }
                            }
                        }
                    }
                    else {

                        if (x < this.calculateLastPage() && x > 0 && isCounterValide()) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                        if (x === this.calculateLastPage() - 1 && isCounterValide() && 0 !== x + 1) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x + 1, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x + 1}
                                    </span>
                                </li>
                            );
                            items.push(x + 1);
                        }
                    }
                }
            }
            if (displayDots) {
                sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
            }
            if (userIsNowOnPage !== this.calculateLastPage()) {
                shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
            }
            if (counter < displayMaxPagesOnList + 1) {
                let temp = [];
                counter++;
                for (let x = this.calculateLastPage() - displayMaxPagesOnList + 1; x <= this.calculateLastPage(); x++) {
                    if (isCounterValide() && -1 === items.indexOf(x) && 0 !== x) {
                        if (x === this.calculateLastPage()) {
                            if (!shouldDisplayLastPage) {
                                temp.push(
                                    <li key={customKey()}
                                        onClick={(e) => this.changePage(x, e)}
                                        className='react-divcreator-paging-footer-page'
                                    >
                                        <span>
                                            {x}
                                        </span>
                                    </li>
                                );
                                items.push(x);
                                counter++;
                            }
                        }
                        else {
                            temp.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(x, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {x}
                                    </span>
                                </li>
                            );
                            items.push(x);
                            counter++;
                        }
                    }
                }
                sites.unshift(temp);
            }
            return sites;
        }
        /**
         * generate only 2 sites
         */
        else {
            let pushed = false;
            let displayDots = (typeof true === typeof this.props.displayDots && true === this.props.displayDots) ? true : false;
            shouldDisplayLastPage = (typeof true === typeof this.props.displayAlwaysLastPage && true === this.props.displayAlwaysLastPage) ? this.props.displayAlwaysLastPage : false;
            sites = [];
            userIsNowOnPage = this.state.currentDirection;
            counter = 2;
            items = [];

            for (let x = userIsNowOnPage; x <= this.calculateLastPage(); x++) {
                pushed = false;

                /**
                 * user is on first page
                 */
                if (1 === userIsNowOnPage) {
                    /**
                     * user is on last page 1
                     */
                    items = [];
                    sites = [];

                    sites.push(
                        <li key={customKey()}
                            onClick={(e) => this.changePage(1, e)}
                            className='react-divcreator-paging-footer-page'
                        >
                            <span>
                                {1}
                            </span>
                        </li>
                    );
                    items.push(1);
                    counter--;

                    sites.push(
                        <li key={customKey()}
                            onClick={(e) => this.changePage(2, e)}
                            className='react-divcreator-paging-footer-page'
                        >
                            <span>
                                {2}
                            </span>
                        </li>
                    );
                    items.push(2);
                    counter--;
                    pushed = true;
                }
                /**
                 * if user is on last page -1 
                 */
                if (userIsNowOnPage === this.calculateLastPage() - 1) {
                    if (shouldDisplayLastPage) {
                        /**
                         * user is on last page - 1
                         */
                        items = [];
                        sites = [];

                        if (0 !== userIsNowOnPage - 1) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(userIsNowOnPage - 1, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {userIsNowOnPage - 1}
                                    </span>
                                </li>
                            );
                            items.push(userIsNowOnPage - 1);
                        }

                        sites.push(
                            <li key={customKey()}
                                onClick={(e) => this.changePage(userIsNowOnPage, e)}
                                className='react-divcreator-paging-footer-page'
                            >
                                <span>
                                    {userIsNowOnPage}
                                </span>
                            </li>
                        );
                        items.push(userIsNowOnPage);
                        if (displayDots) {
                            sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                        }
                        if (userIsNowOnPage !== this.calculateLastPage()) {
                            shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
                        }
                        return sites;
                    }
                    else {
                        /**
                         * user is on last page
                         */
                        items = [];
                        sites = [];

                        sites.push(
                            <li key={customKey()}
                                onClick={(e) => this.changePage('prev', e)}
                                className='react-divcreator-paging-footer-page'
                            >
                                <span>
                                    {userIsNowOnPage}
                                </span>
                            </li>
                        );
                        items.push(userIsNowOnPage);

                        sites.push(
                            <li key={customKey()}
                                onClick={(e) => this.changePage(this.calculateLastPage(), e)}
                                className='react-divcreator-paging-footer-page'
                            >
                                <span>
                                    {this.calculateLastPage()}
                                </span>
                            </li>
                        );
                        items.push(this.calculateLastPage());
                        if (displayDots) {
                            sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                        }
                        return sites;
                    }
                }
                /**
                 * user is on last page
                 */
                if (userIsNowOnPage === this.calculateLastPage()) {
                    if (shouldDisplayLastPage) {
                        /**
                         * user is on last page
                         */
                        items = [];
                        sites = [];

                        if (0 !== userIsNowOnPage - 2) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(userIsNowOnPage - 2, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {userIsNowOnPage - 2}
                                    </span>
                                </li>
                            );
                            items.push(userIsNowOnPage - 2);
                        }

                        if (0 !== userIsNowOnPage - 1) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(userIsNowOnPage - 1, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {userIsNowOnPage - 1}
                                    </span>
                                </li>
                            );
                            items.push(userIsNowOnPage - 1);
                        }

                        items.push(userIsNowOnPage);
                        if (displayDots) {
                            sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                        }
                        sites.push(
                            <li key={customKey()}
                                onClick={(e) => this.changePage(userIsNowOnPage, e)}
                                className='react-divcreator-paging-footer-page'
                            >
                                <span>
                                    {userIsNowOnPage}
                                </span>
                            </li>
                        );

                        if (userIsNowOnPage !== this.calculateLastPage()) {
                            shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
                        }
                        return sites;
                    }
                    else {
                        /**
                         * user is on last page
                         */
                        items = [];
                        sites = [];

                        if (0 !== userIsNowOnPage - 1) {
                            sites.push(
                                <li key={customKey()}
                                    onClick={(e) => this.changePage(userIsNowOnPage - 1, e)}
                                    className='react-divcreator-paging-footer-page'
                                >
                                    <span>
                                        {userIsNowOnPage - 1}
                                    </span>
                                </li>
                            );
                            items.push(userIsNowOnPage - 1);
                        }

                        sites.push(
                            <li key={customKey()}
                                onClick={(e) => this.changePage(userIsNowOnPage, e)}
                                className='react-divcreator-paging-footer-page'
                            >
                                <span>
                                    {userIsNowOnPage}
                                </span>
                            </li>
                        );
                        items.push(userIsNowOnPage);
                        if (displayDots) {
                            sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
                        }
                        if (userIsNowOnPage !== this.calculateLastPage()) {
                            shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
                        }
                        return sites;
                    }
                }
                if (counter > 0 && x == userIsNowOnPage) {
                    sites.push(
                        <li key={customKey()}
                            onClick={(e) => this.changePage('prev', e)}
                            className='react-divcreator-paging-footer-page'
                        >
                            <span>
                                {x}
                            </span>
                        </li>
                    );
                    pushed = true;
                    counter--;
                    items.push(x);
                }
                if (counter > 0 && !pushed) {
                    sites.push(
                        <li key={customKey()}
                            onClick={(e) => this.changePage('next', e)}
                            className='react-divcreator-paging-footer-page'
                        >
                            <span>
                                {x}
                            </span>
                        </li>
                    );
                    counter--;
                    items.push(x);
                }
            }

            if (displayDots) {
                sites.push(this.addDots(calculatePagesThatNotDisplayed(items), userIsNowOnPage));
            }
            if (userIsNowOnPage !== this.calculateLastPage() && userIsNowOnPage !== this.calculateLastPage() - 1) {
                shouldDisplayLastPage ? this.addLastPage(this.calculateLastPage()).forEach(item => { sites.push(item) }) : null;
            }
            return sites;
        }
    }

    calculateLastPage() {
        let actualContentArraySize = this.state.contentData.length;
        let lastpage = (actualContentArraySize / this.props.recordsPerSite);
        let lastpageAfterDot = JSON.stringify(lastpage);

        if (-1 !== lastpageAfterDot.indexOf('.')) {
            lastpageAfterDot = lastpageAfterDot.split(".");
            lastpageAfterDot = lastpageAfterDot[1];
            lastpageAfterDot = lastpageAfterDot.substring(1, 0);
            lastpageAfterDot = parseInt(lastpageAfterDot);
            lastpage = JSON.stringify(lastpage);

            if (-1 !== lastpage.indexOf('.')) {
                lastpage = lastpage.split(".");
                lastpage = lastpage[0];
                lastpage = lastpage.substring(1, 0);
                lastpage = parseInt(lastpage);

                if (1 <= lastpageAfterDot) {
                    lastpage += 1;
                }
            }
        }

        return lastpage;
    }

    getCurrentPage() {
        return window.sessionStorage.getItem(this.state.pagingUuid);
    }

    setNewPage(page) {
        window.sessionStorage.setItem(this.state.pagingUuid, JSON.stringify(page));
    }

    changePage(page, clickEvent) {
        this.saveCachedItems();
        let actualPage = window.sessionStorage.getItem(this.state.pagingUuid);
        actualPage = JSON.parse(actualPage);

        if (('prev' === page && actualPage <= 1) || ('next' === page && actualPage >= this.calculateLastPage())) {
            return;
        }

        this.setState({
            previousDirection: actualPage
        });
        /**
         * set new page to session storage
         */
        const cache = this.getCache();

        if ('next' === page) {
            /**
             * custom function passed by the user
             */
            if (this.props.nextFunction && 'function' === typeof this.props.nextFunction) {
                /**
                 * if user passed some custom data
                 */
                if (this.props.nextFunctionData) {
                    (this.props.nextFunction)('next', actualPage, clickEvent, this.props.nextFunctionData, cache);
                }
                else {
                    (this.props.nextFunction)('next', actualPage, clickEvent, null, cache);
                }
            }
            actualPage++;
        }
        if ('prev' === page) {
            /**
             * custom function passed by the user
             */
            if (this.props.prevFunction && 'function' === typeof this.props.prevFunction) {
                /**
                 * if user passed some custom data
                 */
                if (this.props.prevFunctionData) {
                    (this.props.prevFunction)('prev', actualPage, clickEvent, this.props.prevFunctionData, cache);
                }
                else {
                    (this.props.prevFunction)('prev', actualPage, clickEvent, null, cache);
                }
            }
            actualPage--;
        }
        if ('prev' !== page && 'next' !== page) {
            actualPage = page;
            /**
             * custom function passed by the user
             */
            if (this.props.pageFunction && 'function' === typeof this.props.pageFunction) {
                /**
                 * if user passed some custom data
                 */
                if (this.props.pageFunctionData) {
                    (this.props.pageFunction)('page', actualPage, clickEvent, this.props.pageFunctionData, cache);
                }
                else {
                    (this.props.pageFunction)('page', actualPage, clickEvent, null, cache);
                }
            }
        }
        /**
         * if page is numeric
         */
        this.setNewPage(actualPage);
        this.setState({
            currentDirection: actualPage
        });
    }

    render() {
        let checkProps = checkRequiredProps(this.props, this.requiredProps);
        const direction = (this.props.tableDirection && 'horizontal' == this.props.tableDirection) ? 'horizontal' : 'vertical';

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
            let masterId = this.props.id ? this.props.id : customKey();

            let topic = this.generateTopics();
            let content = this.generateContent();
            let footer = this.props.displayAll ? null : this.generateFooter();
            let userIsOnPage = this.state.currentDirection;

            let prevButton = '';
            let nextButton = '';

            if ((this.props.displayPrevNext && 1 < this.state.currentDirection) || (undefined !== this.props.displayPrevNextTogether && true == this.props.displayPrevNextTogether)) {
                let classesPrev = 'react-divcreator-paging-button react-divcreator-paging-button-prev';

                if (undefined !== this.props.displayAlwaysPrevNext && true == this.props.displayAlwaysPrevNext) {
                    classesPrev += ' display-block opacity-visible';
                }

                prevButton = (
                    <div className={classesPrev}>
                        {
                            <span key={customKey()} onClick={(e) => this.changePage('prev', e)}>
                                {
                                    this.props.prevHTML ? this.props.prevHTML : "<<"
                                }
                            </span>
                        }
                    </div>
                );
            }

            if ((this.props.displayPrevNext && this.calculateLastPage() > this.state.currentDirection) || (undefined !== this.props.displayPrevNextTogether && true == this.props.displayPrevNextTogether)) {
                let classesNext = 'react-divcreator-paging-button react-divcreator-paging-button-next';

                if (undefined !== this.props.displayAlwaysPrevNext && true == this.props.displayAlwaysPrevNext) {
                    classesNext += ' display-block opacity-visible';
                }

                nextButton = (
                    <div className={classesNext}>
                        {
                            <span key={customKey()} onClick={(e) => this.changePage('next', e)}>
                                {
                                    this.props.nextHTML ? this.props.nextHTML : ">>"
                                }
                            </span>
                        }
                    </div>
                );
            }

            return (
                <div className={masterClass} id={masterId}>
                    {
                        topic &&
                        <div className={'horizontal' == direction ? 'react-divcreator-paging-topic-div-horizontal' : 'react-divcreator-paging-topic-div'}>
                            {
                                topic
                            }
                        </div>
                    }
                    {
                        content &&
                        <div id={this.state.contentId} className={'horizontal' == direction ? 'react-divcreator-paging-content-div-horizontal' : 'react-divcreator-paging-content-div'}>
                            {
                                content
                            }
                        </div>
                    }
                    {
                        1 <= this.state.contentData.length && footer &&
                        <div id={this.state.footerId} className='react-divcreator-paging-footer-div'>
                            {
                                this.props.displayActualPage &&
                                <div className='react-divcreator-paging-current-site-div'>
                                    <span className='react-divcreator-paging-current-site__span'>
                                        {
                                            this.props.prefixForFirstPage &&
                                            <span className='react-divcreator-paging-current-site__span-prefix'>
                                                {this.props.prefixForFirstPage} {" "}
                                            </span>
                                        }

                                        {userIsOnPage}

                                        {
                                            this.props.displayActualPageOf && this.props.actualPageOfHtml &&
                                            <span className='react-divcreator-paging-current-site__span-delimiter'>
                                                {this.props.actualPageOfHtml}
                                            </span>
                                        }
                                        {
                                            this.calculateLastPage() &&
                                            <span onClick={(e) => this.changePage(this.calculateLastPage(), e)}>
                                                {
                                                    this.calculateLastPage()
                                                }
                                            </span>
                                        }
                                        {
                                            this.props.suffixForLastPage &&
                                            <span className='react-divcreator-paging-current-site__span-suffix'>
                                                {" "}{this.props.suffixForLastPage}
                                            </span>
                                        }
                                    </span>
                                </div>
                            }
                            {
                                footer && this.props.displayClickablePages &&
                                <ul className='react-divcreator-paging-footer-ul'>
                                    {
                                        footer
                                    }
                                </ul>
                            }
                        </div>
                    }
                    {
                        this.props.displayPrevNext && 1 < this.state.currentDirection && !this.props.displayAlwaysPrevNext &&
                        <div className='react-divcreator-paging-button react-divcreator-paging-button-prev'>
                            {
                                <span key={customKey()} onClick={(e) => this.changePage('prev', e)}>
                                    {
                                        this.props.prevHTML ? this.props.prevHTML : "<<"
                                    }
                                </span>
                            }
                        </div>
                    }
                    {
                        this.props.displayPrevNext && this.calculateLastPage() > this.state.currentDirection && !this.props.displayAlwaysPrevNext &&
                        <div className='react-divcreator-paging-button react-divcreator-paging-button-next'>
                            {
                                <span key={customKey()} onClick={(e) => this.changePage('next', e)}>
                                    {
                                        this.props.nextHTML ? this.props.nextHTML : ">>"
                                    }
                                </span>
                            }
                        </div>
                    }

                    {prevButton}
                    {nextButton}

                    {
                        this.props.tableSaveOnLastPage && true == this.props.tableSaveOnLastPage && this.getCurrentPage() == this.calculateLastPage() &&
                        this.props.tableEditable && this.props.tableSaveCallback && this.props.tableEditableSaveHtml && !this.props.displayAll &&
                        <span className='react-divcreator-paging-button react-divcreator-paging-button-save'>
                            {
                                this.props.tableEditableSaveHtml && 
                                <span onClick={this.saveNewTableContent}>
                                    {
                                        this.props.tableEditableSaveHtml
                                    }
                                </span>
                            }
                        </span>
                    }
                    {

                        !this.props.tableSaveOnLastPage && this.props.tableEditable && this.props.tableSaveCallback && this.props.tableEditableSaveHtml && !this.props.displayAll &&
                        <span className='react-divcreator-paging-button react-divcreator-paging-button-save'>
                            {
                                this.props.tableEditableSaveHtml && 
                                <span onClick={this.saveNewTableContent}>
                                    {
                                        this.props.tableEditableSaveHtml
                                    }
                                </span>
                            }
                        </span>
                    }
                    {
                        true == this.props.tableEditable && this.props.displayAll &&
                        <span className='react-divcreator-paging-button react-divcreator-paging-button-save'>
                            {
                                this.props.tableEditableSaveHtml && 
                                <span onClick={this.saveNewTableContent}>
                                    {
                                        this.props.tableEditableSaveHtml
                                    }
                                </span>
                            }
                        </span>
                    }
                </div>
            );
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default paging;
