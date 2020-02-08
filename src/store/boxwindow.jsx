import React from 'react';

import { BoxWindow, Slider } from '../../module/build/react-divcreator';

const consoleLog = (event, button, customData) => {
    console.clear()
    console.info(
        event,
        button,
        customData
    );
};

const boxwindowData = [
    {
        class: '',
        description: 'Box example with action buttons on the left site and dark={true}.',
        html: (
            <BoxWindow
                id=""
                class="box-example-1"
                dark={true}
                buttonsDirection={'left'}
                boxTitle={
                    <p>
                        Box 1 title
                </p>
                }
                boxContent={
                    <p>
                        Box content
                </p>
                }
                displayContent={false}
                minimizeButtonAttr={{
                    title: 'Click to minimze this window'
                }}
                maximizeButtonAttr={{
                    title: 'Click to maximize this window'
                }}
                closeButtonAttr={{
                    title: 'Click to close this window'
                }}
                performance={true}
            />
        ),
        cssCode: (
`.box-example-1{
    max-width: 500px;
    margin:0 auto;

    .react-divcreator__content--title,
    .react-divcreator__content--content{
        p{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxWindow } from 'react-divcreator';

<BoxWindow
    id=""
    class="box-example-1"
    dark={true}
    buttonsDirection={'left'}
    boxTitle={
        <p>
            Box 1 title
    </p>
    }
    animation={true}
    boxContent={
        <p>
            Box content7
    </p>
    }
    displayContent={false}
    minimizeButtonAttr={{
        title: 'Click to minimze this window'
    }}
    maximizeButtonAttr={{
        title: 'Click to maximize this window'
    }}
    closeButtonAttr={{
        title: 'Click to close this window'
    }}
    performance={true}
/>`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Box example with action buttons on the right site and dark={false}.',
        html: (
            <BoxWindow
                id=""
                class="box-example-2"
                dark={false}
                buttonsDirection={'right'}
                boxTitle={
                    <p>
                        Box 2 title
                </p>
                }
                boxContent={
                    <p>
                        Box content
                </p>
                }
                displayContent={false}
                minimizeButtonAttr={{
                    title: 'Click to minimze this window'
                }}
                maximizeButtonAttr={{
                    title: 'Click to maximize this window'
                }}
                closeButtonAttr={{
                    title: 'Click to close this window'
                }}
                performance={true}
            />
        ),
        cssCode: (
`.box-example-2{
    max-width: 500px;
    margin:0 auto;

    .react-divcreator__content--title,
    .react-divcreator__content--content{
        p{
            color:rgb(69,69,69);
        }
    }
}`
        ),
        reactCode: (
`import { BoxWindow } from 'react-divcreator';

<BoxWindow
    id=""
    class="box-example-2"
    dark={false}
    buttonsDirection={'right'}
    boxTitle={
        <p>
            Box 2 title
    </p>
    }
    boxContent={
        <p>
            Box content
    </p>
    }
    displayContent={false}
    minimizeButtonAttr={{
        title: 'Click to minimze this window'
    }}
    maximizeButtonAttr={{
        title: 'Click to maximize this window'
    }}
    closeButtonAttr={{
        title: 'Click to close this window'
    }}
    performance={true}
/>`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Box example with headerWidth={150} (150px) aligned to the left site and triangle={true}.',
        html: (
            <BoxWindow
                id=""
                class="box-example-3"
                dark={true}
                buttonsDirection={'left'}
                triangle={true}
                headerWidth={150}
                triangleBackgroundColor={'rgba(250, 250, 250, 1)'}
                headerBackgroundColor={'rgb(0,0,0)'}
                boxTitle={
                    <p>
                        Box 3 title
                </p>
                }
                boxContent={
                    <p>
                        Box content
                </p>
                }
                displayContent={false}
                minimizeButtonAttr={{
                    title: 'Click to minimze this window'
                }}
                maximizeButtonAttr={{
                    title: 'Click to maximize this window'
                }}
                closeButtonAttr={{
                    title: 'Click to close this window'
                }}
                performance={true}
            />
        ),
        cssCode: (
`.box-example-3{
    max-width: 500px;
    margin:0 auto;

    .react-divcreator__content--title,
    .react-divcreator__content--content{
        p{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxWindow } from 'react-divcreator';

<BoxWindow
    id=""
    class="box-example-3"
    dark={true}
    buttonsDirection={'left'}
    triangle={true}
    headerWidth={150}
    triangleBackgroundColor={'rgba(245, 245, 245, 0.4'}
    headerBackgroundColor={'rgb(0,0,0)'}
    boxTitle={
        <p>
            Box 3 title
    </p>
    }
    boxContent={
        <p>
            Box content
    </p>
    }
    displayContent={false}
    minimizeButtonAttr={{
        title: 'Click to minimze this window'
    }}
    maximizeButtonAttr={{
        title: 'Click to maximize this window'
    }}
    closeButtonAttr={{
        title: 'Click to close this window'
    }}
    performance={true}
/>`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Box example with headerWidth={150} (150px) aligned to the right site and triangle={true}.',
        html: (
            <BoxWindow
                id=""
                class="box-example-4"
                dark={true}
                buttonsDirection={'right'}
                triangle={true}
                headerWidth={150}
                triangleBackgroundColor={'rgba(250, 250, 250, 1)'}
                headerBackgroundColor={'rgb(0,0,0)'}
                boxTitle={
                    <p>
                        Box 4 title
                </p>
                }
                boxContent={
                    <p>
                        Box content
                </p>
                }
                displayContent={false}
                minimizeButtonAttr={{
                    title: 'Click to minimze this window'
                }}
                maximizeButtonAttr={{
                    title: 'Click to maximize this window'
                }}
                closeButtonAttr={{
                    title: 'Click to close this window'
                }}
                performance={true}
            />
        ),
        cssCode: (
`.box-example-4{
    max-width: 500px;
    margin:0 auto;

    .react-divcreator__content--title,
    .react-divcreator__content--content{
        p{
            color:rgb(255,255,255);
        }
    }
}`
        ),
        reactCode: (
`import { BoxWindow } from 'react-divcreator';

<BoxWindow
    id=""
    class="box-example-4"
    dark={true}
    buttonsDirection={'right'}
    triangle={true}
    headerWidth={150}
    triangleBackgroundColor={'rgba(245, 245, 245, 0.4'}
    headerBackgroundColor={'rgb(0,0,0)'}
    boxTitle={
        <p>
            Box 4 title
    </p>
    }
    boxContent={
        <p>
            Box content
    </p>
    }
    displayContent={false}
    minimizeButtonAttr={{
        title: 'Click to minimze this window'
    }}
    maximizeButtonAttr={{
        title: 'Click to maximize this window'
    }}
    closeButtonAttr={{
        title: 'Click to close this window'
    }}
    performance={true}
/>`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Box example with an slider inside the boxContent and animation={true} - its mean if the user click the maximize button, then the toggling content are animated.',
        html: (
            <BoxWindow
                id=""
                class="box-example-1-animated"
                dark={true}
                buttonsDirection={'left'}
                boxTitle={
                    <p>
                        Box 1 title
                    </p>
                }
                animation={true}
                boxContent={
                    <Slider
                        id=''
                        class='slider-example-1-interaction'
                        end={true}
                        slideTime={1000}
                        dots={true}
                        // Move the slide with the mouse
                        moveSlider={true}
                        moveSliderRight={25} // %
                        moveSliderLeft={25} // %
                        performance={true}
                        data={[
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            },
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            },
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            },
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            },
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            },
                            {
                                src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                                backgroundOptions: {
                                    backgroundSize: 'cover'
                                }
                            }
                        ]}
                    />
                }
                displayContent={false}
                minimizeCallback={consoleLog}
                minimizeCallbackData={'minimizeButton'}
                minimizeButtonAttr={{
                    title: 'Click to minimze this window'
                }}
                minimizeButtonData={false}
                maximizeCallback={consoleLog}
                maximizeCallbackData={'maximizeButton'}
                maximizeButtonAttr={{
                    title: 'Click to maximize this window'
                }}
                maximizeButtonData={false}
                closeCallback={consoleLog}
                closeCallbackData={'closeButton'}
                closeButtonAttr={{
                    title: 'Click to close this window'
                }}
                closeButtonData={false}
                performance={true}
            />
        ),
        cssCode: (
`.box-example-1-animated{
    max-width: 1400px;
    margin:0 auto;

    .react-divcreator__content--title,
    .react-divcreator__content--content{
        p{
            box-sizing: border-box;
            padding:20px 0;
            color:rgb(255,255,255);
            font-size: 1.2rem;
        }
    }
}`
        ),
        reactCode: (
`import { BoxWindow } from 'react-divcreator';

<BoxWindow
    id=""
    class="box-example-1-animated"
    dark={true}
    buttonsDirection={'left'}
    boxTitle={
        <p>
            Click the maximize button to see the slider
        </p>
    }
    animation={true}
    boxContent={
        <Slider
            id=''
            class='slider-example-1-interaction'
            end={true}
            slideTime={1000}
            dots={true}
            // Move the slide with the mouse
            moveSlider={true}
            moveSliderRight={25} // %
            moveSliderLeft={25} // %
            performance={true}
            data={[
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                },
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                },
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                },
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                },
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                },
                {
                    src: '/src/static/images/color-theory-1176406-1920x1280-2.jpg',
                    backgroundOptions: {
                        backgroundSize: 'cover'
                    }
                }
            ]}
        />
    }
    displayContent={false}
    minimizeCallback={false}
    minimizeCallbackData={false}
    minimizeButtonAttr={{
        title: 'Click to minimze this window'
    }}
    minimizeButtonData={false}
    maximizeCallback={false}
    maximizeCallbackData={false}
    maximizeButtonAttr={{
        title: 'Click to maximize this window'
    }}
    maximizeButtonData={false}
    closeCallback={false}
    closeCallbackData={false}
    closeButtonAttr={{
        title: 'Click to close this window'
    }}
    closeButtonData={false}
    performance={true}
/>
`
        ),
        jsCode: ''
    }
];

const boxwindowKeys = [
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
        key: 'dark',
        description: "Boolean - If true then the root element becomes the classname 'dark' and default dark configuration. If false or the key are not provided then an 'light' style attached to the window as style."
    },
    {
        key: 'buttonsDirection',
        description: "String - Direction of the function buttons (minimize, maximize, close). Available directions are: 'left' and 'right'."
    },
    {
        key: 'triangleBackgroundColor',
        description: 'Set triangles background color.',
        type: 'String'
    },    
    {
        key: 'headerBackgroundColor',
        description: 'Set the headers background color.',
        type: 'String'
    },
    {
        key: 'contentBackgroundColor',
        description: 'Set the contents background color.',
        type: 'String'
    },
    {
        key: 'triangleWH',
        description: 'Specify the width and height of the triangle. Default value: 40px.',
        type: 'Number'
    },
    {
        key: 'animation',
        description: 'Boolean - If true then if the user click the maximize button, then the content are opened width animation.'
    },
    {
        key: 'boxTitle',
        description: "String - Title of the box."
    },
    {
        key: 'boxContent',
        description: "String - Content of the box."
    },
    {
        key: 'displayContent',
        description: "Boolean - Display the content while first time rendering or not."
    },
    {
        key: 'minimizeCallback',
        description: "Function - Developer custom callback function if the minimize button has been clicked."
    },
    {
        key: 'minimizeCallbackData',
        description: "Mixed - Custom developers data passed as last argument to the minimizeCallback."
    },
    {
        key: 'minimizeButtonAttr',
        description: "Object - Custom attributes attached to the minimize button."
    },
    {
        key: 'minimizeButtonData',
        description: "JSX - Custom JSX attached into the minimize button."
    },
    {
        key: 'maximizeCallback',
        description: "Function - Developer custom callback function if the maximize button has been clicked."
    },
    {
        key: 'maximizeCallbackData',
        description: "Mixed - Custom developers data passed as last argument to the maximizeCallback."
    },
    {
        key: 'maximizeButtonAttr',
        description: "Object - Custom attributes attached to the maximize button."
    },
    {
        key: 'maximizeButtonData',
        description: "JSX - Custom JSX attached into the maximize button."
    },
    {
        key: 'closeCallback',
        description: "Function - Developer custom callback function if the close button has been clicked."
    },
    {
        key: 'closeCallbackData',
        description: "Mixed - Custom developers data passed as last argument to the closeCallback."
    },
    {
        key: 'closeButtonAttr',
        description: "Object - Custom attributes attached to the close button."
    },
    {
        key: 'closeButtonData',
        description: "JSX - Custom JSX attached into the close button."
    }
]

export {
    boxwindowData,
    boxwindowKeys
};

