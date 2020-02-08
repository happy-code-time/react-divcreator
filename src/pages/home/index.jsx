import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
    Buttons,
    BoxBoxes,
    Sourcecode,
    customKey,
    navigateToTopOfWebpage
} from '../../../module/build/react-divcreator';

import { HeaderHomepgae } from '../../modules/headerHomepgae';

import { Footer } from '../../modules/footer';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { countOfAvailableComponents } from '../../data/menu';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exampleUsage:
                `import { Buttons } from 'react-divcreator';
            
<Buttons data={[
    {
        text: 'Button',
        status: 'default'
    }
]}/>`       ,
            countedAnimationComponents: countOfAvailableComponents(),
            animationDone: false,
            slidersDirections: 15
        }
    }

    render() {
        return (
            <div className="website--home">
                <HeaderHomepgae />
                <div className="home-box">
                    <div className="box">
                        <i className="fab fa-react icon"></i>
                        <h1 className="title">
                            REACT - DIVCREATOR
                        </h1>
                        <p className="description">
                            Create modern and interactive react websites modules.
                        </p>    
                        <Buttons
                            link={true}
                            class="button-documentation"
                            data={
                                [
                                    {
                                        href: '/documentation',
                                        text: 'Documentation',
                                        status: 'default',
                                        attributes:{
                                            title: "Documentation"
                                        }
                                    }
                                ]
                            }
                        />
                    </div>
                </div>
                <BoxBoxes
                    id="boxes"
                    class="boxes boxes-1"
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
                    leftBreak={3}
                    leftData={
                        [
                            {
                                top: {
                                    title: (
                                        <span>
                                            <div className="box-text-icon">
                                                <i className="fas fa-save"></i>
                                                <h1>Installation</h1>
                                            </div>
                                        </span>
                                    )
                                },
                                content: (
                                    <span className="box-content">
                                        <div className="box-content--div">
                                            <p className="element-p">
                                                Install React-divcreator's source files via npm or yarn.
                                            </p>
                                            <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--installation'
                                                showLines={true}
                                                lineCharacter={<i className="fab fa-npm"></i>}
                                                data={`npm install react-divcreator`}
                                                match={[
                                                    {
                                                        match: ['npm'],
                                                        color: '#F44559'
                                                    }
                                                ]}
                                            />
                                        </div>
                                        <div className="box-content--div">
                                            <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--installation'
                                                showLines={true}
                                                lineCharacter={<i className="fab fa-yarn"></i>}
                                                data={`yarn add react-divcreator`}
                                                match={[
                                                    {
                                                        match: ['yarn'],
                                                        color: '#2C8EBB'
                                                    }
                                                ]}
                                            />
                                            {
                                                document.queryCommandSupported &&
                                                <span className="copy-to-clipboard-holder--homepage">
                                                    <span
                                                        title="Copy to clipboard"
                                                        className="copy-to-clipboard"
                                                        onClick={(e) => copyToClipBoard(e, 'yarn add react-divcreator', document.documentElement.scrollTop)}
                                                    >
                                                        {
                                                            `${copyToClipboardText()} npm`
                                                        }
                                                        <i className="far fa-copy"></i>
                                                    </span>
                                                </span>
                                            }
                                            {
                                                document.queryCommandSupported &&
                                                <span className="copy-to-clipboard-holder--homepage">
                                                    <span
                                                        title="Copy to clipboard"
                                                        className="copy-to-clipboard"
                                                        onClick={(e) => copyToClipBoard(e, 'npm install react-divcreator', document.documentElement.scrollTop)}
                                                    >
                                                        {
                                                            `${copyToClipboardText()} yarn`
                                                        }
                                                        <i className="far fa-copy"></i>
                                                    </span>
                                                </span>
                                            }
                                        </div>
                                    </span>
                                )
                            },
                            {
                                top: {
                                    title: (
                                        <span>
                                            <div className="box-text-icon">
                                                <i className="fas fa-laptop-code"></i>
                                                <h1>Usage</h1>
                                            </div>
                                        </span>
                                    )
                                },
                                content: (
                                    <span className="box-content">
                                        <div className="box-content--div">
                                            <p className="element-p">
                                                Example of usage of the component Buttons from the module.
                                            </p>
                                            <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--homepage'
                                                showLines={false}
                                                data={this.state.exampleUsage}
                                                match={[
                                                    {
                                                        match: ['Buttons'],
                                                        className: 'color-buttons'
                                                    },
                                                    {
                                                        match: ['import', 'react-divcreator'],
                                                        className: 'color-react-blue'
                                                    },
                                                    {
                                                        match: ['data'],
                                                        className: 'color-key'
                                                    }
                                                ]}
                                            />
                                            {
                                                document.queryCommandSupported &&
                                                <span className="copy-to-clipboard-holder--homepage">
                                                    <span
                                                        title="Copy to clipboard"
                                                        className="copy-to-clipboard"
                                                        onClick={(e) => copyToClipBoard(e, this.state.exampleUsage, document.documentElement.scrollTop)}
                                                    >
                                                        {
                                                            `${copyToClipboardText()} example`
                                                        }
                                                        <i className="far fa-copy"></i>
                                                    </span>
                                                </span>
                                            }
                                        </div>
                                    </span>
                                )
                            },
                            {
                                top: {
                                    title: (
                                        <span>
                                            <div className="box-text-icon">
                                                <i className="fas fa-book-reader"></i>
                                                <h1>Documentation</h1>
                                            </div>
                                        </span>
                                    )
                                },
                                content: (
                                    <span className="box-content">
                                        <p className="element-p">
                                            Read more about the React-divcreator's components.
                                        </p>
                                        <img
                                            className="image"
                                            src="/src/static/images/slider-1.jpg"
                                            alt="img"
                                        />
                                        <Link to="/documentation" className="is-link" onClick={navigateToTopOfWebpage}>
                                            Documentation
                                            <i className="fas fa-external-link-square-alt"></i>
                                        </Link>
                                    </span>
                                )
                            }
                        ]
                    }
                />
                <BoxBoxes
                    id="boxes"
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
                                                <i className="fas fa-list-ol element-i-count"></i>
                                                <h1 className="element-h1-count">Available components</h1>
                                            </div>
                                        </span>
                                    )
                                },
                                content: (
                                    <span className="box-content">
                                        <div className="box-content--div">
                                            <p className="element-p-count">
                                            {
                                                this.state.countedAnimationComponents
                                            }
                                            </p>
                                        </div>
                                    </span>
                                )
                            }
                        ]
                    }
                />
                <Footer />
                <form style={{
                    display: 'none !important',
                    opacity: 0,
                    position: 'absolute',
                    zIndex: '-1',
                    width: 0,
                    height: 0,
                    overflow: 'hidden'
                }}>
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
export default Home;