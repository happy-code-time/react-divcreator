import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { BoxBoxes, Sourcecode, customKey, navigateToTopOfWebpage } from '../../../module/build/react-divcreator';

import { Header } from '../../modules/header';

import { LeftMenu } from '../../modules/leftMenu';

import { copyToClipboardText } from '../../data/copy-to-clipboard';

import { copyToClipBoard } from '../../functions/copyToClipboard';

import { countOfAvailableComponents, singleModules } from '../../data/menu';

class Documentation extends Component {

    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);

        this.state = {
            exampleUsageButtons:
                `import { Buttons } from 'react-divcreator';
    
<Buttons data={[
    {
        text: 'Button',
        status: 'default'
    }
]}/>`           ,
            exampleUsageModal:
                `import { Modal } from 'react-divcreator';

<Modal
    callbackShow={this.showModal}
    callbackClose={this.closeModal}
    showData={<p> Click to open modal </p>}
    closeButton={true}
    closeButtonData={<p> X </p>}
    data={this.state.modalData}
    display={true}
    performance={true}
/>`           ,
            exampleUsageAccordion:
                `import { Accordion } from 'react-divcreator';
    
<Accordion
    animation={true}
    border={true}
    performance={true}
    data={[
        {
            title: 'Parent',
            description: "Parent's desc...",
            childs: [
                {
                    title: 'Child 1',
                    description: "Child's desc...",
                    childs: [
                        {
                            title: "Child 3",
                            description: "Child's desc..."
                        },
                        {
                            title: "Child 4",
                            description: "Child's desc..."
                        }
                    ]
                }
            ]
        }]
    }
/>`
            ,
            countedAnimationComponents: countOfAvailableComponents(),
            uniqueIdForAnimations: `animated-count-uuid-${customKey()}`,
            animationDone: false,
            allAvailableComponents: singleModules,
            display: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize() {
        const self = this;

        if (document.documentElement.getBoundingClientRect().width >= 1024){
            if (self.state.display) {
                self.setState({
                    display: false
                });
            }
        } else {
            if (!self.state.display) {
                self.setState({
                    display: true
                });
            }
        }
    }

    render() {
        return (
            <div className="website--documentation">
                <div className="content">
                    {
                        !this.state.display &&
                        <LeftMenu />
                    }
                    <div className="right-site">
                        <Header />
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
                                                        <i className="fas fa-laptop-code"></i>
                                                        <h1>Buttons</h1>
                                                    </div>
                                                </span>
                                            )
                                        },
                                        content: (
                                            <span className="box-content">
                                                <div className="box-content--div">
                                                    <p className="element-p">
                                                        Here's a quick example with the component Buttons.
                                                    </p>
                                                    <Sourcecode
                                                        id={customKey()}
                                                        class='divcreator-code-example--homepage'
                                                        showLines={false}
                                                        data={this.state.exampleUsageButtons}
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
                                                            },
                                                            {
                                                                match: [
                                                                    'text', 
                                                                    'status'
                                                                ],
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
                                                                onClick={(e) => copyToClipBoard(e, this.state.exampleUsageButtons, document.documentElement.scrollTop)}
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
                                                        <i className="fas fa-laptop-code"></i>
                                                        <h1>Modal</h1>
                                                    </div>
                                                </span>
                                            )
                                        },
                                        content: (
                                            <span className="box-content">
                                                <div className="box-content--div">
                                                    <p className="element-p">
                                                        Here's a quick example with the component Modal.
                                                    </p>
                                                    <Sourcecode
                                                        id={customKey()}
                                                        class='divcreator-code-example--homepage'
                                                        showLines={false}
                                                        data={this.state.exampleUsageModal}
                                                        match={[
                                                            {
                                                                match: ['import', 'react-divcreator'],
                                                                className: 'color-react-blue'
                                                            },
                                                            {
                                                                match: ['showModal', 'closeModal']
                                                            },
                                                            {
                                                                match: ['Modal'],
                                                                className: 'color-buttons'
                                                            },
                                                            {
                                                                match: [
                                                                    'callbackShow', 
                                                                    'callbackClose',
                                                                    'showData', 
                                                                    'closeButton',
                                                                    'closeButtonData', 
                                                                    'data',
                                                                    'display', 
                                                                    'performance',
                                                                ],
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
                                                                onClick={(e) => copyToClipBoard(e, this.state.exampleUsageModal, document.documentElement.scrollTop)}
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
                                                        <i className="fas fa-laptop-code"></i>
                                                        <h1>Accordion</h1>
                                                    </div>
                                                </span>
                                            )
                                        },
                                        content: (
                                            <span className="box-content">
                                                <div className="box-content--div">
                                                    <p className="element-p">
                                                        Here's a quick example with the component Accordion.
                                                    </p>
                                                    <Sourcecode
                                                        id={customKey()}
                                                        class='divcreator-code-example--homepage'
                                                        showLines={false}
                                                        data={this.state.exampleUsageAccordion}
                                                        match={[
                                                            {
                                                                match: ['Accordion'],
                                                                className: 'color-buttons'
                                                            },
                                                            {
                                                                match: ['import', 'react-divcreator'],
                                                                className: 'color-react-blue'
                                                            },
                                                            {
                                                                match: ['data'],
                                                                className: 'color-key'
                                                            },
                                                            {
                                                                match: [
                                                                    'animation', 
                                                                    'border',
                                                                    'performance', 
                                                                    'title',
                                                                    'description', 
                                                                    'childs'
                                                                ],
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
                                                                onClick={(e) => copyToClipBoard(e, this.state.exampleUsageAccordion, document.documentElement.scrollTop)}
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
                                    }
                                ]
                            }
                        />
                        <h3>
                            Next steps
                        </h3>
                        <h4>
                            Learn more about the React-divcreator's components:
                        </h4>
                        <div className="next-steps">
                        {
                            this.state.allAvailableComponents.map( i => {
                                return  (
                                    <Link 
                                        key={customKey()} 
                                        to={`/components/${i.toLowerCase()}`} 
                                        onClick={navigateToTopOfWebpage}
                                        className="documentation--links"
                                    >
                                        {
                                            i
                                        }
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </Link>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
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
export default Documentation;