import React, { Component } from 'react';

import { inputlistKeys } from '../../store/inputlist';

import { storeKeys } from '../../store/reducer';

import { InputList } from '../../../module/build/react-divcreator';

import { BoxBoxes, customKey, Sourcecode, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../../modules/footerComponents';

import { markSpecialWords } from '../../data/mark-special-words';

class InputListWebsite extends Component {

    constructor(props) {
        super(props);
        this.generateCodeExamples = this.generateCodeExamples.bind(this);
        this.deleteFromStackExample1 = this.deleteFromStackExample1.bind(this);
        this.deleteFromStackExample2 = this.deleteFromStackExample2.bind(this);
        this.addToStackExample1 = this.addToStackExample1.bind(this);
        this.alertEntryExample1 = this.alertEntryExample1.bind(this);
        this.alertEntryExample2 = this.alertEntryExample2.bind(this);
        
        this.state = {
            addedByUser: [],
            entrysExample1: ["Germany", "USA", "China", "Poland", "France"],
            entrysExample2: ["Germany", "USA", "China", "Poland", "France"],
            currentMode: 'add',
            currentInputValueExample1: '',
            currentInputValueExample2: '',
            placeholder: 'Type to add an element to the current list',
            currentModeTitle: 'Mode: add',
            isChecked: false,
            errorMessagesExample1: [],
            successMessagesExample1: []
        }

        this.subTitle = '';
        this.examples = [];
        this.keys = [];
    }

    /**
     * Add element to the current state
     * @param {*} event Click event
     * @param {*} currentInputValue 
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Defined by user
     */
    addToStackExample1(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        const addedByUser = [];
        currentInputValue ? addedByUser.push(currentInputValue) : null;
        const entrysExample1 = [...this.state.entrysExample1, ...addedByUser];

        this.setState({
            entrysExample1,
            successMessages: ['Value added to current list'],
            currentInputValueExample1: currentInputValue
        });
    }

    /**
     * Delete from stack some entry base on the returned index
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Defined by user
     */
    deleteFromStackExample1(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        let entrys = this.state.entrysExample1;
        const entrysExample1 = entrys.filter((entry, i) => i !== index);

        this.setState({ 
            entrysExample1
        });
    }

    /**
     * Delete from stack some entry base on the returned index
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Defined by user
     */
    deleteFromStackExample2(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        let entrys = this.state.entrysExample2;
        const entrysExample2 = entrys.filter((entry, i) => i !== index);

        this.setState({ 
            entrysExample2,
            warningMessagesExample2: [ entry + ' has been deleted'],
            successMessagesExample2: [],
            errorMessagesExample2: [],
            currentInputValueExample2: ''
        });
    }

    /**
     * Alert some message to the UI
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Defined by user
     */
    alertEntryExample1(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        alert(`
            User pressed the key: ${keyPressed}. 

            User are in the mode: ${currentMode}. 
            
            User clicked on value: ${this.state.entrysExample1[index]},
            
            User is on the arrays index: ${index}
        `);
    }

    /**
     * Alert some message to the UI
     * @param {any} event Click event
     * @param {string} entry Entrys value passed to the module
     * @param {number} index Current arrays entry index
     * @param {object} action Whole action passed for this entry to the module
     * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
     * @param {string} currentMode Current mode: add, search
     * @param {string} currentModeTitle Defined by the user
     * @param {boolean} isChecked Swichers state
     * @param {string} placeholder Defined by user
     */
    alertEntryExample2(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        alert(`
            User pressed the key: ${keyPressed}. 

            User are in the mode: ${currentMode}. 
            
            User clicked on value: ${this.state.entrysExample2[index]},
            
            User is on the arrays index: ${index}
        `);
    }

    /**
     * dispatch dtata to the redux store
     */
    dispatchData() {
        storeKeys.dispatch({
            type: 'keys',
            keys: inputlistKeys
        });
    }

    /**
     * Custom function to danlge ENTER or ICON CLICK
     * if the user is in add mode
     * @param {any} event 
     * @param {string} value 
     */
    addToDatabase(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData){
        // Add element to database
        console.clear();
        console.info( event,  
            currentInputValue, 
            keyPressed, 
            currentMode, 
            currentModeTitle, 
            isChecked, 
            placeholder, 
            customData
        );
    }

    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'InputList',
            keys: storeKeys.getState(),
            examples: [
                {
                    class: '',
                    description: 'Example with list entrys and 2 custom actions.',
                    html: (
                        <InputList
                            class="custom-inputlist"
                            id=""
                            data={this.state.entrysExample1}
                            showLineNumber={true}
                            responsive={true}
                            responsiveTitle={
                                <span>
                                    <i className="fas fa-table"></i>
                                    Table title
                                </span>
                            }
                            messageAdded={'Added element to the current list !'}
                            customData={'custom 1'}
                            header={
                                [
                                    '#',
                                    'Value',
                                    'Delete item',
                                    'Show item'
                                ]
                            }
                            actions={
                                [
                                    {
                                        actionTitle: "Delete single entry",
                                        actionName: "DELETE",
                                        actionFunction: this.deleteFromStackExample1,
                                        actionData: (<i className="fas fa-dumpster"></i>)
                                    },
                                    {
                                        actionTitle: "Read single entry",
                                        actionName: "OPEN",
                                        actionFunction: this.alertEntryExample1,
                                        actionData: (<i className="fas fa-book-open"></i>)
                                    }
                                ]
                            }
                        />
                    ),
                    cssCode: (
                        `
.custom-inputlist{
    max-width: 1024px;
    margin:0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .react-divcreator-inputlist-header-ul{
        background-color:dodgerblue;
    }
    .react-divcreator-inputlist-header-ul-li{
        p{
            font-size:18px;
            color:rgb(255,255,255);
        }
    }
    .react-divcreator-inputlist-ul-li{
        .react-divcreator-inputlist-ul-li__span{
            display: block;
            text-align:center;

            i{
                color:rgb(144,144,144);
                font-size:18px;
            }
        }
        .react-divcreator-inputlist-ul-li__span:hover{
            cursor: pointer;

            i{
                color:dodgerblue;
            }
            .fa-dumpster{
                color:#F44559;
            }
        }

        p{
            font-size:18px;
            color:rgba(69,69,69,.5)
        }
    }
    .react-divcreator-inputlist-ul__odd{
        background:rgba(69,69,69,.05);
    }
    .react-divcreator-inputlist-ul__even{
        background:rgba(69,69,69,.1);
    }
    .react-divcreator-inputlist-ul__odd:hover,
    .react-divcreator-inputlist-ul__even:hover {
        background:rgba(69,69,69,.2);
    }
    .react-divcreator-inputlist-ul:last-of-type{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
.react-divcreator-input{
    position: relative;

    .react-divcreator-input-child{
        border-right: none;
        border-radius:5px;
    }
    .react-divcreator-input-icon{
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        background: dodgerblue;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        span{
            display:block;
            box-sizing: border-box;
            padding:10px;
            text-align: center;
                        // height - padding (top+bottom/2 = 10px)
            line-height:calc(50px - 10px);

            i{
                font-size:21px;
                color:rgb(2255,255,255);
            }
            i:hover{
                color:rgba(244,244,244,.8);
            }
        }
        span:hover{
            cursor: pointer;
        }
    }
}
.no-entrys-found{
    box-sizing: border-box;
    padding:10px;
    color:rgba(69,69,69,.8);
    font-size:18px;
}`
                    ),
                    reactCode: (
                    `import { InputList } from 'react-divcreator';

<InputList
    class="custom-inputlist"
    id=""
    data={this.state.entrysExample1}
    showLineNumber={true}
    responsive={true}
    responsiveTitle={
        <span>
            <i className="fas fa-table"></i>
            Table title
        </span>
    }
    messageAdded={'Added element to the current list !'}
    customData={'custom 1'}
    header={
        [
            '#',
            'Value',
            'Delete item',
            'Show item'
        ]
    }
    actions={
        [
            {
                actionTitle: "Delete single entry",
                actionName: "DELETE",
                actionFunction: this.deleteFromStackExample1,
                actionData: (<i className="fas fa-dumpster"></i>)
            },
            {
                actionTitle: "Read single entry",
                actionName: "OPEN",
                actionFunction: this.alertEntryExample1,
                actionData: (<i className="fas fa-book-open"></i>)
            }
        ]
    }
/>`
                    ),
                    jsCode: (
                        `
constructor(props) {
    super(props);
    this.deleteFromStackExample1 = this.deleteFromStackExample1.bind(this);
    this.addToStackExample1 = this.addToStackExample1.bind(this);
    
    this.state = {
        entrysExample1: ["Germany", "USA", "China", "Poland", "France"],
        currentInputValueExample1: '',
        placeholder: 'Type to add an element to the current list',
        errorMessagesExample1: [],
        successMessagesExample1: []
    }

/**
 * Alert some message to the UI
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Defined by user
 */
alertEntryExample1(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    alert(\`
        User pressed the key: $ { keyPressed }. 

        User are in the mode: $ { currentMode } . 
        
        User clicked on value: $ { this.state.entrysExample1[index] },
        
        User is on the arrays index: $ { index }
    \`);
}

/**
 * Delete from stack some entry base on the returned index
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Defined by user
 */
deleteFromStackExample1(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    let entrys = this.state.entrysExample1;
    const entrysExample1 = entrys.filter((entry, i) => i !== index);

    this.setState({ 
        entrysExample1
    });
}`
                    )
                },
                {
                    class: '',
                    description: 'Previous example with input field.',
                    html: (
                        <InputList
                            class="custom-inputlist"
                            id=""
                            data={this.state.entrysExample2}
                            showLineNumber={true}
                            // Mode: add
                            addInput={true}
                            placeholder={this.state.placeholder}
                            icon={(<i className="fab fa-searchengin"></i>)}
                            handleClick={this.addToDatabase}
                            handleEnter={this.addToDatabase}
                            valueOfInputField={this.state.currentInputValueExample2}
                            messageSuccess={"Item added to current list"}
                            warningMessages={this.state.warningMessagesExample2}
                            successMessages={this.state.successMessagesExample2}
                            errorMessages={this.state.errorMessagesExample2}
                            searchKeySensitive={true}
                            customData={['my custom data 1', 'my custom data 2']}
                            performance={true}
                            responsive={true}
                            responsiveTitle={
                                <span>
                                    <i className="fas fa-table"></i>
                                    Table title
                                </span>
                            }
                            header={
                                [
                                    'ID',
                                    'Value',
                                    'Delete item',
                                    'Show item'
                                ]
                            }
                            actions={
                                [
                                    {
                                        actionTitle: "Delete single entry",
                                        actionFunction: this.deleteFromStackExample2,
                                        actionData: (<i className="fas fa-dumpster"></i>)
                                    },
                                    {
                                        actionTitle: "Read single entry",
                                        actionName: "Open Entry",
                                        actionFunction: this.alertEntryExample2,
                                        actionData: (<i className="fas fa-book-open"></i>)
                                    }
                                ]
                            }
                        />
                    ),
                    cssCode: (
                        `
.custom-inputlist{
    max-width: 1024px;
    margin:0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .react-divcreator-inputlist-header-ul{
        background-color:dodgerblue;
    }
    .react-divcreator-inputlist-header-ul-li{
        p{
            font-size:18px;
            color:rgb(255,255,255);
        }
    }
    .react-divcreator-inputlist-ul-li{
        .react-divcreator-inputlist-ul-li__span{
            display: block;
            text-align:center;

            i{
                color:rgb(144,144,144);
                font-size:18px;
            }
        }
        .react-divcreator-inputlist-ul-li__span:hover{
            cursor: pointer;

            i{
                color:dodgerblue;
            }
            .fa-dumpster{
                color:#F44559;
            }
        }

        p{
            font-size:18px;
            color:rgba(69,69,69,.5)
        }
    }
    .react-divcreator-inputlist-ul__odd{
        background:rgba(69,69,69,.05);
    }
    .react-divcreator-inputlist-ul__even{
        background:rgba(69,69,69,.1);
    }
    .react-divcreator-inputlist-ul__odd:hover,
    .react-divcreator-inputlist-ul__even:hover {
        background:rgba(69,69,69,.2);
    }
    .react-divcreator-inputlist-ul:last-of-type{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
.no-entrys-found{
    box-sizing: border-box;
    padding:10px;
    color:rgba(69,69,69,.8);
    font-size:18px;
}
.react-divcreator-input{
    position: relative;

    .react-divcreator-input-child{
        border-right: none;
        border-radius:5px;
    }
    .react-divcreator-input-icon{
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        background: dodgerblue;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        span{
            display:block;
            box-sizing: border-box;
            padding:10px;
            text-align: center;
                        // height - padding (top+bottom/2 = 10px)
            line-height:calc(50px - 10px);

            i{
                font-size:21px;
                color:rgb(2255,255,255);
            }
            i:hover{
                color:rgba(244,244,244,.8);
            }
        }
        span:hover{
            cursor: pointer;
        }
    }
}`
                    ),
                    reactCode: (
                    `import { InputList } from 'react-divcreator';

<InputList
    class="custom-inputlist"
    id=""
    data={this.state.entrysExample2}
    showLineNumber={true}
    // Mode: add
    addInput={true}
    placeholder={this.state.placeholder}
    icon={(<i className="fab fa-searchengin"></i>)}
    handleClick={this.addToDatabase}
    handleEnter={this.addToDatabase}
    valueOfInputField={this.state.currentInputValueExample2}
    messageSuccess={"Item added to current list"}
    warningMessages={this.state.warningMessagesExample2}
    successMessages={this.state.successMessagesExample2}
    errorMessages={this.state.errorMessagesExample2}
    searchKeySensitive={true}
    customData={['my custom data 1', 'my custom data 2']}
    performance={true}
    responsive={true}
    responsiveTitle={
        <span>
            <i className="fas fa-table"></i>
            Table title
        </span>
    }
    header={
        [
            'ID',
            'Value',
            'Delete item',
            'Show item'
        ]
    }
    actions={
        [
            {
                actionTitle: "Delete single entry",
                actionFunction: this.deleteFromStackExample2,
                actionData: (<i className="fas fa-dumpster"></i>)
            },
            {
                actionTitle: "Read single entry",
                actionName: "Open Entry",
                actionFunction: this.alertEntryExample2,
                actionData: (<i className="fas fa-book-open"></i>)
            }
        ]
    }
/>`
                    ),
                    jsCode: (
                        `
constructor(props) {
    super(props);
    this.deleteFromStackExample2 = this.deleteFromStackExample2.bind(this);
    this.alertEntryExample2 = this.alertEntryExample2.bind(this);
    
    this.state = {
        addedByUser: [],
        entrysExample2: ["Germany", "USA", "China", "Poland", "France"],
        currentMode: 'add',
        currentInputValueExample2: '',
        placeholder: 'Type to add an element to the current list',
        currentModeTitle: 'Mode: add',
        isChecked: false,
    }

/**
 * Delete from stack some entry base on the returned index
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Defined by user
 */
deleteFromStackExample2(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    let entrys = this.state.entrysExample2;
    const entrysExample2 = entrys.filter((entry, i) => i !== index);

    this.setState({ 
        entrysExample2,
        warningMessagesExample2: [ entry + ' has been deleted'],
        successMessagesExample2: [],
        errorMessagesExample2: [],
        currentInputValueExample2: ''
    });
}

    /**
 * Alert some message to the UI
 * @param {any} event Click event
 * @param {string} entry Entrys value passed to the module
 * @param {number} index Current arrays entry index
 * @param {object} action Whole action passed for this entry to the module
 * @param {string} keyPressed Key pressed by the user: Click, keyPress, Esc, Enter
 * @param {string} currentMode Current mode: add, search
 * @param {string} currentModeTitle Defined by the user
 * @param {boolean} isChecked Swichers state
 * @param {string} placeholder Defined by user
 */
alertEntryExample2(event, entry, index, action, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
    alert(\`
        User pressed the key: $ {keyPressed}. 

        User are in the mode: $ {currentMode}. 
        
        User clicked on value: $ {this.state.entrysExample2[index]},
        
        User is on the arrays index: $ {index}
    \`);
}
    /**
 * Custom function to danlge ENTER or ICON CLICK
 * if the user is in add mode
 * @param {any} event 
 * @param {string} value 
 */
addToDatabase(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData){
    // Add element to database
    console.clear();
    console.info( event,  
        currentInputValue, 
        keyPressed, 
        currentMode, 
        currentModeTitle, 
        isChecked, 
        placeholder, 
        customData
    );
}`
                    )
                }
            ]
        };
    }

    generateSubTitle() {

        if (this.subTitle) {

            return (
                <h1 className='context-of-code-subtitle'>
                    {
                        this.subTitle
                    }
                </h1>
            );
        }

        return null;
    }

    generateCodeExamples() {
        let cls = '';
        this.uuids = [];

        if (1 <= this.examples.length) {
            return this.examples.map((example, counter) => {
                
                counter += 1;
                cls = `divcreator-sourcecode-example ${example.class}`;
                let uuid = `uuid-${customKey()}--${customKey()}`;
                this.uuids.push(uuid);

                return (
                    <div id={uuid} key={customKey()} className={cls}>
                        {
                            example.html && 
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>HTML example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    {
                                                        example.description &&
                                                        <p className='divcreator-sourcecode-example-p'>
                                                            {
                                                                example.description
                                                            }
                                                        </p>
                                                    }
                                                    <div className="box-content--div">
                                                        {
                                                            example.html
                                                        }
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.reactCode && example.reactCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>React code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-react divcreator-sourcecode-original-code'
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.reactCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.reactCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.jsCode && example.jsCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={true}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>Javascript code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.jsCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.jsCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                        {
                            example.cssCode && example.cssCode.length &&
                            <BoxBoxes
                                class="boxes"
                                border={true}
                                // Responsive keys
                                responsive={true}
                                responsiveX={1024}
                                // Animation config
                                // animation={false}
                                // animationTime={500}
                                // animationTimeAdder={100}
                                // mount || scroll
                                animationOn={'mount'}
                                // how many elements should be in 1 single row
                                leftBreak={1}
                                leftData={
                                    [
                                        {
                                            top: {
                                                title: (
                                                    <span>
                                                        <div className="box-text-icon">
                                                            <i className="fas fa-laptop-code"></i>
                                                            <h1>SCSS code for example {counter}</h1>
                                                        </div>
                                                    </span>
                                                )
                                            },
                                            content: (
                                                <span className="box-content">
                                                    <div className="box-content--div">
                                                        <div className="box-content--div">
                                                            <Sourcecode
                                                                class='divcreator-sourcecode-background divcreator-sourcecode-code divcreator-sourcecode-background-js divcreator-sourcecode-original-code'
                                                                tabSpaces={0}
                                                                showLines={true}
                                                                match={markSpecialWords}
                                                                data={example.cssCode}
                                                            />
                                                            {
                                                                document.queryCommandSupported &&
                                                                <span className="copy-to-clipboard-holder">
                                                                    <span
                                                                        title="Copy to clipboard"
                                                                        className="copy-to-clipboard"
                                                                        onClick={(e) => copyToClipBoard(e, example.cssCode, document.documentElement.scrollTop)}
                                                                    >
                                                                        {
                                                                            `${copyToClipboardText()} example`
                                                                        }
                                                                        <i className="far fa-copy"></i>
                                                                    </span>
                                                                </span>
                                                            }
                                                        </div>
                                                    </div>
                                                </span>
                                            )
                                        }
                                    ]
                                }
                            />
                        }
                    </div>
                )
            })
        }

        return null;
    }

    generateMainDescription() {
        if (this.mainDescription) {

            return (
                <h1 className='context-of-code-main-description'>
                    {
                        this.mainDescription
                    }
                </h1>
            );
        }
        return null;
    }

    generateKeysDescription() {

        if (1 <= this.keys.length) {
            const keys = [];

            for (let x = 0; x <= this.keys.length - 1; x++) {
                const key = this.keys[x].type ? this.keys[x].type : getKeyFromDescription(this.keys[x].description, 'type');

                keys.push({
                    values: [
                        {
                            value: this.keys[x].key ? this.keys[x].key : ''
                        },
                        {
                            value: key
                        },
                        {
                            value: this.keys[x].description ? getKeyFromDescription(this.keys[x].description, 'description') : ''
                        }
                    ]
                });
            }
            
            return <List
                class="keys-for-type"
                id=""
                data={keys}
                responsive={true}
                responsiveX={1024}
                title={
                    <span>
                        <i className="fas fa-table"></i>
                        Available keys
                    </span>
                }
                header={
                    [
                        'Name',
                        'Type',
                        'Description'
                    ]
                }
            />
        }

        return null;
    }

    generateNavigationExamples() {
        const data = [];

        if (this.uuids.length) {
            this.uuids.map((id, index) => {
                data.push(
                    {
                        boxData: (
                            <ButtonsNavigation
                                navigationTo={`#${id}`}
                                navigationTime={300}
                                html={(
                                    <span>
                                        {
                                            `example ${index + 1}`
                                        }
                                    </span>
                                )}
                            />
                        ),
                        attributes: {
                            title: `Navigate to the code example: ${index + 1}`
                        }
                    }
                );
            })
        }
        return data;
    }

    render() {
        this.dispatchData();
        const moduleData = this.moduleData();
        this.subTitle = (moduleData && moduleData.subTitle) ? moduleData.subTitle : '';
        this.examples = (moduleData && moduleData.examples) ? moduleData.examples : [];
        this.keys = (moduleData && moduleData.keys) ? moduleData.keys : [];
        this.mainDescription = (moduleData && moduleData.mainDescription) ? moduleData.mainDescription : '';

        const subTitle = this.generateSubTitle();
        const codes = this.generateCodeExamples();
        const keys = this.generateKeysDescription();
        const mainDescription = this.generateMainDescription();

        return (
            <div className="website--components">
                <div className="content">
                    <LeftMenu />
                    <div className="right-site">
                        <HeaderComponent />
                        {
                            subTitle && subTitle
                        }
                        {
                            mainDescription && mainDescription
                        }
                        {
                            codes && codes
                        }
                        {
                            keys &&
                            <h1 className='title-minimum'>
                                Available keys
                            </h1>
                        }
                        {
                            keys &&
                            <div className="keys-component">
                                {
                                    keys
                                }
                            </div>
                        }
                        <FooterComponents
                            currentItem={this.subTitle}
                        />
                    </div>
                </div>
                <BoxMenu
                    class="boxes-menu-navigator"
                    performance={true}
                    width={50}
                    height={40}
                    borderWidth={1}
                    backgroundColorRoot={'rgba(24,115,204,1)'}
                    openData={<i className="fas fa-ellipsis-h"></i>}
                    closeData={<i className="fas fa-times"></i>}
                    directionX={false}
                    directionY={'bottom'}
                    alignBoxes={'y'}
                    data={this.generateNavigationExamples()}
                />
                <form style={{ display: 'none !important', opacity: 0, position: 'absolute', zIndex: '-1' }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
};
export default InputListWebsite;
