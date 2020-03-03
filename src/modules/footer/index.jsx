import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { ButtonsNavigation, BoxBoxes, customKey, navigateToTopOfWebpage, Sourcecode } from '../../../module/build/react-divcreator';

import { version } from '../../data/react-divcreator-version';

import { colors } from '../../data/colors';

import { copyToClipBoard } from '../../functions/copyToClipboard';

const authorData = 
`David Janitzek`;

const versionData = 
`${version}`;

const mailAdress = 'david.janitzek@gmail.com';

const contactData= 
`${mailAdress}`;

const generatedMatcher = () => {
    const splittedEmail = [];

    mailAdress.split('').map( i => {
        splittedEmail.push({
            match: [i],
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    });

    return splittedEmail;
}

const currentYear = () => {
    return new Date().getFullYear();
}

class footer extends Component {

    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);

        this.state = {
            scrollToTop: false,
            scrollToTopClass: 'animation-start',
            srollTopX: 800,
            scrollTopAnimationDuration: 300,
        }
        this.uuid = `${customKey()}`;
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scroll);
    }

    scroll() {
        if (document.documentElement.scrollTop >= this.state.srollTopX) {
            if (!this.state.scrollToTop) {
                this.setState({
                    scrollToTop: true,
                    scrollToTopClass: 'animation-start'
                });
            }
        } else {
            if (this.state.scrollToTop) {
                if (document.getElementById(this.uuid)) {
                    document.getElementById(this.uuid).classList.add('animation-back');
                }
                setTimeout(() => {
                    this.setState({
                        scrollToTop: false
                    });
                }, this.state.scrollTopAnimationDuration);
            }
        }
    }

    render() {
        return (
            <div id="footer" className='footer'>
                <div className="footer-fixed"/>
                <div className="left">
                    <BoxBoxes
                        class="boxes"
                        // Responsive keys
                        responsive={true}
                        responsiveX={1024}
                        // Animation config
                        animation={true}
                        animationTime={500}
                        animationTimeAdder={0}
                        // mount || scroll
                        animationOn={'mount'}
                        // how many elements should be in 1 single row
                        rightWidth={30}
                        widthVector={'%'}
                        leftBreak={3}
                        leftData={
                            [
                                {
                                    top: {
                                        title: (
                                            <span>
                                                <div className="box-text-icon">
                                                    <i className="fas fa-external-link-square-alt"></i>
                                                    <h1>Links</h1>
                                                </div>
                                            </span>
                                        )
                                    },
                                    content: (
                                        <div className="box-content">
                                            <p className='divcreator-sourcecode-example-p'>
                                                Useful links.
                                            </p>
                                            <a
                                                href='https://github.com/janitzed/react-divcreator'
                                                className="is-link"
                                                target='_blank'
                                            >
                                                {
                                                    <span>
                                                        GIT
                                                        <i className="fas fa-external-link-square-alt"></i>
                                                    </span>
                                                }
                                            </a>
                                            <a
                                                href='https://www.npmjs.com/package/react-divcreator'
                                                className="is-link"
                                                target='_blank'
                                            >
                                                {
                                                    <span>
                                                        NPM
                                                        <i className="fas fa-external-link-square-alt"></i>
                                                    </span>
                                                }
                                            </a>
                                        </div>
                                    )
                                },
                                {
                                    top: {
                                        title: (
                                            <span>
                                                <div className="box-text-icon">
                                                    <i className="fab fa-js-square"></i>
                                                    <h1>React-divcreator</h1>
                                                </div>
                                            </span>
                                        )
                                    },
                                    content: (
                                        <div className="box-content">
                                            <p className='divcreator-sourcecode-example-p'>
                                                React-divcreator's current version.
                                            </p>
                                             <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--installation'
                                                data={versionData}
                                                match={[
                                                    {
                                                        match: ['version'],
                                                        color: 'steelblue'
                                                    }
                                                ]}
                                            />
                                        </div>
                                    )
                                },
                                {
                                    top: {
                                        title: (
                                            <span>
                                                <div className="box-text-icon">
                                                    <i className="fas fa-user-circle"></i>
                                                    <h1>About the author </h1>
                                                </div>
                                            </span>
                                        )
                                    },
                                    content: (
                                        <div className="box-content">
                                            <p className='divcreator-sourcecode-example-p'>
                                                Informations about me.
                                            </p>
                                            <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--installation'
                                                data={authorData}
                                                match={[
                                                    {
                                                        match: ['first', 'last', 'city', 'age'],
                                                        color: 'steelblue'
                                                    }
                                                ]}
                                            />
                                        </div>
                                    )
                                }
                            ]
                        }
                        rightData={
                            [
                                {
                                    top: {
                                        title: (
                                            <span>
                                                <div className="box-text-icon">
                                                    <i className="fas fa-comment-dots"></i>
                                                    <h1>Feedback </h1>
                                                </div>
                                            </span>
                                        )
                                    },
                                    content: (
                                        <div className="box-content">
                                            <p className='divcreator-sourcecode-example-p'>
                                                Any new ideas or bug reports ?
                                            </p>
                                            <Sourcecode
                                                id={customKey()}
                                                class='divcreator-code-example--installation'
                                                data={contactData}
                                                match={generatedMatcher()}
                                            />
                                            {
                                                document.queryCommandSupported &&
                                                <span className="copy-to-clipboard-holder--homepage">
                                                    <span
                                                        title="Copy to clipboard"
                                                        className="copy-to-clipboard"
                                                        onClick={(e) => copyToClipBoard(e, mailAdress, document.documentElement.scrollTop)}
                                                    >
                                                        Copy email address
                                                        <i className="far fa-copy"></i>
                                                    </span>
                                                </span>
                                            }
                                        </div>
                                    )
                                }
                            ]
                        }
                    />
                </div>
                <div className="bottom">
                    <p>
                        {
                            `© 2019 - ${currentYear()} David Janitzek. All Rights Reserved. `
                        }
                    </p>
                </div>
                {
                    this.state.scrollToTop &&
                    <div className="sroll-top">
                        <ButtonsNavigation
                            id={this.uuid}
                            class={this.state.scrollToTopClass}
                            navigationTo='top'
                            navigationTime={300}
                            html={<i className="fas fa-location-arrow"></i>}
                            attributes={
                                {
                                    title: 'Navigate to the top of the page'
                                }
                            }
                        />
                    </div>
                }
            </div>
        );
    }
};

export {
    footer as Footer
};