import React from 'react';

import { Image } from '../../module/build/react-divcreator';

const imageData = [
    {
        class: '',
        description: 'Example with the key onlyImage={true}.',
        html: (
            <Image
                class="custom-image-example-1"
                onlyImage={true}
                src="/src/static/images/birds.jpg"
                performance={true}
            />
        ),
        cssCode: (
            `
.custom-image-example-1{
    max-width: 500px;
    max-height:500px;
    margin:0 auto;
}`
        ),
        reactCode: (
`import { Image } from 'react-divcreator';

<Image
    class="custom-image-example-1"
    onlyImage={true}
    src="/src/static/images/birds.jpg"
    performance={true}
/>`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Example with onlyImage={false} and with custom data in front of the image.',
        html: (
            <Image
                class="custom-image-example-2"
                onlyImage={false}
                src="/src/static/images/birds.jpg"
                performance={true}
                data={
                    (
                        <span>
                            <h1 style={{ color: 'rgb(255,255,255)'}}>Two nice Birds</h1>
                        </span>
                    )
                }
            />
        ),
        cssCode: (
`.custom-image-example-2{
    max-width: 500px;
    max-height:500px;
    margin:0 auto;

    .react-divcreator-image-child__custom-data{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1{
            text-align: center;
            color:gold;
            font-size: 2rem;
        }
    }
}`
        ),
        reactCode: (
`import { Image } from 'react-divcreator';
            
<Image
    class="custom-image-example-2"
    onlyImage={false}
    src="/src/static/images/birds.jpg"
    performance={true}
    data={
        (
            <span>
                <h1 style={{ color: 'rgb(255,255,255)'}}>
                    Two nice Birds
                </h1>
            </span>
        )
    }
/>`
        ),
        jsCode: ''
    }
];

const imageKeys = [
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
        key: 'fullScreen',
        description: 'Boolean - Should set the image as fullscreen background or not.'
    },
    {
        key: 'onlyImage',
        description: 'Boolean - If no data should be passed int to the images div, then set it to false, otherwise to true.'
    },
    {
        key: 'src',
        description: 'String - Source path of you image.'
    },
    {
        key: 'data',
        description: 'JSX - Custom user data.'
    }
]

export {
    imageData,
    imageKeys
};

