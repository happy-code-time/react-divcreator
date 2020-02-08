import React from 'react';

import { MenuHorizontalClick } from '../../module/build/react-divcreator';

const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open all hover menus',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            },
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            }
        ]
    }
];

const consoleLog = (clickEvent, singleEntry, customData) => {
    console.clear();
    console.info(
        clickEvent, 
        singleEntry, 
        customData
    );
};
const mainDescription = 'Notice that the MenuHorizontalClick module has no limits in child nesting.';
const menuHorizontalClickData = [
    {
        class: '',
        description: 'Example with an clickable menu on the x-axis (horizotnal), site={"left"} its mean the menu are aligned to the left site and all childs align to the right site. This example has keepOpen={false} - its mean do close recursively all toggled elements exept the current clicked.',
        html: (
            <MenuHorizontalClick
                id=""
                class="menu-example-horizontal-click-1"
                link={true}
                data={menuItems}
                site='left'
                animation={true}
                animationTime={200}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={false}
            />
        ),
        cssCode: (
`.menu-example-horizontal-click-1{
    max-width: 200px;
    margin:0 auto;
    
    .react-divcreator-menu--horizontal-click__single-event:hover{
        cursor: pointer;
    }

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }

    .opened{
        color:rgba(69,69,69,1);
        
        i{
            transform: rotateZ(-90deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuHorizontalClick } from 'react-divcreator';
            
<MenuHorizontalClick
    id=""
    class="menu-example-horizontal-click-1"
    link={true}
    data={menuItems}
    site='left'
    animation={true}
    animationTime={200}
    activateDots={false}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={true}
    keepOpen={false}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open all hover menus',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            },
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            }
        ]
    }
];

const consoleLog = (clickEvent, singleEntry, customData) => {
    console.clear();
    console.info(
        clickEvent, 
        singleEntry, 
        customData
    );
};`
        )
    },
    {
        class: '',
        description: 'Example with an clickable menu on the x-axis (horizotnal), site={"left"} its mean the menu are aligned to the left site and all childs align to the right site. This example has keepOpen={true} - its mean do NOT close recursively all toggled elements.',
        html: (
            <MenuHorizontalClick
                id=""
                class="menu-example-horizontal-click-1"
                link={true}
                data={menuItems}
                site='left'
                animation={true}
                animationTime={200}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={true}
            />
        ),
        cssCode: (
`.menu-example-horizontal-click-1{
    max-width: 200px;
    margin:0 auto;
    
    .react-divcreator-menu--horizontal-click__single-event:hover{
        cursor: pointer;
    }

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }

    .opened{
        color:rgba(69,69,69,1);
        
        i{
            transform: rotateZ(-90deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuHorizontalClick } from 'react-divcreator';
            
<MenuHorizontalClick
    id=""
    class="menu-example-horizontal-click-1"
    link={true}
    data={menuItems}
    site='left'
    animation={true}
    animationTime={200}
    activateDots={false}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={true}
    keepOpen={true}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open all hover menus',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            },
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            }
        ]
    }
];

const consoleLog = (clickEvent, singleEntry, customData) => {
    console.clear();
    console.info(
        clickEvent, 
        singleEntry, 
        customData
    );
};`
        )
    },
    {
        class: '',
        description: 'Example with an clickable menu on the x-axis (horizotnal), site={"right"} its mean the menu are aligned to the right site and all childs align to the left site. This example has keepOpen={false} - its mean do close recursively all toggled elements exept the current clicked.',
        html: (
            <MenuHorizontalClick
                id=""
                class="menu-example-horizontal-click-2"
                link={true}
                data={menuItems}
                site='right'
                animation={true}
                animationTime={200}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={false}
            />
        ),
        cssCode: (
`.menu-example-horizontal-click-2{
    max-width: 200px;
    margin:0 auto;

    .react-divcreator-menu--horizontal-click__single-event:hover{
        cursor: pointer;
    }

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }
    
    .opened{
        color:rgba(69,69,69,1);
        
        i{
            transform: rotateZ(90deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuHorizontalClick } from 'react-divcreator';
            
<MenuHorizontalClick
    id=""
    class="menu-example-horizontal-click-2"
    link={true}
    data={menuItems}
    site='right'
    animation={true}
    animationTime={200}
    activateDots={false}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={true}
    keepOpen={false}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open all hover menus',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            },
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            }
        ]
    }
];

const consoleLog = (clickEvent, singleEntry, customData) => {
    console.clear();
    console.info(
        clickEvent, 
        singleEntry, 
        customData
    );
};`
        )
    },
    {
        class: '',
        description: 'Example with an clickable menu on the x-axis (horizotnal), site={"right"} its mean the menu are aligned to the right site and all childs align to the left site. This example has keepOpen={true} - its mean do NOT close recursively all toggled elements.',
        html: (
            <MenuHorizontalClick
                id=""
                class="menu-example-horizontal-click-2"
                link={true}
                data={menuItems}
                site='right'
                animation={true}
                animationTime={200}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={true}
            />
        ),
        cssCode: (
`.menu-example-horizontal-click-2{
    max-width: 200px;
    margin:0 auto;

    .react-divcreator-menu--horizontal-click__single-event:hover{
        cursor: pointer;
    }

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }
    
    .opened{
        color:rgba(69,69,69,1);
        
        i{
            transform: rotateZ(90deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuHorizontalClick } from 'react-divcreator';
            
<MenuHorizontalClick
    id=""
    class="menu-example-horizontal-click-2"
    link={true}
    data={menuItems}
    site='right'
    animation={true}
    animationTime={200}
    activateDots={false}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={true}
    keepOpen={true}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open all hover menus',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            },
            {
                text: 'Entry 2',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 3',
                        isLink: false,
                        attributes: {
                            title: 'Entry 3'
                        },
                        clickNavigateToTop: true
                    }
                ]
            }
        ]
    }
];

const consoleLog = (clickEvent, singleEntry, customData) => {
    console.clear();
    console.info(
        clickEvent, 
        singleEntry, 
        customData
    );
};`
        )
    }
];

const menuHorizontalClickKeys = [
    {
        key: 'id',
        description: 'String - Custom id of root element.'
    },
    {
        key: 'class',
        description: 'String - Custom classname of root element.'
    },
    {
        key: 'performance',
        description: "Boolean - If true then the time between module's initialisation (in modules constructor) and after the render function called (in componentDidMount) are logged to the console."
    },
    {
        key: 'link',
        description: 'Boolean - Should use the Link method from the package "react-router-dom", if false then use standard tag "a".'
    },
    {
        key: 'animation',
        description: 'Boolean - If true then the all entries are toggled with an animation.'
    },
    {
        key: 'animationTime',
        description: "Number - Show/ Hide animation duration time."
    },
    {
        key: 'activateDots',
        description: "Boolean - If true then each toggled child becomes the classname 'dots."
    },
    {
        key: 'activeCount',
        description: "Boolean - If true then each toggled child becomes the current loops index as number on the left site."
    },
    {
        key: 'activeCountHtml',
        description: "Mixed - Custom developers data attached after the number if activeCount={true}."
    },
    {
        key: 'border',
        description: 'Boolean - If true then draw an border around each menu entry.'
    },
    {
        key: 'site',
        description: 'String - Toggle the child to the site: "right" or "left".'
    },
    {
        key: 'keepOpen',
        description: 'Boolean - If true then keep opened all toggled elements.'
    },
    {
        key: 'data',
        description: 'Array - Array of objects'
    },
    {
        key: 'data.toggled',
        description: 'If true and data.childs (array) has valid childs (as object) then the childs are toggled (opened).',
        type: 'Boolean'
    },
    {
        key: 'data.function',
        description: 'Function - Custom developers callback function if the user click on an menu entry.'
    },
    {
        key: 'data.functionData',
        description: 'Mixed - Custom data passed as 3 argument to the key "function".'
    },
    {
        key: 'data.isLink',
        description: 'Boolean - Is the generated route a link or just an button ( for example: with callback function).'
    },
    {
        key: 'data.text',
        description: 'Mixed - Custom JSX used for the current looped menu entry.'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the single route (html).',
        type: 'Object'
    },
    {
        key: 'data.clickNavigateToTop',
        description: 'Boolean - If the user click on an element, should naviagte to the top of the page or not.'
    },
    {
        key: 'data.childs',
        description: 'Array of objects with limitless child nesting.',
        type: 'Array'
    },
    {
        key: 'data.childs.toggled',
        description: 'If true and data.childs (array) has valid childs (as object) then the childs are toggled (opened).',
        type: 'Boolean'
    },
    {
        key: 'data.childs.function',
        description: 'Function - Custom developers callback function if the user click on an menu entry.'
    },
    {
        key: 'data.childs.functionData',
        description: 'Mixed - Custom data passed as 3 argument to the key "function".'
    },
    {
        key: 'data.childs.isLink',
        description: 'Boolean - Is the generated route a link or just an button ( for example: with callback function).'
    },
    {
        key: 'data.childs.text',
        description: 'Mixed - Custom JSX used for the current looped menu entry.'
    },
    {
        key: 'data.childs.attributes',
        description: 'Custom attributes for the single route (html).',
        type: 'Object'
    },
    {
        key: 'data.childs.clickNavigateToTop',
        description: 'Boolean - If the user click on an element, should naviagte to the top of the page or not.'
    },
    {
        key: 'data.childs.childs.......',
        description: 'Array of objects with limitless child nesting.',
        type: 'Array'
    }
]

export {
    mainDescription,
    menuHorizontalClickData,
    menuHorizontalClickKeys
};

