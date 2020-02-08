import React from 'react';

import { BoxBoxes, customKey, Sourcecode, List, BoxMenu, ButtonsNavigation } from '../../../module/build/react-divcreator';

import { HeaderComponent } from '../../modules/headerComponent';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { markSpecialWords } from '../../data/mark-special-words';

import {  getKeyFromDescription } from '../../functions/getKeyFromDescription';

import { FooterComponents } from '../footerComponents';

class TypesGenerateor extends React.Component {

    constructor(props) {
        super(props);

        this.subTitle = (this.props && this.props.data && this.props.data.subTitle) ? this.props.data.subTitle : '';
        this.examples = (this.props && this.props.data && this.props.data.examples) ? this.props.data.examples : [];
        this.keys = (this.props && this.props.data && this.props.data.keys) ? this.props.data.keys : [];
        this.mainDescription = (this.props && this.props.data && this.props.data.mainDescription) ? this.props.data.mainDescription : '';
    }

    componentDidMount(){
        document.documentElement.scrollTop = 0;
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
                                animation={true}
                                animationTime={500}
                                animationTimeAdder={100}
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
                                animation={true}
                                animationTime={500}
                                animationTimeAdder={100}
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
                                animation={true}
                                animationTime={500}
                                animationTimeAdder={100}
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
                                animation={true}
                                animationTime={500}
                                animationTimeAdder={100}
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
        const subTitle = this.generateSubTitle();
        const mainDescription = this.generateMainDescription();
        const codes = this.generateCodeExamples();
        const keys = this.generateKeysDescription();

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

export default TypesGenerateor;