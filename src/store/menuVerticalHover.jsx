import React from 'react';

import { MenuVerticalHover } from '../../module/build/react-divcreator';

const consoleLog = (event, customData) => {
    console.clear();
    console.info(event);
    console.info(customData);
};


const menuVerticalHoverData = [
    {
        class: 'menu-example-1',
        description: 'Example of VERTICAL menu with maximum of children (6) and with tracking function and with marked/ visited option. The click event, save data into the (window) sessionStorage, after reopen the tab, the marked menu element will be cleared. To see an result of the custom function event, open your console.',
        html: (
            <MenuVerticalHover
                id="menu"
                class="custom-menu-2"
                link={true}
                mark={true}
                markClass="menu-marked-2"
                data={
                    [
                        {
                            text: "Entry 1",
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry3/3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuverticalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuverticalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuverticalhover",
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
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuverticalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/done5",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuverticalhover",
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
            .custom-menu-2{
                width:400px;
                margin:0 auto;
            
                li {
                    width: 100px;
                    box-shadow:1px 2px 5px rgba(69,69,69,.2);
                    background-color:rgb(255,255,255);
                    line-height:30px;
                    padding:5px 10px;
                    margin:5px;
                    border-radius:3px;
                }
                
                ul li {
                    margin:5px;
                }
            
                .react-divcreator-menu-3-li-vertical,
                .react-divcreator-menu-4-li-vertical,
                .react-divcreator-menu-6-li-vertical {
                    margin-top:0px;
                }
            
                .react-divcreator-menu-2-li-vertical,
                .react-divcreator-menu-5-li-vertical {
                    margin-left:0px;
                }
            
                li:hover,
                .menu-marked-2{
                    background:rgba(75,159,215,1);
                }
            
                .react-divcreator-menu-1-horizontal,
                .react-divcreator-menu-2-horizontal,
                .react-divcreator-menu-3-horizontal,
                .react-divcreator-menu-4-horizontal,
                .react-divcreator-menu-5-horizontal,
                .react-divcreator-menu-6-horizontal{
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
            import { MenuVerticalHover } from 'react-divcreator';

            <MenuVerticalHover
                id="menu"
                class="custom-menu-2"
                link={true}
                mark={true}
                markClass="menu-marked-2"
                data={
                    [
                        {
                            text: "Entry 1",
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2'
                                }
                            ]
                        },
                        {
                            text: "Entry 1",
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry3/3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuverticalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/components/menuverticalhover",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuverticalhover",
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
                            link: "/components/menuverticalhover",
                            title: '',
                            function: consoleLog,
                            functionData: 'Entry1',
                            data: [
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        }
                                    ]
                                },
                                {
                                    text: "Entry 2",
                                    link: "/components/menuverticalhover",
                                    title: '',
                                    function: consoleLog,
                                    functionData: 'Entry2',
                                    data: [
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3'
                                        },
                                        {
                                            text: "Entry 3",
                                            link: "/components/menuverticalhover",
                                            title: '',
                                            function: consoleLog,
                                            functionData: 'Entry3',
                                            data: [
                                                {
                                                    text: "Entry 4",
                                                    link: "/components/menuverticalhover",
                                                    title: '',
                                                    function: consoleLog,
                                                    functionData: 'Entry4',
                                                    data: [
                                                        {
                                                            text: "Entry 5",
                                                            link: "/done5",
                                                            title: '',
                                                            function: consoleLog,
                                                            functionData: 'Entry5',
                                                            data: [
                                                                {
                                                                    text: "Entry 6",
                                                                    link: "/components/menuverticalhover",
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

const menuVerticalHoverKeys = [
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
        description: 'Array - Array of child objects.'
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
    menuVerticalHoverData,
    menuVerticalHoverKeys
};

