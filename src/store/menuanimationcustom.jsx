import React from 'react';

import { MenuAnimationCustom } from '../../module/build/react-divcreator';

const consoleLog = (event, singleObject, customData) => {
    console.clear();
    console.info(
        event, 
        singleObject, 
        customData
    );
}
const menuAnimationCustomData = [
    {
        class: '',
        description: 'Menu example with type={"custom"}, custom "icon" (JSX in this example) and overlap={false}.',
        html: (
            <span className="menu-animation-span-example-custom">
                <MenuAnimationCustom
                    id=""
                    class="custom-menu-animation"
                    link={true}
                    overlap={false}
                    clickNavigateToTop={false}
                    performance={true}
                    left={true}
                    typeCustomData={
                        <p>
                            <i className="fab fa-react"></i>
                            <span>
                                Custom menu entry
                            </span>
                        </p>
                    }
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
`.menu-animation-span-example-custom{
    width: 250px;
    display: block;
    margin:0 auto;

    .react-divcreator-menuanimation-icons--custom{
        box-sizing: border-box;
        padding:0 10px;
        transition-duration: 200ms;
        border-bottom:1px solid transparent;

        p{
            line-height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            i{
                color:dodgerblue;
                font-size:1.3rem;
                margin: 5px 10px 10px 0;
                transition-duration: 200ms;
            }
            span{
                color:rgb(255,255,255);
                transition-duration: 200ms;
                width: 100%;
            }
        }
    }
    
    .react-divcreator-menuanimation-icons--custom:hover{
        cursor:pointer;
    }

    .react-divcreator-menuanimation-icons--custom__animated{
        border-bottom:1px solid rgb(255,255,255);
    }

    .react-divcreator-menuanimation-custom{
        width: 100%;
        background-color:rgb(39,39,39);
        border-radius:5px;
        display: inline-block;
        position: relative;
        padding-top:10px;

        .header-menu-animation{
            background-color:rgb(39,39,39);            
        }

        .react-divcreator-menuanimation-holder{
            padding: 60px 0 0 0;
            min-width: 250px;

            .react-divcreator-accordion__single-content{
                padding-left:0px;
            }

            i{
                color:rgb(255,255,255);
                margin:0 10px 0 2px;
            }
            a{
                color:rgba(199,199,199,.9);
                font-size:1rem;
                transition-duration: 200ms;
            }
            a:hover{
                color: gold;
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
`import { MenuAnimationCustom } from 'react-divcreator';

<span className="menu-animation-span-example-custom">
    <MenuAnimationCustom
        id=""
        class="custom-menu-animation"
        link={true}
        overlap={false}
        clickNavigateToTop={false}
        performance={true}
        left={true}
        typeCustomData={
            <p>
                <i className="fab fa-react"></i>
                <span>
                    Custom menu entry
                </span>
            </p>
        }
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
    },
    {
        class: '',
        description: 'Menu example with type={"custom"}, custom "icon" (JSX in this example) and overlap={true}.',
        html: (
            <span className="menu-animation-span-example-custom-2">
                <MenuAnimationCustom
                    id=""
                    class="custom-menu-animation"
                    link={true}
                    overlap={true} // and includeContent={true}
                    clickNavigateToTop={false}
                    performance={true}
                    left={true}
                    typeCustomData={
                        <p>
                            <i className="fab fa-react"></i>
                            <span>
                                Custom menu entry
                            </span>
                        </p>
                    }
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
`.menu-animation-span-example-custom-2{
    width: 250px;
    display: block;
    margin:0 auto;

    .react-divcreator-menuanimation-icons--custom{
        box-sizing: border-box;
        padding:0 10px;
        transition-duration: 200ms;
        border-bottom:1px solid transparent;

        p{
            line-height: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            i{
                color:dodgerblue;
                font-size:1.3rem;
                margin: 5px 10px 10px 0;
                transition-duration: 200ms;
            }
            span{
                color:rgb(255,255,255);
                transition-duration: 200ms;
                width: 100%;
            }
        }
    }
    
    .react-divcreator-menuanimation-icons--custom:hover{
        cursor:pointer;
    }

    .react-divcreator-menuanimation-icons--custom__animated{
        border-bottom:1px solid rgb(255,255,255);
    }

    .react-divcreator-menuanimation-custom{
        width: 100%;
        background-color:rgb(39,39,39);
        border-radius:5px;
        display: inline-block;
        position: relative;
        padding-top:10px;

        .header-menu-animation{
            background-color:rgb(39,39,39);            
        }

        .react-divcreator-menuanimation-holder{
            min-width: 250px;

            .react-divcreator-accordion__single-content{
                padding-left:0px;
            }

            i{
                color:rgb(255,255,255);
                margin:0 10px 0 2px;
            }
            a{
                color:rgba(199,199,199,.9);
                font-size:1rem;
                transition-duration: 200ms;
            }
            a:hover{
                color: gold;
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
`import { MenuAnimationCustom } from 'react-divcreator';

<span className="menu-animation-span-example-custom-2">
    <MenuAnimationCustom
        id=""
        class="custom-menu-animation"
        link={true}
        overlap={true} // and includeContent={true}
        clickNavigateToTop={false}
        performance={true}
        left={true}
        typeCustomData={
            <p>
                <i className="fab fa-react"></i>
                <span>
                    Custom menu entry
                </span>
            </p>
        }
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

const menuAnimationCustomKeys = [
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
        key: 'overlap',
        description: 'Boolean - Should the animated menu element overflap over the generated html provided by the key "typeCustomData". Only available if includeContent={true}.'
    },
    {
        key: 'clickNavigateToTop',
        description: 'Boolean - If the user click on an element, should naviagte to the top of the page or not.'
    },
    {
        key: 'typeCustomData',
        description: 'Mixed - Custom developers data used as indicator to open the menus routes.'
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
    menuAnimationCustomData,
    menuAnimationCustomKeys
};

