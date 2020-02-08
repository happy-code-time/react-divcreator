import React from 'react';

import { Buttons } from '../../module/build/react-divcreator';

const consoleLog = (event, customData) => {
    event.preventDefault();
    console.clear();
    console.info(event);
    console.info(customData);
};

const buttonsData = [
    {
        class: 'buttons-example-1',
        description: 'Example with buttons as Link and with custom callback function attached to each single button.',
        html: (
            <Buttons
                link={true}
                class="buttons-example-1"
                performance={true}
                data={
                    [
                        {
                            href: '/#',
                            text: 'default button',
                            status: 'default',
                            attributes:{
                                title: "Custom title button 1"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 1 button: default",
                        },
                        {
                            href: '/#',
                            text: 'disabled button',
                            status: 'disabled',
                            attributes:{
                                title: "Custom title button 2"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 2 button: disabled"
                        },
                        {
                            href: '/#',
                            text: 'success button',
                            status: 'success',
                            attributes:{
                                title: "Custom title button 3"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 3 button: success",
                        },
                        {
                            href: '/#',
                            text: 'error button',
                            status: 'error',
                            attributes:{
                                title: "Custom title button 4"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 4 button: error",
                        },
                        {
                            href: '/#',
                            text: 'warning button',
                            status: 'warning',
                            attributes:{
                                title: "Custom title button 5"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 5 button: warning"
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.react-divcreator-buttons{
    max-width:1024px;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}`
        ),
        reactCode: (
            `import { Buttons } from 'react-divcreator';
    
<Buttons
    link={true}
    class="buttons-example-1"
    data={
        [
            {
                href: '/#',
                text: 'default button',
                status: 'default',
                attributes:{
                    title: "Custom title button 1"
                },
                function: consoleLog,
                functionData: "user clicked the 1 button: default",
            },
            {
                href: '/#',
                text: 'disabled button',
                status: 'disabled',
                attributes:{
                    title: "Custom title button 2"
                },
                function: consoleLog,
                functionData: "user clicked the 2 button: disabled"
            },
            {
                href: '/#',
                text: 'success button',
                status: 'success',
                attributes:{
                    title: "Custom title button 3"
                },
                function: consoleLog,
                functionData: "user clicked the 3 button: success",
            },
            {
                href: '/#',
                text: 'error button',
                status: 'error',
                attributes:{
                    title: "Custom title button 4"
                },
                function: consoleLog,
                functionData: "user clicked the 4 button: error",
            },
            {
                href: '/#',
                text: 'warning button',
                status: 'warning',
                attributes:{
                    title: "Custom title button 5"
                },
                function: consoleLog,
                functionData: "user clicked the 5 button: warning"
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};
            `
        )
    },
    {
        class: 'buttons-example-2',
        description: 'Example with buttons without Link and with custom callback function attached to each single button.',
        html: (
            <Buttons
                link={false}
                class="buttons-example-1"
                data={
                    [
                        {
                            text: 'default button',
                            status: 'default',
                            attributes:{
                                title: "Custom title button 1"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 1 button: default",
                        },
                        {
                            text: 'disabled button',
                            status: 'disabled',
                            attributes:{
                                title: "Custom title button 2"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 2 button: disabled"
                        },
                        {
                            text: 'success button',
                            status: 'success',
                            attributes:{
                                title: "Custom title button 3"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 3 button: success",
                        },
                        {
                            text: 'error button',
                            status: 'error',
                            attributes:{
                                title: "Custom title button 4"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 4 button: error",
                        },
                        {
                            text: 'warning button',
                            status: 'warning',
                            attributes:{
                                title: "Custom title button 5"
                            },
                            function: consoleLog,
                            functionData: "user clicked the 5 button: warning"
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.react-divcreator-buttons{
    max-width:1024px;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}`
        ),
        reactCode: (
            `import { Buttons } from 'react-divcreator';
    
<Buttons
    link={false}
    class="buttons-example-1"
    data={
        [
            {
                text: 'default button',
                status: 'default',
                attributes:{
                    title: "Custom title button 1"
                },
                function: consoleLog,
                functionData: "user clicked the 1 button: default",
            },
            {
                text: 'disabled button',
                status: 'disabled',
                attributes:{
                    title: "Custom title button 2"
                },
                function: consoleLog,
                functionData: "user clicked the 2 button: disabled"
            },
            {
                text: 'success button',
                status: 'success',
                attributes:{
                    title: "Custom title button 3"
                },
                function: consoleLog,
                functionData: "user clicked the 3 button: success",
            },
            {
                text: 'error button',
                status: 'error',
                attributes:{
                    title: "Custom title button 4"
                },
                function: consoleLog,
                functionData: "user clicked the 4 button: error",
            },
            {
                text: 'warning button',
                status: 'warning',
                attributes:{
                    title: "Custom title button 5"
                },
                function: consoleLog,
                functionData: "user clicked the 5 button: warning"
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    }
];

const buttonsKeys = [
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
        description: 'Boolean - Set this option to true, if you want to use the Link method/ class from the package "react-router-dom", if you set this options to false then the standard tag "a" will be generated.'
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.href',
        description: 'String - Navigate the user to the hrefs destination.'
    },
    {
        key: 'data.text',
        description: 'String - Text inside the button.'
    },
    {
        key: 'data.status',
        description: 'String - Available types of status: "default", "disabled", "success", "error", "warning".'
    },
    {
        key: 'data.function',
        description: 'Function - Custom developers callback function if the button are clicked.'
    },
    {
        key: 'data.functionData',
        description: 'Mixed - Custom data passed as 2 argument to the key "function".'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the button.',
        type: 'Object'
    }
]

export {
    buttonsData,
    buttonsKeys
};

