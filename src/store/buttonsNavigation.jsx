import React from 'react';

import { ButtonsNavigation } from '../../module/build/react-divcreator';

const trackingUserActivity = (event, userData) => {
    console.clear();
    console.info(event);
    console.info(userData);
};

const buttonsNavigationData = [
    {
        class: '',
        description: 'Example with navigation to an element, in 300ms, with the navigationTo={"#uuid-nav-2"}.',
        html: (
            <ButtonsNavigation
                id="uuid-nav-1"
                class="navigation-example-1"
                navigationTo='#uuid-nav-2'
                navigationTime={300}
                html={
                    (
                        <p className='custom-navigation-2'>navigate to example 2 down (300ms)</p>
                    )
                }
                function={trackingUserActivity}
                functionData={["my custom data to track"]}
                attributes={
                    {
                        title: 'Navigate to the example 2: down in 300ms'
                    }
                }
            />
        ),
        cssCode: (
            `
.custom-navigation-2{
    color:rgb(69,69,69);
    font-size: 16px;
    text-align:center;
    min-height:30px;
    height:auto;
    line-height:30px;
    clear:both;
    max-width:220px;
    margin:0 auto;
    padding:10px 20px;
    background: rgba(30,50,80,7);
    border-radius:5px;
    cursor:pointer;
    color:rgb(255,255,255);
}`
        ),
        reactCode: (
            `import { ButtonsNavigation } from 'react-divcreator';
    
<ButtonsNavigation
    id="uuid-nav-1"
    class="navigation-example-1"
    navigationTo='#uuid-nav-2'
    navigationTime={300}
    html={
        (
            <p className='custom-navigation-2'>navigate to example 2 down (300ms)</p>
        )
    }
    function={trackingUserActivity}
    functionData={["my custom data to track"]}
    attributes={
        {
            title: 'Navigate to the example 2: down in 300ms'
        }
    }
/>`
        ),
        jsCode: (
            `
const trackingUserActivity = (event, userData) => {
    console.info(event);
    console.info(userData);
};`
        )
    },
    {
        class: '',
        description: 'Example with navigation to an element, in 3000ms, with the navigationTo={"#uuid-nav-1"}.',
        html: (
            <ButtonsNavigation
                id="uuid-nav-2"
                class="navigation-example-2"
                navigationTo='#uuid-nav-1'
                navigationTime={3000}
                html={
                    (
                        <p className='custom-navigation-2'>navigate to example 1 up (3000ms)</p>
                    )
                }
                function={trackingUserActivity}
                functionData={["my custom data to track"]}
                attributes={
                    {
                        title: 'Navigate to example 1: up in 3000ms'
                    }
                }
            />
        ),
        cssCode: (
            `
.custom-navigation-2{
    color:rgb(69,69,69);
    font-size: 16px;
    text-align:center;
    min-height:30px;
    height:auto;
    line-height:30px;
    clear:both;
    max-width:220px;
    margin:0 auto;
    padding:10px 20px;
    background: rgba(30,50,80,7);
    border-radius:5px;
    cursor:pointer;
    color:rgb(255,255,255);
}`
        ),
        reactCode: (
            `import { ButtonsNavigation } from 'react-divcreator';
    
<ButtonsNavigation
    id="uuid-nav-2"
    class="navigation-example-2"
    navigationTo='#uuid-nav-1'
    navigationTime={3000}
    html={
        (
            <p className='custom-navigation-2'>navigate to example 1 up (3000ms)</p>
        )
    }
    function={trackingUserActivity}
    functionData={["my custom data to track"]}
    attributes={
        {
            title: 'Navigate to example 1: up in 3000ms'
        }
    }
/>`
        ),
        jsCode: (
            `
const trackingUserActivity = (event, userData) => {
    console.info(event);
    console.info(userData);
};`
        )
    },
    {
        class: '',
        description: 'Example with navigation to an element, in 5000ms, with the navigationTo={"#uuid-nav-2"}.',
        html: (
            <ButtonsNavigation
                id="uuid-nav-3"
                class="navigation-example-3"
                navigationTo='#uuid-nav-2'
                navigationTime={5000}
                html={
                    (
                        <p className='custom-navigation-2'>navigate to example 2 up (5000ms)</p>
                    )
                }
                function={trackingUserActivity}
                functionData={["my custom data to track: bottom"]}
                performance={true}
                attributes={
                    {
                        title: 'Navigate to the example 2 in 5000ms'
                    }
                }
            />
        ),
        cssCode: (
            `
.custom-navigation{
    width:50px;
    height:50px;
    margin:0 auto;
}`
        ),
        reactCode: (
            `import { ButtonsNavigation } from 'react-divcreator';
    
<ButtonsNavigation
    id="uuid-nav-3"
    class="navigation-example-3"
    navigationTo='#uuid-nav-2'
    navigationTime={5000}
    html={
        (
            <p className='custom-navigation-2'>navigate to example 2 up (5000ms)</p>
        )
    }
    function={trackingUserActivity}
    functionData={["my custom data to track: bottom"]}
    performance={true}
    attributes={
        {
            title: 'Navigate to the example 2 in 5000ms'
        }
    }
/>`
        ),
        jsCode: (
            `
const trackingUserActivity = (event, userData) => {
    console.info(event);
    console.info(userData);
};`
        )
    },
    {
        class: '',
        description: 'Example with navigation to the bottom of this website in 500ms (navigationTo={"bottom"}). If the key html are not provided then this button are generated as below.',
        html: (
            <ButtonsNavigation
                id=""
                class="custom-navigation"
                navigationTo='bottom'
                navigationTime={500}
                html={('')}
                function={trackingUserActivity}
                functionData={["my custom data to track: bottom"]}
                performance={true}
                attributes={
                    {
                        title: 'Navigate to the bottom of the website in 500ms'
                    }
                }
            />
        ),
        cssCode: (
            `
.custom-navigation{
    width:50px;
    height:50px;
    margin:0 auto;
}`
        ),
        reactCode: (
            `import { ButtonsNavigation } from 'react-divcreator';
    
<ButtonsNavigation
    id=""
    class="custom-navigation"
    navigationTo='bottom'
    navigationTime={500}
    html={('')}
    function={trackingUserActivity}
    functionData={["my custom data to track: bottom"]}
    performance={true}
    attributes={
        {
            title: 'Navigate to the bottom of the website in 500ms'
        }
    }
/>`
        ),
        jsCode: (
            `
const trackingUserActivity = (event, userData) => {
    console.info(event);
    console.info(userData);
};`
        )
    }
];

const buttonsNavigationKeys = [
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
        key: 'function',
        description: 'Function - Custom developers callback function. Arguments thats returned to the custom function: 1 argument: is the click event.'
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
        key: 'navigationTime',
        description: 'Numeric - Time to navigate from current (getBoundingClientRect().top of the) document / viewport point to the destination/ html element, in milliseconds.'
    },
    {
        key: 'html',
        description: 'JSX - Developers custom button (JSX/ HTML with own style) where the onClick navigation event will be attached.'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the button.',
        type: 'Object'
    }
]

export {
    buttonsNavigationData,
    buttonsNavigationKeys
};

