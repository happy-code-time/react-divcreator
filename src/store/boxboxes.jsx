import React from 'react';

import { BoxBoxes } from '../../module/build/react-divcreator';

const boxboxesData = [
    {
        class: '',
        description: 'Box example with 3 boxes on the left site and 1 box on the right site (width setted to 30%), responsive={true} - its mean the module set an listener in window resizeing and responsiveX={1024} - its mean the module becomes an classname suffix "--animated") if the document width is smaller then 1024px.',
        html: (
            <BoxBoxes
                id=""
                class="boxes-example-1"
                performance={true}
                border={true}
                // Responsive keys
                responsive={true}
                responsiveX={1024}
                // Left data
                leftBreak={3}
                leftData={
                    [
                        {
                            top: {
                                title: (
                                    <span>
                                        Title 1
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        },
                        {
                            top: {
                                title: (
                                    <span>
                                        Title 2
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        },
                        {
                            top: {
                                title: (
                                    <span>
                                        Title 3
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        }
                    ]
                }
                rightBreak={1}
                rightWidth={30}
                widthVector={'%'}
                rightData={
                    [
                        {
                            top: {
                                title: (
                                    <div className="box-text">
                                        <p>
                                            Right site 1
                                        </p>
                                    </div>
                                )
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.boxes-example-1{
    position: relative;

    .react-divcreator-box-boxes__data--left__single-box--title{
        padding:5px;
    }
    .react-divcreator-box-boxes__data--left__single-box--content{
        p{
            text-align: justify;
            color:rgba(99,99,99,.7);
            font-size:1rem;
            line-height:30px;
        }
    }

    .react-divcreator-box-boxes__data--right-site__boxes{
        height:100%;

        .react-divcreator-box-boxes__data--right__single-box{
            background-color:rgb(9,9,9);
            border-radius:5px;

            .react-divcreator-box-boxes__data--right__single-box--title{
                height:100%;
                position: relative;
    
                .box-text{
                    position: absolute;
                    top:0;
                    left:0;
                    width: 100%;
                    height:calc(100% - 2px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    z-index:1;
                    border-radius: 5px;
    
                    p{
                        text-align: center;
                        color:rgb(255,255,255);
                        font-size:1.2rem;
                    }
                }
            }
        }
    }
}`
        ),
        reactCode: (
`import { BoxBoxes } from 'react-divcreator';

<BoxBoxes
    id=""
    class="boxes-example-1"
    performance={true}
    border={true}
    // Responsive keys
    responsive={true}
    responsiveX={1024}
    // Left data
    leftBreak={3}
    leftData={
        [
            {
                top: {
                    title: (
                        <span>
                            Title 1
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            },
            {
                top: {
                    title: (
                        <span>
                            Title 2
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            },
            {
                top: {
                    title: (
                        <span>
                            Title 3
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            }
        ]
    }
    rightBreak={1}
    rightWidth={30}
    widthVector={'%'}
    rightData={
        [
            {
                top: {
                    title: (
                        <div className="box-text">
                            <p>
                                Right site 1
                            </p>
                        </div>
                    )
                }
            }
        ]
    }
/>
`
        ),
        jsCode: ''
    },
    {
        class: '',
        description: 'Box example with 3 boxes on the left site and 1 box on the right site (width setted to 25%), responsive={true} and responsiveX={1024}.',
        html: (
            <BoxBoxes
                id=""
                class="boxes-example-2"
                performance={true}
                border={true}
                // Responsive keys
                responsive={true}
                responsiveX={1024}
                // Left data
                leftBreak={3}
                leftData={
                    [
                        {
                            top: {
                                title: (
                                    <span>
                                        <div className="box-text-img">
                                            <img src="/src/static/images/chris-nguyen-1MM1jG5ugYc-unsplash.jpg" alt="img" />
                                            <div className="box-text">
                                                <p>
                                                    Cars
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        },
                        {
                            top: {
                                title: (
                                    <span>
                                        <div className="box-text-img">
                                            <img src="/src/static/images/allison-christine-j1KUsXahuXk-unsplash.jpg" alt="img" />
                                            <div className="box-text">
                                                <p>
                                                    Cats
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        },
                        {
                            top: {
                                title: (
                                    <span>
                                        <div className="box-text-img">
                                            <img src="/src/static/images/tan-kaninthanond-W38jzPNRSpc-unsplash.jpg" alt="img" />
                                            <div className="box-text">
                                                <p>
                                                    Shopping
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                )
                            },
                            content: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et
                                    dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum. Stet
                                    clita kasd gubergren, no sea takimata sanctus est Lorem
                                    ipsum dolor sit amet.
                                </p>
                            )
                        }
                    ]
                }
                rightBreak={1}
                rightWidth={25}
                widthVector={'%'}
                rightData={
                    [
                        {
                            top: {
                                title: (
                                    <div className="box-text">
                                        <p>
                                            - 50%
                                        </p>
                                    </div>
                                )
                            }
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.boxes-example-2{
    position: relative;

    .react-divcreator-box-boxes__data--left__single-box--title{
        padding:5px;

        .box-text-img{
            position: relative;
            border-radius: 5px;

            img{
                width: 100%;
                max-height: 600px;
                border-radius: 5px;
            }

            .box-text{
                position: absolute;
                top:0;
                left:0;
                width: 100%;
                height:calc(100% - 2px);
                transition-duration: 200ms;
                background-color:rgba(39,39,39,.7);
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                z-index:1;
                opacity: 0;
                border-radius: 5px;

                p{
                    text-align: center;
                    color:rgb(255,255,255);
                    font-size:1.2rem;
                }
            }
        }
        .box-text-img:hover{
            .box-text{
                opacity: 1;
            }
        }
    }
    .react-divcreator-box-boxes__data--left__single-box--content{
        p{
            text-align: justify;
            color:rgba(99,99,99,.7);
            font-size:1rem;
            line-height:30px;
        }
    }

    .react-divcreator-box-boxes__data--right-site__boxes{
        height:100%;

        .react-divcreator-box-boxes__data--right__single-box{
            background-color:rgb(9,9,9);
            border-radius:5px;

            .react-divcreator-box-boxes__data--right__single-box--title,
            .react-divcreator-box-boxes__data--right__single-box--content{
                height:100%;
                position: relative;
    
                .box-text{
                    position: absolute;
                    top:0;
                    left:0;
                    width: 100%;
                    height:calc(100% - 2px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    z-index:1;
                    border-radius: 5px;
    
                    p{
                        text-align: center;
                        color:rgb(255,255,255);
                        font-size:1.2rem;
                    }
                }
            }
        }
    }
}`
        ),
        reactCode: (
`import { BoxBoxes } from 'react-divcreator';

<BoxBoxes
    id=""
    class="boxes-example-2"
    performance={true}
    border={true}
    // Responsive keys
    responsive={true}
    responsiveX={1024}
    // Left data
    leftBreak={3}
    leftData={
        [
            {
                top: {
                    title: (
                        <span>
                            <div className="box-text-img">
                                <img src="/src/static/images/chris-nguyen-1MM1jG5ugYc-unsplash.jpg" alt="img" />
                                <div className="box-text">
                                    <p>
                                        Cars
                                    </p>
                                </div>
                            </div>
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            },
            {
                top: {
                    title: (
                        <span>
                            <div className="box-text-img">
                                <img src="/src/static/images/allison-christine-j1KUsXahuXk-unsplash.jpg" alt="img" />
                                <div className="box-text">
                                    <p>
                                        Cats
                                    </p>
                                </div>
                            </div>
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            },
            {
                top: {
                    title: (
                        <span>
                            <div className="box-text-img">
                                <img src="/src/static/images/tan-kaninthanond-W38jzPNRSpc-unsplash.jpg" alt="img" />
                                <div className="box-text">
                                    <p>
                                        Shopping
                                    </p>
                                </div>
                            </div>
                        </span>
                    )
                },
                content: (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                )
            }
        ]
    }
    rightBreak={1}
    rightWidth={25}
    widthVector={'%'}
    rightData={
        [
            {
                top: {
                    title: (
                        <div className="box-text">
                            <p>
                                - 50%
                            </p>
                        </div>
                    )
                }
            }
        ]
    }
/>`
        ),
        jsCode: ''
    }
];

const boxboxesKeys = [
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
        description: 'Boolean - If true then draw an border around each box.'
    },
    {
        key: 'responsive',
        description: 'Boolean - If true then if the documents width is smaller then responsiveX={...} then the modules default classname becomes an suffix: "--responsive".'
    },
    {
        key: 'responsiveX',
        description: 'Number - If documents width is smaller then this value, then add the suffix "--responsive" to the modules root classname.'
    },
    {
        key: 'animation',
        description: 'Boolean - If true then the rendered elements are animated.'
    },
    {
        key: 'animationTime',
        description: 'Number - Animation time duration of each single box.'
    },
    {
        key: 'animationTimeAdder',
        description: 'Number - Animation time duration of each single box + this value.'
    },
    {
        key: 'animationOn',
        description: 'String - Available nimation keys are: "mount" and "scroll". The type "mount" animate all boxes after the component has been mounted, the "scroll" type, animate all boxes if the boxes root element are available in the viewport.'
    },
    {
        key: 'animationScroll',
        description: 'Number - Animate all boxes if the boxes root element are available in the viewport + this value.'
    },
    {
        key: 'hideUntilAnimationScroll',
        description: 'Boolean - If true and the then key animationOn={"scroll"} then all boxes are showed, if the root element are available in the viewport.'
    },
    {
        key: 'leftBreak',
        description: 'Number - How many boxes should be generated in single line (on the left site).'
    },
    {
        key: 'leftData',
        description: 'Array - Array of objects.'
    },
    {
        key: 'leftData.top',
        description: 'Object'
    },
    {
        key: 'leftData.top.title',
        description: 'String - Title of the single box.'
    },
    {
        key: 'leftData.top.custom',
        description: 'JSX - Custom JSX attached after the title.'
    },
    {
        key: 'leftData.content',
        description: 'JSX - Custom JSX attached after the title as content.'
    },
    {
        key: 'rightBreak',
        description: 'Number - How many boxes should be generated in single line (on the right site).'
    },
    {
        key: 'rightWidth',
        description: 'Number - The width of the right site.'
    },
    {
        key: 'widthVector',
        description: "String - The width's vector ('px', '%' or 'vW') of the right site."
    },
    {
        key: 'rightData',
        description: 'Array - Array of objects.'
    },
    {
        key: 'rightData.top',
        description: 'Object'
    },
    {
        key: 'rightData.top.title',
        description: 'String - Title of the single box.'
    },
    {
        key: 'rightData.top.custom',
        description: 'JSX - Custom JSX attached after the title.'
    },
    {
        key: 'rightData.content',
        description: 'JSX - Custom JSX attached after the title as content.'
    }
]

export {
    boxboxesData,
    boxboxesKeys
};

