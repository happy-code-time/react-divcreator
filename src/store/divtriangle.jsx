import React from 'react';

import { Divtriangle } from '../../module/build/react-divcreator';

const divtriangleData = [
    {
        class: 'divtriangle-example-1',
        description: 'Example with direction: "all".',
        html: (
            <Divtriangle 
                direction='all'
                class="divtriangle-custom-class border-3 border-r"
                id="divtriangle-1"
                customColor='red'
                performance={true}
                border={true}
                html={
                    (
                        <p>direction: all</p>
                    )
                }
            />
        ),
        cssCode: (
            `
.divtriangle-custom-class{
    width:200px;
    max-height:100px;
}
.divtriangle-custom-class p{
    line-height:100px;
    text-align:center;
    font-size:15px;
}
.border-3{
    border:3px solid rgba(69,69,69,.2);
}
.border-r{
    border-radius:5px;
}
// custom style here
#divtriangle-1{
    margin: 20px auto;
    
    .react-divcreator-divtriangle-direction-up:before,
    .react-divcreator-divtriangle-direction-down:before,
    .react-divcreator-divtriangle-direction-left:before,
    .react-divcreator-divtriangle-direction-right:before {
        border-color: transparent transparent rgba(69,69,69,.69);
    }
    .react-divcreator-divtriangle-direction-up:after,
    .react-divcreator-divtriangle-direction-down:after,
    .react-divcreator-divtriangle-direction-left:after,
    .react-divcreator-divtriangle-direction-right:after {
        border-color: transparent transparent #f5f5f5;
    }
}`
        ),
        reactCode: (
            `import { Divtriangle } from 'react-divcreator';
    
<Divtriangle 
    direction='all'
    class="divtriangle-custom-class border-3 border-r"
    id="divtriangle-1"
    performance={true}
    border={true}
    html={
        (
            <p>direction: all</p>
        )
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'divtriangle-example-2',
        description: 'Example with direction: up.',
        html: (
            <Divtriangle 
                direction='up' 
                class="divtriangle-custom-class"
                id="divtriangle-2"
                performance={true}
                border={true}
                html={
                    (
                        <p>direction: up</p>
                    )
                }
            />
        ),
        cssCode: (
            `
.divtriangle-custom-class{
    width:200px;
    max-height:100px;
}
.divtriangle-custom-class p{
    line-height:100px;
    text-align:center;
    font-size:15px;
}
// custom style here
#divtriangle-2{
    margin: 20px auto;
    
    .react-divcreator-divtriangle-direction-up:before,
    .react-divcreator-divtriangle-direction-down:before,
    .react-divcreator-divtriangle-direction-left:before,
    .react-divcreator-divtriangle-direction-right:before {
        border-color: transparent transparent rgba(69,69,69,.69);
    }
    .react-divcreator-divtriangle-direction-up:after,
    .react-divcreator-divtriangle-direction-down:after,
    .react-divcreator-divtriangle-direction-left:after,
    .react-divcreator-divtriangle-direction-right:after {
        border-color: transparent transparent #f5f5f5;
    }
}`
        ),
        reactCode: (
            `import { Divtriangle } from 'react-divcreator';
    
<Divtriangle 
    direction='up' 
    class="divtriangle-custom-class"
    id="divtriangle-1"
    performance={true}
    border={true}
    html={
        (
            <p>direction: up</p>
        )
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'divtriangle-example-3',
        description: 'Example with custom direction: left and moved up with custom px value, without border but with custom border color and background color (of the triangle).',
        html: (
            <Divtriangle 
                class="divtriangle-custom-class background-red"
                id=""
                html={(<p>custom data</p>)}
                performance={true}
                border={false}
                custom={true}
                direction='left'
                customDir='up'
                customTopBottom={15}
                customLeft={0}
                customRight={0}        
                customWidthHeight={20}
                customDifference={1}
                customColorBorder="#F44559"
                customColor="dodgerblue"
            />
        ),
        cssCode: (
            `
.divtriangle-custom-class{
    width:200px;
    max-height:100px;
}
.divtriangle-custom-class p{
    line-height:100px;
    text-align:center;
    font-size:15px;
}
.background-red{
    background-color:#F44559;
}`
        ),
        reactCode: (
            `import { Divtriangle } from 'react-divcreator';
    
<Divtriangle 
    class="divtriangle-custom-class background-red"
    id=""
    html={(<p>custom data</p>)}
    performance={true}
    border={false}
    custom={true}
    direction='left'
    customDir='up'
    customTopBottom={15}
    customLeft={0}
    customRight={0}        
    customWidthHeight={20}
    customDifference={1}
    customColorBorder="#F44559"
    customColor="dodgerblue"
/>`
        ),
        jsCode: ''
    },
    {
        class: 'divtriangle-example-4',
        description: 'Example with custom direction: up and moved right with custom px value.',
        html: (
            <Divtriangle 
                class="divtriangle-custom-class border-r"
                id=""
                html={(<p>custom data</p>)}
                performance={true}
                custom={true}
                border={true}
                direction='up'
                customDir='right'
                customTopBottom={0}
                customLeft={0}
                customRight={30}        
                customWidthHeight={20}
                customDifference={1}
                customColorBorder="#f5f5f5"
                customColor="rgba(69, 69, 69, 0.2)"
            />
        ),
        cssCode: (
            `
.divtriangle-custom-class{
    width:200px;
    max-height:100px;
}
.divtriangle-custom-class p{
    line-height:100px;
    text-align:center;
    font-size:15px;
}
.border-r{
    border-radius:5px;
}`
        ),
        reactCode: (
            `import { Divtriangle } from 'react-divcreator';
            
<Divtriangle 
    class="divtriangle-custom-class border-r"
    id=""
    html={(<p>custom data</p>)}
    performance={true}
    custom={true}
    border={true}
    direction='up'
    customDir='right'
    customTopBottom={0}
    customLeft={0}
    customRight={30}        
    customWidthHeight={20}
    customDifference={1}
    customColorBorder="#f5f5f5"
    customColor="rgba(69, 69, 69, 0.2)"
/>`
        ),
        jsCode: ''
    }
];

const divtriangleKeys = [
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
        key: 'border',
        description: 'Boolean - If true then draw an border around the dashboard.'
    },
    {
        key: 'html',
        description: 'JSX - Custom html (JSX) data passed into the divtriangle.'
    },
    {
        key: 'custom',
        description: 'Boolean - Turn customisation on.'
    },
    {
        key: 'direction',
        description: 'String - Direction of the default direction.'
    },
    {
        key: 'customDir (up, down)',
        description: 'String - Second custom dir. Available values: up, down when direction is right or left'
    },
    {
        key: 'customDir (left, right)',
        description: 'String - Second custom dir. Available values: right, left when direction is up or down'
    },
    {
        key: 'customLeft',
        description: 'Numeric - If customDir is left, then move the triangle from the left site customLeft px.'
    },
    {
        key: 'customRight',
        description: 'Numeric - If customDir is right, then move the triangle from the left site customRight px.'
    },
    {
        key: 'customWidthHeight',
        description: 'Numeric - You can change the widht and height of the triangle.'
    },
    {
        key: 'customDifference',
        description: 'Numeric - Custom the thickness of the triangle border in px.'
    },
    {
        key: 'customColorBorder',
        description: 'String - Custom the border color of the triangle.'
    },
    {
        key: 'customColor',
        description: 'String - Custom the background color of the triangle.'
    }
]

export {
    divtriangleData,
    divtriangleKeys
};

