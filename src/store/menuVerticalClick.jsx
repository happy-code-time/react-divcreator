import React from 'react';

import { MenuVerticalClick } from '../../module/build/react-divcreator';

const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open this menu item',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 1',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
                        },
                        clickNavigateToTop: true
                    },
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
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
            },
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
const mainDescription = 'Notice that the MenuVerticalClick module has no limits in child nesting.';
const menuVerticalClickData = [
    {
        class: '',
        description: 'Example with an clickable menu on the y-axis (vertical) and border={true}. This example has keepOpen={false} - its mean do close recursively all toggled elements exept the current clicked.',
        html: (
            <MenuVerticalClick
                id=""
                class="menu-example-1-vertical-click"
                link={true}
                data={menuItems}
                animation={true}
                animationTime={0}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={false}
            />
        ),
        cssCode: (
`.menu-example-1-vertical-click{
    width: 300px;
    margin: 0 calc(50% - 150px);
    display: block;
    position: absolute;
    background-color:rgb(255,255,255);
    z-index:1;
    border-radius:5px;
    box-sizing: border-box;
    padding:10px 20px;
    top:0;
    background-color: rgba(45, 45, 45, .9);

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }
    .opened{
        color:rgba(255,255,255,1);
    }

    i,
    .closed{
        transition-duration: 200ms;
        color:rgba(255,255,255,.7);
    }

    i{
        margin-left:10px;
    }

    .react-divcreator-menu--vertical-click__custom-data.opened{
        i{
            transform: rotateZ(180deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuVerticalClick } from 'react-divcreator';

<MenuVerticalClick
    id=""
    class="menu-example-1-vertical-click"
    link={true}
    data={menuItems}
    animation={true}
    animationTime={0}
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
            title: 'Click to open this menu item',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 1',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
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
            },
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
        description: 'Example with an clickable menu on the y-axis (vertical) and border={true}. This example has keepOpen={true} (and the second option animateKeepOpenBack={true}) - its mean do NOT close recursively all toggled elements.',
        html: (
            <MenuVerticalClick
                id=""
                class="menu-example-1-vertical-click"
                link={true}
                data={menuItems}
                animation={true}
                animationTime={0}
                activateDots={false}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={true}
                keepOpen={true}
                animateKeepOpenBack={true}
            />
        ),
        cssCode: (
`.menu-example-1-vertical-click{
    width: 300px;
    margin: 0 calc(50% - 150px);
    display: block;
    position: absolute;
    background-color:rgb(255,255,255);
    z-index:1;
    border-radius:5px;
    box-sizing: border-box;
    padding:10px 20px;
    top:0;
    background-color: rgba(45, 45, 45, .9);

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }
    .opened{
        color:rgba(255,255,255,1);
    }

    i,
    .closed{
        transition-duration: 200ms;
        color:rgba(255,255,255,.7);
    }

    i{
        margin-left:10px;
    }

    .react-divcreator-menu--vertical-click__custom-data.opened{
        i{
            transform: rotateZ(180deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuVerticalClick } from 'react-divcreator';

<MenuVerticalClick
    id=""
    class="menu-example-1-vertical-click"
    link={true}
    data={menuItems}
    animation={true}
    animationTime={0}
    activateDots={false}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={true}
    keepOpen={true}
    animateKeepOpenBack={true}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open this menu item',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 1',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
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
            },
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
        description: 'Example with an clickable menu on the y-axis (vertical) and activateDots={true}',
        html: (
            <MenuVerticalClick
                id=""
                class="menu-example-2-vertical-click"
                link={true}
                data={menuItems}
                animation={true}
                animationTime={0}
                activateDots={true}
                activeCount={false}
                activeCountHtml=". "
                performance={true}
                border={false}
            />
        ),
        cssCode: (
`.menu-example-2-vertical-click{
    width: 300px;
    margin: 0 calc(50% - 150px);
    display: block;
    position: absolute;
    background-color:rgb(255,255,255);
    z-index:1;
    border-radius:5px;
    box-sizing: border-box;
    padding:10px 20px;
    top:0;

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }

    .opened{
        color:rgba(69,69,69,1);
    }

    i,
    .closed{
        transition-duration: 200ms;
        color:rgba(69,69,69,.7);
    }

    i{
        margin-left:10px;
    }

    .react-divcreator-menu--vertical-click__custom-data.opened{
        i{
            transform: rotateZ(180deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuVerticalClick } from 'react-divcreator';

<MenuVerticalClick
    id=""
    class="menu-example-2-vertical-click"
    link={true}
    data={menuItems}
    animation={true}
    animationTime={0}
    activateDots={true}
    activeCount={false}
    activeCountHtml=". "
    performance={true}
    border={false}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open this menu item',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 1',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
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
            },
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
        description: 'Example with an clickable menu on the y-axis (vertical) and activeCount={true}',
        html: (
            <MenuVerticalClick
                id=""
                class="menu-example-3-vertical-click"
                link={true}
                data={menuItems}
                animation={true}
                animationTime={0}
                activateDots={false}
                activeCount={true}
                activeCountHtml=""
                performance={true}
                border={false}
            />
        ),
        cssCode: (
`.menu-example-3-vertical-click{
    width: 300px;
    margin: 0 calc(50% - 150px);
    display: block;
    position: absolute;
    background-color:rgb(255,255,255);
    z-index:1;
    border-radius:5px;
    box-sizing: border-box;
    padding:10px 20px;
    top:0;

    .react-divcreator-menu--vertical-click__single-text{
        color:rgba(69,69,69,.7);
        transition-duration: 300ms;
    }

    .opened{
        color:rgba(69,69,69,1);
    }

    i,
    .closed{
        transition-duration: 200ms;
        color:rgba(69,69,69,.7);
    }

    i{
        margin-left:10px;
    }

    .react-divcreator-menu--vertical-click__custom-data.opened{
        i{
            transform: rotateZ(180deg);
        }
    }
}`
        ),
        reactCode: (
`import { MenuVerticalClick } from 'react-divcreator';

<MenuVerticalClick
    id=""
    class="menu-example-3-vertical-click"
    link={true}
    data={menuItems}
    animation={true}
    animationTime={0}
    activateDots={false}
    activeCount={true}
    activeCountHtml=""
    performance={true}
    border={false}
/>`
        ),
        jsCode: (
`const menuItems = [
    {
        text: 'Menu 1',
        isLink: false,
        attributes: {
            title: 'Click to open this menu item',
        },
        customData: (<i className="fas fa-chevron-down"/>),
        childs: [
            {
                text: 'Entry 1',
                isLink: false,
                function: consoleLog,
                functionData: {
                    log: true,
                    data: 'my string'
                },
                customData: (<i className="fas fa-chevron-down"/>),
                childs: [
                    {
                        text: 'Entry 2',
                        isLink: false,
                        attributes: {
                            title: 'Entry 2'
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
            },
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

const menuVerticalClickKeys = [
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
        key: 'keepOpen',
        description: 'Boolean - If true then keep opened all toggled elements.'
    },
    {
        key: 'animateKeepOpenBack',
        description: 'Boolean - If true and keepOpen={true} then animate toggling back the current clicked element, otherwise toggle back without an animation.'
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
    menuVerticalClickData,
    menuVerticalClickKeys
};

