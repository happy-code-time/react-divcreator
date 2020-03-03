import React from 'react';

import { Website404 } from '../../module/build/react-divcreator';

const naviagateToTop = (clickEvent, customData) => {
    window.scrollTo(0,0);
}

const website404Data = [
    {
        description: 'Example with the type: "clouds". This example has the key: bad={true}',
        html: (
            <span className="website-404-span">
                <Website404
                    type='clouds'
                    width='100%'
                    height='100%'
                    link={false}
                    href={window.location.href}
                    text={
                        (
                            <span>
                                Go to homepage
                            </span>
                        )
                    }
                    attributes={
                        {
                            title: 'Navigate to the homepage'
                        }
                    }
                    function={naviagateToTop}
                    bad={true}
                />
            </span>
        ),
        cssCode: (
`.website-404-span{
    display:block;
    width:100%;
}`
        ),
        reactCode: (
`import { Website404 } from 'react-divcreator';

<span className="website-404-span">
    <Website404
        type='clouds'
        width='100%'
        height='100%'
        link={false}
        href={window.location.href}
        text={
            (
                <span>
                    Go to homepage
                </span>
            )
        }
        attributes={
            {
                title: 'Navigate to the homepage'
            }
        }
        function={naviagateToTop}
        bad={true}
    />
</span>`
        ),
        jsCode: (
`const naviagateToTop = (clickEvent, customData) => {
    window.scrollTo(0,0);
}`
        )
    },
    {
        description: 'Example with the type: "water". In the first animation loop there are 3 jumping fishes - first fish after 4 seconds, second after 12 seconds and the third after 30 seconds. This example has the key: bad={false}.',
        html: (
            <span className="website-404-span">
                <Website404
                    type='water'
                    width='100%'
                    height='100%'
                    link={false}
                    href={window.location.href}
                    text={
                        (
                            <span>
                                Go to homepage
                            </span>
                        )
                    }
                    attributes={
                        {
                            title: 'Navigate to the homepage'
                        }
                    }
                    function={naviagateToTop}
                    bad={false}
                />
            </span>
        ),
        cssCode: (
`.website-404-span{
    display:block;
    width:100%;
}`
        ),
        reactCode: (
`import { Website404 } from 'react-divcreator';

<span className="website-404-span">
    <Website404
        type='water'
        width='100%'
        height='100%'
        link={false}
        href={window.location.href}
        text={
            (
                <span>
                    Go to homepage
                </span>
            )
        }
        attributes={
            {
                title: 'Navigate to the homepage'
            }
        }
        function={naviagateToTop}
        bad={false}
    />
</span>`
        ),
        jsCode: (
`const naviagateToTop = (clickEvent, customData) => {
    window.scrollTo(0,0);
}`
        )
    }
];

const website404Keys = [
    {
        key: 'type',
        description: 'Type of the page 404. Available types are: "clouds".',
        type: 'String'
    },
    {
        key: 'width',
        description: 'The inline style width. Default value is window.screen.width if not available then 100vw.',
        type: 'String'
    },
    {
        key: 'height',
        description: 'The inline style height. Default value is window.screen.height if not available then 100vh.',
        type: 'String'
    },
    {
        key: 'link',
        description: 'Set this option to true, if you want to use the Link method/ class from the package "react-router-dom", if you set this options to false then the standard tag "a" will be generated.',
        type: 'Boolean'
    },
    {
        key: 'href',
        description: 'Navigate the user to the hrefs destination.',
        type: 'String'
    },
    {
        key: 'text',
        description: 'Text inside the link. Default value: "Homepage".',
        type: 'String'
    },
    {
        key: 'attributes',
        description: 'Custom attributes for the navigation link.',
        type: 'Object'
    },
    {
        key: 'function',
        description: 'Custom developers callback function after the link was clicked.',
        type: 'Function'
    },
    {
        key: 'functionData',
        description: 'Custom data passed as 2 argument to the key "function".',
        type: 'Mixed'
    },
    {
        key: 'text404',
        description: 'The 404 text. Default value: "404".',
        type: 'String'
    },
    {
        key: 'text1',
        description: 'The first text. Default value: "THE PAGE".',
        type: 'String'
    },
    {
        key: 'text2',
        description: 'The second text. Default value: "WAS NOT FOUND".',
        type: 'String'
    },
    {
        key: 'bad',
        description: 'If true then: On the type "type" draw bad clouds with bolt`s. On the type "water" draw the fishes in red color. Default value: false.',
        type: 'Boolean'
    }
]

export {
    website404Data,
    website404Keys
};

