import React from 'react';

import { getCurrentLanguage } from '../functions/getCurrentLanguage';

import { menuData } from './menu';

export const headerNavigation = () => {

    switch(getCurrentLanguage()){
        case 'en' : {
            return [
                {
                    text: 'Getting Started',
                    isLink: false,
                    childs: [
                        {
                            text: (
                                <span>
                                    Documentation
                                </span>
                            ),
                            isLink: true,
                            link: '/documentation',
                        },
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ];
        }

        default : {
            return [
                {
                    text: 'Getting Started',
                    isLink: false,
                    childs: [
                        {
                            text: 'Installation',
                            isLink: true,
                            link: '/installation',
                        },
                        {
                            text: 'Usage',
                            isLink: true,
                            link: '/usage',
                        }
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ]
        }
    }
}

export const headerNavigationDocumentation = () => {

    switch(getCurrentLanguage()){
        case 'en' : {
            return [
                {
                    text: 'Navigation',
                    isLink: false,
                    childs: [
                        {
                            text: (
                                <span>
                                    Home
                                </span>
                            ),
                            isLink: true,
                            link: '/',
                        }
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ];
        }

        default : {
            return [
                {
                    text: 'Getting Started',
                    isLink: false,
                    childs: [
                        {
                            text: 'Installation',
                            isLink: true,
                            link: '/installation',
                        },
                        {
                            text: 'Usage',
                            isLink: true,
                            link: '/usage',
                        }
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ]
        }
    }
}


export const headerNavigationComponents = () => {

    switch(getCurrentLanguage()){
        case 'en' : {
            return [
                {
                    text: 'Navigation',
                    isLink: false,
                    childs: [
                        {
                            text: (
                                <span>
                                    Home
                                </span>
                            ),
                            isLink: true,
                            link: '/',
                        },
                        {
                            text: (
                                <span>
                                    Documentation
                                </span>
                            ),
                            isLink: true,
                            link: '/documentation',
                        }
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ];
        }

        default : {
            return [
                {
                    text: 'Getting Started',
                    isLink: false,
                    childs: [
                        {
                            text: 'Installation',
                            isLink: true,
                            link: '/installation',
                        },
                        {
                            text: 'Usage',
                            isLink: true,
                            link: '/usage',
                        }
                    ]
                },
                {
                    text: 'Components',
                    isLink: false,
                    childs: generatedMenuData()
                }
            ]
        }
    }
}

const generatedMenuData = () => {
    const items = [];

    menuData.map(element => {
        if (typeof 'a' == typeof element) {
            items.push(
                {
                    text: element,
                    isLink: true,
                    link: `/components/${element}`.toLowerCase(),
                    clickNavigateToTop: true,
                    attributes: {
                        title: `Navigate to the type: ${element}`
                    }
                }
            )
        } else {
            items.push(element);
        }
    });

    return items;
}