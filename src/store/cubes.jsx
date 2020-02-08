import React from 'react';

import { Cube } from '../../module/build/react-divcreator';

const cubesData = [
    {
        class: 'cube-exammple-1',
        description: 'Example with 1 cube - with mouse move event. You have to add JS script jquery-mouse-direction-plugin ( https://hasin.me/2011/12/20/jquery-mouse-direction-plugin/ ) in the head section of your html file and add the jQery library into the head section of your html file. The mouse move plugin needs the Jquery Object.',
        html: (
            <Cube
                dobule={false}
                id=""
                class="my-rect-1"
                listenOn=".react-divcreator-cube"
                startX={-35}
                startY={-40}
                speedUp={2}
                speedUpLeft={2}
                speedUpRight={3}
                speedLeft={5}
                speedRight={2}
                speedDown={1}
                speedDownLeft={1}
                speedDownRight={1}
                animationY={false}
                animationYtime={50}
                animationYvalue={1}
                animationX={false}
                animationXtime={50}
                animationXvalue={1}
                destroyScale={2.5}
                translate={50}
                performance={true}
                data=
                {
                    [
                        (<p>Nodejs <br /> Docker</p>),
                        (<p>PHP <br /> Symfony</p>),
                        (<p>Javascript <br /> Jquery</p>),
                        (<p>CSS <br /> SCSS</p>),
                        (<p>React <br /> Redux</p>),
                        (<p>Deployment <br /> Git</p>)
                    ]
                }
            />
        ),
        reactCode: (
            `import { Cube } from 'react-divcreator';
    
<Cube
    dobule={false}
    id=""
    class="my-rect-1"
    listenOn=".react-divcreator-cube"
    startX={-35}
    startY={-40}
    speedUp={2}
    speedUpLeft={2}
    speedUpRight={3}
    speedLeft={5}
    speedRight={2}
    speedDown={1}
    speedDownLeft={1}
    speedDownRight={1}
    animationY={false}
    animationYtime={50}
    animationYvalue={1}
    animationX={false}
    animationXtime={50}
    animationXvalue={1}
    destroyScale={2.5}
    translate={50}
    performance={true}
    data=
    {
        [
            (<p>Nodejs <br /> Docker</p>),
            (<p>PHP <br /> Symfony</p>),
            (<p>Javascript <br /> Jquery</p>),
            (<p>CSS <br /> SCSS</p>),
            (<p>React <br /> Redux</p>),
            (<p>Deployment <br /> Git</p>)
        ]
    }
/>`
        )
    },
    {
        class: 'cube-exammple-2',
        description: 'Example with 2 cubes - with mouse move event.',
        html: (
            <Cube
                dobule={true}
                id=""
                class="my-rect-2"
                listenOn=".my-rect-2"
                startX={-35}
                startY={-40}
                speedUp={2}
                speedUpLeft={2}
                speedUpRight={3}
                speedLeft={5}
                speedRight={2}
                speedDown={1}
                speedDownLeft={1}
                speedDownRight={1}
                animationY={false}
                animationYtime={50}
                animationYvalue={1}
                animationX={false}
                animationXtime={50}
                animationXvalue={1}
                destroyScale={2.5}
                translate={50}
                performance={true}
                data=
                {
                    [
                        (<p>Nodejs <br /> Docker</p>),
                        (<p>PHP <br /> Symfony</p>),
                        (<p>Javascript <br /> Jquery</p>),
                        (<p>CSS <br /> SCSS</p>),
                        (<p>React <br /> Redux</p>),
                        (<p>Deployment <br /> Git</p>),
                    ]
                }
                destroyScaleChild={1.3}
                destroyChild={true}
                translateChild={25}
                dataChild=
                {
                    [
                        (<p>1</p>),
                        (<p>2</p>),
                        (<p>3</p>),
                        (<p>4</p>),
                        (<p>5</p>),
                        (<p>6</p>)
                    ]
                }
            />
        ),
        reactCode: (
            `import { Cube } from 'react-divcreator';
    
<Cube
    dobule={true}
    id=""
    class="my-rect-2"
    listenOn=".my-rect-2"
    startX={-35}
    startY={-40}
    speedUp={2}
    speedUpLeft={2}
    speedUpRight={3}
    speedLeft={5}
    speedRight={2}
    speedDown={1}
    speedDownLeft={1}
    speedDownRight={1}
    animationY={false}
    animationYtime={50}
    animationYvalue={1}
    animationX={false}
    animationXtime={50}
    animationXvalue={1}
    destroyScale={2.5}
    translate={50}
    performance={true}
    data=
    {
        [
            (<p>Nodejs <br /> Docker</p>),
            (<p>PHP <br /> Symfony</p>),
            (<p>Javascript <br /> Jquery</p>),
            (<p>CSS <br /> SCSS</p>),
            (<p>React <br /> Redux</p>),
            (<p>Deployment <br /> Git</p>),
        ]
    }
    destroyScaleChild={1.3}
    destroyChild={true}
    translateChild={25}
    dataChild=
    {
        [
            (<p>1</p>),
            (<p>2</p>),
            (<p>3</p>),
            (<p>4</p>),
            (<p>5</p>),
            (<p>6</p>)
        ]
    }
/>
            `
        )
    }
];

const cubesKeys = [
    {
        key: 'id',
        description: 'String - Custom id of root element.'
    },
    {
        key: 'class',
        description: 'String - Custom classname of root element.'
    },
    {
        key: 'double',
        description: 'Boolean - Build one child cube inside the parent cube.'
    },
    {
        key: 'listenOn',
        description: 'String - Pass the class (with the "." prefix) or id (with the "#" prefix) for the mouse move listener.'
    },
    {
        key: 'startX',
        description: 'Numeric - Start position of the cube on the x-axis.'
    },
    {
        key: 'startY',
        description: 'Numeric - Start position of the cube on the y-axis.'
    },
    {
        key: 'speedUp',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: up.'
    },
    {
        key: 'speedUpLeft',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: up and left.'
    },
    {
        key: 'speedUpRight',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: up and right.'
    },
    {
        key: 'speedLeft',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: left.'
    },
    {
        key: 'speedRight',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: right.'
    },
    {
        key: 'speedDown',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: down.'
    },
    {
        key: 'speedDownLeft',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: down and left.'
    },
    {
        key: 'speedDownRight',
        description: 'Numeric - Rotate the cube if the mouse moves in thee direction: down and right.'
    },
    {
        key: 'data.data',
        description: 'JSX - Custom html (JSX) data.'
    },
    {
        key: 'animationY',
        description: 'Boolean - Animation on the y-axis, disable the mouse move functionality.'
    },
    {
        key: 'animationYtime',
        description: 'Numeric - Rotate the cube with interval with this time in ms.'
    },
    {
        key: 'animationYvalue',
        description: 'Numeric - Rotate the cube with this px value.'
    },
    {
        key: 'animationX',
        description: 'Boolean - Animation on the x-axis, disable the mouse move functionality.'
    },
    {
        key: 'animationXtime',
        description: 'Numeric - Rotate the cube with interval with this time in ms.'
    },
    {
        key: 'animationXvalue',
        description: 'Numeric - Rotate the cube with this px value.'
    },

    {
        key: 'destroyScale',
        description: 'Numeric - Destroy the cube with this scale value.'
    },
    {
        key: 'data',
        description: 'JSX Array - with max 6 entrys. Each entry in the array will be display in the wall of the cube. Keys and the direction are: 1 front, 2 back, 3 right, 4 left, 5 top, 6 bottom'
    }
]

export {
    cubesData,
    cubesKeys
};

