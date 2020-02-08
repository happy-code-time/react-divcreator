import React from 'react';

import { MenuHorizontalHover } from '../../module/build/react-divcreator';

const consoleLog = (event, customData) => {
    console.clear();
    console.info(event);
    console.info(customData);
};


const menuHorizontalHoverData = [
    {
        class: 'menu-example-2',
        description: 'Example of HORIZONTAL menu with maximum of children (6) and with tracking function and with marked/ visited option. The click event, save data into the (window) sessionStorage, after reopen the tab, the marked menu element will be cleared.',
        html: (
            <MenuHorizontalHover
                id="menu-2"
                class="custom-menu-1"
                link={true}
                mark={true}
                markClass="menu-marked-1"
                data={
                    [
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuhorizontalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuhorizontalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuhorizontalhover",
                                                                    title: '',
                                                                    function: consoleLog,
                                                                    functionData: 'Entry6'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuhorizontalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuhorizontalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuhorizontalhover",
                                                                    title: '',
                                                                    function: consoleLog,
                                                                    functionData: 'Entry6'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
            .custom-menu-1 {
                max-width:150px;
                margin: 10px;
            
                li {
                    box-shadow:1px 2px 5px rgba(69,69,69,.2);
                    background-color:rgb(255,255,255);
                    margin:5px;
                    line-height:30px;
                    border-radius:3px;
                }
                li:first-child{
                    margin: 0 5px;
                }
                li:hover,
                .menu-marked-1 {
                    background:#eb576f ;
                }
                .react-divcreator-menu-span{
                    display: block;
                    width:100%;
                    height:100%;
                }
                .react-divcreator-menu-2-vertical, 
                .react-divcreator-menu-5-vertical {
                    top: 50px;
                    left: 0px;
                    background:rgb(255,255,255);
                    box-shadow:none;
                }
                .react-divcreator-menu-3-vertical, 
                .react-divcreator-menu-4-vertical, 
                .react-divcreator-menu-6-vertical {
                    top: 0px;
                    left: 150px;
                    background:rgb(255,255,255);
                    box-shadow:none;
                }
                .react-divcreator-menu-a{
                    color:rgba(69,69,69, .7);
                    transition-duration: 200ms;
                }
                .react-divcreator-menu-a:hover{
                    color:rgba(69,69,69, 1);
                }
            }
            `
        ),
        reactCode: (
            `
            import { MenuHorizontalHover } from 'react-divcreator';
            
            <MenuHorizontalHover
                id="menu-2"
                class="custom-menu-1"
                link={true}
                mark={true}
                markClass="menu-marked-1"
                data={
                    [
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuhorizontalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuhorizontalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuhorizontalhover",
                                                                    title: '',
                                                                    function: consoleLog,
                                                                    functionData: 'Entry6'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuhorizontalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuhorizontalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuhorizontalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuhorizontalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuhorizontalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuhorizontalhover",
                                                                    title: '',
                                                                    function: consoleLog,
                                                                    functionData: 'Entry6'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            />
            `
        ),
        jsCode: (
            `
            const consoleLog = (event, customData) => {
                console.info(event);
                console.info(customData);
            };
            `
        )
    }
];

const menuHorizontalHoverKeys = [
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
        key: 'mark',
        description: 'Boolean - If the user clicks on an link, then the classList of the root element in the tree will be changed. The class from the key "markClass" will be added.'
    },
    {
        key: 'markClass',
        description: 'String - Classname if the user clicks on an link.'
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.text',
        description: 'String - Title of the link.'
    },
    {
        key: 'data.link',
        description: 'String - Destination of the link.'
    },
    {
        key: 'data.title',
        description: 'String - The attribute title of the tag "a".'
    },
    {
        key: 'data.function',
        description: 'Function - Your tracking function. The 1 argument passed into you function are the click event.'
    },
    {
        key: 'data.functionData',
        description: 'Mixed - The second argument, that will be passed into you function.'
    },
    {
        key: 'data.data',
        description: 'Array - Array of objects with the same keys [ text, link, title, function, functionData ].'
    }
]

export {
    menuHorizontalHoverData,
    menuHorizontalHoverKeys
};

