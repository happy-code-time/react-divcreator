import React from 'react';

import { Divtriangle, Stars } from '../../module/build/react-divcreator';

const saveData = (event, starCount, readOnly, customData = "") => {
    console.clear();
    console.info(starCount, customData);
}

const starsData = [
    {
        class: 'stars-example-1',
        description: 'Example with single entry of stars, direction on hover to fill stars from right to left site, interactive and without data in each star. If the user click on the star, then the function  "saveData" will be called. In the custom function "saveData" you are able to store data from the event. Arguments there are passed to the function explained in the "Available keys" section. The numbers/ state of stars are stored temporary, after reloading the webpage, the state will be reseted to the options passed to the type Stars.',
        html: (
            <Stars
                id=''
                class='stars'
                function={saveData}
                functionData={["a"]}
                direction='right'
                performance={true}
                data={
                    [
                        {
                            customHTML: 'Rate now: ',
                            site : 'left',
                            count: 5,
                            filled: 0,
                            dataEachStar : [],
                            readOnly: false
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.stars{
    width: 250px;
    height: auto;
    overflow: auto;
    padding: 20px 0;
    margin:0 auto;

    .react-divcreator-stars-ul-li-text{
        line-height:20px;
        font-size:1em;
        padding:0 10px;
        color:rgb(69,69,69);
    }
    .react-divcreator-stars-single-stars-span{
        transform: scale(0.9);
        box-sizing: border-box;
        padding: 0 16px;
        margin-left: -10px;
        color:gold;
    }
    /*
        Change color of star after hover 
        direction: LEFT
    */
    .read-only-mode-off-not-filled:hover:before,
    .read-only-mode-off-not-filled:hover,
    .read-only-mode-off-filled:hover,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
        color:gold;
    }
}`
        ),
        reactCode: (
`import { Stars } from 'react-divcreator';

<Stars
    id=''
    class='stars'
    function={saveData}
    functionData={["a"]}
    direction='left'
    performance={true}
    data={
        [
            {
                customHTML: 'Rate now: ',
                site : 'left',
                count: 5,
                filled: 0,
                dataEachStar : [],
                readOnly: false
            }
        ]
    }
/>`
        ),
        jsCode: (
`const saveData = (event, starCount, readOnly, customData = "") => {
    console.info(starCount, customData);
}`
        )
    },
    {
        class: 'stars-example-2',
        description: 'Example with two entry´s of stars, direction on hover to fill stars from right to left site, interactive and without data in each star.',
        html: (
            <Stars
                id=''
                class='stars'
                function={saveData}
                functionData={["a"]}
                direction='right'
                performance={true}
                data={
                    [
                        {
                            customHTML: 'Rate movie 1: ',
                            site : 'right',
                            count: 5,
                            filled: 0,
                            dataEachStar : [],
                            readOnly: false
                        },
                        {
                            customHTML: 'Rate movie 2: ',
                            site : 'right',
                            count: 5,
                            filled: 0,
                            dataEachStar : [],
                            readOnly: false
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.stars{
    width: 250px;
    height: auto;
    overflow: auto;
    padding: 20px 0;
    margin:0 auto;

    .react-divcreator-stars-ul-li-text{
        line-height:20px;
        font-size:1em;
        padding:0 10px;
        color:rgb(69,69,69);
    }
    .react-divcreator-stars-single-stars-span{
        transform: scale(0.9);
        box-sizing: border-box;
        padding: 0 16px;
        margin-left: -10px;
        color:goldenrod;
    }
    /*
        Change color of star after hover 
        direction: RIGHT
    */
    .read-only-mode-off-not-filled:hover:before,
    .read-only-mode-off-not-filled:hover,
    .read-only-mode-off-filled:hover,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
        color:goldenrod;
    }
}`
        ),
        reactCode: (
`import { Stars } from 'react-divcreator';

<Stars
    id=''
    class='stars'
    function={saveData}
    functionData={["a"]}
    direction='right'
    performance={true}
    data={
        [
            {
                customHTML: 'Rate now: ',
                site : 'left',
                count: 5,
                filled: 0,
                dataEachStar : [],
                readOnly: false
            }
        ]
    }
/>`
        ),
        jsCode: (
`const saveData = (event, starCount, readOnly, customData = "") => {
    console.info(starCount, customData);
}`
        )
    },
    {
        class: 'stars-example-3',
        description: 'Example with two entry´s of stars, direction on hover to fill stars from left to right site, interactive and without data in each star.',
        html: (
            <Stars
                id=''
                class='stars'
                function={saveData}
                functionData={["a"]}
                direction='left'
                performance={true}
                data={
                    [
                        {
                            customHTML: 'Rate movie 1: ',
                            site : 'right',
                            count: 5,
                            filled: 0,
                            dataEachStar : [],
                            readOnly: false
                        },
                        {
                            customHTML: 'Rate movie 2: ',
                            site : 'right',
                            count: 5,
                            filled: 0,
                            dataEachStar : [],
                            readOnly: false
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.stars{
    width: 250px;
    height: auto;
    overflow: auto;
    overflow-x:hidden;
    padding: 20px 10px 20px 0;
    margin:0 auto;

    .react-divcreator-stars-ul-li-text{
        line-height:20px;
        font-size:1em;
        padding:0 10px;
        color:rgb(69,69,69);
    }
    .react-divcreator-stars-single-stars-span{
        transform: scale(0.9);
        box-sizing: border-box;
        padding: 0 16px;
        margin-left: -10px;
        color:goldenrod;
    }
    /*
        Change color of star after hover 
        direction: RIGHT
    */
    .read-only-mode-off-not-filled:hover:before,
    .read-only-mode-off-not-filled:hover,
    .read-only-mode-off-filled:hover,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
        color:goldenrod;
    }
}`
        ),
        reactCode: (
`import { Stars } from 'react-divcreator';

<Stars
    id=''
    class='stars'
    function={saveData}
    functionData={["a"]}
    direction='left'
    performance={true}
    data={
        [
            {
                customHTML: 'Rate movie 1: ',
                site : 'right',
                count: 5,
                filled: 0,
                dataEachStar : [],
                readOnly: false
            },
            {
                customHTML: 'Rate movie 2: ',
                site : 'right',
                count: 5,
                filled: 0,
                dataEachStar : [],
                readOnly: false
            }
        ]
    }
/>`
        ),
        jsCode: (
`const saveData = (event, starCount, readOnly, customData = "") => {
    console.info(starCount, customData);
}`
        )
    },
    {
        class: 'stars-example-4',
        description: 'Example with multiple entry´s of stars, direction on hover to fill stars from left to right site, readonly and without data in each star.',
        html: (
            <Stars
                id=''
                class='stars'
                function={saveData}
                functionData={["a"]}
                direction='left'
                performance={true}
                data={
                    [
                        {
                            customHTML: 'PHP 7.0',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'Javascript',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'Symfony',
                            site : 'right',
                            count: 5,
                            filled: 3,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'React',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'CSS',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'NodeJs',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'SCSS',
                            site : 'right',
                            count: 5,
                            filled: 2,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'Typescript',
                            site : 'right',
                            count: 5,
                            filled: 3,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'GIT',
                            site : 'right',
                            count: 5,
                            filled: 3,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'Docker',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'ES6',
                            site : 'right',
                            count: 5,
                            filled: 4,
                            dataEachStar : [],
                            readOnly: true
                        },
                        {
                            customHTML: 'Webpack',
                            site : 'right',
                            count: 5,
                            filled: 3,
                            dataEachStar : [],
                            readOnly: true
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.stars{
    min-width:300px;
    width:50%;
    height: auto;
    overflow: auto;
    overflow-x:hidden;
    padding: 20px 10px 20px 0;
    margin:0 auto;
    clear:both;
    transition-duration: 300ms;

    .react-divcreator-stars-ul{
        width:100%;
        padding:0;
        margin:0;

        .react-divcreator-stars-ul-li{
            float:none;
            max-width:100%;
            padding:15px 2.5%;
            clear:none;
            height:20px;
            border-bottom:1px solid rgba(69,69,69,.1);
            transition-duration: 300ms;
        }
        .react-divcreator-stars-ul-li:nth-child(even){
            padding-left:calc(2.5% - 1px);
            border-left:1px solid transparent;
        }
        .react-divcreator-stars-ul-li-stars{
            margin-right:10%;
            transition-duration: 300ms;
        }
    }

    .react-divcreator-stars-ul-li-text{
        line-height:20px;
        font-size:1em;
        padding:0 10px;
        color:rgb(69,69,69);
        margin-left: 0;
    }
    .react-divcreator-stars-single-stars-span{
        transform: scale(0.8);
        box-sizing: border-box;
        padding: 0 16px;
        color:gold;
    }
}
@media screen and (min-width:740px){
    .stars-example-4{
        .stars{
            width:500px;
            padding: 20px 10px 20px 0;
            clear:both;
            
            .react-divcreator-stars-ul{
    
                .react-divcreator-stars-ul-li{
                    float:left;
                    max-width:45%;
                    padding:0;
                    padding:10px 2.5%;
                    clear:none;
                    height:20px;
                    border-bottom:1px solid transparent;
                }
                .react-divcreator-stars-ul-li:nth-child(even){
                    padding-left:calc(2.5% - 1px);
                    border-left:1px solid rgba(69,69,69,.1);
                }
                .react-divcreator-stars-ul-li-stars{
                    margin-right:10px;
                }
            }
            .react-divcreator-stars-ul-li-text{
                margin-left:10px;
            }
            .react-divcreator-stars-single-stars-span{
                margin-left: -10px;
            }
        }
    }
}`
        ),
        reactCode: (
`import { Stars } from 'react-divcreator';

<Stars
    id=''
    class='stars'
    function={saveData}
    functionData={["a"]}
    direction='left'
    performance={true}
    data={
        [
            {
                customHTML: 'PHP 7.0',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'Javascript',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'Symfony',
                site : 'right',
                count: 5,
                filled: 3,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'React',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'CSS',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'NodeJs',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'SCSS',
                site : 'right',
                count: 5,
                filled: 2,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'Typescript',
                site : 'right',
                count: 5,
                filled: 3,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'GIT',
                site : 'right',
                count: 5,
                filled: 3,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'Docker',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'ES6',
                site : 'right',
                count: 5,
                filled: 4,
                dataEachStar : [],
                readOnly: true
            },
            {
                customHTML: 'Webpack',
                site : 'right',
                count: 5,
                filled: 3,
                dataEachStar : [],
                readOnly: true
            }
        ]
    }
/>`
        ),
        jsCode: ''
    },
    {
        class: 'stars-example-5',
        description: 'Example with data in each star and multiple entry´s of stars, direction on hover to fill stars from left to right site and readonly.',
        html: (
            <Stars
                id=''
                class='stars'
                function={saveData}
                functionData={["a"]}
                direction='left'
                performance={true}
                data={
                    [
                        {
                            customHTML: 'Javascript',
                            site : 'right',
                            count: 5,
                            filled: 5,
                            dataEachStar : [
                                (
                                    <Divtriangle 
                                        class="text"
                                        id=""
                                        html={(<p>Javsscript custom data 1</p>)}
                                        custom={true}
                                        direction='down'
                                        customDir='left'
                                        customTopBottom={0}
                                        customLeft={62.5}
                                        customRight={0}        
                                        customWidthHeight={15}
                                        customDifference={1}
                                        customColorBorder="white"
                                        customColor="goldenrod"
                                    />
                                ),
                                (
                                    <Divtriangle 
                                        class="text"
                                        id=""
                                        html={(<p>Javsscript custom data 2</p>)}
                                        custom={true}
                                        direction='down'
                                        customDir='left'
                                        customTopBottom={0}
                                        customLeft={62.5}
                                        customRight={0}        
                                        customWidthHeight={15}
                                        customDifference={1}
                                        customColorBorder="white"
                                        customColor="goldenrod"
                                    />
                                ),
                                (
                                    <Divtriangle 
                                        class="text"
                                        id=""
                                        html={(<p>Javsscript custom data 3</p>)}
                                        custom={true}
                                        direction='down'
                                        customDir='left'
                                        customTopBottom={0}
                                        customLeft={62.5}
                                        customRight={0}        
                                        customWidthHeight={15}
                                        customDifference={1}
                                        customColorBorder="white"
                                        customColor="goldenrod"
                                    />
                                ),
                                (
                                    <Divtriangle 
                                        class="text"
                                        id=""
                                        html={(<p>Javsscript custom data 4</p>)}
                                        custom={true}
                                        direction='down'
                                        customDir='left'
                                        customTopBottom={0}
                                        customLeft={62.5}
                                        customRight={0}        
                                        customWidthHeight={15}
                                        customDifference={1}
                                        customColorBorder="white"
                                        customColor="goldenrod"
                                    />
                                ),
                                (
                                    <Divtriangle 
                                        class="text"
                                        id=""
                                        html={(<p>Javsscript custom data 5</p>)}
                                        custom={true}
                                        direction='down'
                                        customDir='left'
                                        customTopBottom={0}
                                        customLeft={62.5}
                                        customRight={0}        
                                        customWidthHeight={15}
                                        customDifference={1}
                                        customColorBorder="white"
                                        customColor="goldenrod"
                                    />
                                )
                            ],
                            readOnly: true
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.stars{
    width: 300px;
    height: auto;
    overflow: visible;
    padding: 20px 10px 20px 0;
    margin:0 auto;
    min-height:30px;

    .react-divcreator-stars-ul-li-text{
        line-height:20px;
        font-size:1em;
        padding:0 10px;
        color:rgb(69,69,69);
    }
    .react-divcreator-stars-single-stars-span{
        transform: scale(0.9);
        box-sizing: border-box;
        padding: 0 16px;
        margin-left: -5px;
        color:gold;
    }
    /*
        Change color of star after hover 
        direction: RIGHT
    */
    .read-only-mode-off-not-filled:hover:before,
    .read-only-mode-off-not-filled:hover,
    .read-only-mode-off-filled:hover,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
    .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
    .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
        color:gold;
    }
    .react-divcreator-stars-single-stars-span{
        position: relative;

        .text{
            position: absolute;
            top:-180px;
            left:-75px;
            width:150px;
            min-height:100px;
            line-height:30px;
            text-align:center;
            display:none;
            height:auto;
            padding:9px 20px;
            background:rgb(255,255,255);
            border:1px solid goldenrod;
        }
    }
    .react-divcreator-stars-single-stars-span:hover{
        .text{
            display:block;
        }   
    }
}`
        ),
        reactCode: (
`import { Divtriangle, Stars } from 'react-divcreator';

<Stars
    id=''
    class='stars'
    function={saveData}
    functionData={["a"]}
    direction='left'
    performance={true}
    data={
        [
            {
                customHTML: 'Javascript',
                site : 'right',
                count: 5,
                filled: 5,
                dataEachStar : [
                    (
                        <Divtriangle 
                            class="text"
                            id=""
                            html={(<p>Javascript custom data 1</p>)}
                            custom={true}
                            direction='down'
                            customDir='left'
                            customTopBottom={0}
                            customLeft={62.5}
                            customRight={0}        
                            customWidthHeight={15}
                            customDifference={1}
                            customColorBorder="white"
                            customColor="goldenrod"
                        />
                    ),
                    (
                        <Divtriangle 
                            class="text"
                            id=""
                            html={(<p>Javascript custom data 2</p>)}
                            custom={true}
                            direction='down'
                            customDir='left'
                            customTopBottom={0}
                            customLeft={62.5}
                            customRight={0}        
                            customWidthHeight={15}
                            customDifference={1}
                            customColorBorder="white"
                            customColor="goldenrod"
                        />
                    ),
                    (
                        <Divtriangle 
                            class="text"
                            id=""
                            html={(<p>Javascript custom data 3</p>)}
                            custom={true}
                            direction='down'
                            customDir='left'
                            customTopBottom={0}
                            customLeft={62.5}
                            customRight={0}        
                            customWidthHeight={15}
                            customDifference={1}
                            customColorBorder="white"
                            customColor="goldenrod"
                        />
                    ),
                    (
                        <Divtriangle 
                            class="text"
                            id=""
                            html={(<p>Javascript custom data 4</p>)}
                            custom={true}
                            direction='down'
                            customDir='left'
                            customTopBottom={0}
                            customLeft={62.5}
                            customRight={0}        
                            customWidthHeight={15}
                            customDifference={1}
                            customColorBorder="white"
                            customColor="goldenrod"
                        />
                    ),
                    (
                        <Divtriangle 
                            class="text"
                            id=""
                            html={(<p>Javascript custom data 5</p>)}
                            custom={true}
                            direction='down'
                            customDir='left'
                            customTopBottom={0}
                            customLeft={62.5}
                            customRight={0}        
                            customWidthHeight={15}
                            customDifference={1}
                            customColorBorder="white"
                            customColor="goldenrod"
                        />
                    )
                ],
                readOnly: true
            }
        ]
    }
/>`
        ),
        jsCode: ''
    }
];

const starsKeys = [
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
        key: 'function',
        description: 'Function - Your custom tracking function. 1 argument: click event, 2 argument: current star that has been clicked, 3 argument: Stars mode.'
    },
    {
        key: 'functionData',
        description: 'Mixed - Custom data passed as 4 argument to the key "function".'
    },
    {
        key: 'direction',
        description: 'String - Direction of filling the stars with color. Available options: "left", "right".'
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.customHTML',
        description: 'JSX - Developers custom html.'
    },
    {
        key: 'data.site',
        description: 'String - In with direction should be the star aligned. Available directions: "left", "right".'
    },
    {
        key: 'data.count',
        description: 'Numeric - How many star should be generated.'
    },
    {
        key: 'data.filled',
        description: 'Numeric - How many of the generated stars shozld be filled.'
    },
    {
        key: 'data.dataEachStar',
        description: 'JSX Array - Array of user custom data. Pass data into the html for each single star.'
    },
    {
        key: 'data.readOnly',
        description: 'Boolean - Should be the star clickable or just readonly, like example 4.'
    }
]

export {
    starsData,
    starsKeys
};

