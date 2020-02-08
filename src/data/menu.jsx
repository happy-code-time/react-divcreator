import React from 'react';

export const menuData = [
    'Accordion',
    'Articles',
    {
        text: (
            <span>
                Boxes
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'BoxBoxes',
                isLink: true,
                link: '/components/boxboxes',
                attributes: {
                    title: 'Navigate to the type: BoxBoxes'
                },
                clickNavigateToTop: true
            },
            {
                text: 'BoxMenu',
                isLink: true,
                link: '/components/boxmenu',
                attributes: {
                    title: 'Navigate to the type: BoxMenu'
                },
                clickNavigateToTop: true
            },
            {
                text: 'BoxWindow',
                isLink: true,
                link: '/components/boxwindow',
                attributes: {
                    title: 'Navigate to the type: BoxWindow'
                },
                clickNavigateToTop: true
            }
        ]
    },
    'Breadcrumbs',
    {
        text: (
            <span>
                Buttons
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'Buttons',
                isLink: true,
                link: '/components/buttons',
                attributes: {
                    title: 'Navigate to the type: Buttons'
                },
                clickNavigateToTop: true
            },
            {
                text: 'ButtonsNavigation',
                isLink: true,
                link: '/components/buttonsnavigation',
                attributes: {
                    title: 'Navigate to the type: ButtonsNavigation'
                },
                clickNavigateToTop: true
            }
        ]
    },
    'Cards',
    'Cube',
    'Dashboard',
    'Divtriangle',
    'Fullscreenloading',
    'Image',
    {
        text: (
            <span>
                Inputs
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'Input',
                isLink: true,
                link: '/components/input',
                attributes: {
                    title: 'Navigate to the type: Input'
                },
                clickNavigateToTop: true
            },
            {
                text: 'InputList',
                isLink: true,
                link: '/components/inputlist',
                attributes: {
                    title: 'Navigate to the type: InputList'
                },
                clickNavigateToTop: true
            },
            {
                text: 'InputListSwitch',
                isLink: true,
                link: '/components/inputlistswitch',
                attributes: {
                    title: 'Navigate to the type: InputListSwitch'
                },
                clickNavigateToTop: true
            },
            {
                text: 'InputSuggestion',
                isLink: true,
                link: '/components/inputsuggestion',
                attributes: {
                    title: 'Navigate to the type: InputSuggestion'
                },
                clickNavigateToTop: true
            }
        ]
    },
    'Links',
    'List',
    {
        text: (
            <span>
                Menus animation
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'MenuAnimationCustom',
                isLink: true,
                link: '/components/menuanimationcustom',
                attributes: {
                    title: 'Navigate to the type: MenuAnimationCustom'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuAnimationDots',
                isLink: true,
                link: '/components/menuanimationdots',
                attributes: {
                    title: 'Navigate to the type: MenuAnimationDots'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuAnimationHamburger',
                isLink: true,
                link: '/components/menuanimationhamburger',
                attributes: {
                    title: 'Navigate to the type: MenuAnimationHamburger'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuAnimationSquare',
                isLink: true,
                link: '/components/menuanimationsquare',
                attributes: {
                    title: 'Navigate to the type: MenuAnimationSquare'
                },
                clickNavigateToTop: true
            }
        ]
    },
    {
        text: (
            <span>
                Menus clickable
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'MenuHorizontalClick',
                isLink: true,
                link: '/components/menuhorizontalclick',
                attributes: {
                    title: 'Navigate to the type: MenuHorizontalClick'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuVerticalClick',
                isLink: true,
                link: '/components/menuverticalclick',
                attributes: {
                    title: 'Navigate to the type: MenuVerticalClick'
                },
                clickNavigateToTop: true
            }
        ]
    },
    {
        text: (
            <span>
                Menus fixed
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'MenuFixedBottom',
                isLink: true,
                link: '/components/menufixedbottom',
                attributes: {
                    title: 'Navigate to the type: MenuFixedBottom'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuFixedLeft',
                isLink: true,
                link: '/components/menufixedleft',
                attributes: {
                    title: 'Navigate to the type: MenuFixedLeft'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuFixedRight',
                isLink: true,
                link: '/components/menufixedright',
                attributes: {
                    title: 'Navigate to the type: MenuFixedRight'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuFixedTop',
                isLink: true,
                link: '/components/menufixedtop',
                attributes: {
                    title: 'Navigate to the type: MenuFixedTop'
                },
                clickNavigateToTop: true
            }
        ]
    },
    {
        text: (
            <span>
                Menus hover
                <i className="fas fa-chevron-down"/>
            </span>
        ),
        isLink: false,
        childs: [
            {
                text: 'MenuHorizontalHover',
                isLink: true,
                link: '/components/menuhorizontalhover',
                attributes: {
                    title: 'Navigate to the type: MenuHorizontalHover'
                },
                clickNavigateToTop: true
            },
            {
                text: 'MenuVerticalHover',
                isLink: true,
                link: '/components/menuverticalhover',
                attributes: {
                    title: 'Navigate to the type: MenuVerticalHover'
                },
                clickNavigateToTop: true
            }
        ]
    },
    'Modal',
    'Paging',
    'Slider',
    'Sourcecode',
    'Stars',
    'Verticalbars',
    'Videobackground',
    'Website404',
];

export const singleModules = [
    'Accordion',
    'Articles',
    'BoxBoxes',
    'BoxMenu',
    'BoxWindow',
    'Breadcrumbs',
    'Buttons',
    'ButtonsNavigation',
    'Cards',
    'Cube',
    'Dashboard',
    'Divtriangle',
    'Fullscreenloading',
    'Image',
    'Input',
    'InputList',
    'InputListSwitch',
    'InputSuggestion',
    'Links',
    'List',
    'MenuAnimationCustom',
    'MenuAnimationDots',
    'MenuAnimationHamburger',
    'MenuAnimationSquare',
    'MenuFixedBottom',
    'MenuFixedLeft',
    'MenuFixedRight',
    'MenuFixedTop',
    'MenuHorizontalClick',
    'MenuHorizontalHover',
    'MenuVerticalClick',
    'MenuVerticalHover',
    'Modal',
    'Paging',
    'Slider',
    'Sourcecode',
    'Stars',
    'Verticalbars',
    'Videobackground',
    'Website404'
];

export const generatedMenuData = () => {
    const items = [];

    menuData.map(element => {
        if (typeof 'a' == typeof element) {
            items.push(
                {
                    text: element,
                    isLink: true,
                    link: `/components/${element}`.toLowerCase(),
                    attributes: {
                        title: `Navigate to the type: ${element}`
                    },
                    clickNavigateToTop: true
                }
            )
        } else {
            items.push(element);
        }
    });

    return items;
}

export const countOfAvailableComponents = () => {
    return singleModules.length;
}
