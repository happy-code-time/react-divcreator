import React from 'react';

import { Divtriangle, Verticalbars } from '../../module/build/react-divcreator';

const verticalbarsData = [
    {
        class: 'verticalbars-example-1',
        description: 'Example with the scroll animation.',
        html: (
            <Verticalbars
                id=''
                class='custom-verticalbar'
                animationOn='scroll'
                animationScroll={100}
                data={
                    [
                        {
                            title: 'PHP',
                            value: '80',
                            valueVector: '%',
                        },
                        {
                            title: 'Javascript',
                            value: '90',
                            valueVector: '%',
                        },
                        {
                            title: 'NodeJs',
                            value: '85',
                            valueVector: '%',
                        },
                        {
                            title: 'CSS/ SCSS',
                            value: '95',
                            valueVector: '%',
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-verticalbars{
    padding: 20px 0;
    margin:0;
}
.react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,.5)
}
.react-divcreator-verticalbars-entry:hover .react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,1)
}
.react-divcreator-verticalbars-animated-bar{
    transition-duration: 1500ms;
}`
        ),
        reactCode: (
`import { Verticalbars } from 'react-divcreator';

<Verticalbars
    id=''
    class='custom-verticalbar'
    animationOn='scroll'
    animationScroll={100}
    data={
        [
            {
                title: 'PHP',
                value: '80',
                valueVector: '%',
            },
            {
                title: 'Javascript',
                value: '90',
                valueVector: '%',
            },
            {
                title: 'NodeJs',
                value: '85',
                valueVector: '%',
            },
            {
                title: 'CSS/ SCSS',
                value: '95',
                valueVector: '%',
            }
        ]
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'verticalbars-example-2',
        description: 'Example with the click animation.',
        html: (
            <Verticalbars
                id=''
                class='custom-verticalbar'
                animationOn='click'
                data={
                    [
                        {
                            title: 'PHP',
                            value: '80',
                            valueVector: '%',
                        },
                        {
                            title: 'Javascript',
                            value: '90',
                            valueVector: '%',
                        },
                        {
                            title: 'NodeJs',
                            value: '85',
                            valueVector: '%',
                        },
                        {
                            title: 'CSS/ SCSS',
                            value: '95',
                            valueVector: '%',
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-verticalbars{
    padding: 20px 0;
    margin:0;
}
.react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,.5)
}
.react-divcreator-verticalbars-entry:hover .react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,1)
}
.react-divcreator-verticalbars-animated-bar{
    transition-duration: 1500ms;
}`
        ),
        reactCode: (
`import { Verticalbars } from 'react-divcreator';

<Verticalbars
    id=''
    class='custom-verticalbar'
    animationOn='click'
    data={
        [
            {
                title: 'PHP',
                value: '80',
                valueVector: '%',
            },
            {
                title: 'Javascript',
                value: '90',
                valueVector: '%',
            },
            {
                title: 'NodeJs',
                value: '85',
                valueVector: '%',
            },
            {
                title: 'CSS/ SCSS',
                value: '95',
                valueVector: '%',
            }
        ]
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'verticalbars-example-3',
        description: 'Example with the hover animation.',
        html: (
            <Verticalbars
                id=''
                class='custom-verticalbar'
                animationOn='hover'
                data={
                    [
                        {
                            title: 'PHP',
                            value: '80',
                            valueVector: '%',
                        },
                        {
                            title: 'Javascript',
                            value: '90',
                            valueVector: '%',
                        },
                        {
                            title: 'NodeJs',
                            value: '85',
                            valueVector: '%',
                        },
                        {
                            title: 'CSS/ SCSS',
                            value: '95',
                            valueVector: '%',
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-verticalbars{
    padding: 20px 0;
    margin:0;
}
.react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,.5)
}
.react-divcreator-verticalbars-entry:hover .react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,1)
}
.react-divcreator-verticalbars-animated-bar{
    transition-duration: 1500ms;
}`
        ),
        reactCode: (
`import { Verticalbars } from 'react-divcreator';

<Verticalbars
    id=''
    class='custom-verticalbar'
    animationOn='hover'
    data={
        [
            {
                title: 'PHP',
                value: '80',
                valueVector: '%',
            },
            {
                title: 'Javascript',
                value: '90',
                valueVector: '%',
            },
            {
                title: 'NodeJs',
                value: '85',
                valueVector: '%',
            },
            {
                title: 'CSS/ SCSS',
                value: '95',
                valueVector: '%',
            }
        ]
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'verticalbars-example-1',
        description: 'Example with the scroll animation and custom data (displayed on hover on this example).',
        html: (
            <Verticalbars
                id=''
                class='custom-verticalbar'
                animationOn='scroll'
                animationScroll={100}
                data={
                    [
                        {
                            title: 'PHP',
                            value: '80',
                            valueVector: '%',
                            data: (
                                <Divtriangle
                                    class="display-on-hover-may-tasks"
                                    id="divtriangle-1"
                                    html={
                                        (
                                            <span>
                                                <h1>PHP - Lorem Ipsum</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                                </p>
                                            </span>
                                        )
                                    }
                                    custom={true}
                                    direction='down'
                                    customDir='left'
                                    customTopBottom={0}
                                    customLeft={50}
                                    customRight={0}        
                                    customWidthHeight={20}
                                    customDifference={1}
                                    customColorBorder="white"
                                    customColor="gray"
                                />
                            )
                        },
                        {
                            title: 'Javascript',
                            value: '90',
                            valueVector: '%',
                            data: (
                                <Divtriangle
                                    class="display-on-hover-may-tasks"
                                    id="divtriangle-1"
                                    html={
                                        (
                                            <span>
                                                <h1>Javascript - Lorem Ipsum</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                                </p>
                                            </span>
                                        )
                                    }
                                    custom={true}
                                    direction='down'
                                    customDir='left'
                                    customTopBottom={0}
                                    customLeft={50}
                                    customRight={0}        
                                    customWidthHeight={20}
                                    customDifference={1}
                                    customColorBorder="white"
                                    customColor="gray"
                                />
                            )
                        },
                        {
                            title: 'NodeJs',
                            value: '85',
                            valueVector: '%',
                            data: (
                                <Divtriangle
                                    class="display-on-hover-may-tasks"
                                    id="divtriangle-1"
                                    html={
                                        (
                                            <span>
                                                <h1>NodeJs - Lorem Ipsum</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                                </p>
                                            </span>
                                        )
                                    }
                                    custom={true}
                                    direction='down'
                                    customDir='left'
                                    customTopBottom={0}
                                    customLeft={50}
                                    customRight={0}        
                                    customWidthHeight={20}
                                    customDifference={1}
                                    customColorBorder="white"
                                    customColor="gray"
                                />
                            )
                        },
                        {
                            title: 'CSS/ SCSS',
                            value: '95',
                            valueVector: '%',
                            data: (
                                <Divtriangle
                                    class="display-on-hover-may-tasks"
                                    id="divtriangle-1"
                                    html={
                                        (
                                            <span>
                                                <h1>CSS/ SCSS - Lorem Ipsum</h1>
                                                <p>
                                                Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                                </p>
                                            </span>
                                        )
                                    }
                                    custom={true}
                                    direction='down'
                                    customDir='left'
                                    customTopBottom={0}
                                    customLeft={50}
                                    customRight={0}        
                                    customWidthHeight={20}
                                    customDifference={1}
                                    customColorBorder="white"
                                    customColor="gray"
                                />
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-verticalbars{
    padding: 20px 0;
    margin:0;
}
.display-on-hover-may-tasks{
    position: absolute;
    top:-220px;
    left:0;
    min-width:500px;
    max-width:500px;
    min-height:150px;
    height:auto;
    border:1px solid gray;
    background:rgb(255,255,255);
    border-radius:5px;
    display:none;
    padding:20px 0;
    border-left:5px solid rgba(235,87,111,1);

    h1{
        text-align: center;
    }
    span{
        display: block;
        padding:20px;
        padding-top:0;
    }
}
.react-divcreator-verticalbars-entry:hover .display-on-hover-may-tasks{
    display:block;
}
.react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,.5)
}
.react-divcreator-verticalbars-entry:hover .react-divcreator-verticalbars-animated-bar{
    background:rgba(75,159,215,1)
}
.react-divcreator-verticalbars-animated-bar{
    transition-duration: 1500ms;
}`
        ),
        reactCode: (
`import { Verticalbars } from 'react-divcreator';

<Verticalbars
    id=''
    class='custom-verticalbar'
    animationOn='scroll'
    animationScroll={100}
    data={
        [
            {
                title: 'PHP',
                value: '80',
                valueVector: '%',
                data: (
                    <Divtriangle
                        class="display-on-hover-may-tasks"
                        id="divtriangle-1"
                        html={
                            (
                                <span>
                                    <h1>PHP - Lorem Ipsum</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                    </p>
                                </span>
                            )
                        }
                        custom={true}
                        direction='down'
                        customDir='left'
                        customTopBottom={0}
                        customLeft={50}
                        customRight={0}        
                        customWidthHeight={20}
                        customDifference={1}
                        customColorBorder="white"
                        customColor="gray"
                    />
                )
            },
            {
                title: 'Javascript',
                value: '90',
                valueVector: '%',
                data: (
                    <Divtriangle
                        class="display-on-hover-may-tasks"
                        id="divtriangle-1"
                        html={
                            (
                                <span>
                                    <h1>Javascript - Lorem Ipsum</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                    </p>
                                </span>
                            )
                        }
                        custom={true}
                        direction='down'
                        customDir='left'
                        customTopBottom={0}
                        customLeft={50}
                        customRight={0}        
                        customWidthHeight={20}
                        customDifference={1}
                        customColorBorder="white"
                        customColor="gray"
                    />
                )
            },
            {
                title: 'NodeJs',
                value: '85',
                valueVector: '%',
                data: (
                    <Divtriangle
                        class="display-on-hover-may-tasks"
                        id="divtriangle-1"
                        html={
                            (
                                <span>
                                    <h1>NodeJs - Lorem Ipsum</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                    </p>
                                </span>
                            )
                        }
                        custom={true}
                        direction='down'
                        customDir='left'
                        customTopBottom={0}
                        customLeft={50}
                        customRight={0}        
                        customWidthHeight={20}
                        customDifference={1}
                        customColorBorder="white"
                        customColor="gray"
                    />
                )
            },
            {
                title: 'CSS/ SCSS',
                value: '95',
                valueVector: '%',
                data: (
                    <Divtriangle
                        class="display-on-hover-may-tasks"
                        id="divtriangle-1"
                        html={
                            (
                                <span>
                                    <h1>CSS/ SCSS - Lorem Ipsum</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, ei pri ludus quaerendum definitiones. 
                                    </p>
                                </span>
                            )
                        }
                        custom={true}
                        direction='down'
                        customDir='left'
                        customTopBottom={0}
                        customLeft={50}
                        customRight={0}        
                        customWidthHeight={20}
                        customDifference={1}
                        customColorBorder="white"
                        customColor="gray"
                    />
                )
            }
        ]
    }
/>`
        ),
        jsCode: ''
    },
];

const verticalbarsKeys = [
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
        key: 'animationOn',
        description: 'String - Start animation on: "click", "dblclick", "hover", "scroll".'
    },
    {
        key: 'animationScroll',
        description: 'Numeric - If the animationOn is scroll then you can add a integer to start the animation if the user is on the viewPort + XXXX px.'
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.title',
        description: 'String - Developers custom html (JSX) betweend the keys [displayActualPage] JSX [displayActualPageOf].'
    },
    {
        key: 'data.value',
        description: 'String - Show number of current entry from list.'
    },
    {
        key: 'data.valueVector',
        description: 'String - Show prev and next button.'
    }
];

export {
    verticalbarsData,
    verticalbarsKeys
};

