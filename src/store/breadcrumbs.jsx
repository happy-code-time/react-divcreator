import React from 'react';

import { Breadcrumbs } from '../../module/build/react-divcreator';

const log = (event, object, functionData) => {
    console.clear();
    console.info(event);
    console.info(object);
    console.info(functionData);
}

const breadcrumbsData = [
    {
        description: "Example with predefined breadcrumbs entrys and href's.",
        html: (
            <Breadcrumbs
                link={true}
                class="breadcrumbs-example-1"
                performance={true}
                data={
                    [
                        {
                            text: 'Home',
                            href: '/',
                            function: log,
                            functionData: false
                        },
                        {
                            text: 'Components',
                            href: '/components',
                        },
                        {
                            text: 'Breadcrumbs'
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.breadcrumbs-example-1{
    max-width: 1024px;
    margin:0 auto;

    .react-divcreator-breadcrumbs__breadcrumb--separator,
    .react-divcreator-breadcrumbs__breadcrumb--li-span,
    a{
        font-size: 1.1087rem;
        font-weight: 500;
        color:rgba(0, 0, 0, .54);
        transition-duration: 300ms;
    }

    a:hover{
        color:rgba(0, 0, 0, .84);
    }
}`
        ),
        reactCode: (
`import { Breadcrumbs } from 'react-divcreator';

<Breadcrumbs
    link={true}
    class="breadcrumbs-example-1"
    performance={true}
    data={
        [
            {
                text: 'Home',
                href: '/',
                function: log,
                functionData: false
            },
            {
                text: 'Components',
                href: '/components',
            },
            {
                text: 'Breadcrumbs'
            }
        ]
    }
/>`
        ),
        jsCode: (
`const log = (event, object, functionData) => {
    console.clear();
    console.info(event);
    console.info(object);
    console.info(functionData);
}`
        )
    },
    {
        description: "Example with an build in url extractor. This url extractor extracts only paths in the url ( splitd by the character '/'). Default all entrys joined with the '/' character back - for each single breadcrumb (as prefix). If you using react hash router then set the key isReactHashRouter to true and the first entry (hostname) becomes the prefix '/#/' - this is important if the option link={false}. If you want to use the url extractor as link, please set the key: breadcrumbsLink={true}.",
        html: (
            <Breadcrumbs
                link={false}
                class="breadcrumbs-example-2"
                performance={true}
                isReactHashRouter={true}
                breadcrumbsLink={true}
            />
        ),
        cssCode: (
`.breadcrumbs-example-2{
    max-width: 1024px;
    margin:0 auto;

    .react-divcreator-breadcrumbs__breadcrumb--separator,
    a{
        font-size: 1.1087rem;
        font-weight: 500;
        color:rgba(0, 0, 0, .54);
        transition-duration: 300ms;
    }

    a:hover{
        color:rgba(0, 0, 0, .84);
    }
}`
        ),
        reactCode: (
`import { Breadcrumbs } from 'react-divcreator';

<Breadcrumbs
    link={false}
    class="breadcrumbs-example-2"
    performance={true}
    isReactHashRouter={true}
/>`
        ),
        jsCode: ''
    },
    {
        description: "Example with an build in url extractor. If you using react hash router then set the key isReactHashRouter to true and the first entry (hostname) becomes the prefix '/#/'. In this example I'm overriding the hostname with custom entry passed to the module by the key: overrideHostname and I'm using an custom separator. If you want to use the url extractor as link, please set the key: breadcrumbsLink={true}.",
        html: (
            <Breadcrumbs
                link={false}
                class="breadcrumbs-example-3"
                performance={true}
                separator={<i className="far fa-hand-point-right"></i>}
                isReactHashRouter={true}
                clickNavigateToTop={true}
                overrideHostname={'React-divcreator'}
                breadcrumbsLink={true}
            />
        ),
        cssCode: (
`.breadcrumbs-example-3{
    max-width: 1024px;
    margin:0 auto;

    .react-divcreator-breadcrumbs__breadcrumb--separator,
    a{
        font-size: 1.1087rem;
        font-weight: 500;
        color:rgba(0, 0, 0, .54);
        transition-duration: 300ms;
    }

    a:hover{
        color:rgba(0, 0, 0, .84);
    }

    i{
        font-size: 1.1087rem;
        font-weight: 500;
        color:dodgerblue;
    }
}`
        ),
        reactCode: (
`import { Breadcrumbs } from 'react-divcreator';

<Breadcrumbs
    link={false}
    class="breadcrumbs-example-3"
    performance={true}
    separator={<i className="far fa-hand-point-right"></i>}
    isReactHashRouter={true}
    clickNavigateToTop={true}
    overrideHostname={'React-divcreator'}
/>
`
        )
    },
    {
        description: "Example with an build in url extractor. This url extractor extracts only paths in the url ( splitd by the character '/'). Default all entrys joined with the '/' character back - for each single breadcrumb (as prefix). If you using react hash router then set the key isReactHashRouter to true and the first entry (hostname) becomes the prefix '/#/' - this is important if the option link={false}.",
        html: (
            <Breadcrumbs
                link={false}
                class="breadcrumbs-example-4"
                performance={true}
                isReactHashRouter={true}
                separator={'>>'}
            />
        ),
        cssCode: (
`.breadcrumbs-example-4{
    max-width: 1024px;
    margin:0 auto;

    .react-divcreator-breadcrumbs__breadcrumb--separator{
        font-size: 1.1087rem;
        color: rgb(255,55,255);
        font-weight: bold;
    }
}`
        ),
        reactCode: (
`import { Breadcrumbs } from 'react-divcreator';

<Breadcrumbs
    link={false}
    class="breadcrumbs-example-4"
    performance={true}
    isReactHashRouter={true}
    separator={'>>'}
/>`
        ),
        jsCode: ''
    }
];

const breadcrumbsKeys = [
    {
        key: 'id',
        description: 'Custom id of root element.',
        type: 'String'
    },
    {
        key: 'class',
        description: 'Custom classname of root element.',
        type: 'String'
    },
    {
        key: 'performance',
        description: "If true then the time between module's initialisation (in modules constructor) and after the render function called (in componentDidMount) are logged to the console.",
        type: 'Boolean'
    },
    {
        key: 'separator',
        description: "Custom developer defined separator between the breadcrumbs.",
        type: 'JSX'
    },
    {
        key: 'isReactHashRouter',
        description: "If true then the first beadcrumbs suffix are not '/' but '/#/' (if the key link={false}).",
        type: 'Boolean'
    },
    {
        key: 'clickNavigateToTop',
        description: "If the user clicked an breadcrumb, should navigate to the top of the webpage or not.",
        type: 'Boolean'
    },
    {
        key: 'showPort',
        description: "If the url has an port number ':xxx' after the domain (first breadcrumb entry) then it will be showed (not removed).",
        type: 'Boolean'
    },
    {
        key: 'showProtocol',
        description: "Show the protocol as prefix of the domain or not.",
        type: 'Boolean'
    },
    {
        key: 'overrideHostname',
        description: "Override the first breadcrumb. If this entry are setted then the showPort and showProtocol are ignored.",
        type: 'String'
    },
    {
        key: 'breadcrumbsLink',
        description: "If you are using the url extractor and you want to use the generated breadcrumbs as links then set this option to true. Default value is false (readonly).",
        type: 'Boolean'
    },
    {
        key: 'link',
        description: 'Boolean - Should use the Link method from the package "react-router-dom", if false then use standard tag "a".'
    },
    {
        key: 'data',
        description: 'Array - of objects.'
    },
    {
        key: 'data.href',
        description: 'String - target href (path) for the Link/a tag if false then an div tag are returned (not an a or Link tag).'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the single breadcrumb link.',
        type: 'Object'
    },
    {
        key: 'data.function',
        description: 'Callback function defined by the developer. 1 argument is the click event, 2 argument is the whole object passed as single breadcrumb, 3 argument is the custom data defined by the developer.',
        type: 'Function'
    },
    {
        key: 'data.functionData',
        description: 'Mixed - Developers custom data.'
    }
];

export {
    breadcrumbsData,
    breadcrumbsKeys
};

