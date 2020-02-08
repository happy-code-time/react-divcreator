import React, { Component } from 'react';

import { navigateToTopOfWebpage, InputSuggestion, MenuAnimationCustom, MenuFixedLeft, MenuVerticalClick } from '../../../module/build/react-divcreator';

import { headerNavigationDocumentation } from '../../data/header';

import { version } from '../../data/react-divcreator-version';

import { singleModules } from '../../data/menu';

class Header extends Component {

    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.redirect = this.redirect.bind(this);
        
        this.state = {
            isOpen: false,
            menuitems: headerNavigationDocumentation(),
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

    render() {
        return (
            <span>
                <div className='header--inside'>
                    {
                        !this.state.display &&
                        <div className="inputsuggestion-website">
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
                            />
                        </div>                           
                    }
                    {
                        this.state.display &&
                        <MenuFixedLeft
                            id=""
                            class="header-fixed-left-menu"
                            direction='top'
                            isOpen={false}
                            animation={true}
                            dimmed={true}
                            animationType={'width'}
                            open={
                                <span className='header-hamburger'>
                                    <i className="fas fa-bars"></i>
                                </span>
                            }
                            contentData={
                                <span>
                                    <div className="header-title">
                                        <h1>React-divcreator</h1>
                                        <p>
                                            {version}
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
                    }
                    <span className="menu-animation-custom">
                        <MenuAnimationCustom
                            id=""
                            class="custom-menu-animation"
                            link={true}
                            overlap={true}
                            clickNavigateToTop={true}
                            left={true}
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
                                        }
                                    },                                
                                    {
                                        href: '/components/Accordion',
                                        class: 'custom-menu-animation-link',
                                        isLink: true,
                                        text: (
                                            <span>
                                                Components
                                            </span>
                                        ),
                                        attributes: {
                                            title: 'Navigate to the Components'
                                        }
                                    },
                                    {
                                        href: '/',
                                        class: 'custom-menu-animation-link',
                                        isLink: true,
                                        text: (
                                            <span>
                                                Homepage
                                            </span>
                                        ),
                                        attributes: {
                                            title: 'Navigate to the Homepage'
                                        }
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
                                        }
                                    }
                                ]
                            }
                        />
                    </span>
                </div>
            </span>
        );
    }
};

export {
    Header
};