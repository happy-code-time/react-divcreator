import React from 'react';

import { MenuAnimationHamburger } from '../../module/build/react-divcreator';

const consoleLog = (event, singleObject, customData) => {
    console.clear();
    console.info(
        event, 
        singleObject, 
        customData
    );
}
const menuAnimationHamburgerData = [
    {
        class: '',
        description: 'Animated menu with hamburger, left={false} and includeContent={false}',
        html: (
            <span className="menu-animation-span-example-hamburger-1">
                <MenuAnimationHamburger
                    id=""
                    class="custom-menu-animation"
                    link={true}
                    clickNavigateToTop={false}
                    performance={true}
                    left={false}
                    border={false}
                    includeContent={false}
                    routes={
                        [
                            {
                                href: '/components/menuanimation',
                                class: 'my-custom-classname',
                                id: 'menu-animation-entry-1',
                                isLink: true,
                                function: consoleLog,
                                functionData: [],
                                text: (
                                    <span>
                                        <i className="fas fa-laptop-code"></i>
                                        Articles
                                    </span>
                                ),
                                attributes:{
                                    title: 'Navigate to Articles examples'
                                }
                            },
                            {
                                href: '/components/menuanimation',
                                class: 'my-custom-classname',
                                id: 'menu-animation-entry-2',
                                isLink: true,
                                text: (
                                    <span>
                                        <i className="fas fa-laptop-code"></i>
                                        Source code
                                    </span>
                                ),
                                attributes:{
                                    title: 'Navigate to Source Code examples'
                                }
                            }
                        ]
                    }
                />
            </span>
        ),
        cssCode: (
`.menu-animation-span-example-hamburger-1{
    max-width: 50px;
    display: block;
    margin:0 auto;

    .react-divcreator-menuanimation-hamburger{            
        .react-divcreator-menuanimation-holder{
            padding-left:0px;
            padding-top:20px;
            min-width: 250px;
            box-shadow: 1px 2px 5px rgba(69,69,69,.2);

            .react-divcreator-accordion__single-content{
                padding-left:0px;
            }

            i{
                color:rgb(69,69,69);
                font-size:1.3rem;
                margin: 0 10px 0 0;
            }
            a{
                color:rgba(99,99,99,.5);
                font-size:1rem;
                transition-duration: 200ms;
            }
            a:hover{
                color: rgb(39,39,39);
            }
        }
    }
    .react-divcreator-accordion,
    .parent{
        padding:0;
    }
}`
        ),
        reactCode: (
`import { MenuAnimationHamburger } from 'react-divcreator';
            
<span className="menu-animation-span-example-hamburger-1">
    <MenuAnimationHamburger
        id=""
        class="custom-menu-animation"
        link={true}
        clickNavigateToTop={false}
        performance={true}
        left={false}
        border={false}
        includeContent={false}
        routes={
            [
                {
                    href: '/components/menuanimation',
                    class: 'my-custom-classname',
                    id: 'menu-animation-entry-1',
                    isLink: true,
                    function: consoleLog,
                    functionData: [],
                    text: (
                        <span>
                            <i className="fas fa-laptop-code"></i>
                            Articles
                        </span>
                    ),
                    attributes:{
                        title: 'Navigate to Articles examples'
                    }
                },
                {
                    href: '/components/menuanimation',
                    class: 'my-custom-classname',
                    id: 'menu-animation-entry-2',
                    isLink: true,
                    text: (
                        <span>
                            <i className="fas fa-laptop-code"></i>
                            Source code
                        </span>
                    ),
                    attributes:{
                        title: 'Navigate to Source Code examples'
                    }
                }
            ]
        }
    />
</span>`
        ),
        jsCode: (
`const consoleLog = (event, singleObject, customData) => {
    console.clear();
    console.info(
        event, 
        singleObject, 
        customData
    );
}`
        )
    },
    {
        class: '',
        description: 'Animated menu with hamburger, left={true} and includeContent={true}',
        html: (
            <span className="menu-animation-span-example-hamburger-2">
                <MenuAnimationHamburger
                    id=""
                    class="custom-menu-animation"
                    link={true}
                    clickNavigateToTop={false}
                    performance={true}
                    left={true}
                    border={false}
                    includeContent={true}
                    routes={
                        [
                            {
                                href: '/components/menuanimation',
                                class: 'my-custom-classname',
                                id: 'menu-animation-entry-1',
                                isLink: true,
                                function: consoleLog,
                                functionData: [],
                                text: (
                                    <span>
                                        <i className="fas fa-laptop-code"></i>
                                        Articles
                                    </span>
                                ),
                                attributes:{
                                    title: 'Navigate to Articles examples'
                                }
                            },
                            {
                                href: '/components/menuanimation',
                                class: 'my-custom-classname',
                                id: 'menu-animation-entry-2',
                                isLink: true,
                                text: (
                                    <span>
                                        <i className="fas fa-laptop-code"></i>
                                        Source code
                                    </span>
                                ),
                                attributes:{
                                    title: 'Navigate to Source Code examples'
                                }
                            }
                        ]
                    }
                />
            </span>
        ),
        cssCode: (
`.menu-animation-span-example-hamburger-2{
    max-width: 50px;
    display: block;
    margin:0 auto;

    .react-divcreator-menuanimation-hamburger{            
        .react-divcreator-menuanimation-holder{
            padding:0px;
            min-width: 250px;
            box-shadow: 1px 2px 5px rgba(69,69,69,.2);

            .react-divcreator-accordion__single-content{
                padding-left:0px;
            }

            i{
                color:rgb(69,69,69);
                font-size:1.3rem;
                margin: 0 10px 0 0;
            }
            a{
                color:rgba(99,99,99,.5);
                font-size:1rem;
                transition-duration: 200ms;
            }
            a:hover{
                color: rgb(39,39,39);
            }
        }
    }
    .react-divcreator-accordion,
    .parent{
        padding:0;
    }
}`
        ),
        reactCode: (
`import { MenuAnimationHamburger } from 'react-divcreator';
            
<span className="menu-animation-span-example-hamburger-2">
    <MenuAnimationHamburger
        id=""
        class="custom-menu-animation"
        link={true}
        clickNavigateToTop={false}
        performance={true}
        left={true}
        border={false}
        includeContent={true}
        routes={
            [
                {
                    href: '/components/menuanimation',
                    class: 'my-custom-classname',
                    id: 'menu-animation-entry-1',
                    isLink: true,
                    function: consoleLog,
                    functionData: [],
                    text: (
                        <span>
                            <i className="fas fa-laptop-code"></i>
                            Articles
                        </span>
                    ),
                    attributes:{
                        title: 'Navigate to Articles examples'
                    }
                },
                {
                    href: '/components/menuanimation',
                    class: 'my-custom-classname',
                    id: 'menu-animation-entry-2',
                    isLink: true,
                    text: (
                        <span>
                            <i className="fas fa-laptop-code"></i>
                            Source code
                        </span>
                    ),
                    attributes:{
                        title: 'Navigate to Source Code examples'
                    }
                }
            ]
        }
    />
</span>`
        ),
        jsCode: (
`const consoleLog = (event, singleObject, customData) => {
    console.clear();
    console.info(
        event, 
        singleObject, 
        customData
    );
}`
        )
    }
];

const menuAnimationHamburgerKeys = [
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
        key: 'left',
        description: 'Boolean - If true then the main button are aligned to the left site of the content, if false then the main button aligned to the right site of the content.'
    },
    {
        key: 'clickNavigateToTop',
        description: 'Boolean - If the user click on an element, should naviagte to the top of the page or not.'
    },
    {
        key: 'border',
        description: 'Boolean - If true then draw an border around the menu.'
    },
    {
        key: 'includeContent',
        description: 'Boolean - Should the generated routes be part of the JSX (provided by the key typeCustomData) or sould the link be outside.'
    },
    {
        key: 'routes',
        description: 'Array - Array of objects'
    },
    {
        key: 'routes.href',
        description: 'String - Navigate the user to the hrefs destination.'
    },
    {
        key: 'routes.class',
        description: 'String - Custom classname of the routes element.'
    },
    {
        key: 'routes.id',
        description: 'String - Custom id of the routes element.'
    },
    {
        key: 'routes.isLink',
        description: 'Boolean - Is the generated route a link or just an button ( for example: with callback function).'
    },
    {
        key: 'routes.text',
        description: 'Mixed - Custom JSX used for the route.'
    },
    {
        key: 'routes.function',
        description: 'Function - Custom developers callback function if the route are clicked.'
    },
    {
        key: 'routes.functionData',
        description: 'Mixed - Custom data passed as 3 argument to the key "function".'
    },
    {
        key: 'routes.attributes',
        description: 'Custom attributes for the single route (html).',
        type: 'Object'
    }
]

export {
    menuAnimationHamburgerData,
    menuAnimationHamburgerKeys
};

