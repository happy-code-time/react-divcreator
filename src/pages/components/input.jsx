import React, { Component } from 'react';

import { inputKeys } from '../../store/input';

import { storeKeys } from '../../store/reducer';

import { BoxBoxes, customKey, Sourcecode, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { Input } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { markSpecialWords } from '../../data/mark-special-words';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../../modules/footerComponents';

class InputWebsite extends Component {

    constructor(props) {
        super(props);
        this.addToStack = this.addToStack.bind(this);
        this.deleteStack = this.deleteStack.bind(this);
        this.log = this.log.bind(this);
        this.generateCodeExamples = this.generateCodeExamples.bind(this);

        this.state = {
            entrys: [],
            renderEntrys: false,
            successMessages: []
        }

        this.subTitle = '';
        this.examples = [];
        this.keys = [];
    }

    log(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        console.clear();
        console.info(event);
        console.info(currentInputValue);
        console.info('CUSTOM DATA: ', customData);
    }

    addToStack(event, currentInputValue, keyPressed, currentMode, currentModeTitle, isChecked, placeholder, customData) {
        const entrys = this.state.entrys;
        currentInputValue ? entrys.push(currentInputValue) : null;
        const renderEntrys = entrys.length ? true : false;

        this.setState({
            entrys,
            renderEntrys,
            successMessages: ['Element added to current stack']
        });
        console.clear();
        console.info('CUSTOM DATA: ', customData);
        console.info("ENTER | CLICK");
    }

    deleteStack() {
        this.setState({
            entrys: [],
            renderEntrys: false,
            successMessages: []
        });
        console.clear();
        console.info("ESC");
    }
    /**
     * dispatch dtata to the redux store
     */
    dispatchData() {
        storeKeys.dispatch({
            type: 'keys',
            keys: inputKeys
        });
    }
    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'Input',
            keys: storeKeys.getState(),
            examples: [
                {
                    class: 'input-example-1',
                    description: 'Example with onClick handler setted on the search icon and input field (on "Enter" handler). Press ESC to empty the current list. To see an result, open your console or start typing in the input field.',
                    html: (
                        <Input
                            class="custom-input"
                            id=""
                            placeholder={"Add new key to array"}
                            icon={(<i className="fab fa-searchengin"></i>)}
                            handleClick={this.addToStack}
                            handleEnter={this.addToStack}
                            handleEsc={this.deleteStack}
                            handleKeyPress={this.log}
                            valueOfInputField={""}
                            emptyOnEnter={true}
                            emptyOnClick={true}
                            emptyOnEsc={true}
                            customData={'my custom data'}
                            performance={true}
                            successMessages={this.state.successMessages}
                        />
                    ),
                    cssCode: (
                        `
.custom-input{
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin:0 auto;
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
        width: 100px;
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
                        `import { Input } from 'react-divcreator';

<Input
    class="custom-input"
    id=""
    placeholder={"Add new key to array"}
    icon={(<i className="fab fa-searchengin"></i>)}
    handleClick={this.addToStack}
    handleEnter={this.addToStack}
    handleEsc={this.deleteStack}
    handleKeyPress={this.log}
    valueOfInputField={""}
    emptyOnEnter={true}
    emptyOnClick={true}
    emptyOnEsc={true}
    customData={'my custom data'}
    performance={true}
    successMessages={this.state.successMessages}
/>`
                    ),
                    jsCode: (
                        `
constructor(props) {
    super(props);
    this.addToStack = this.addToStack.bind(this);
    this.deleteStack = this.deleteStack.bind(this);

    this.state = {
        entrys: [],
        renderEntrys: false,
        successMessages: []
    }
}

log(event, currentInputValue, customData) {
    console.clear();
    console.info(event);
    console.info(currentInputValue);
    console.info(customData);

    this.setState({ 
        successMessages: []
    });
}

addToStack(event, currentInputValue) {
    const entrys = this.state.entrys;
    currentInputValue ? entrys.push(currentInputValue) : null;
    const renderEntrys = entrys.length ? true : false;

    this.setState({
        entrys,
        renderEntrys,
        successMessages: ['Element added to current stack']
    });
    console.clear();
    console.info("ENTER | CLICK");
}

deleteStack() {
    this.setState({ 
        entrys: [], 
        renderEntrys: false,
        successMessages: []
    });
    console.clear();
    console.info("ESC");
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
                            this.state.renderEntrys &&
                            <div className="divcreator-input-live-example">
                                <h1>Total available entrys: {this.state.entrys.length}</h1>
                                {
                                    this.state.entrys.map((entry, index) => {
                                        return (
                                            <p key={customKey()}>
                                                {index + 1} {". "} {entry}
                                            </p>
                                        )
                                    })
                                }
                            </div>
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
export default InputWebsite;
