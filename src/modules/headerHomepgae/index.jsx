import React, { Component } from 'react';

import { navigateToTopOfWebpage, InputSuggestion, MenuFixedLeft, MenuVerticalClick, MenuAnimationCustom } from '../../../module/build/react-divcreator';

import { headerNavigation } from '../../data/header';

import { version } from '../../data/react-divcreator-version';

import { singleModules } from '../../data/menu';

class HeaderHomepgae extends Component {

    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.redirect = this.redirect.bind(this);

        this.state = {
            isOpen: false,
            menuitems: headerNavigation()
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
        if (document.documentElement.getBoundingClientRect().width >= 1024) {
            if (this.state.display) {
                this.setState({
                    display: false
                });
            }
        } else {
            if (!this.state.display) {
                this.setState({
                    display: true
                });
            }
        }
    }

    toTopInDiv(){
        if(null !== document.getElementById('root-light')){
            document.getElementById('root-light').scrollTop = 0;
        }
    }

    redirect(string){
        navigateToTopOfWebpage();
        window.location.href = `/#/components/${string.toLowerCase()}`;
    }

    searchInRoutes(){
        const mapped = [];

        singleModules.map( i  => {
            mapped.push({
                textSearch: i
            })
        });

        return mapped;
    }

    render() {
        return (
            <div className='header'>
                {
                    !this.state.display &&
                    <div className="inputsuggestion-website-home">
                        <i className="fas fa-search"></i>
                        <InputSuggestion
                            class="inputsuggestion-example-1"
                            placeholder='Modules search...'
                            data={this.searchInRoutes()}
                            onChangeCallback={this.redirect}
                            maxHeight={300}
                            autoFocus={true}
                            keySensitive={false}
                            sortAsc={true}
                            mouseOverSelection={true}
                        />
                    </div>
                }
                <MenuFixedLeft
                    id=""
                    class="header-fixed-left-menu"
                    direction='top'
                    isOpen={this.state.isOpen}
                    animation={true}
                    open={
                        <span className='header-hamburger'>
                            <i className="fas fa-bars"></i>
                        </span>
                    }
                    dimmed={true}
                    dimmedFixed={false}
                    animationType={'width'}
                    contentData={
                        <span>
                            <div className="header-title">
                                <h1>React-divcreator</h1>
                                <p>
                                    { version }
                                </p>
                            </div>
                            <MenuVerticalClick
                                id=""
                                class="header-menu-vertical-click"
                                link={true}
                                data={this.state.menuitems}
                                animation={true}
                                animationTime={200}
                                keepOpen={true}
                                animateKeepOpenBack={true}
                            />
                        </span>
                    }
                />
                <span className="menu-animation-custom">
                    <MenuAnimationCustom
                        id=""
                        class="custom-menu-animation"
                        link={true}
                        overlap={true}
                        left={true}
                        clickNavigateToTop={true}
                        typeCustomData={
                            <div className="text-icon">
                                <span>
                                    Navigation
                                </span>
                                <i className="fas fa-chevron-down" />
                            </div>
                        }
                        border={false}
                        includeContent={true}
                        routes={
                            [
                                {
                                    href: '/components/accordion',
                                    class: 'custom-menu-animation-link',
                                    isLink: true,
                                    text: (
                                        <span>
                                            Components
                                        </span>
                                    ),
                                    attributes: {
                                        title: 'Navigate to the first component: Accordion'
                                    },
                                    function: this.toTopInDiv
                                },
                                {
                                    href: '/changelog',
                                    class: 'custom-menu-animation-link',
                                    isLink: true,
                                    text: (
                                        <span>
                                            Changelog
                                        </span>
                                    ),
                                    attributes: {
                                        title: 'Navigate to the Changelog'
                                    },
                                    function: this.toTopInDiv
                                },  
                                {
                                    href: '/documentation',
                                    class: 'custom-menu-animation-link',
                                    isLink: true,
                                    text: (
                                        <span>
                                            Documentation
                                        </span>
                                    ),
                                    attributes: {
                                        title: 'Navigate to the Documentation'
                                    },
                                    function: this.toTopInDiv
                                },
                                {
                                    class: 'custom-menu-animation-link',
                                    isLink: false,
                                    text: (
                                        <a 
                                            href='https://www.npmjs.com/package/react-divcreator' 
                                            target='_blank'
                                            style={
                                                {
                                                    textDecoration: 'none',
                                                    color: 'rgba(0, 0, 0, 0.87)',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '400',
                                                    transitionDuration: '300ms',
                                                    width: '100%',
                                                    boxSizing: 'border-box',
                                                    padding: '10px 0',
                                                    backgroundColor: 'transparent'
                                                }
                                            }
                                        >
                                            Npmjs.com
                                        </a>
                                    ),
                                    attributes: {
                                        title: 'https://www.npmjs.com/package/react-divcreator'
                                    },
                                    function: this.toTopInDiv
                                }
                            ]
                        }
                    />
                </span>
            </div>
        );
    }
};

export {
    HeaderHomepgae
};