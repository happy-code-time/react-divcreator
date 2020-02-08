import React from 'react';

import { Buttons, Cards, MenuVerticalClick, Stars, Videobackground } from '../../module/build/react-divcreator';

const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};

const cardsData = [
    {
        class: '',
        description: 'Example with 3 Cards.',
        html: (
            <Cards
                id=''
                class='own-card-class'
                align={4}
                link={false}
                graph={true}
                break={4}
                performance={true}
                border={true}
                data=
                {
                    [
                        {
                            title: "The picture 1",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            alt: 'img',
                            data: (
                                <span>
                                    <Buttons
                                        link={false}
                                        class="buttons-example-1"
                                        data={
                                            [
                                                {
                                                    text: 'button 1',
                                                    status: 'success',
                                                    attributes: {
                                                        title: "Custom title button 1"
                                                    },
                                                    function: consoleLog,
                                                    functionData: "user clicked the 1 button: success",
                                                },
                                                {
                                                    text: 'button 2',
                                                    status: 'warning',
                                                    attributes: {
                                                        title: "Custom title button 2"
                                                    },
                                                    function: consoleLog,
                                                    functionData: "user clicked the 2 button: warning",
                                                }
                                            ]
                                        }
                                    />
                                </span>
                            ),
                            function: consoleLog,
                            functionData: "Card 1 clicked",
                            attributes: {
                                title: "Card title 1"
                            }
                        },
                        {
                            title: "The picture 2",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            function: consoleLog,
                            functionData: "Card 2 clicked",
                            attributes: {
                                title: "Card title 2"
                            },
                            data: (
                                <Stars
                                    id=''
                                    class='stars'
                                    function={consoleLog}
                                    functionData={["a"]}
                                    direction='left'
                                    data={
                                        [
                                            {
                                                customHTML: '',
                                                site: 'right',
                                                count: 1,
                                                filled: 0,
                                                dataEachStar: [],
                                                readOnly: false
                                            },
                                        ]
                                    }
                                />
                            )
                        },
                        {
                            title: "The picture 3",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            function: consoleLog,
                            functionData: "Card 3 clicked",
                            attributes: {
                                title: "Card title 3"
                            },
                            data: (
                                <span>
                                    <MenuVerticalClick
                                        id=""
                                        class=""
                                        link={true}
                                        data={
                                            [
                                                {
                                                    text: 'Pictures',
                                                    attributes: {
                                                        title: 'Click to open available pictures'
                                                    },
                                                    customData: (<i className="fas fa-chevron-down" />),
                                                    childs: [
                                                        {
                                                            text: 'Picture 1',
                                                            attributes: {
                                                                title: 'Navigate to The picture 1'
                                                            },
                                                            function: '',
                                                            functionData: ''
                                                        },
                                                        {
                                                            text: 'Picture 2',
                                                            attributes: {
                                                                title: 'Navigate to The picture 2'
                                                            }
                                                        }
                                                    ],
                                                }
                                            ]
                                        }
                                        site='left'
                                        animation={true}
                                        animationTime={0}
                                        activateDots={false}
                                        activeCount={false}
                                        activeCountHtml=". "
                                        performance={true}
                                        border={true}
                                    />
                                </span>
                            ),
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.own-card-class{
    $card-width: 280px;
    max-width:1400px;
    margin:40px auto;

    a{
        text-decoration: none;
        color:rgba(99,99,99,.7);
    }

    .react-divcreator-cards__single-card{
        max-width:$card-width;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height:380px;
    }
    .react-divcreator-cards__single-card:hover{ 
        box-shadow:2px 5px 10px rgba(69,69,69,.3);
    }
    
    .react-divcreator-menu-horizontal-click,
    .react-divcreator-menu-vertical-click{
        .child{
            white-space: nowrap;
        }
    }
    .react-divcreator-cards-description{
        padding:20px 10px;

        span{
            display: block;
            text-align:center;
            line-height:30px;
        }
    }

    .stars{
        width: 230px;
        height: auto;
        overflow: auto;
        overflow-x:hidden;
        padding: 20px 10px 20px 0;
        margin:0 auto;

        .divcreator-stars-ul-li-text{
            line-height:20px;
            font-size:1em;
            padding:0 10px;
            color:rgb(69,69,69);
        }
        .divcreator-stars-single-stars-span{
            transform: scale(0.9);
            box-sizing: border-box;
            padding: 0 16px;
            margin-left: -10px;
            color:goldenrod;
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color:goldenrod;
        }
    }
    .react-divcreator-menu-multiple-vertical-click{
        max-width: 90%;
        margin:0 5%;
        
        .parent{
            .child-children{
                position: absolute;
                max-width: 100%;
                left: 0;
                top: 45px;
                margin: 0;
                padding: 0;
                background-color:rgb(255,255,255);
            }
        }   
    }
}`
        ),
        reactCode: (
            `import { Cards } from 'react-divcreator';
    
<Cards
    id=''
    class='own-card-class'
    align={4}
    link={false}
    graph={true}
    break={4}
    performance={true}
    border={true}
    data=
    {
        [
            {
                title: "The picture 1",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                alt: 'img',
                data: (
                    <span>
                        <Buttons
                            class="buttons-example-1"
                            data={
                                [
                                    {
                                        text: 'button 1',
                                        status: 'success',
                                        attributes: {
                                            title: "Custom title button 1"
                                        },
                                        function: consoleLog,
                                        functionData: "user clicked the 1 button: success",
                                    },
                                    {
                                        text: 'button 2',
                                        status: 'warning',
                                        attributes: {
                                            title: "Custom title button 2"
                                        },
                                        function: consoleLog,
                                        functionData: "user clicked the 2 button: warning",
                                    }
                                ]
                            }
                        />
                    </span>
                ),
                function: consoleLog,
                functionData: "Card 1 clicked",
                attributes: {
                    title: "Card title 1"
                }
            },
            {
                title: "The picture 2",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                function: consoleLog,
                functionData: "Card 2 clicked",
                attributes: {
                    title: "Card title 2"
                },
                data: (
                    <Stars
                        id=''
                        class='stars'
                        function={consoleLog}
                        functionData={["a"]}
                        direction='left'
                        data={
                            [
                                {
                                    customHTML: '',
                                    site: 'right',
                                    count: 1,
                                    filled: 0,
                                    dataEachStar: [],
                                    readOnly: false
                                },
                            ]
                        }
                    />
                )
            },
            {
                title: "The picture 3",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                function: consoleLog,
                functionData: "Card 3 clicked",
                attributes: {
                    title: "Card title 3"
                },
                data: (
                    <span>
                        <MenuMultipleVerticalClick
                            id=""
                            class=""
                            link={true}
                            data={
                                [
                                    {
                                        text: 'Pictures',
                                        isLink: false,
                                        attributes: {
                                            title: 'Click to open available pictures'
                                        },
                                        customData: (<i className="fas fa-chevron-down" />),
                                        childs: [
                                            {
                                                text: 'Picture 1',
                                                attributes: {
                                                    title: 'Navigate to The picture 1'
                                                },
                                            },
                                            {
                                                text: 'Picture 2',
                                                attributes: {
                                                    title: 'Navigate to The picture 2'
                                                }
                                            }
                                        ],
                                    }
                                ]
                            }
                            site='left'
                            animation={true}
                            animationTime={0}
                            activateDots={false}
                            activeCount={false}
                            activeCountHtml=". "
                            performance={true}
                            border={true}
                        />
                    </span>
                ),
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example with the component Videobackground.',
        html: (
            <Cards
                id=''
                class='own-card-class own-card-class-2'
                align={5}
                link={false}
                break={3}
                border={true}
                data=
                {
                    [
                        {
                            description: `Lorem ipsum dolor sit amet, 
                                          consetetur sadipscing elitr, 
                                          sed diam nonumy eirmod tempor 
                                          invidunt ut labore et dolore magna 
                                          aliquyam erat, sed diam voluptua. 
                                          At vero eos et accusam et justo duo 
                                          dolores et ea rebum. Stet clita kasd 
                                          gubergren, no sea takimata sanctus est 
                                          Lorem ipsum dolor sit amet.`,
                            function: consoleLog,
                            functionData: "Card 2 clicked",
                            attributes: {
                                title: "Card title 2"
                            },
                            data: (
                                <Videobackground
                                    id=""
                                    class="my-video-example"
                                    src="/./src/static/videos/Black13495.mp4"
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    controls={false}
                                    type='video/mp4'
                                />
                            )
                        },
                        {
                            description: `Lorem ipsum dolor sit amet, 
                                          consetetur sadipscing elitr, 
                                          sed diam nonumy eirmod tempor 
                                          invidunt ut labore et dolore magna 
                                          aliquyam erat, sed diam voluptua. 
                                          At vero eos et accusam et justo duo 
                                          dolores et ea rebum. Stet clita kasd 
                                          gubergren, no sea takimata sanctus est 
                                          Lorem ipsum dolor sit amet.`,
                            function: consoleLog,
                            functionData: "Card 2 clicked",
                            attributes: {
                                title: "Card title 2"
                            },
                            data: (
                                <Videobackground
                                    id=""
                                    class="my-video-example"
                                    src="/./src/static/videos/earth.mp4"
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    controls={false}
                                    type='video/mp4'
                                />
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.own-card-class{
    $card-width: 280px;
    max-width:1400px;
    margin:40px auto;

    a{
        text-decoration: none;
        color:rgba(99,99,99,.7);
    }

    .react-divcreator-cards__single-card{
        max-width:$card-width;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height:380px;
    }
    .react-divcreator-cards__single-card:hover{ 
        box-shadow:2px 5px 10px rgba(69,69,69,.3);
    }
    
    .react-divcreator-menu-horizontal-click,
    .react-divcreator-menu-vertical-click{
        .child{
            white-space: nowrap;
        }
    }
    .react-divcreator-cards-description{
        padding:20px 10px;

        span{
            display: block;
            text-align:center;
            line-height:30px;
        }
    }

    .stars{
        width: 230px;
        height: auto;
        overflow: auto;
        overflow-x:hidden;
        padding: 20px 10px 20px 0;
        margin:0 auto;

        .divcreator-stars-ul-li-text{
            line-height:20px;
            font-size:1em;
            padding:0 10px;
            color:rgb(69,69,69);
        }
        .divcreator-stars-single-stars-span{
            transform: scale(0.9);
            box-sizing: border-box;
            padding: 0 16px;
            margin-left: -10px;
            color:goldenrod;
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color:goldenrod;
        }
    }
    .react-divcreator-menu-multiple-vertical-click{
        max-width: 90%;
        margin:0 5%;
        
        .parent{
            .child-children{
                position: absolute;
                max-width: 100%;
                left: 0;
                top: 45px;
                margin: 0;
                padding: 0;
                background-color:rgb(255,255,255);
            }
        }   
    }
}

.own-card-class-2{
    .react-divcreator-cards__single-card{
        max-width: 400px;
    }
    .react-divcreator-cards-description{
        span{
            text-align:justify;
        }
    }
}`
        ),
        reactCode: (
            `import { Cards } from 'react-divcreator';
    
    <Cards
    id=''
    class='own-card-class own-card-class-2'
    align={5}
    link={false}
    break={3}
    border={true}
    data=
    {
        [
            {
                description: \`Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua. 
                                At vero eos et accusam et justo duo 
                                dolores et ea rebum. Stet clita kasd 
                                gubergren, no sea takimata sanctus est 
                                Lorem ipsum dolor sit amet.\`,
                function: consoleLog,
                functionData: "Card 2 clicked",
                attributes: {
                    title: "Card title 2"
                },
                data: (
                    <Videobackground
                        id=""
                        class="my-video-example"
                        src="/./src/static/videos/Black13495.mp4"
                        autoplay={true}
                        muted={true}
                        loop={true}
                        controls={false}
                        type='video/mp4'
                    />
                )
            },
            {
                description: \`Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua. 
                                At vero eos et accusam et justo duo 
                                dolores et ea rebum. Stet clita kasd 
                                gubergren, no sea takimata sanctus est 
                                Lorem ipsum dolor sit amet.\`,
                function: consoleLog,
                functionData: "Card 2 clicked",
                attributes: {
                    title: "Card title 2"
                },
                data: (
                    <Videobackground
                        id=""
                        class="my-video-example"
                        src="/./src/static/videos/earth.mp4"
                        autoplay={true}
                        muted={true}
                        loop={true}
                        controls={false}
                        type='video/mp4'
                    />
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example with Link, callback function and different order of items.',
        html: (
            <Cards
                id=''
                class='own-card-class'
                align={2}
                link={true}
                graph={true}
                break={1}
                border={true}
                performance={true}
                data=
                {
                    [
                        {
                            title: "Lorem Ipsum",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 1 clicked",
                            attributes: {
                                title: "Card title 1"
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.own-card-class{
    $card-width: 280px;
    max-width:1400px;
    margin:40px auto;

    a{
        text-decoration: none;
        color:rgba(99,99,99,.7);
    }

    .react-divcreator-cards__single-card{
        max-width:$card-width;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height:380px;
    }
    .react-divcreator-cards__single-card:hover{ 
        box-shadow:2px 5px 10px rgba(69,69,69,.3);
    }
    
    .react-divcreator-menu-horizontal-click,
    .react-divcreator-menu-vertical-click{
        .child{
            white-space: nowrap;
        }
    }
    .react-divcreator-cards-description{
        padding:20px 10px;

        span{
            display: block;
            text-align:center;
            line-height:30px;
        }
    }

    .stars{
        width: 230px;
        height: auto;
        overflow: auto;
        overflow-x:hidden;
        padding: 20px 10px 20px 0;
        margin:0 auto;

        .divcreator-stars-ul-li-text{
            line-height:20px;
            font-size:1em;
            padding:0 10px;
            color:rgb(69,69,69);
        }
        .divcreator-stars-single-stars-span{
            transform: scale(0.9);
            box-sizing: border-box;
            padding: 0 16px;
            margin-left: -10px;
            color:goldenrod;
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color:goldenrod;
        }
    }
    .react-divcreator-menu-multiple-vertical-click{
        max-width: 90%;
        margin:0 5%;
        
        .parent{
            .child-children{
                position: absolute;
                max-width: 100%;
                left: 0;
                top: 45px;
                margin: 0;
                padding: 0;
                background-color:rgb(255,255,255);
            }
        }   
    }
}`
        ),
        reactCode: (
            `import { Cards } from 'react-divcreator';
    
<Cards
    id=''
    class='own-card-class'
    align={2}
    link={true}
    graph={true}
    break={1}
    border={true}
    performance={true}
    data=
    {
        [
            {
                title: "Lorem Ipsum",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 1 clicked",
                attributes: {
                    title: "Card title 1"
                }
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example with Link, callback function and different order of items.',
        html: (
            <Cards
                id=''
                class='own-card-class'
                align={3}
                link={false}
                graph={true}
                break={1}
                performance={true}
                border={true}
                data=
                {
                    [
                        {
                            title: "Lorem Ipsum",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            function: consoleLog,
                            functionData: "c1",
                            attributes: {
                                title: "Card title for example 4"
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.own-card-class{
    $card-width: 280px;
    max-width:1400px;
    margin:40px auto;

    a{
        text-decoration: none;
        color:rgba(99,99,99,.7);
    }

    .react-divcreator-cards__single-card{
        max-width:$card-width;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height:380px;
    }
    .react-divcreator-cards__single-card:hover{ 
        box-shadow:2px 5px 10px rgba(69,69,69,.3);
    }
    
    .react-divcreator-menu-horizontal-click,
    .react-divcreator-menu-vertical-click{
        .child{
            white-space: nowrap;
        }
    }
    .react-divcreator-cards-description{
        padding:20px 10px;

        span{
            display: block;
            text-align:center;
            line-height:30px;
        }
    }

    .stars{
        width: 230px;
        height: auto;
        overflow: auto;
        overflow-x:hidden;
        padding: 20px 10px 20px 0;
        margin:0 auto;

        .divcreator-stars-ul-li-text{
            line-height:20px;
            font-size:1em;
            padding:0 10px;
            color:rgb(69,69,69);
        }
        .divcreator-stars-single-stars-span{
            transform: scale(0.9);
            box-sizing: border-box;
            padding: 0 16px;
            margin-left: -10px;
            color:goldenrod;
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color:goldenrod;
        }
    }
    .react-divcreator-menu-multiple-vertical-click{
        max-width: 90%;
        margin:0 5%;
        
        .parent{
            .child-children{
                position: absolute;
                max-width: 100%;
                left: 0;
                top: 45px;
                margin: 0;
                padding: 0;
                background-color:rgb(255,255,255);
            }
        }   
    }
}`
        ),
        reactCode: (
            `import { Cards } from 'react-divcreator';
    
<Cards
    id=''
    class='own-card-class'
    align={3}
    link={false}
    graph={true}
    break={1}
    performance={true}
    border={true}
    data=
    {
        [
            {
                title: "Lorem Ipsum",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                function: consoleLog,
                functionData: "c1",
                attributes: {
                    title: "Card title for example 4"
                }
            }
        ]
    }
/>
            `
        ),
        jsCode: (
            `
const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};`
        )
    },
    {
        class: '',
        description: 'Example with 7 Cards (break on each 4 item provided by the key break={4}) as link.',
        html: (
            <Cards
                id=''
                class='own-card-class'
                align={1}
                link={true}
                graph={true}
                break={4}
                border={true}
                performance={true}
                data=
                {
                    [
                        {
                            title: "Card 1",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 1 clicked",
                            attributes: {
                                title: "Card title 1"
                            }
                        },
                        {
                            title: "Card 2",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 2 clicked",
                            attributes: {
                                title: "Card title 2"
                            }
                        },
                        {
                            title: "Card 3",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 3 clicked",
                            attributes: {
                                title: "Card title 3"
                            }
                        },
                        {
                            title: "Card 4",
                            path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 4 clicked",
                            attributes: {
                                title: "Card title 4"
                            }
                        },
                        {
                            title: "Card 5",
                            path: "/src/static/images/birds.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 5 clicked",
                            attributes: {
                                title: "Card title 5"
                            }
                        },
                        {
                            title: "Card 6",
                            path: "/src/static/images/birds.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 6 clicked",
                            attributes: {
                                title: "Card title 6"
                            }
                        },
                        {
                            title: "Card 7",
                            path: "/src/static/images/birds.jpg",
                            alt: 'img',
                            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                            href: "/components/cards",
                            function: consoleLog,
                            functionData: "Card 7 clicked",
                            attributes: {
                                title: "Card title 7"
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.own-card-class{
    $card-width: 280px;
    max-width:1400px;
    margin:40px auto;

    a{
        text-decoration: none;
        color:rgba(99,99,99,.7);
    }

    .react-divcreator-cards__single-card{
        max-width:$card-width;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height:380px;
    }
    .react-divcreator-cards__single-card:hover{ 
        box-shadow:2px 5px 10px rgba(69,69,69,.3);
    }
    
    .react-divcreator-menu-horizontal-click,
    .react-divcreator-menu-vertical-click{
        .child{
            white-space: nowrap;
        }
    }
    .react-divcreator-cards-description{
        padding:20px 10px;

        span{
            display: block;
            text-align:center;
            line-height:30px;
        }
    }

    .stars{
        width: 230px;
        height: auto;
        overflow: auto;
        overflow-x:hidden;
        padding: 20px 10px 20px 0;
        margin:0 auto;

        .divcreator-stars-ul-li-text{
            line-height:20px;
            font-size:1em;
            padding:0 10px;
            color:rgb(69,69,69);
        }
        .divcreator-stars-single-stars-span{
            transform: scale(0.9);
            box-sizing: border-box;
            padding: 0 16px;
            margin-left: -10px;
            color:goldenrod;
        }
        .read-only-mode-off-not-filled:hover:before,
        .read-only-mode-off-not-filled:hover,
        .read-only-mode-off-filled:hover,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-not-filled:before,
        .read-only-mode-off-not-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-filled:before,
        .read-only-mode-off-filled:hover ~ .read-only-mode-off-not-filled:before{
            color:goldenrod;
        }
    }
    .react-divcreator-menu-multiple-vertical-click{
        max-width: 90%;
        margin:0 5%;
        
        .parent{
            .child-children{
                position: absolute;
                max-width: 100%;
                left: 0;
                top: 45px;
                margin: 0;
                padding: 0;
                background-color:rgb(255,255,255);
            }
        }   
    }
}`
        ),
        reactCode: (
            `import { Cards } from 'react-divcreator';
    
<Cards
    id=''
    class='own-card-class'
    align={1}
    link={true}
    graph={true}
    break={4}
    border={true}
    performance={true}
    data=
    {
        [
            {
                title: "Card 1",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 1 clicked",
                attributes: {
                    title: "Card title 1"
                }
            },
            {
                title: "Card 2",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 2 clicked",
                attributes: {
                    title: "Card title 2"
                }
            },
            {
                title: "Card 3",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 3 clicked",
                attributes: {
                    title: "Card title 3"
                }
            },
            {
                title: "Card 4",
                path: "/src/static/images/art-materials-art-supplies-blocks-1148496.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 4 clicked",
                attributes: {
                    title: "Card title 4"
                }
            },
            {
                title: "Card 5",
                path: "/src/static/images/birds.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 5 clicked",
                attributes: {
                    title: "Card title 5"
                }
            },
            {
                title: "Card 6",
                path: "/src/static/images/birds.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 6 clicked",
                attributes: {
                    title: "Card title 6"
                }
            },
            {
                title: "Card 7",
                path: "/src/static/images/birds.jpg",
                alt: 'img',
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                href: "/components/cards",
                function: consoleLog,
                functionData: "Card 7 clicked",
                attributes: {
                    title: "Card title 7"
                }
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, singleElement, customData) => {
    console.clear();
    console.info(event);
    console.info(singleElement);
    console.info(customData);
};`
        )
    }
];

const cardsKeys = [
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
        description: 'Boolean - If true then draw an border around each card.'
    },
    {
        key: 'align',
        description: 'Numneric - Available align values: 1 first comes the image, title, text. 2 first comes the title, image, text, 3 first comes the title, description, image, 4 first comes the image, title, description and link is deactivated.'
    },
    {
        key: 'link',
        description: 'Boolean - Should use the Link method from the package "react-router-dom", if false then use standard tag "a".'
    },
    {
        key: 'graph',
        description: 'Boolean - If true then the key "path" is the src attribute of an img tag. If false then the data inside the graph are interpreted as html.'
    },
    {
        key: 'break',
        description: 'Numeric - how many cards should be generated in an single div, default 1.',
    },
    {
        key: 'data',
        description: 'Array - Array of objects.'
    },
    {
        key: 'data.title',
        description: 'String - Title.'
    },
    {
        key: 'data.path',
        description: 'String - Path of the image or plain html data or (JSX html data).'
    },
    {
        key: 'data.alt',
        description: 'String - Alt attribute for the img tag.'
    },
    {
        key: 'data.description',
        description: 'String - Description.'
    },
    {
        key: 'data.href',
        description: 'String - Hrefs destination.'
    },
    {
        key: 'data.data',
        description: 'JSX - Custom JSX.'
    },
    {
        key: 'data.function',
        description: 'Function - Custom developers callback function if the card are clicked.'
    },
    {
        key: 'data.functionData',
        description: 'Mixed - Custom data passed as 3 argument to the key "function".'
    },
    {
        key: 'data.attributes',
        description: 'Custom attributes for the single card.',
        type: 'Object'
    }
]

export {
    cardsData,
    cardsKeys
};

