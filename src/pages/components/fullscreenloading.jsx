import React, { Component } from 'react';

import { fullscreenloadingKeys } from '../../store/fullscreenloading';

import { storeKeys } from '../../store/reducer';

import { BoxBoxes, customKey, Sourcecode, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { FullScreenLoading } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { markSpecialWords } from '../../data/mark-special-words';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../../modules/footerComponents';

class FullscreenloadingWebsite extends Component {

    constructor(props) {
        super(props);
        this.showLoadingCallback = this.showLoadingCallback.bind(this);
        this.cancleTimeouts = this.cancleTimeouts.bind(this);

        this.timeout1 = null;
        this.timeout2 = null;

        this.state = {
            showLoading: false,
            customText: '',
            isAnimated: false
        };

        this.subTitle = '';
        this.examples = [];
        this.keys = [];
    }

    /**
     * Manage the loading div by this callback function (optional)
     * @param {object} currentState 
     */
    showLoadingCallback(currentState){
        this.setState({
            showLoading: !currentState.showLoading,
            customText: 'Loading data from Database...',
        }, () => {

            if(!this.state.showLoading){
                return this.setState({
                    customText: 'Loading data from Database...'
                })
            }
    
            this.timeout1 = setTimeout( () => {
                this.setState({
                    customText: 'Loading done...',
                    isAnimated: true
                });
            }, 900);
    
            this.timeout2 = setTimeout( () => {
                this.setState({
                    showLoading: !this.state.showLoading,
                    customText: 'Close me -> look into the right top corner...',
                });
            }, 2000);
        });
    }

    cancleTimeouts(){
        clearTimeout(this.timeout1);
        clearTimeout(this.timeout2);
    }

    /**
     * dispatch dtata to the redux store
     */
    dispatchData() {
        storeKeys.dispatch({
            type: 'keys',
            keys: fullscreenloadingKeys
        });
    }

    /**
     * Return modules data
     */
    moduleData() {
        return {
            subTitle: 'FullScreenLoadingState',
            keys: storeKeys.getState(),
            examples: [
                {
                    class: 'fullscreenloading-example',
                    description: 'Example with show/ hide the loading div by the current state with animation.',
                    html: (
                        <FullScreenLoading
                            class=""
                            id=""
                            path="/src/static/images/loading.gif"
                            performance={true}
                            animation={true}
                            isAnimated={this.state.isAnimated}
                            showLoading={this.state.showLoading}
                            showLoadingCallback={this.showLoadingCallback}
                            showLoadingData={
                                <p className="fullscreenloading-example-text">Click to generate the loading div</p>
                            }
                            customData={(
                                <p>
                                    {
                                        this.state.customText
                                    }
                                </p>
                            )}
                            attributesLoadingHolder={
                                {
                                    style: {
                                        background: 'rgba(69,69,69,.8)',
                                    }
                                }
                            }
                            attributesLoadingMain={
                                {
                                    title: 'Custom loading title',
                                    style: {
                                        background: 'rgb(255,255,255)',
                                        zIndex: '99999999',
                                        width: '90vW',
                                        height: '90vH',
                                        margin: '5vH 5vW',
                                        borderRadius: '5px'
                                    }
                                }
                            }
                            closeButton={
                                <p>X</p>
                            }
                            closeButtonAttributes={
                                {
                                    title: 'Close the loading window',
                                    style: {
                                        fontSize:'2rem'
                                    }
                                }
                            }
                            closeButtonCallback={this.cancleTimeouts}
                        />
                    ),
                    cssCode: (
                        `
.react-divcreator-fullscreenloading__close{
    transition-duration: 300ms;
    color:rgb(255,255,255);
}
.react-divcreator-fullscreenloading__close:hover{
    color: #f44559;
    cursor: pointer;
}
.fullscreenloading-example-text{
    text-align:center;
    box-sizing: border-box;
    padding:10px;
    border:1px solid rgba(69,69,69,.2);
    cursor: pointer;
}`
                    ),
                    reactCode: (
                        `import { FullScreenLoading } from 'react-divcreator';
    
<FullScreenLoading
    class=""
    id=""
    path="/src/static/images/loading.gif"
    performance={true}
    animation={true}
    isAnimated={this.state.isAnimated}
    showLoading={this.state.showLoading}
    showLoadingCallback={this.showLoadingCallback}
    showLoadingData={
        <p className="fullscreenloading-example-text">Click to generate the loading div</p>
    }
    customData={(
        <p>
            {
                this.state.customText
            }
        </p>
    )}
    attributesLoadingHolder={
        {
            style: {
                background: 'rgba(69,69,69,.8)',
            }
        }
    }
    attributesLoadingMain={
        {
            title: 'Custom loading title',
            style: {
                background: 'rgb(255,255,255)',
                zIndex: '99999999',
                width: '90vW',
                height: '90vH',
                margin: '5vH 5vW',
                borderRadius: '5px'
            }
        }
    }
    closeButton={
        <p>X</p>
    }
    closeButtonAttributes={
        {
            title: 'Close the loading window',
            style: {
                fontSize:'2rem'
            }
        }
    }
    closeButtonCallback={this.cancleTimeouts}
/>`
                    ),
                    jsCode: (
                        `
constructor(props) {
    super(props);
    this.showLoadingCallback = this.showLoadingCallback.bind(this);
    this.cancleTimeouts = this.cancleTimeouts.bind(this);

    this.timeout1 = null;
    this.timeout2 = null;

    this.state = {
        showLoading: false,
        customText: '',
        isAnimated: false
    };
}

/**
 * Manage the loading div by this callback function (optional)
 * @param {object} currentState 
 */
showLoadingCallback(currentState){
    this.setState({
        showLoading: !currentState.showLoading,
        customText: 'Loading data from Database...',
    }, () => {

        if(!this.state.showLoading){
            return this.setState({
                customText: 'Loading data from Database...'
            })
        }

        this.timeout1 = setTimeout( () => {
            this.setState({
                customText: 'Loading done...',
                isAnimated: true
            });
        }, 900);

        this.timeout2 = setTimeout( () => {
            this.setState({
                showLoading: !this.state.showLoading,
                customText: 'Close me -> look into the right top corner...',
            });
        }, 2000);
    });
}

cancleTimeouts(){
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
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
                        List
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
export default FullscreenloadingWebsite;
