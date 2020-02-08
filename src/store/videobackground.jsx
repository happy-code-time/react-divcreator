import React from 'react';

import { Videobackground } from '../../module/build/react-divcreator';

const videobackgroundData = [
    {
        class: 'videobackground-example-1',
        description: 'Example with video and custom JSX in front of the video. The Videobackground component has an "resize" listener.',
        html: (
            <Videobackground
                id=""
                class="my-video-example"
                src="/./src/static/videos/coffee.mp4"
                autoplay={true}
                muted={true}
                loop={true}
                controls={true}
                type='video/mp4'
                errorMessage={"Sorry, your browser doesn't support embedded videos."}
                data={(
                    <p>
                        Cool! it's coffee time again...
                    </p>
                )}
                setAsBackground={false}
            />
        ),
        cssCode: (
`.my-video-example{
    max-width:500px;
    margin:0 auto;
    height:auto;
    border-radius:5px;

    .react-divcreator-videobackground--div-child{
        z-index:11;
    }

    p{
        text-align:center;
        color:rgb(255,255,255);
        line-height:40vH;
        font-size: 2rem;
    }
}`
        ),
        reactCode: (
`import { Videobackground } from 'react-divcreator';


<Videobackground
    id=""
    class="my-video-example"
    src="/./src/static/videos/coffee.mp4"
    autoplay={true}
    muted={true}
    loop={true}
    controls={true}
    type='video/mp4'
    setAsBackground={false}
    data={(
        <p>
            Cool! it's coffee time again...
        </p>
    )}
/>`
        ),
        jsCode: ''
    },
    {
        class: 'videobackground-example-2',
        description: 'Example with video width and height of 100% as default (of the surrounding parent div element).',
        html: (
            <Videobackground
                id=""
                class="my-video-example-2"
                src="/./src/static/videos/earth.mp4"
                autoplay={true}
                muted={true}
                loop={true}
                controls={true}
                type='video/mp4'
                data={('')}
                setAsBackground={false}
            />
        ),
        cssCode: (
`.my-video-example-2{
    border-radius:10px;
}`
        ),
        reactCode: (
`import { Videobackground } from 'react-divcreator';

<Videobackground
    id=""
    class="my-video-example-2"
    src="/./src/static/videos/earth.mp4"
    autoplay={true}
    muted={true}
    loop={true}
    controls={true}
    type='video/mp4'
    data={('')}
    setAsBackground={false}
/>`
        ),
        jsCode: ''
    }
];

const videobackgroundKeys = [
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
        key: 'src',
        description: 'String - the video source path.'
    },
    {
        key: 'autoplay',
        description: 'Boolean - video attribute: autoplay.'
    },
    {
        key: 'muted',
        description: 'Boolean - video attribute: muted.'
    },
    {
        key: 'loop',
        description: 'Boolean - video attribute: loop.'
    },
    {
        key: 'controls',
        description: 'Boolean - video attribute: controls.'
    },
    {
        key: 'type',
        description: 'String - source type (video type format). Default video/mp4.'
    },
    {
        key: 'data',
        description: 'Object - Custom developers JSX data, to display in front of the video.'
    },
    {
        key: 'setAsBackground',
        description: 'Boolean - set the video as whole background.'
    }
]

export {
    videobackgroundData,
    videobackgroundKeys
};

