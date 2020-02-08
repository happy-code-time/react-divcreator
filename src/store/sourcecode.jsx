import React from 'react';

import { Buttons, Sourcecode } from '../../module/build/react-divcreator';

const logAllMatch = (matches) => {
    console.info(matches);
};

const sourcecodeData = [
        {
            class: 'sourcecode-example-1',
            description: 'Example to show a sourcecode, without any configuration.',
            html: (
                <Sourcecode
                    id=''
                    class='custom-sourcecode-class'
                    showLines={false}
                    performance={true}
                    data={
`<span id="custom-id" key="customKey" className="text cls" data="aha-data-field 2">
    <p>
        Hallo !
        <a href="#">
            Hallo World
        </a>
    </p>
</span>`
                    }
                />
            ),
            cssCode: (
`.custom-sourcecode-class{
    height: auto;
    overflow: auto;
    clear:both;
}`
            ),
            reactCode: (
`import { Sourcecode } from 'react-divcreator';

<Sourcecode
    id=''
    class='custom-sourcecode-class'
    showLines={false}
    performance={true}
    data={
    \`<span id="custom-id" key="customKey" className="text cls">
        <p>
            Hallo !
            <a href="#">
                Hallo World
            </a>
        </p>
    </span>\`
    }
/>`
            ),
            jsCode: ''
        },
    {
        class: 'sourcecode-example-2',
        description: 'Example to show a sourcecode, with configuration: showLines={true} and match configuration. allMatchesCallback - custom callback to log to the console all matches after source code generation process, match - array of defined matches (more details in the "Available keys" section below).',
        html: (
            <Sourcecode
                class='custom-sourcecode-class-2'
                showLines={true}
                performance={true}
                allMatchesCallback={logAllMatch}
                match={[
                    {
                        match: ['customKey()'],
                        className: 'color-orange',
                        color: 'orange',
                        hoverData: (
                            <Buttons
                                link={true}
                                class="buttons-example-1"
                                data={
                                    [
                                        {
                                            href: '/components/sourcecode',
                                            text: 'customKey()',
                                            status: 'default',
                                            attributes: {
                                                title: "Custom title button"
                                            }
                                        }
                                    ]
                                }
                            />
                        )
                    },
                    {
                        match: ['id=', 'class', 'className', 'key', 'data', 'href'],
                        className: 'color-palevioletred',
                        color: 'palevioletred'
                    },
                    {
                        match: ['World'],
                        color: 'yellow',
                        hoverData: (
                            <Buttons
                                link={true}
                                class="buttons-example-1"
                                data={
                                    [
                                        {
                                            href: '/components/sourcecode',
                                            text: 'World',
                                            status: 'default',
                                            attributes: {
                                                title: "Custom title button"
                                            }
                                        }
                                    ]
                                }
                            />
                        )
                    },
                    {
                        match: ['<p>', '</p>'],
                        color: '#F44559'
                    },
                    {
                        match: ['o'],
                        color: 'dodgerblue'
                    }
                ]}
                data={
`<matcher
    Text to parse
    <span id="custom-id" key={customKey()} className="text cls">
        <p>
            Hallo !
            <a href="#">
                Hallo World
            </a>
        </p>
    </span>
</matcher>`}
            />
        ),
        cssCode: (
`.custom-sourcecode-class-2{
    $animation-time-scaller: 700ms;
    height: auto;
    overflow: auto;
    clear:both;

    @keyframes animate-sourcecode-button {
        0% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
        25% {
            transform: scale(0.8);
            -webkit-transform: scale(0.8);
        }
        50% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
        75% {
            transform: scale(.9);
            -webkit-transform: scale(.9);
        }
        100% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
    }
    .react-divcreator-sourcecode__custom--data-holder{
        position: relative;

        .react-divcreator-sourcecode__custom--data{
            position: absolute;
            top:50px;
            left:15px;
            width: 100%;
            min-height: 30px;
            height: auto;
            opacity: 0;
            transition-duration: 300ms;
            background-color: rgb(255,255,255);
        }
    }
      
    .react-divcreator-sourcecode__custom--data-holder:after{
        content: '↑';
        position: absolute;
        bottom:-30px;
        left:40%;
        font-size:32px;
        animation: animate-sourcecode-button $animation-time-scaller infinite;
        transform: rotate(-90deg);
    }
    .react-divcreator-sourcecode__span:hover{
        .react-divcreator-sourcecode__custom--data{
            opacity: 1;
        }
    }
}`
        ),
        reactCode: (
`import { Buttons, Sourcecode } from 'react-divcreator';

<Sourcecode
    class='custom-sourcecode-class-2'
    showLines={true}
    performance={true}
    allMatchesCallback={logAllMatch}
    match={[
        {
            match: ['customKey()'],
            className: 'color-orange',
            color: 'orange',
            hoverData: (
                <Buttons
                    link={true}
                    class="buttons-example-1"
                    data={
                        [
                            {
                                href: '/components/sourcecode',
                                text: 'customKey()',
                                status: 'default',
                                attributes: {
                                    title: "Custom title button"
                                }
                            }
                        ]
                    }
                />
            )
        },
        {
            match: ['id=', 'class', 'className', 'key', 'data', 'href'],
            className: 'color-palevioletred',
            color: 'palevioletred'
        },
        {
            match: ['World'],
            color: 'yellow',
            hoverData: (
                <Buttons
                    link={true}
                    class="buttons-example-1"
                    data={
                        [
                            {
                                href: '/components/sourcecode',
                                text: 'World',
                                status: 'default',
                                attributes: {
                                    title: "Custom title button"
                                }
                            }
                        ]
                    }
                />
            )
        },
        {
            match: ['<p>', '</p>'],
            color: '#F44559'
        },
        {
            match: ['o'],
            color: 'dodgerblue'
        }
    ]}
    data={
\`<matcher
    Text to parse
    <span id="custom-id" key={customKey()} className="text cls">
        <p>
            Hallo !
            <a href="#">
                Hallo World
            </a>
        </p>
        </span>
    </matcher>\`}
/>`
        ),
        jsCode: (
`const logAllMatch = (matches) => {
    console.info(matches);
};`
        )
    },
    {
        class: 'sourcecode-example-2',
        description: 'Example with the key: removeLines and removeLinesChar.',
        html: (
            <Sourcecode
                class='custom-sourcecode-class-2'
                showLines={true}
                performance={true}
                allMatchesCallback={logAllMatch}
                removeLines={[0]}
                removeLinesChar={
                    <span style={{color: '#F44559'}}>
                        <i 
                            className="fas fa-book-dead" 
                            style={
                                { 
                                    margin: '0 15px', 
                                    color: 'rgb(255,255,255)'
                                }
                            }
                        />
                        REMOVED LINE
                    </span>
                }
                match={[
                    {
                        match: ['customKey()'],
                        className: 'color-orange',
                        color: 'orange',
                        hoverData: (
                            <Buttons
                                link={true}
                                class="buttons-example-1"
                                data={
                                    [
                                        {
                                            href: '/components/sourcecode',
                                            text: 'customKey()',
                                            status: 'default',
                                            attributes: {
                                                title: "Custom title button"
                                            }
                                        }
                                    ]
                                }
                            />
                        )
                    },
                    {
                        match: ['id=', 'class', 'className', 'key', 'data', 'href'],
                        className: 'color-palevioletred',
                        color: 'palevioletred'
                    },
                    {
                        match: ['World'],
                        color: 'yellow',
                        hoverData: (
                            <Buttons
                                link={true}
                                class="buttons-example-1"
                                data={
                                    [
                                        {
                                            href: '/components/sourcecode',
                                            text: 'World',
                                            status: 'default',
                                            attributes: {
                                                title: "Custom title button"
                                            }
                                        }
                                    ]
                                }
                            />
                        )
                    },
                    {
                        match: ['<p>', '</p>'],
                        color: '#F44559'
                    },
                    {
                        match: ['o'],
                        color: 'dodgerblue'
                    }
                ]}
                data={
`<matcher
    Text to parse
    <span id="custom-id" key={customKey()} className="text cls">
        <p>
            Hallo !
            <a href="#">
                Hallo World
            </a>
        </p>
    </span>
</matcher>`}
            />
        ),
        cssCode: (
`.custom-sourcecode-class-2{
    $animation-time-scaller: 700ms;
    height: auto;
    overflow: auto;
    clear:both;

    @keyframes animate-sourcecode-button {
        0% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
        25% {
            transform: scale(0.8);
            -webkit-transform: scale(0.8);
        }
        50% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
        75% {
            transform: scale(.9);
            -webkit-transform: scale(.9);
        }
        100% {
            transform: scale(1);
            -webkit-transform: scale(1);
        }
    }
    .react-divcreator-sourcecode__custom--data-holder{
        position: relative;

        .react-divcreator-sourcecode__custom--data{
            position: absolute;
            top:50px;
            left:15px;
            width: 100%;
            min-height: 30px;
            height: auto;
            opacity: 0;
            transition-duration: 300ms;
            background-color: rgb(255,255,255);
        }
    }
      
    .react-divcreator-sourcecode__custom--data-holder:after{
        content: '↑';
        position: absolute;
        bottom:-30px;
        left:40%;
        font-size:32px;
        animation: animate-sourcecode-button $animation-time-scaller infinite;
        transform: rotate(-90deg);
    }
    .react-divcreator-sourcecode__span:hover{
        .react-divcreator-sourcecode__custom--data{
            opacity: 1;
        }
    }
}`
        ),
        reactCode: (
`import { Buttons, Sourcecode } from 'react-divcreator';

<Sourcecode
    class='custom-sourcecode-class-2'
    showLines={true}
    performance={true}
    allMatchesCallback={logAllMatch}
    removeLines={[0]}
    removeLinesChar={
        <span style={{color: '#F44559'}}>
            <i 
                className="fas fa-book-dead" 
                style={
                    { 
                        margin: '0 15px', 
                        color: 'rgb(255,255,255)'
                    }
                }
            />
            REMOVED LINE
        </span>
    }
    match={[
        {
            match: ['customKey()'],
            className: 'color-orange',
            color: 'orange',
            hoverData: (
                <Buttons
                    link={true}
                    class="buttons-example-1"
                    data={
                        [
                            {
                                href: '/components/sourcecode',
                                text: 'customKey()',
                                status: 'default',
                                attributes: {
                                    title: "Custom title button"
                                }
                            }
                        ]
                    }
                />
            )
        },
        {
            match: ['id=', 'class', 'className', 'key', 'data', 'href'],
            className: 'color-palevioletred',
            color: 'palevioletred'
        },
        {
            match: ['World'],
            color: 'yellow',
            hoverData: (
                <Buttons
                    link={true}
                    class="buttons-example-1"
                    data={
                        [
                            {
                                href: '/components/sourcecode',
                                text: 'World',
                                status: 'default',
                                attributes: {
                                    title: "Custom title button"
                                }
                            }
                        ]
                    }
                />
            )
        },
        {
            match: ['<p>', '</p>'],
            color: '#F44559'
        },
        {
            match: ['o'],
            color: 'dodgerblue'
        }
    ]}
    data={
\`<matcher
    Text to parse
    <span id="custom-id" key={customKey()} className="text cls">
        <p>
            Hallo !
            <a href="#">
                Hallo World
            </a>
        </p>
        </span>
    </matcher>\`}
/>`
        ),
        jsCode: (
`const logAllMatch = (matches) => {
    console.info(matches);
};`
        )
    }
];

const sourcecodeKeys = [
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
        key: 'showLines',
        description: 'Boolean - Show number of lines on the left site of the source code.'
    },
    {
        key: 'lineChar',
        description: 'String - If you want to display custom character, JSX in place of numbers.'
    },
    {
        key: 'allMatchesCallback',
        description: 'Function - Custom callback function to log to the console all matches after processing source code.'
    },
    {
        key: 'removeLines',
        description: 'Array - Array of numbers, which lines should be removed. Count start by 0.'
    },
    {
        key: 'removeLinesChar',
        description: 'JSX - Custom JSX or string defined by the developer if an line are ignored. If not defined, then the line are not displayed.'
    },
    {
        key: 'match',
        description: 'Array - Array of objects.'
    },
    {
        key: 'match.match',
        description: 'Array - Array of string to match while generating source code.'
    },
    {
        key: 'match.className',
        description: 'String - Matched strings holder (span) classname becomes this value.'
    },
    {
        key: 'match.color',
        description: 'String - Matched strings holder (span) becomes this value as inline style (color).'
    },
    {
        key: 'match.hoverData',
        description: 'Mixed - Custom developers JSX to display on hovered on an match.'
    }
]

export {
    sourcecodeData,
    sourcecodeKeys
};

